from fastapi import APIRouter, HTTPException
from dotenv import load_dotenv
from db.VerifyToken import user_dependency
from db.connection import db_dependency


router = APIRouter(prefix="/products", tags=["Product Management"])

# Create a new product
@router.post("/", status_code=201)
async def create_product():
    return ""