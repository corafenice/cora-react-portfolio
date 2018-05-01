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
            <div className='pic-bio'>
              <img
                src="images/profile.jpg"
                alt="resume-pic"
                style={{height:'200px'}} />
              </div>
              <div className='pic-bio'>
                <h2 style={{paddingTop: ''}}>Coralina Quezada</h2>
                <h4 style={{color:'grey'}}>Web Developer</h4>
                <p style={{borderTop:'3px solid #833fb2'}}>
                  Professional with over 9 years of successful banking experience and proven track record of identifying and implementing strategies to maximize business development and increase company profits. Seeking a competitive and challenging environment where previous management experience will be utilized to develop innovative technical solutions as a web developer. </p>
                  <hr style={{borderTop: '3px solid #833fb2'}}/>
                  <p>Miramar, FL 33027 | (732)-925-3791 | corafenice1013@gmail.com </p>
                </div>
                <hr style={{borderTop: '3px solid #833fb2', width:'100%'}} />
              </Cell>

              <div className='skills'>
                <Grid className='resume-grid-top'>
                  <Cell col={3}>
                    <List>
                      <ListItem>Bilingual</ListItem>
                      <ListItem>HTML</ListItem>
                      <ListItem>CSS</ListItem>
                    </List>
                  </Cell>
                  <Cell col={3}>
                    <List>
                      <ListItem>Ruby on Rails</ListItem>
                      <ListItem>JavaScript</ListItem>
                      <ListItem>PhotoShop</ListItem>
                    </List>
                  </Cell>
                  <Cell col={3}>
                    <List>
                      <ListItem>React</ListItem>
                      <ListItem>JQuery</ListItem>
                      <ListItem>GitHub</ListItem>
                    </List>
                  </Cell>
                  <Cell col={3}>
                    <List>
                      <ListItem>Web Dev</ListItem>
                      <ListItem>Banking</ListItem>
                      <ListItem>Management</ListItem>
                    </List>
                  </Cell>
                </Grid>
              </div>

              <hr style={{borderTop: '3px solid #833fb2', width:'100%'}} />
              <Cell className='resume-grid-right' col={12}>

                <h2>Work Experience</h2>
                <Experience
                  startYear={2016}
                  endYear={2017}
                  jobName="PNC Bank"
                  jobDescription="Relationship Manager II / Business Banking, Aventura, FL"
                  jobDetails1="Provided cash flow and credit solutions to businesses with annual sales 5M."
                  jobDetails2="Maintained an effective relationship between branch partners and customers."
                  jobDetails3="Analyzed financial and merchant statements to propose then close customer sales."
                />
                <Experience
                  startYear={2012}
                  endYear={2016}
                  jobDescription="Asst. Branch Manager / Business Banking Representative, Weston, FL"
                  jobDetails1="Managed a team of 10 to increase share of wallet and meet business goals."
                  jobDetails2="Organized and attended networking events to increase branch awareness, develop COI
                  and build a referral source to increase revenue and improve profitability."
                  jobDetails3="Supervised branch operations to maintain regulatory compliance and minimize losses."

                />
                <Experience
                  startYear={2008}
                  endYear={2012}
                  jobDescription="Branch Manager, Raritan, NJ & Keyport NJ"
                  jobDetails1="Turned an underperforming branch (Raritan) to a driver branch in one year."
                  jobDetails2="Coached and lead by example to create a strong, reliable team to execute services/sales
                  action plans to achieve branch goals."
                  jobDetails3="Organized Eco meetings to identify opportunities and strengthen partner relationships,
                  Business bankers, Investments, Mortgage, Merchant, and Wealth Management groups."
                />
                <Experience
                  startYear={2005}
                  endYear={2008}
                  jobName="Growing Family Portraits"
                  jobDescription="Sales & Service"
                  jobDetails1="Presented portraits solutions to families by utilizing editing tools such Photoshop."
                  jobDetails2="Covered the CNJ region and had a team of 7 photographers."
                  jobDetails3="Consistently ranked top 10 for the CNJ market by creating a running pipeline and
                  upselling products."
                />
                <hr style={{borderTop: '3px solid #833fb2', width:'100%'}} />



                <h2>Education</h2>


                <Education
                  endYear={2018}
                  schoolName="Wyncode Academy, FL"
                  schoolDescription="Web Development Intensive"
                />
                <Education
                  endYear={2008}
                  schoolName="Middlesex College, NJ"
                  schoolDescription="AA in Business Management, Internship:
                  The Walt Disney Company"
                />

              </Cell>
            </Grid>
          </div>
        )
      }
    }

    export default Resume;
