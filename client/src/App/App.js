import React from 'react';
import Header from './Header'
import Footer from './Footer'
import {Switch, Route} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage'
import './scss/main.scss'

class App extends React.Component{


  
  render(){
    return (
      <div className="main-wrapper">
        <Header />
        <Switch>
            <Route exact path="/" component={Homepage} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
