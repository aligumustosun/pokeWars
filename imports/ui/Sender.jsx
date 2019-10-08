import React, {Component} from 'react';
import { Input, Button, Card, Image } from 'semantic-ui-react';
import { addToArray, emptyTheArray } from "../api/actionCreator";
import { connect } from 'react-redux';
class Sender extends Component {
constructor(props){
  super(props);
  this.state = {
    dataToAdd: '',
  }
}
  render() {
  const { addToArray, emptyTheArray, fighter1, fighter2 } = this.props;
  const { dataToAdd } = this.state;
    return (
      <div>
        { fighter1 ? <Card style={{float:'left'}}>
          <Card.Header >
            {fighter1.name}
          </Card.Header>
          <Card.Content textAlign={'center'}>
            <Image src={fighter1.photo}/>
          </Card.Content>
        </Card> : null }

        { fighter2 ?
        <Card style={{float:'right', marginTop:'0px'}}>
          <Card.Header>
            {fighter2.name}
          </Card.Header>
          <Card.Content textAlign={'center'}>
            <Image src={fighter2.photo}/>
          </Card.Content>

        </Card> : null
        }
      </div>
    );
  }
}


const mapStateToProps = state => {
  return ({
    fighter1: state.fighter1,
    fighter2: state.fighter2,
  })
};
const mapDispatchToProps = {
  addToArray,
  emptyTheArray,

};

export default connect(mapStateToProps,mapDispatchToProps)(Sender);