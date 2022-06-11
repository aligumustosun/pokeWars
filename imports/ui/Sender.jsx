import React, {Component} from 'react';
import { Input, Button, Card, Image,Grid } from 'semantic-ui-react';
import { addToArray, emptyTheArray } from "../api/actionCreator";
import { connect } from 'react-redux';
import ProgressBar from "./ProgressBar";
class Sender extends Component {
constructor(props){
  super(props);
  this.state = {
    dataToAdd: '',
    fighterCard1:'',
    fighterCard2:'',
    fighter1Hp:100,
    fighter1HpPercent:100,
    fighter2Hp:100,
    fighter2HpPercent:100,

  }
}

componentWillReceiveProps(nextProps) {
  const { fighter1, fighter2 } = this.props;
  if (fighter1 !== nextProps.fighter1){
    this.makeFighterCard(nextProps.fighter1,1)
    this.setState({fighter1HpPercent:100})
  }
  if(fighter2 !== nextProps.fighter2){
    this.makeFighterCard(nextProps.fighter2,2)
    this.setState({fighter2HpPercent:100})

  }

}

attack=(fighterNo)=>{
  const { fighter1, fighter2 } = this.props;
  const { fighter1Hp,fighter2Hp } = this.state;
  const factor = Math.floor(Math.random()*5+10)/10;
  if(fighterNo === 1){
    const fighterAttack = fighter1.attack*factor;
    const defence = (fighter2.defense*30)/100;
    const hpLeft = fighter2Hp - (fighterAttack-defence);
    const defenderMaxHp = fighter2.hp;
    const percent= 100*hpLeft/defenderMaxHp;

    this.setState({ fighter2Hp: hpLeft, fighter2HpPercent: percent })
  }

  if(fighterNo === 2){
    const fighterAttack = fighter2.attack*factor;
    const defence = (fighter1.defense*30)/100;
    const hpLeft = fighter1Hp - (fighterAttack-defence);
    const defenderMaxHp = fighter1.hp;
    const percent= 100*hpLeft/defenderMaxHp;

    this.setState({ fighter1Hp: hpLeft, fighter1HpPercent: percent })
  }
};

makeFighterCard=(fighter,fighterNo)=>{


  const fighterCard = (
      <Card>
        <Card.Header textAlign={'center'} style={{ fontSize:'12pt', fontWeight:'bold', color:'red' }} >
          {fighter.name.toUpperCase()}
        </Card.Header>
        <Card.Content textAlign={'center'}>
          <Image src={fighter.photo}/>
        </Card.Content>
        <Card.Content textAlign={'center'}>
          HP: {fighter.hp} &nbsp;&nbsp;
          ATTACK: { fighter.attack }&nbsp;&nbsp;
          DEFENCE: { fighter.defense }
        </Card.Content>
        <Card.Content textAlign={'center'} extra>
          <Button color={'red'} onClick={()=>{this.attack(fighterNo);}}>Attack</Button>
        </Card.Content>
      </Card>
  )
  if(fighterNo === 1) {
    this.setState({fighterCard1: fighterCard, fighter1Hp: fighter.hp})
  }
  if (fighterNo === 2){
    this.setState({ fighterCard2: fighterCard, fighter2Hp: fighter.hp})
  }
}



  render() {
  const { addToArray, emptyTheArray, fighter1, fighter2 } = this.props;
  const { dataToAdd,fighterCard1,fighterCard2, fighter1HpPercent,fighter2HpPercent } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Row style={{ justifyContent:'center' }} >
            { fighterCard1 ? fighterCard1 : null }
           { fighterCard1 && fighterCard2 ? <Image onClick={()=>{
             this.setState({fighter1HpPercent:100, fighter2HpPercent:100, fighter1Hp: fighter1.hp, fighter2Hp: fighter2.hp})
           }} size={'small'} src='./Versus.png' /> : null}
            { fighterCard2 ? fighterCard2 : null}
          </Grid.Row>
        </Grid>
        <ProgressBar card1={fighterCard1} card2={fighterCard2} percentage1={fighter1HpPercent} percentage2={fighter2HpPercent} />
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