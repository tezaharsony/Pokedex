import React, { Component } from 'react';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {  

    }
  }
  render() { 
    return (  
      <div className="loading-container">
        <img className="loading" src="https://mbtskoudsalg.com/images/loading-icon-png-1.png" alt="loading"/>
      </div>
    );
  }
}

export default Loading