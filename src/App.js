import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      /* Uses a header that scrolls with the text, rather than staying locked at the top */
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Jeremy Rapp Portfolio" scroll>
            <Navigation>
              <Link to="/">Main</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Portfolio" style={{color: 'black', backgroupd: '#E8E8E8'}}>
            <Navigation>
              <Link to="/" style={{color: '#505050'}}>Main</Link>
              <Link to="/resume" style={{color: '#505050'}}>Resume</Link>
              <Link to="/aboutme" style={{color: '#505050'}}>About Me</Link>
              <Link to="/projects" style={{color: '#505050'}}>Projects</Link>
              <Link to="/contact" style={{color: '#505050'}}>Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
