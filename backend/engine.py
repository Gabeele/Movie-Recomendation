import pickle
import requests
import config
from sklearn.metrics.pairwise import cosine_similarity

df1 = pickle.load(open('./data/movie_list.pkl', 'rb'))
tfidf_matrix = pickle.load(open('./data/tfidf_matrix.pkl', 'rb'))

def get_recommendation(title):
    
    try:
        idx = df1.index[df1['title'] == title][0]
    except:
        # get the title via imdb search
        # Use that instead
        try:
            result = requests.get("https://api.themoviedb.org/3/search/movie?api_key="+config.api_key+"&query="+title)
            title = result.json()['results'][0]['title']
            idx = df1.index[df1['title'] == title][0]
        except :
            return "No movies with that title"
        

    # Get the pairwsie similarity scores of all movies with that movie
    sim_scores = list(enumerate(
        cosine_similarity(
            tfidf_matrix,
            tfidf_matrix[idx])))

    # Sort the movies based on the similarity scores
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # Get the scores of the 10 most similar movies
    sim_scores = sim_scores[1:9]

    # Get the movie indices
    movie_indices = [i[0] for i in sim_scores]

    # Return the top 10 most similar movies
    result = df1.iloc[movie_indices]

    recommendation = []
    
    for i, j in enumerate(result.poster_path):
        recommendation.append({'title':result.iloc[i].title, 'release_date': result.iloc[i].release_date, 'popularity':result.iloc[i].popularity, 'poster_path': 'https://image.tmdb.org/t/p/w500' + result.iloc[i].poster_path, 'url': 'https://www.themoviedb.org/movie/' + str(result.iloc[i].id),'vote_count': result.iloc[i].vote_count, 'vote_average': result.iloc[i].vote_average})
        
    return recommendation

