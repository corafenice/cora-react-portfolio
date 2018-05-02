import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { Message } from './message';

export class Contact extends Component {
  constructor() {
    super();
    this.state = {msgClicked: false}
  }
  msgClick() {
    this.setState({msgClicked: true});
  }

  render() {
    if (this.state.msgClicked) {
      return(
        <div>
        <Message />
        <div className='contact-body'>
          <Grid className='contact-grid'>
            <Cell col={4}>
              <h2>Cora Quezada</h2>
              <img className='contact-pic' src="images/coraweddingblk.jpg" alt='avatar'
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
                <ListItemContent>
                   <i className='fa fa-phone-square' aria-hidden='true'/>
                   (732)-925-3791
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent>
                   <i onClick={this.msgClick.bind(this)} className='fa fa-envelope' aria-hidden='true' />
                   corafenice1013@gmail.com
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent>
                   <i className='fa fa-whatsapp' aria-hidden='true'/>
                   (732)-925-3791
                </ListItemContent>
              </ListItem>
            </List>
          </div>
          </Cell>
        </Grid>
      </div>
    </div>
      )
    } else {
      return(
        <div className='contact-body'>
          <Grid className='contact-grid'>
            <Cell col={4}>
              <h2>Cora Quezada</h2>
              <img className='contact-pic' src="images/coraweddingblk.jpg" alt='avatar'
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
                <ListItemContent>
                   <i className='fa fa-phone-square' aria-hidden='true'/>
                   (732)-925-3791
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent>
                   <i onClick={this.msgClick.bind(this)} className='fa fa-envelope' aria-hidden='true' />
                   corafenice1013@gmail.com
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent>
                   <i className='fa fa-whatsapp' aria-hidden='true'/>
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
}
