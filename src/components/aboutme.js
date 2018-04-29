import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';

class AboutMe extends Component {
  render() {
    return(
      <div className='aboutme'>
        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>About</CardTitle>
          <CardText>
            It was earlier this year (January 2017) when I wrote my first console.log('Hello World!'). Shortly after I realized that web development was my new found passion and from that point, I hit the ground running by investing 100% of my time to coding. I started taking full stack courses on Udemy for the first few months and shortly after enrolled into an on-site local 3-month coding boot camp at Wyncode Academy which I recently graduated from. I am now seeking an opportunity to apply my skills and knowledge to a company with whom I share the same passion and vision for; in hopes to help them grow and expand.
          </CardText>
          <CardActions border>
            <Button colored>Get Started</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
          </CardMenu>
        </Card>
      </div>
    )
  }
}

export default AboutMe;
