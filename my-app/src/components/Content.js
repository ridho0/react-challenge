import React from 'react'

import ResultList from './ResultList'

class Content extends React.Component {
  constructor(props) {
    console.log(props);
    super(props)
    this.state = {
      input: ''
    }
  }

  render() {
    return (
      <div>
        <h3>this is the list of star ships</h3>
        <form>
          <input></input>
        </form>
        <ResultList starships={this.props.starships}/>
      </div>
    )
  }
}

export default Content
