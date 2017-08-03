import React, { Component } from 'react';

import './Home.css'

import Packages from '../../containers/Packages/Packages';
import NavBar from '../NavBar/NavBar'


class Home extends Component {

  render() {
    return (
    <div className="container">
      <div className="row">
        <div className='homeDiv'>
          <NavBar />
          <div className="offset-l2 col s2 m10 l12">
            <Packages />
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Home;
