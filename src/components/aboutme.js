import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu} from 'react-mdl';
import { Link } from 'react-router-dom';

class AboutMe extends Component {
  render() {
    return(
      <div className='aboutme'>
        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px'}}>
          <a><img src="images/aboutme.png" alt='profileme' style={{width: '512px', margin: 'auto'}} /></a>
          About
        </CardTitle>
          <CardText>
            It was late last year (2017) when I wrote my first console.log('Hello World!'). Shortly after I realized that web development was my new found passion and from that point, I hit the ground running by investing 100% of my time to coding. I started taking full stack courses online and in February 2018 after enrolled into an on-site 3-month coding boot camp at Wyncode Academy which I recently graduated from. I am now seeking an opportunity to apply my management experience and coding skills to a company with whom I share the same passion and vision to help them grow and expand.
          </CardText>
          <CardActions border>
            <Button colored>
              <Link to="/contact">Contact</Link></Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
          </CardMenu>
        </Card>
      </div>
    )
  }
}

export default AboutMe;
