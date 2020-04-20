import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto"}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="My Picture.jpg"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
                <h1>Full Stack Web Developer</h1>
                <hr/>
                <p>HTML/CSS | JavaScript | Bootstrap | React | Redux</p>
                {/* LinkedIn */}
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/jeremyrapp/" rel="noopener noreferrer" target="_blank">
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </a>
                    {/* GitHub */}
                    <a href="https://github.com/" rel="noopener noreferrer" target="_blank">
                        <i class="fa fa-github-square" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
