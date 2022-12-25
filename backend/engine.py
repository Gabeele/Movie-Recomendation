import pickle
from sklearn.metrics.pairwise import cosine_similarity

df1 = pickle.load(open('./data/movie_list.pkl', 'rb'))
tfidf_matrix = pickle.load(open('./data/tfidf_matrix.pkl', 'rb'))

def get_recommendation(title):
    idx = df1.index[df1['title'] == title][0]

    # Get the pairwsie similarity scores of all movies with that movie
    sim_scores = list(enumerate(
        cosine_similarity(
            tfidf_matrix,
            tfidf_matrix[idx])))

    # Sort the movies based on the similarity scores
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # Get the scores of the 10 most similar movies
    sim_scores = sim_scores[1:5]

    # Get the movie indices
    movie_indices = [i[0] for i in sim_scores]

    # Return the top 10 most similar movies
    result = df1.iloc[movie_indices]

    recommendation = []
    
    for i, j in enumerate(result.poster_path):
        recommendation.append({'title':result.iloc[i].title, 'popularity':result.iloc[i].popularity, 'poster_path': result.iloc[i].poster_path, 'url': 'https://www.themoviedb.org/movie/' + str(result.iloc[i].id),'vote_count': result.iloc[i].vote_count, 'vote_average': result.iloc[i].vote_average})

         # recommended_movie_names.append('"title":' + result.iloc[i].title)
        # recommended_movie_urls.append('"url":' + f'https://image.tmdb.org/t/p/w500/{j}')
        # recommended_movie_posters.append('"poster_path":' + f'https://image.tmdb.org/t/p/w500/{j}')
        # recommended_movie_overview.append('"poster_path":' + f'https://image.tmdb.org/t/p/w500/{j}')
        
    return recommendation

