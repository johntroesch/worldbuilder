import React from 'react'
import World from './world'

class Worlddiv extends React.Component{
    constructor(){
        super()
        this.state = {
            myWorld: "placeholder"
        }
    }
    render(){
        return(
        <div>
            <p>{this.state.myWorld}</p>
            <button onClick={this.createWorld}>A new world...</button>
        </div>)
    }
    createWorld = ()=>{
        let newworld = new World();
        this.setState({myWorld: newworld.wtype});
        console.log(newworld.wtype)
        };
}

export default Worlddiv