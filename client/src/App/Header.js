import React from 'react';
import {ReactComponent as Logo} from './logo.svg';

class Header extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <section className="header">
                <div className="header__container">
                    <div className="header__logo">
                        <Logo />
                    </div>
                    <div className="header__user-info">
                        <p>login</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header;
