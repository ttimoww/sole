import React, { Component } from 'react'
import axios from 'axios'
import Search from './Search'
import ShoeSlider from './ShoeSlider'
import Banner from './Banner'

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
                {/* <Banner /> */}
                <Search />
                <ShoeSlider name="Featured Shoes" shoes={this.state.featuredShoes} />
                <ShoeSlider name="Newest listings" shoes={this.state.featuredShoes} />
                <ShoeSlider name="Last 10 sales" shoes={this.state.featuredShoes} />
            </div> 
        );
    }
}
 
export default Homepage;