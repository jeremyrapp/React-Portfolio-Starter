import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";
import Education from './education';
import Experience from './experience';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src="https://wallpapercave.com/wp/doAHAI6.jpg" 
                            alt="avatar" 
                            style={{height: '300px', width: '500px'}}/>
                        </div>
                    <h2>Jeremy Rapp</h2>
                    <h4 style={{color: 'grey'}}>Computer Programmer</h4>
                    <hr style={{borderTop: '3px solid #00008B', width: '90%'}}/>
                    <p>Hard-working, helpful, friendly, passionate IT professional. Promoting digital education and lifelong learning. Seeking a position where I can utilize my education, experience, skills and where there is potential to grow as a developer.  Possess excellent communication, problem solving, and customer service skills, with a genuine desire to work in assisting people.</p>
                    <hr style={{borderTop: '3px solid #00008B', width: '90%'}}/>
                    <h5>Address</h5>
                    <p>4124 Ottawa Ave. South, Saint Louis Park, MN, 55416</p>
                    <h5>Phone</h5>
                    <p>612-562-7337</p>
                    <h5>Email</h5>
                    <p>rappj45@gmail.com</p>
                    <h5>Website</h5>
                    <p>mywebsite.com</p>
                    <hr style={{borderTop: '3px solid #00008B', width: '90%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2> 
                    <Education 
                    startYear="6/2009"
                    endYear="12/2015"
                    schoolName="Minneapolis Community and Technical College:"
                    schoolDescription="I earned an A.A.S. as a Software Developer here."
                    />
                    <Education 
                    startYear="6/2014"
                    endYear="3/2015"
                    schoolName="Takoda Institue of Higher Education:"
                    schoolDescription="I earned a 45 credit certificate, as a Computer Support Specialist here."
                    />
                    <Education 
                    startYear="5/2015"
                    endYear="Present"
                    schoolName="North Hennepin Community and Technical College:"
                    schoolDescription="I am attending NHCC off and on, between other schooling. Working on earning an Application Programmer Certificate."
                    />
                    <Education 
                    startYear="10/2019"
                    endYear="11/2019"
                    schoolName="NuCamp:"
                    schoolDescription="Completed the Web Development Fundamentals bootcamp."
                    />
                    <Education 
                    startYear="51/2020"
                    endYear="Present"
                    schoolName="NuCamp:"
                    schoolDescription="Currently enrolled in the Full Stack Web and Mobile App Development bootcamp"
                    />
                    <hr style={{borderTop: '3px solid #00008B'}}/>
                    <h2>Experience</h2> 
                    <Experience 
                    startYear="6/2019"
                    endYear="Present"
                    jobName="McKesson:"
                    jobDescription="Help Desk Level 1-Client Technology Support-Software Support-Provide support for Supply Manager, the McKesson medical supply chain site."
                    />
                    <Experience 
                    startYear="8/2018"
                    endYear="6/2019"
                    jobName="Blue Cross Blue Shield:"
                    jobDescription="Help Desk Level 1-Service Desk-Hardware/Software Support-Provided hardware/software support for BCBS employees. Responsible for closing the Service Desk every other week."
                    />
                    <Experience 
                    startYear="7/2016"
                    endYear="8/2018"
                    jobName="Optum(United Health Group):"
                    jobDescription="Help Desk Level 1-Technology Support Center-Hardware/Software Support-Provided hardware/software support for Optum employees."
                    />
                    <Experience 
                    startYear="4/2015"
                    endYear="4/2016"
                    jobName="Target Coporation:"
                    jobDescription="Help Desk Level 1-Client Support Center-Hardware/Software Support-Provided hardware/software support for Target employees in the Flexible Fulfillment Mobile Device Group."
                    />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;