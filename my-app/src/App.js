import React, { Component } from 'react';
import Axios from 'axios'

import logo from './logo.svg';
import './App.css';
import Content from './components/Content'

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
        let ships = response.data.results
        ships.map((ship) => {
          this.addStarship(ship)
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
        <Content starships={this.state.starships} />
      </div>
    );
  }
}

export default App;
