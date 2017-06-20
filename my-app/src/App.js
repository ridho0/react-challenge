import React, { Component } from 'react';
import Axios from 'axios'

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      starships : []
    }

    this.addStarship = this.addStarship.bind(this)
  }

  addStarship(ship){
    const { starships } = this.state
    this.setState({
      starships: starships.concat(ship)
    })
  }

  componentWillMount(){
    console.log("will mount")
    let next = ''
    Axios.get('http://swapi.co/api/starships')
      .then((response) => {
        // console.log(response.data.results)
        // console.log("1 : ",response.data.results[0])
        let ships = response.data.results
        ships.map((ship) => {
          console.log(ship);
          this.addStarship(ship.name)
        })

      })
      .catch((err) => {
        console.log(err)
      })

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Star space</h2>
        </div>
        <h3>this is the list of star ships</h3>
        <ul>
          { this.state.starships.map(item => {
            return (
              <li>{item}</li>
            )
          }) }
        </ul>
      </div>
    );
  }
}

export default App;
