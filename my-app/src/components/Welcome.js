import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo.svg';
import '../App.css';

export default (props) => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to Star space</h2>
    <Link to="/content">
      <button>
        Enter
      </button>
    </Link>
  </div>
)
