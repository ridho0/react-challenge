import React from 'react'
import { Pagination } from 'react-materialize'
import { Link } from 'react-router-dom'

import ResultList from './ResultList'

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  render() {
    return (
      <div>
        <div className='container'>
          <h2>search here : </h2>
          <form>
            <input></input>
          </form>
        </div>
        <Link to="/">
          <button>
            Back
          </button>
        </Link>
        <h1>this is the list of star ships</h1>
        <ResultList starships={this.props.starships}/>
        <Pagination items={10} activePage={1} maxButtons={8}/>
      </div>
    )
  }
}

export default Content
