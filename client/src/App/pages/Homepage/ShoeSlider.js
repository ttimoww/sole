import React from 'react';
import ShoeSliderItem from './ShoeSliderItem';

const ShoeSlider = (props) => {

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    return ( 
    <section className="shoe-slider">
    <h1 className="shoe-slider__name">{props.name}</h1>
        <div className="shoe-slider__container">
            {shuffle(props.shoes).map((shoe, i) => (
                <ShoeSliderItem key={i} info={shoe} />
            ))}
            
        </div>
    </section> );
}
 
export default ShoeSlider;

// return  />