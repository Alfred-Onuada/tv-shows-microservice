from pymongo import MongoClient
from decouple import config

DB_URL = config('DB_URL')

def setup_database():
  client  = MongoClient(DB_URL)

  print("Database connection established")

  return client['tv_shows_db']
  
