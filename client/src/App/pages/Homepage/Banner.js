import React from 'react';
import banner1 from './media/banner_obsidian.jpg'

const Banner = () => {
    return ( 
        <section className="banner">
            <img src={banner1} alt=""/>
            <div className="banner__container">
                <p>Jordan 1 Obsidian</p>
                <p>Buy Now</p>
            </div>
        </section>
     );
}
 
export default Banner;