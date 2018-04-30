import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="images/profile_pic.jpeg"
                alt="resume-pic"
                style={{height:'200px'}} />
              </div>
              <h2 style={{}}
            </Cell>
          <Cell className='resume-grid-right' col={8}>right side</Cell>
        </Grid>
        ></div>
    )
  }
}

export default Resume;
