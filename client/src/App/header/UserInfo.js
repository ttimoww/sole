import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {ReactComponent as Logo} from './logo.svg';
import UserInfoLogin from './UserInfoLogin';
import UserInfoRegister from './UserInfoRegister'

class UserInfo extends React.Component {
    state = { 
        windowActive: false,
        windowAtLogin: true
    }

    handleLoginWindow = () => this.setState({windowActive: !this.state.windowActive})
    handleWindowState = () => this.setState({windowAtLogin: !this.state.windowAtLogin})

    render() { 
        const loginWindow = (
            <div className="login-window">
                <div className="login-window__background" onClick={this.handleLoginWindow}></div>
                <div className="login-window__content">
                    <div className="login-window__content__logo">
                        <Logo id="sole-logo"/>
                    </div>
                    <div className="login-window__content__container">
                        {this.state.windowAtLogin ? <UserInfoLogin /> : <UserInfoRegister />}
                        <p className="subtext switch" onClick={this.handleWindowState} >
                            {this.state.windowAtLogin ? 'or create an account' : 'or log in'}
                        </p>
                    </div>
                </div>
            </div>
        )
        
        return ( 
            <>
            <p onClick={this.handleLoginWindow}>log in</p>
                <ReactCSSTransitionGroup 
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.state.windowActive ? loginWindow : null} 
                </ReactCSSTransitionGroup> 
            </>
         );
    }
}
 
export default UserInfo;