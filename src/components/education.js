import React, {Component} from 'react';
import {Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>{this.props.startYear}</Cell>
        <Cell col={8}> right</Cell>
      </Grid>
    )
  }
}
export default Education;
