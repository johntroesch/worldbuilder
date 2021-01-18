import React from 'react';

import Story from './story';

class Narrative extends React.Component{
    constructor(){
        super()
        this.state = {
                info: "",
                welcome: "A portal stands before you.  You feel nervous, but excited at the infinite possibilities it represents.  Enter the portal?",
                button: "I am ready"

            }
    }
    render(){
        return(
        <div>
        <p>{this.state.welcome}</p>
        <div>{this.state.info}</div>
        <button onClick={this.createWorld}>{this.state.button}</button>
        
        </div>
        )
    }
    createWorld = ()=>{
        this.setState({info: <Story />, welcome: "You awaken in a teleport circle", button: "Take me to a new world"})
        };
}



export default Narrative;