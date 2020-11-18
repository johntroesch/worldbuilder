import React from 'react'
import World from './world'

let world = new World();

class Worlddiv extends React.Component{
    render(){
        return(
        <div>
            <p>{world.wtype}</p>
        </div>)
    }
}

export default Worlddiv