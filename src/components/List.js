import React, { Component } from 'react';
import axios from 'axios'
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import './styles/List.css';
import uppercase from '../Utils/FrontUppercase';
import Loading from '../Utils/Loading'
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      next: '',
      loadingState: false,
    };
  };


  componentDidMount() {
    this.getData()
    this.refs.iScroll.addEventListener("scroll", () => {
      if (this.state.pokemon.length <= 223 && this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= this.refs.iScroll.scrollHeight - 20){
        this.loadMoreItems();
      }
    });
  }

  getData(){
    axios.get('https://pokeapi.co/api/v2/ability/?limit=60&offset=60')
    .then(response => {
      this.setState({
        pokemon: response.data.results,
        next: response.data.next
      })
    })
    .catch(err => console.log(err))
    };

  displayPokemon = () => {
    const {pokemon} = this.state
    if (!pokemon){
      return <h1>Loading ...</h1>
    } else if (pokemon.length !== 0){
      return pokemon.map((data, index) => {
        return(
          <Card className="col-sm-2" key={index}>
            <CardImg alt={data.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} />
            <CardBody>
              <CardTitle>{uppercase(data.name)}</CardTitle>
              <Button onClick={() => this.showDetail(data.url, index)}>Detail</Button>
            </CardBody>
          </Card>
        )
      })
    };
  };

  showDetail = (url, index) => {
    this.props.history.push({
      pathname: '/detail',
      state: { url: url },
    })
  };

  loadMoreItems() {
    if(this.state.loadingState){
      return;
    }
    this.setState({ loadingState: true });
    setTimeout(() => {
      axios.get(this.state.next)
      .then(response => {
        this.setState({
          loadingState: false,
          pokemon: this.state.pokemon.concat(response.data.results),
          next: response.data.next
        })
      })
    }, 1000);
  };

  render() {
    return (
        <div ref="iScroll" className="List">
          {this.displayPokemon()}
          {this.state.loadingState ? <Loading/> : ""}
        </div>
    );
  };
};
export default List;
