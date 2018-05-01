import React, {Component} from 'react';
import {Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid className="experience-grid">
        <Cell col={4}>
          <p>
            {this.props.startYear} -
            {this.props.endYear}
          </p>
          </Cell>
        <Cell col={8}>
          <h4>{this.props.jobName}</h4>
          <h5>{this.props.jobDescription}</h5>
          <li>{this.props.jobDetails1}</li>
          <li>{this.props.jobDetails2}</li>
          <li>{this.props.jobDetails3}</li>
        </Cell>
      </Grid>
    )
  }
}
export default Experience;
