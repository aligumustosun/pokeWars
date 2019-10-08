import React, {Component} from 'react';
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
class Getter extends Component {
  render() {
    const { array } = this.props;
    return (
      <div>
  </div>

    );
  }
}


const mapStateToProps= (state) => {
  return ({
    array: state.array,
          });
};

export default connect(mapStateToProps,null)(Getter);

