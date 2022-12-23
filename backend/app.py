from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "content-Type"
movies = [
    {"title":"Garfield", "url":"https://www.imdb.com/title/tt0356634/", "image":"http://image.tmdb.org/t/p/w500//OxMkPvxxroH5TBTaeXxEEDwxOl.jpg"}, 
    {"title":"The Hulk", "url":"https://www.imdb.com/title/tt0286716/", "image":"http://image.tmdb.org/t/p/w500//gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg"}
  ]
@app.route("/")
def home():
    return jsonify(
        {
            "status": "online"
        }
    )


@app.route("/movies")
@cross_origin()
def get_languages():
    return jsonify({"movies":movies})


app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
