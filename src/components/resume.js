import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';
import Education from './education';
class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="images/profile.jpg"
                alt="resume-pic"
                style={{height:'200px'}} />
              </div>
              <h2 style={{paddingTop: '2em'}}>Coralina Quezada</h2>
              <h4 style={{color:'grey'}}>Web Developer</h4>
              <p style={{borderTop: '3px solid #833fb2', width: '50%'}}>
                Professional with over 9 years of successful banking experience and proven track record of identifying and implementing strategies to maximize business development and increase company profits. Seeking a competitive and challenging environment where previous management experience will be utilized to develop innovative technical solutions as a web developer. </p>
                <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />
                <h5>Address</h5>
                <p>Miramar, FL 33027</p>
                <h5>Phone</h5>
                <p>(732)-925-3791</p>
                <h5>Email</h5>
                <p>corafenice1013@gmail.com</p>
                <h5>Web</h5>
                <p>www.corafenice.co</p>
                <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
              </Cell>
              <Cell className='resume-grid-right' col={8}>
                <h2>Education</h2>


                <Education
                    startYear={2012}
                />

              </Cell>
            </Grid>
            ></div>
          )
        }
      }

      export default Resume;
