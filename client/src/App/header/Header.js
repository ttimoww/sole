import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {ReactComponent as Logo} from './logo.svg';
import {ReactComponent as UserIcon} from './user.svg';


class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            loginWindow: false
        }
    }

    handleLoginWindow = () => this.setState({loginWindow: !this.state.loginWindow})
    
    render(){

        const loginWindow = (
            <div className="login-window">
                    <div className="login-window__content">
                        <div className="login-window__content__container">
                            
                        </div>
                    </div>
                </div>
        )

        return(
            <section className="header">
                <div className="header__container">
                    <div className="header__logo">
                        <Logo />
                    </div>
                    <div className="header__user-info">
                        <p onClick={this.handleLoginWindow}>log in</p>
                        <div className="icon">
                            <UserIcon />
                        </div>
                    </div>
                </div>
                <ReactCSSTransitionGroup 
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.state.loginWindow ? loginWindow : null} 
                </ReactCSSTransitionGroup>               
            </section>
        )
    }
}

export default Header;
