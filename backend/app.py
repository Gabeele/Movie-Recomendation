from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import engine

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "content-Type"
movies = [
    {"title":"Garfield", "url":"https://www.imdb.com/title/tt0356634/", "poster_path":"http://image.tmdb.org/t/p/w500//OxMkPvxxroH5TBTaeXxEEDwxOl.jpg", "release_date":"1998-12-01", "vote_average":15.25, "vote_count":251, "popularity":100}, 
  ]


@app.route("/")
def home():
    return jsonify(
        {
            "status": "online"
        }
    )


@app.route("/movies", methods=['GET'])
@cross_origin()
def get_example():
    
    movie = request.args.get("movie")        
    results= engine.get_recommendation(movie)
    if(results == "No movies with that title"):
         return jsonify({"movies":results}), 404
    return jsonify({"movies":results})

app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
