import React from 'react';
//send props from narrative to here, return div for each property

class Infodiv extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content : "the world awaits forming",
            plants: "Here, flora await discovery",
            animals: "Here, you shall meet many interesting creatures",
            myworld: this.props.world
        }
    }
    render(){
        return(
            <div>
                <button onClick={this.showEnviron}>Environment</button>
                <div id="environment">{this.state.content}</div>
                <div id="flora">{this.state.plants}</div>
                <div id="fauna">{this.state.animals}</div>
            </div>
        )
    }
    showEnviron=()=>{
        //replaces environment div contents with environ
        let environ = <p>This world is {this.state.myworld.wtype}.  The sky above you is a deep {this.state.myworld.color}.</p>
        this.setState({content: environ})
        console.log("fired")
        console.log(this.state.myworld)
    }
}

export default Infodiv