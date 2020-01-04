import React from 'react';
import ShoeSliderItem from './ShoeSliderItem';

const ShoeSlider = (props) => {
    return ( 
    <section className="shoe-slider">
    <p className="shoe-slider__name subtext">{props.name}</p>
        <div className="shoe-slider__container">
            {props.shoes.map((shoe, i) => (
                <ShoeSliderItem key={i} info={shoe} />
            ))}
            
        </div>
    </section> );
}
 
export default ShoeSlider;

// return  />