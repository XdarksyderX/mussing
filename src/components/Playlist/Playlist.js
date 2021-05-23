import React from 'react';
import './Playlist.css'

import { TrackList } from '../TrackList/TrackList'


export class Playlist extends React.Component {

    handleNameChange = e => {
        this.props.onNameChange(e.target.value);
    }

    render() {
        return (
            <div className="Playlist">
                <input onChange={this.handleNameChange} defaultValue={'New Playlist'}/>
                <TrackList onRemove={this.props.onRemove} isRemoval={true} tracks={this.props.playListTracks}/>
                <button onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}