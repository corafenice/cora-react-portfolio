import React, { Component } from 'react';
import {Grid, Cell, List, ListItem} from 'react-mdl';
import Education from './education';
import Experience from './experience';
class Resume extends Component {
  render() {
    return(
      <div className='resume-page'>
        <Grid className='resume-grid-top'>

          <Cell col={12}>
            <div>
              <img
                src="images/profile.jpg"
                alt="resume-pic"
                style={{height:'200px'}} />
              </div>
              <div className='bio'>
              <h2 style={{paddingTop: ''}}>Coralina Quezada</h2>
              <h4 style={{color:'grey'}}>Web Developer</h4>
              <p style={{borderTop:'3px solid #833fb2'}}>
                Professional with over 9 years of successful banking experience and proven track record of identifying and implementing strategies to maximize business development and increase company profits. Seeking a competitive and challenging environment where previous management experience will be utilized to develop innovative technical solutions as a web developer. </p>
              <hr style={{borderTop: '3px solid #833fb2'}}/>
                <p>Miramar, FL 33027 | (732)-925-3791 | corafenice1013@gmail.com </p>
            
              </div>
              </Cell>

              <div className='skills'>
                <Grid className='resume-grid-top'>
                  <Cell col={3}>
                    <List>
                      <ListItem>Bryan Cranston</ListItem>
                      <ListItem>Aaron Paul</ListItem>
                      <ListItem>Bob Odenkirk</ListItem>
                    </List>
                  </Cell>
                  <Cell col={3}>
                    <List>
                      <ListItem>Bryan Cranston</ListItem>
                      <ListItem>Aaron Paul</ListItem>
                      <ListItem>Bob Odenkirk</ListItem>
                    </List>
                  </Cell>
                  <Cell col={3}>
                    <List>
                      <ListItem>Bryan Cranston</ListItem>
                      <ListItem>Aaron Paul</ListItem>
                      <ListItem>Bob Odenkirk</ListItem>
                    </List>
                  </Cell>
                  <Cell col={3}>
                    <List>
                      <ListItem>Bryan Cranston</ListItem>
                      <ListItem>Aaron Paul</ListItem>
                      <ListItem>Bob Odenkirk</ListItem>
                    </List>
                  </Cell>
                </Grid>
              </div>

              <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />
              <Cell className='resume-grid-right' col={12}>

                <h2>Work Experience</h2>
                <Experience
                  startYear={2019}
                  endYear={2019}
                  jobName="PNC Bank"
                  jobDescription="jasnkjsdnfihs fihs PIHFPIFPISFWJFNAWPEIFNAWPIFNPIEFNPANFAPWNFPIEJNFAAPWENFPWEINF-
                  JNAJFN=MONDGD"
                />
                <Experience
                  startYear={2019}
                  endYear={2019}
                  jobName="PNC Bank"
                  jobDescription="jasnkjsdnfihs fihs PIHFPIFPISFWJFNAWPEIFNAWPIFNPIEFNPANFAPWNFPIEJNFAAPWENFPWEINF-
                  JNAJFN=MONDGD"
                />
                <Experience
                  startYear={2019}
                  endYear={2019}
                  jobName="PNC Bank"
                  jobDescription="jasnkjsdnfihs fihs PIHFPIFPISFWJFNAWPEIFNAWPIFNPIEFNPANFAPWNFPIEJNFAAPWENFPWEINF-
                  JNAJFN=MONDGD"
                />
                <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />



                <h2>Education</h2>


                <Education
                  startYear={2012}
                  endYear={2014}
                  schoolName="abc"
                  schoolDescription="fsbdfbjfjbfjfbjfabjfabfsbsdfbjsdfbsdfbsdfbsdfbu"
                />
                <Education
                  startYear={2012}
                  endYear={2014}
                  schoolName="abc"
                  schoolDescription="fsbdfbjfjbfjfbjfabjfabfsbsdfbjsdfbsdfbsdfbsdfbu"
                />
                <Education
                  startYear={2012}
                  endYear={2014}
                  schoolName="abc"
                  schoolDescription="fsbdfbjfjbfjfbjfabjfabfsbsdfbjsdfbsdfbsdfbsdfbu"
                />


              </Cell>
            </Grid>
            </div>
          )
        }
      }

      export default Resume;
