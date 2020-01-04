import React, { Component } from 'react'
import axios from 'axios'
import Search from './Search'
import ShoeSlider from './ShoeSlider'

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            featuredShoes: []
         }
    }

    componentDidMount = () => {
        axios.get('/api/item/homepage')
        .then(resp => {
            this.setState({
                featuredShoes: resp.data.items
            })
        })

    }


    render() { 
        return ( 
            <div className="homepage">
                <Search />
                <ShoeSlider name="Featured Shoes" shoes={this.state.featuredShoes}/>
            </div> 
        );
    }
}
 
export default Homepage;