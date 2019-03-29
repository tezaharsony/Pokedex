import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import List from './components/List'
import Detail from './components/Detail'
class RouteList extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Navbar/>
        <Router>
          <div>
            <Route exact path="/" component={List} />
            <Route exact path="/detail" component={Detail} />
          </div>
        </Router>
      </div>
    )
  }
}

export default RouteList;