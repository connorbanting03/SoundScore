from flask import Flask, jsonify, request
from flask_cors import CORS
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

app = Flask(__name__)
CORS(app)
client_id = ''
client_secret = ''

client_credentials_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)


def print_track_info(track):
    print(f"Track Name: {track['name']}")
    print(f"Artist: {track['artists'][0]['name']}")
    print(f"Album: {track['album']['name']}")
    print(f"Album Cover: {track['album']['images'][0]['url']}" if track['album']['images'] else "No Album Cover")
    print("----------")


def search_tracks(query):
    # Perform a track search
    results = sp.search(q=query, type='track', limit=8)
    tracks = results['tracks']['items']

    return tracks

@app.route('/search')
def search_route():
    # Get the search query from the request's query parameters
    search_query = request.args.get('query', '')

    if not search_query:
        return jsonify({'error': 'No search query provided'})

    # Call the search_tracks function with the provided search query
    search_results = search_tracks(search_query)
    if search_results:
        print(f"Search Results for '{search_query}':")
        for track in search_results:
            print_track_info(track)
    else:
        print("No tracks found.")
    print('\n\n\n\n')

    # Return the search results as JSON
    return jsonify({'tracks': search_results})

if __name__ == '__main__':
    app.run(debug=True)
