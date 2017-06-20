import React from 'react'

export default (props) => (
  <ul>
    { props.starships.map(item => {
      {console.log(item);}
      return (
        <li key={item.mglt}>{item.name}</li>
      )
    }) }
  </ul>
)
