import React from 'react'
import { Pagination } from 'react-materialize'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { changeNameAction, searchAction } from '../actions'
import ResultList from './ResultList'

const Content = (props) => {
  console.log('props.name',props.name);

  return (
    <div>
      <div className='container'>
        <h2>search here : </h2>
        <div>
          <input
            type="text"
            placeholder="search here ..."
            onChange={ event => props.changeName(event.target.value)}
          />
          <button onClick={ event => props.newSearch(props.name) }>search</button>
        </div>
      </div>
      <Link to="/">
        <button>
          Back
        </button>
      </Link>
      <h3>This is The Result for { props.name }</h3>
      <ResultList starships={props.search}/>
      <Pagination items={10} activePage={1} maxButtons={8}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.name.name,
    search: state.search.starships
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (newName) => dispatch(changeNameAction(newName)),
    newSearch: (newSearch) => dispatch(searchAction(newSearch))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Content)
