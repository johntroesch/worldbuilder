import React from 'react';
import World from './world';
import Infodiv from './infodiv';

class Narrative extends React.Component{
    constructor(){
        super()
        this.state = {bookmark: 0,
                    currentworld: "current world",
                    theworld: "Here shalt be thy world"}
    }
    render(){
        return(
        <div>
        <p>You awaken in a teleport circle</p>
        <div>{this.state.theworld}</div>
        <div>Here shall be the information</div>
        <button onClick={this.createWorld}>create world</button>
        <div><Infodiv world={this.state.currentworld} /></div>
        </div>
        )
    }
    createWorld = ()=>{
        ;
        let newworld = new World();
        this.setState({theworld: newworld.wtype, currentworld: newworld, bookmark: 1});
        console.log(newworld.wtype);
        console.log(this.state.bookmark);
        };
}



export default Narrative;

//Todo: push arrays to a single variable, import here.  Randomize from this page, send to infoscreen via props