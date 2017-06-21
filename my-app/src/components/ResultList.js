import React from 'react'
import { connect } from 'react-redux'

const inlineStyles = {
  list: {
    fontSize: 25,
    listStyleType: 'none'
  }
}

const list = (props) => {
  console.log('props', props);
  return (
    <ul>
      { props.starships.starships.map(item => {
        return (
          <li key={item.model} style={inlineStyles.list}>{item.name}</li>
        )
      }) }
    </ul>
  )
}

const mapStateToProps = (state) => {
  // console.log('state',state);
  return {
    starships: state.search,
  }
}

export default connect(mapStateToProps)(list)
