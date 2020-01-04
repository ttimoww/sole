import React, { Component } from 'react';
import {ReactComponent as Icon} from './search-icon.svg'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section className="search">
                <input type="text" placeholder="search"/>
                <button className="btn btn-blue"><Icon /></button>
            </section>
         );
    }
}
 
export default Search;