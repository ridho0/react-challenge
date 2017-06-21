import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Axios from 'axios'

import './App.css';
import Content from './components/Content'
import Welcome from './components/Welcome'

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
      <BrowserRouter>
        <div className="App">

          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/content"
              component={ () => <Content starships={this.state.starships} /> }
              />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
