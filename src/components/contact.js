import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={4}>
            <h2>Cora Quezada</h2>
            <img src="images/git.jpeg" alt='avatar'
            style={{height:'250px'}}
          />
          <p style={{ width:'75%', margin:'auto', paddingTop: '1em'}}>

          </p>
        </Cell>
        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr/>
          <div className='contact-list'>
          <List>
            <ListItem>
              <ListItemContent style={{fontSize:'20px', fontFamily:'Anton'}}>
                 <i className='fa fa-phone-square' aria-hidden='true'/>
                 (732)-925-3791
              </ListItemContent>
            </ListItem>

            <ListItem>
              <ListItemContent style={{fontSize:'20px', fontFamily:'Anton'}}>
                 <i className='fa fa-envelope' aria-hidden='true'/>
                 corafenice1013@gmail.com
              </ListItemContent>
            </ListItem>

            <ListItem>
              <ListItemContent style={{fontSize:'20px', fontFamily:'Anton'}}>
                 <i className='fa fa-phone-square' aria-hidden='true'/>
                 (732)-925-3791
              </ListItemContent>
            </ListItem>
          </List>
        </div>
        </Cell>
      </Grid>
    </div>
  )
}
}

export default Contact;
