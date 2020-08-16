import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Web Developer " where="Wild Code School" from="September 2019" to="February 2020"/>
            <Widecard title="DCG" where="ENOES" from="September 2014" to="August 2018"/>
            </div>
            )
        }
    }
    
export default Education
    