import time
from flask import Flask
from os import environ as env
from pymongo import MongoClient
import pymongo
import requests
from connection import MONGO_CONNECTION_URI 

app = Flask(__name__)
client = pymongo.MongoClient('MONGO_CONNECTION_URI')
db = client['Game_of_Shops']
# overview = db.overview.find()
print(db['Overview'])

@app.route('/')
def main():
    return db['Overview'].find()