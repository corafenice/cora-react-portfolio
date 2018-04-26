import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMRSfT_Bv_we9gCRBTgSBUthZi9V9jZ3uib8KE7cg20fPwrP0HQ" alt='profile picture' className='profile-pic'
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
