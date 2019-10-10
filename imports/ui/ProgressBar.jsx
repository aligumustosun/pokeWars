import React, {Component} from 'react';
import {Progress, Grid} from "semantic-ui-react";

class ProgressBar extends Component {
    render() {
        return (
            <div>
               { this.props.card1 && this.props.card2 ? <Grid>
                    <Grid.Column width={8}>
                        <Progress percent={this.props.percentage1} indicating />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Progress percent={this.props.percentage2} indicating />
                    </Grid.Column>
                </Grid> :null}
            </div>
        );
    }
}

export default ProgressBar;