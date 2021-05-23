import React from 'react';
import './Track.css';

export class Track extends React.Component {

    addTrack = () => {
        this.props.onAdd(this.props.track);
    }

    removeTrack = () => {
        this.props.onRemove(this.props.track);
    }

    renderAction() {
        if (!this.props.isRemoval) {
            return <button onClick={this.addTrack} className="Track-action">+</button>
        }
        else
            return <button onClick={this.removeTrack} className="Track-action">-</button>
    }

    render() {
        return (<div className="Track">
                    <div className="Track-information">
                        <h3>{this.props.track.name}</h3>
                        <p>{this.props.track.artist} | {this.props.track.album}</p>
                    </div>
                    {this.renderAction()}
                </div>)
    }
}