import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton} from 'react-mdl';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0){
      return(
        <div className="project-grid">
          {/*Project #1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background:'url() center /cover'}} >React Project #1</CardTitle>
          <CardText>
            What ever I want to describe project
          </CardText>
          <CardActions border>

            <Button>
              <a href="https://github.com/corafenice/cora-react-portfolio"  target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github-square" aria-hidden="true" /></a>
            </Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share'/>
          </CardMenu>
        </Card>
        {/*Project #2 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background:'url() center /cover'}} >React Project #2</CardTitle>
        <CardText>
          What ever I want to describe project
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name='share'/>
        </CardMenu>
      </Card>

  </div>
      )
    }  else if(this.state.activeTab === 1) {
      return (
        <div className="project-grid">
          {/*Ruby Project #1 dash */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background:'url() center /cover'}} >Ruby Project #1</CardTitle>
          <CardText>
            What ever I want to describe project
          </CardText>
          <CardActions border>
            <Button>
              <a href="https://github.com/AnansiRafa/dash"  target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github-square" aria-hidden="true" /></a>
            </Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share'/>
          </CardMenu>
        </Card>
          {/*Ruby Project #2 API/Book*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background:'url() center /cover'}} >Ruby Project #2</CardTitle>
          <CardText>
            Build an API, which helps to organize the workflow of a library. I can borrow a book, give it back, or to create a user, a book or an author. Administrators can – CRUD of books, authors, and users. Authentication with HTTP Tokens.
          </CardText>
          <CardActions border>
            <Button>
              <a href="https://github.com/corafenice/API-Book"  target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github-square" aria-hidden="true" /></a>
            </Button>

          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share'/>
          </CardMenu>
        </Card>
        {/*Ruby Project #3 Photogur */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background:'url() center /cover'}} >Ruby Project #3</CardTitle>
        <CardText>
          What ever I want to describe project
        </CardText>
        <CardActions border>
          <Button>
            <a href="https://github.com/corafenice/Photogur-CSD"  target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github-square" aria-hidden="true" /></a>
          </Button>

        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name='share'/>
        </CardMenu>
      </Card>
  </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="project-grid">
          {/*Project #1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background:'url() center /cover'}} >React Project #1</CardTitle>
          <CardText>
            What ever I want to describe project
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share'/>
          </CardMenu>
        </Card>
        {/*Project #2 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background:'url() center /cover'}} >React Project #2</CardTitle>
        <CardText>
          What ever I want to describe project
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name='share'/>
        </CardMenu>
      </Card>
  </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="project-grid">
          {/*Project #1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background:'url() center /cover'}} >React Project #1</CardTitle>
          <CardText>
            What ever I want to describe project
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name='share'/>
          </CardMenu>
        </Card>
  </div>
      )
    }
  }

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState( { activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>Ruby</Tab>
          <Tab>JavaScript</Tab>
          <Tab>??????</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Project;
