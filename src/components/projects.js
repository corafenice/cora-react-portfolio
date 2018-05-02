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
          {/*Ruby Project #1 dash */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background:'url(images/abc.jpeg) center /cover'}} >DASH</CardTitle>
            <CardText>
              DASH is a personalized student dashboard that allows parents and teachers to more effectively communicate.
              Some features include:
              Private Messaging-Individual qualitative student feedback as posted by teachers-Public feeds for every class a student.
              <a href="https://dashk12.herokuapp.com"  >DASH</a>

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
            <CardTitle style={{color: '#fff', height: '176px', background:'url(images/books.jpeg) center /cover'}} >API/Book</CardTitle>
            <CardText>
              Built an API, which helps to organize the workflow of a library. User can borrow a book, give it back, or to create a user, a book or an author. Administrators can –CRUD of books, authors, and users. Authentication with HTTP Tokens.
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
            <CardTitle style={{color: '#fff', height: '176px', background:'url(images/camera.jpeg) center /cover'}} >PetShow</CardTitle>
            <CardText>
              PetShow is a Webapp that allows a user to securely log in (used gem bcrypt) to upload pet photos into a database. These photo can be liked and commented by other users. Used Ruby on Rails to build and PostgreSQL for the database.

            </CardText>
            <CardActions border>
              <Button>
                <a href="https://github.com/corafenice/Photogur-CSD"  target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github-square" aria-hidden="true" /></a>
              </Button>

            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton classname='share'/>
            </CardMenu>
          </Card>
        </div>
      )
    }  else if(this.state.activeTab === 1) {
      return (
        <div className="project-grid">
          {/*Project #1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background:'url(images/porfolioscreenshot.png) center /cover'}} >React Portfolio</CardTitle>
            <CardText>
              Created my personalized porfolio using React and React-MDL.
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
      // } else if(this.state.activeTab === 3) {
      //   return (
      // <div className="project-grid">
      //   {/*Project #1 */}
      //   <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
      //     <CardTitle style={{color: '#fff', height: '176px', background:'url() center /cover'}} >React Project #1</CardTitle>
      //     <CardText>
      //       What ever I want to describe project
      //     </CardText>
      //     <CardActions border>
      //       <Button colored>GitHub</Button>
      //       <Button colored>Demo</Button>
      //     </CardActions>
      //     <CardMenu style={{color: '#fff'}}>
      //       <IconButton name='share'/>
      //     </CardMenu>
      //   </Card>
      // </div>
      // )
    }
  }

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState( { activeTab: tabId})} ripple>
          <Tab>Ruby</Tab>
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
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
