import React, { Component } from 'react';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            keywords: []
         }
    }

    componentDidMount = () => {
        let paramsString = this.props.location.search;
        paramsString = paramsString.substring(3, paramsString.length);
        this.setState({keywords: paramsString.split('%')})
    }

    render() { 
        return ( 
            <div>
                <p>Find all shoes with:</p>
                {this.state.keywords.map(keyword => (
                    <p>{keyword}</p>
                ))}
            </div>
         );
    }
}
 
export default SearchResults;