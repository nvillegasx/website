import React, { Component } from 'react'
import Me from '../images/me.jpeg'

class AboutMe extends Component {
    render() {
        return (
            <div>
                <div style={{margin: "auto", width: "50%"}}>
                    <img src={Me} style={{width: "300px", borderRadius: "50%"}}alt="Me"/>
                </div>
                <h1>Nathaniel Villegas</h1>
                <h3>Software Developer</h3>
                <p>
                    Hello! My name is Nathaniel Villegas and I'm a software developer.
                </p>
                <p>
                    #when i discovered programming

                    #what i enjoy about programming
                </p>
                <p>
                    During my free time I enjoy working out, hiking, 
                    and trying new places to eat. During the basketball season you can catch me at Golden One Center watching the 
                    Sacramento Kings playing.
                </p>
            </div>
        )
    }
}

export default AboutMe;