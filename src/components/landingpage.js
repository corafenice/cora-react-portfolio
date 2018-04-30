import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="images/git.jpeg" alt='profile pic' className='profile-pic' style={{width:'200px'}}
          />
          <div className="banner-text">
            <h1> Cora </h1>
            <h2>Full Stack Web Developer</h2>

            <hr/>

            <p>HTML/CSS | Ruby | Ruby Rails | JavaScript | React.js</p>
            <div className="social-links">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/coralinaquezada/" target="_blank" rel="noopener noreferrer" >
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
            {/* GitHub */}
            <a href="https://github.com/corafenice"  target="_blank" rel="noopener noreferrer">
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
