import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  CardMenu,
  Button,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "white",
              height: "200px",
              background:
                "url(https://www.ryanv.ca/images/htmlcss.jpg) center / cover",
            }}
          >
            HTML/CSS Project #1
          </CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </CardText>
          <CardActions border>
            <Button colored>GITHUB</Button>
            <Button colored>CODEPEN</Button>
            <Button colored>LIVE DEMO</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "white",
              height: "200px",
              background:
                "url(https://www.ryanv.ca/images/htmlcss.jpg) center / cover",
            }}
          >
            HTML/CSS Project #2
          </CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </CardText>
          <CardActions border>
            <Button colored>GITHUB</Button>
            <Button colored>CODEPEN</Button>
            <Button colored>LIVE DEMO</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "white",
              height: "200px",
              background:
                "url(https://www.ryanv.ca/images/htmlcss.jpg) center / cover",
            }}
          >
            HTML/CSS Project #3
          </CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </CardText>
          <CardActions border>
            <Button colored>GITHUB</Button>
            <Button colored>CODEPEN</Button>
            <Button colored>LIVE DEMO</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "white",
              height: "200px",
              background:
                "url(https://www.ryanv.ca/images/htmlcss.jpg) center / cover",
            }}
          >
            HTML/CSS Project #4
          </CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </CardText>
          <CardActions border>
            <Button colored>GITHUB</Button>
            <Button colored>CODEPEN</Button>
            <Button colored>LIVE DEMO</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
        
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "white",
              height: "200px",
              background:
                "url(https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg) center / cover",
            }}
          >
            JavaScript Project #1
          </CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </CardText>
          <CardActions border>
            <Button colored>GITHUB</Button>
            <Button colored>CODEPEN</Button>
            <Button colored>LIVE DEMO</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "white",
              height: "200px",
              background:
                "url(https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg) center / cover",
            }}
          >
            JavaScript Project #2
          </CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </CardText>
          <CardActions border>
            <Button colored>GITHUB</Button>
            <Button colored>CODEPEN</Button>
            <Button colored>LIVE DEMO</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "white",
              height: "200px",
              background:
                "url(https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg) center / cover",
            }}
          >
            JavaScript Project #3
          </CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </CardText>
          <CardActions border>
            <Button colored>GITHUB</Button>
            <Button colored>CODEPEN</Button>
            <Button colored>LIVE DEMO</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "white",
              height: "200px",
              background:
                "url(https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg) center / cover",
            }}
          >
            JavaScript Project #4
          </CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </CardText>
          <CardActions border>
            <Button colored>GITHUB</Button>
            <Button colored>CODEPEN</Button>
            <Button colored>LIVE DEMO</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "white",
              height: "200px",
              background:
                "url(https://www.halilgulerweb.com/wp-content/uploads/2019/07/bootsrap-4-fiyat-tablosu.jpg) center / cover",
            }}
          >
            Bootstrap Project #1
          </CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </CardText>
          <CardActions border>
            <Button colored>GITHUB</Button>
            <Button colored>CODEPEN</Button>
            <Button colored>LIVE DEMO</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "white",
              height: "200px",
              background:
                "url(https://www.halilgulerweb.com/wp-content/uploads/2019/07/bootsrap-4-fiyat-tablosu.jpg) center / cover",
            }}
          >
            Bootstrap Project #2
          </CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </CardText>
          <CardActions border>
            <Button colored>GITHUB</Button>
            <Button colored>CODEPEN</Button>
            <Button colored>LIVE DEMO</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "white",
              height: "200px",
              background:
                "url(https://www.halilgulerweb.com/wp-content/uploads/2019/07/bootsrap-4-fiyat-tablosu.jpg) center / cover",
            }}
          >
            Bootstrap Project #3
          </CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </CardText>
          <CardActions border>
            <Button colored>GITHUB</Button>
            <Button colored>CODEPEN</Button>
            <Button colored>LIVE DEMO</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "white",
              height: "200px",
              background:
                "url(https://www.halilgulerweb.com/wp-content/uploads/2019/07/bootsrap-4-fiyat-tablosu.jpg) center / cover",
            }}
          >
            Bootstrap Project #4
          </CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </CardText>
          <CardActions border>
            <Button colored>GITHUB</Button>
            <Button colored>CODEPEN</Button>
            <Button colored>LIVE DEMO</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "white",
              height: "200px",
              background:
                "url(https://user-agency.com/wp-content/uploads/2018/06/Backgrounds-React-JS-1.jpg) center / cover",
            }}
          >
            React Project #1
          </CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </CardText>
          <CardActions border>
            <Button colored>GITHUB</Button>
            <Button colored>CODEPEN</Button>
            <Button colored>LIVE DEMO</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "white",
              height: "200px",
              background:
                "url(https://user-agency.com/wp-content/uploads/2018/06/Backgrounds-React-JS-1.jpg) center / cover",
            }}
          >
            React Project #2
          </CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </CardText>
          <CardActions border>
            <Button colored>GITHUB</Button>
            <Button colored>CODEPEN</Button>
            <Button colored>LIVE DEMO</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "white",
              height: "200px",
              background:
                "url(https://user-agency.com/wp-content/uploads/2018/06/Backgrounds-React-JS-1.jpg) center / cover",
            }}
          >
            React Project #3
          </CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </CardText>
          <CardActions border>
            <Button colored>GITHUB</Button>
            <Button colored>CODEPEN</Button>
            <Button colored>LIVE DEMO</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "white",
              height: "200px",
              background:
                "url(https://user-agency.com/wp-content/uploads/2018/06/Backgrounds-React-JS-1.jpg) center / cover",
            }}
          >
            React Project #4
          </CardTitle>
          <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </CardText>
          <CardActions border>
            <Button colored>GITHUB</Button>
            <Button colored>CODEPEN</Button>
            <Button colored>LIVE DEMO</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>HTML/CSS</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Bootstrap</Tab>
          <Tab>React</Tab>
        </Tabs>

        
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        
      </div>
    );
  }
}

export default Projects;
