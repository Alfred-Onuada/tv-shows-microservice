from flask import Flask, jsonify, request
from db_config import setup_database

# setup mongoDB
db = setup_database()
tv_shows_collection = db['tv_shows']

app = Flask(__name__)


def break_down_query(query):
    """
    Breaks down the search query into different queries.
    For example, if the search query is "The Big Bang Theory",
    this function will return ["The", "Big", "Bang", "Theory", "The Big",
        "Big Bang", "Bang Theory", "The Big Bang",
        "Big Bang Theory", "The Big Bang Theory"]
    """

    # Split the search query into individual words
    words = query.split()

    # Generate combinations of search queries
    queries = set()
    for i in range(len(words)):
        for j in range(i + 1, len(words) + 1):
            query = ' '.join(words[i:j])
            queries.add(query)

    return queries


def search_for_shows(query):
    """
        Searches for shows based on the query.
    """

    # Search for shows that match the query
    matching_shows = list(tv_shows_collection.find({
        'name': {'$regex': query, '$options': 'i'}
    }))

    return matching_shows


@app.route("/", methods=['GET'])
def search():
    """
        Route that Searches for shows based on the query.
    """

    search_term = request.args.get('q')

    if search_term is None:
        return jsonify({
            "message": "Please specify the movie name in the 'q' parameter",
            "errorCode": 400
        })

    matching_shows = search_for_shows(search_term)

    if len(matching_shows) == 0:
        # break down the search query into different queries
        # and search for those instead.
        queries = break_down_query(search_term)
        for query in queries:
            matching_shows += search_for_shows(query)

    return jsonify({"shows": matching_shows})


@app.errorhandler(404)
def route_not_found():

    """
        Route that handles 404 errors.
    """

    return jsonify({
        "message": "Seems you're a little lost mate.",
        "errorCode": 404
    })

# export FLASK_RUN_PORT to change the port
