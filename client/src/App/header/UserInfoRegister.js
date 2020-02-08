import React from 'react';
import Spinner from './../components/spinner/Spinner'
import Axios from 'axios';

class UserInfoRegister extends React.Component{
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        error: null,
        loading: false
    }
    


    handleChange = e => this.setState({[e.target.name]: e.target.value})
    switchLoadingState = () => this.setState({loading: !this.state.loading})

    handleFormSubmit = e => {
        e.preventDefault();
        // eslint-disable-next-line
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({error: null})
        const {firstName, lastName, email, password, password2} = this.state;
        if (firstName === '', lastName === '', email === '', password === '', password2 === ''){
            this.setState({error: 'Please fill in all fields'})
        }else if(password !== password2){
            this.setState({error: 'Passwords are not the same'})
        }
        else if(!emailRegex.test(email)){
            this.setState({error: 'Please enter a valid email address'})
        }
        else{
            this.switchLoadingState(); // Enable spinner
            Axios.post('/api/user/register', {email: email, firstName: firstName, lastName: lastName, pass: password})
            .then(resp => {
                this.switchLoadingState(); // Disable spinner

            })
            .catch(error => {
                this.switchLoadingState(); // Enable spinner
                if (error.response.status == 409){
                    this.setState({error: 'Email already in use'})
                } else{
                    this.setState({error: 'Oops, something went wrong'})
                }
            })
        }
    }

    render(){
        return ( 
            <>  
                {this.state.error ? <p className="error">{this.state.error}</p> : null}
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <input type="text" name="firstName" placeholder="first name" onChange={this.handleChange} /> 
                        <input type="text" name="lastName" placeholder="last name" onChange={this.handleChange} /> 
                    </div>
                    <input type="email" name="email" placeholder="e-mail" onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
                    <input type="password" name="password2" placeholder="repeat password" onChange={this.handleChange} />
                    <button className="btn btn-blue">{this.state.loading ? <Spinner /> : 'SIGN UP'}</button>
                </form>
            </>
         );
    }
}
 
export default UserInfoRegister;