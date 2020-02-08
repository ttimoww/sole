import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {ReactComponent as Logo} from './logo.svg';
import UserInfo from './UserInfo'


class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            loginWindow: false
        }
    }

    handleLoginWindow = () => this.setState({loginWindow: !this.state.loginWindow})
    
    render(){
        return(
            <section className="header">
                <div className="header__container">
                    <div className="header__logo">
                        <Logo />
                    </div>
                    <div className="header__user-info">
                       <UserInfo setUserInfo={this.props.setUserInfo} />
                    </div>
                </div>           
            </section>
        )
    }
}

export default Header;
