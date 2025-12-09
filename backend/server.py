from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List
import uuid
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class DevisRequest(BaseModel):
    nom: str
    prenom: str
    tel: str
    email: EmailStr
    requete: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/send-devis")
async def send_devis(devis: DevisRequest):
    """Send devis request via email"""
    try:
        # Get SMTP configuration from environment
        smtp_host = os.environ.get('SMTP_HOST', 'smtp.ionos.com')
        smtp_port = int(os.environ.get('SMTP_PORT', 587))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        sender_email = os.environ.get('SMTP_FROM', smtp_user)
        receiver_emails_str = os.environ.get('SMTP_TO', 'richard.terzan@antigon.com,adhemar.pages@antigon.com')
        
        # Parse multiple recipients (comma-separated)
        receiver_emails = [email.strip() for email in receiver_emails_str.split(',')]
        
        # Create email content
        subject = f"Nouvelle demande de devis - {devis.nom} {devis.prenom}"
        
        body = f"""
Nouvelle demande de devis reçue :

Nom: {devis.nom}
Prénom: {devis.prenom}
Téléphone: {devis.tel}
Email: {devis.email}

Requête:
{devis.requete}

---
Message envoyé depuis le site ANTIGON
        """
        
        # Create message
        message = MIMEMultipart()
        message["From"] = sender_email
        message["To"] = ", ".join(receiver_emails)
        message["Subject"] = subject
        message.attach(MIMEText(body, "plain"))
        
        # Send email via SMTP
        try:
            with smtplib.SMTP(smtp_host, smtp_port) as server:
                server.starttls()  # Enable TLS
                server.login(smtp_user, smtp_password)
                server.send_message(message)
                logger.info(f"Email sent successfully to {', '.join(receiver_emails)}")
        except Exception as smtp_error:
            logger.error(f"SMTP Error: {str(smtp_error)}")
            # Continue to store in database even if email fails
        
        # Store in database
        devis_dict = devis.dict()
        devis_dict['id'] = str(uuid.uuid4())
        devis_dict['timestamp'] = datetime.utcnow()
        devis_dict['status'] = 'sent'
        
        await db.devis_requests.insert_one(devis_dict)
        
        return {"success": True, "message": "Devis request sent successfully"}
        
    except Exception as e:
        logger.error(f"Error processing devis: {str(e)}")
        raise HTTPException(status_code=500, detail="Error processing devis request")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()