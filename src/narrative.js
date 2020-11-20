import React from 'react';
import Worlddiv from './worlddiv';

class Narrative extends React.Component{
    constructor(){
        super()
        this.state = {bookmark: 0,
                    worldArrays: "",
                    theworld: "Here shalt be thy world"}
    }
    render(){
        return(
        <div>
        <p>You awaken in a teleport circle</p>
        <div><Worlddiv /></div>
        <div>Here shall be the information</div>
        </div>
        )
    }
}

export default Narrative;

//Todo: push arrays to a single variable, import here.  Randomize from this page, send to infoscreen via props