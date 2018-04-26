import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMRSfT_Bv_we9gCRBTgSBUthZi9V9jZ3uib8KE7cg20fPwrP0HQ" alt='profile pic' className='profile-pic'
          />
          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>

            <hr/>

            <p>HTML/CSS | Ruby | Ruby Rails | JavaScript | React.js</p>
            <div className="social-links">
              {/* LinkedIn */}
              <a href="http://google.com" target="_blank" rel="noopener noreferrer" >
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
            {/* GitHub */}
            <a href="http://google.com"  target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          </div>

        </div>
      </Cell>
    </Grid>
  </div>
)
}
}

export default Landing;
