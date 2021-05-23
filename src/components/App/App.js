import React from 'react';

import './App.css';

import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

import { Spotify } from '../../util/Spotify';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
          searchResults : [],
          playList: 'My Playlist',
          playListTracks: []
        };
  }

  addTrack = (track) => {
    let idListTracks = this.state.playListTracks.map(track => track.id);

    if (idListTracks.indexOf(track.id) === -1) {
      this.setState({playListTracks: [...this.state.playListTracks, track]});
    }
  }

  removeTrack = (track) => {
    let playListTracks = this.state.playListTracks;
    let newListTracks = [];
    for (let trackOnList of playListTracks) {
      if (track.id === trackOnList.id) {
        continue;
      }

      newListTracks.push(trackOnList)
    }
    this.setState({playListTracks: newListTracks});
  }

  updatePlaylistName = (name) => {
    this.setState({playList: name});
  }

  savePlaylist = () => {
    let tracks = this.state.playListTracks

    let trackURIs = tracks.map(track => track.uri);
    Spotify.postPlaylist(this.state.playList, trackURIs)
    .then(response => this.setState({
      playList: "New Playlist",
      playListTracks: []
    })) 
  }

  search = term => {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
      });
  }


  render() { 
    return (
    <div>
      <h1>Mu<span className="highlight">ss</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
          <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
          <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} name={this.state.playList} onRemove={this.removeTrack} playListTracks={this.state.playListTracks} />
        </div>
      </div>
    </div>);
  }
}

export default App;
