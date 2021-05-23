import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term: ""};
    }

    search = e => {
        this.props.onSearch(this.state.term)
    }
    
    handleTermChange = e => {
        this.setState({term: e.target.value});
    }

    render() {
        return (<div className="SearchBar">
                    <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
                    <button onClick={this.search} className="SearchButton">SEARCH</button>
                </div>)
    }
}