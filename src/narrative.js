import React from 'react';
import Worlddiv from './worlddiv';

class Narrative extends React.Component{
    constructor(){
        super()
        this.state = {bookmark: 0,
                    theworld: "Here shalt be thy world"}
    }
    render(){
        return(
        <div>
        <p>You awaken in a teleport circle</p>
        <div>{this.state.theworld}</div>
        <button onClick={this.advanceStory}>Advance</button>
        </div>
        )
    }
    advanceStory = ()=>{
        this.setState({theworld: <Worlddiv />});
    }
}

export default Narrative;