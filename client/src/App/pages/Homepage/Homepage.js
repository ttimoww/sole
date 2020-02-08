import React, { Component } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import ShoeSlider from './ShoeSlider'
import Banner from './Banner'

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchActive: false,
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

    handleToggleSearch = () => { this.setState({searchActive: !this.state.searchActive})}

    render() { 
        return ( 
            <div className="homepage">
                <Banner />
                <SearchBar toggleSearch={this.handleToggleSearch} />
                <ShoeSlider name="Featured Shoes" shoes={this.state.featuredShoes} />
                <ShoeSlider name="Newest listings" shoes={this.state.featuredShoes} />
                <ShoeSlider name="Last 10 sales" shoes={this.state.featuredShoes} />
            </div> 
        );
    }
}
 
export default Homepage;