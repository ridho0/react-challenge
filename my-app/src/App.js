import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import './App.css';
import Content from './components/Content'
import Welcome from './components/Welcome'
import store from './store/configureStore'
// import { searchAction, changeNameAction } from './actions'

console.log('store', store);
console.log('store.getState()', store.getState());

class App extends Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     starships : store.getState().starships,
  //     name : 'starships'
  //   }
  //
  //   this.addStarship = this.addStarship.bind(this)
  // }
  //
  // addStarship(ship){
  //   console.log('this.state',this.state.starships);
  //   const { starships } = this.state.starships
  //   this.setState({
  //     starships: starships.concat(ship)
  //   })
  // }
  //
  // componentWillMount(){
  //   let next = ''
  //   Axios.get(`http://swapi.co/api/${this.state.name}`)
  //     .then((response) => {
  //       let ships = response.data.results
  //       ships.map((ship) => {
  //         this.addStarship(ship)
  //       })
  //
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //
  // }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">

            <Switch>
              <Route exact path="/" component={ Welcome } />
              <Route path="/content" component={ Content } />
            </Switch>

          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
