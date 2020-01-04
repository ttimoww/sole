import React from 'react';

const ShoeSliderItem = (props) => {
    const {name, sku, image} = props.info;
    return ( 
        <div className="shoe-slider__item">
            <p className="shoe-slider__item__name">{name}</p>
            <p className="shoe-slider__item__sku subtext">{sku}</p>
            <div className="shoe_slider__item__container">
                <div className="image">
                    <img src={image} alt=""/>
                </div>
                <div className="buy">
                    <button className="btn btn-blue">Buy Now</button>
                </div>
            </div>
        </div>
     );
}
 
export default ShoeSliderItem;