import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Jeremy Rapp</h2>
                        <img class="img-fluid" src="https://images6.alphacoders.com/512/thumb-350-512054.jpg" 
                        alt="avatar" style={{height: '275px'}} />
                        {/* <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p> */}
                    </Cell>
                    <Cell col={6}>
                        <h2>Please Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Righteous'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    612-562-7337
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Righteous'}}>
                                    <i className="fa fa-envelope-square" aria-hidden="true"/>
                                    rappj45@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Righteous'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                    rappj45@gmail.com
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