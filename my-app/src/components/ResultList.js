import React from 'react'

const inlineStyles = {
  list: {
    fontSize: 25,
    listStyleType: 'none'
  }
}

export default (props) => (
  <ul>
    { props.starships.map(item => {
      return (
        <li key={item.model} style={inlineStyles.list}>{item.name}</li>
      )
    }) }
  </ul>
)
