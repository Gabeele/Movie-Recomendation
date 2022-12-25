# Kaggle Site for the movies dataset -> https://www.kaggle.com/datasets/akshaypawar7/millions-of-movies

import pandas as pd # Python library for data analysis and data frame
import numpy as np # Numerical Python library for linear algebra and computations
pd.set_option('display.max_columns', None) # code to display all columns

# Visualisation libraries
import matplotlib.pyplot as plt
import seaborn as sns

# libraries for text processing
import nltk
from nltk.stem.snowball import SnowballStemmer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# to save the required files
import pickle

df = pd.read_csv('./data/movies.csv')
df.drop_duplicates(subset=['title','release_date'], inplace=True)
df1 = df[df.vote_count >= 20].reset_index()
df1.fillna('', inplace=True)
index = df1[(df1['genres']=='') & (df1['overview']=='')].index
df1.drop(index, inplace=True)
df1['genres'] = df1['genres'].apply(lambda x: ' '.join(x.split('-')))
df1['keywords'] = df1['keywords'].apply(lambda x: ' '.join(x.split('-')))
df1['credits'] = df1['credits'].apply(lambda x: ' '.join(x.replace(' ', '').split('-')[:5]))

df1['tags'] = df1['overview'] +' '+ df1['genres'] +' '+ df1['keywords'] +' '+ df1['credits'] +' '+ df1['original_language']

def stem(text):
    y = []

    for i in text.split():
        y.append(stemmer.stem(i))

    return ' '.join(y)

stemmer = SnowballStemmer("english")

df1['tags'] = df1['tags'].apply(stem)
df1['tags'] = df1['tags'].str.replace('[^\w\s]','')

tfidf = TfidfVectorizer(stop_words='english')
tfidf_matrix = tfidf.fit_transform(df1['tags'])

print("Pickle is dumping...")
pickle.dump(df1,open('./data/movie_list.pkl','wb'))
pickle.dump(tfidf_matrix,open('./data/tfidf_matrix.pkl','wb'))
print("Pickle Complete!")


