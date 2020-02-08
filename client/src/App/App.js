import React from 'react';
import Header from './header/Header'
import Footer from './Footer'
import {Switch, Route} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage'
import SearchResults from './pages/SearchResults/SearchResults'
import './scss/main.scss'

class App extends React.Component{

  setUserInfo = (firstName, lastName) => {this.setState({firstName: firstName, lastName:lastName})}
  
  render(){
    return (
      <div className="main-wrapper">
        <Header setUserInfo={this.setUserInfo} />
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/search" component={SearchResults} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
