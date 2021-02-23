import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Show from './Show';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // parks: this.props.parks
      parks: []
    }
  }

  componentDidMount = () => {
    let url = 'https://developer.nps.gov/api/v1/parks?api_key=fBKoEidNgf2CK9fAFKtbx9G9hUCFUTTirYDmNDum';

    axios.get(url, {headers: 
      {
        Accept: 'application/json'
      }
    }).then(response => {
        console.log("App:", response.data);
       
        this.setState ({
         parks: response.data.data
       })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    // console.log(this.state);
    return (
        <div>
          <Link to='/'>
            <h1>National Parks</h1>
          </Link>
          <Switch>
            <Route exact path='/' render={(routerProps)=>
            <Homepage parks={this.state.parks} {...routerProps}/>
            }>    
            </Route>
            <Route path='/park/:id' render={(routerProps)=>
            <Show parks={this.state.parks} {...routerProps}/>
            }>    
            </Route>
          </Switch>
        </div>
    );
  }
}

export default App;
