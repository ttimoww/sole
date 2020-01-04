import React, { Component } from 'react';
import Search from './Search'
import ShoeSlider from './ShoeSlider'

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="homepage">
                <Search />
            </div> 
        );
    }
}
 
export default Homepage;