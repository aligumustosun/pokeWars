import React, { Component } from 'react';
import axios from 'axios';
import { connect }  from 'react-redux';
import { addToArray, setFighter1, setFighter2, } from "../api/actionCreator";
import {List, Image, Button, Card} from "semantic-ui-react";

class Hello extends Component {


  getPokemons = (x) => {
    const { addToArray } = this.props;

    for(let i=1; i<x; i++) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => {
        addToArray({
          id: i,
          name: res.data.name,
          photo: res.data['sprites']['front_default'],
          hp: res.data['stats'][5]['base_stat'],
          attack: res.data['stats'][4]['base_stat'],
          defense : res.data['stats'][3]['base_stat'],
        })
      })
    }
  };
  componentDidMount() {
    this.getPokemons(100)
  }


  render() {
    const { array, setFighter1, setFighter2}  = this.props;
    return (
      <div>

        <List>
          {array.map(e => {

            return (
              <List.Item key={e.id}> {e.name}
                <Card>
                 <Card.Content textAlign={'center'}>
                    <Image  src={e.photo}></Image>
                  </Card.Content>
                  <Button color='blue' onClick={() => setFighter1(e)}>Set Fighter 1</Button>
                  <Button color='red' onClick={() => setFighter2(e)}>SetFighter 2</Button>
                </Card>
                </List.Item>
            )

          })}
        </List>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addToArray,
  setFighter1,
  setFighter2,
};
const mapStateToProps = (state) => {
  return ({
    array: state.array,
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(Hello);