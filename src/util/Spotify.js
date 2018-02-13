import React, {
  Component
} from 'react';


const clientID = "85c1873e884f41548a57ee652769d263"
const redirect_uri = 'http://localhost:3000/'


let scopes;
let responseType;
let userID;
let accessToken;




const Spotify = {

  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      window.history.replaceState('Access Token', null, '/');
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      return accessToken;
    } else {
      const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`;
      window.location.href = accessURL;
    }
  },



  search(term) {
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}&limit=12`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      });
  },


  savePlaylist(nameOfPlaylist, trackURIs) {
    if (!nameOfPlaylist || !trackURIs.length) {
      return;
    }
    const accessToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    let userId;
    return fetch(`https://api.spotify.com/v1/me`, {
        headers: headers
      }).then(response => {
        response.json()
      }).then(jsonResponse => {
        userId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: headers,
          method: "POST",
          body: JSON.stringify({
            name: nameOfPlaylist
          })
        })
      })
      .then(response => {
        response.json()
      }).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({
            uris: trackURIs
          })
        })
      });
  }
}






export default Spotify
