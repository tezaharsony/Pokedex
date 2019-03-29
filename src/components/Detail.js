import React, { Component, Fragment } from 'react';
import { Badge, Media } from 'reactstrap';
import axios from 'axios';
import './styles/Detail.css';
import uppercase from '../Utils/FrontUppercase';
import TypeChecking from '../Utils/CheckType';
import Loading from '../Utils/Loading'


class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: ''
    }
  };

  componentDidMount() {
    this.getData()
  };

  getData(){
    console.log('ini sate rp',this.props.location.state.url)
    axios.get(this.props.location.state.url)
    .then(response => {
      console.log('response', response)
      this.setState({
        detail: response.data,
      })
  })
}

getEffect(){
  const {detail} = this.state
  if (!detail) {
    return <h1>Loading ...</h1>
  } else {
    return (
      this.state.detail.effect_entries.map((data, index) => {
        return (<p1>{data.effect}</p1>)
      })
    )
  }
}

  render() {
    console.log('ini state', this.state)
    return (
      <div className="detail-container">
        <h1>Name</h1>
        <p>{this.state.detail.name}</p>
        <h1>Effect</h1>
        {this.getEffect()}
      </div>
    );
  };
};

export default Detail;
