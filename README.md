
[icons8-film-roll-windows-11-color-96](https://user-images.githubusercontent.com/59030389/209724706-751d49ac-acff-4417-8f83-d99de56e0e4a.png)

# RecommendMeMovies.com

### Quick Overview
A personal project to explore web development, machine learning, Docker, and Deployment. The website is deployed on a Digital Ocean server and can be accessed [recommendmemovies.com](recommendmemovies.com).
Services like Nginx provides SSL certification on a single domain but split traffic onto two servers - the frontend and backend. The front end is created with ReactJS and NodeJS to display all UI elements and query the API backend. The backend is a Flask service built in Python, which takes the search movie and returns a list of suggested movies. The backend also runs the machine learning algorithm.

### Machine Learning

The dataset used has over 450, 000 movies from [The Movie Database](https://www.themoviedb.org/) and [Kaggle](https://www.kaggle.com/datasets/akshaypawar7/millions-of-movies?select=movies.csv). 
This dataset updates daily and future goals for this project is to run automation to pull the data and retrain the model for learning. 

The datasheet is ported into the Python application and cleaned using Pandas, Numpy, and nltk (Natural Language Toolkit).
Then, important columns like tags, overview, keywords, and credits TF-IDF (Term Frequency Inverse Document Frequency) are used to 
transform these columns into meaningful numbers for learning. Then the prediction engine retrieves a movie, obtains its TF-IDF, and finds
movies which fit similarly with the request. Then pushes the top-like movies into a JSON file. 

### Caveats
When searching for movies using this approach, some caveats include:
- The dataset size: Not all movies are included, primarily big-name movies. 
- Single stream of suggestion data: Not taking other data sources into account can provide odd behaviour. For example, a search for "Garfield" will result in most of the Garfield movies since those are the closest match. 
- Overhead: This system carries a lot of overhead and could probably be done through one language like Python - The goal was to experience and experiment with other tech stacks. 


## Installation

Install by cloneing the repo and installing Docker. 

```bash
  apt install Docker
  apt install docker-compose
  git clone https://github.com/Gabeele/Movie-Recomendation.git
  cd my-project
```
    
## Environment Variables

To run this project, you will need to add the following environment variables. 

- In `ProjectRoot/Backend/config.py`

    `api_key = <tmdb-api-key>` 

- In `ProjectRoot/FrontEnd/Search.js`

    Change the fetch query to the IP address of the Flask API service

    `const response = await fetch('<IP-address>/api/movies?movie='+search);`

- In 'ProjectRoot/Docker-Compose.yml'
   
    Under Nginx, change the volumes to your SSL certificate is located
## Deployment

Docker Compose is used to deploy services:
- Frontend (React and Node container)
- Backend (Flask and Python container)
- Nginx (SSL and reverse proxy container)

To run, navigate to project root:
```bash
  docker-compose up --build
```

The services should build, compile, and deploy.


## API Reference

#### Get Movie Suggestions

```http
  GET /api/movies?movie=<String>
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Movie Name` | `string` | **Required**. The movie which will be used to perdict |

#### Get Flask Health

```http
  GET /api/
```



## Author

- [GitHub](https://www.github.com/gabeele)
- [LinkedIn](https://www.linkedin.com/in/gavinabeele/)
-  [Portfolio](gavinabeele.com)


## Acknowledgements

 - [Kaggle Dataset](https://www.kaggle.com/datasets/akshaypawar7/millions-of-movies?select=movies.csv)
 - [Machine learning Algoithm Insperation](https://www.kaggle.com/code/rohitshirudkar/movie-recommendation-system)
 - [The Movie Database](https://www.themoviedb.org/)

