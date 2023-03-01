from flask import Flask, jsonify, request
from db_config import setup_database

# setup mongoDB
db = setup_database()
tv_shows_collection = db['tv_shows']

app = Flask(__name__)

@app.route("/", methods=['GET'])
def search():
    search_term = request.args.get('q')

    if search_term is None:
        return jsonify({ "message": "Please specify the movie name in the 'q' parameter", "errorCode": 400 })

    matching_shows = list(tv_shows_collection.find({ 'name': { '$regex': search_term, '$options': 'i' } }))

    return jsonify({ "shows": matching_shows })

@app.errorhandler(404)
def route_not_found(e):
    return jsonify({ "message": "Seems you're a little lost mate.", "errorCode": 404 })

# export FLASK_RUN_PORT to change the port