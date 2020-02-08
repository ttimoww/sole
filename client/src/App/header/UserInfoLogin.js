import React, { useContext } from 'react';
import axios from 'axios';
import Spinner from './../components/spinner/Spinner'

class UserInfoLogin extends React.Component{

    state = {
        email: 'timo@mail.com',
        password: 'f',
        error: null,
        loading: false
    }

    switchLoadingState = () => this.setState({loading: !this.state.loading})

    handleFormSubmit = e => {
        e.preventDefault();
        const {email, password} = this.state;
        axios.post('/api/user/login', {email: email, pass: password})
        .then(resp => {
            this.setState({error: 'succes'})
        })
        .catch(error => {
            if(error.response.status == 403){
                this.setState({error: 'Wrong email or password'})
            }else{
                this.setState({error: 'Oops, something went wrong'})
            }
        })
    }

    handleChange = e => this.setState({[e.target.name]: e.target.value})

    render(){
        return ( 
            <>
                {this.state.error ? <p className="error">{this.state.error}</p> : null}
                <form onSubmit={this.handleFormSubmit}>
                    <input type="email" name="email" placeholder="e-mail" onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
                    <button className="btn btn-blue">{this.state.loading ? <Spinner /> : 'LOG IN'}</button>
                </form>
            </>
         );
    }
}
 
export default UserInfoLogin;