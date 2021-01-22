import React from 'react';
import Narrative from './narrative';
import ImageView from './imageView';
import InfoView from './info';
import LandingPage from './landingpage';


const narrative = <Narrative />
const images = <ImageView />
const info = <InfoView />
class Layout extends React.Component{
    constructor(){
        super();
        this.state = {content: <LandingPage />}
    }
    setContentNar=()=>{
        this.setState({content:narrative})
    }
    setContentImages=()=>{
        this.setState({content:images})
    } 
    setContentInfo=()=>{
        this.setState({content: info})
    }    
    render(){
       return <div className="layout">
            <nav className="sidebar">
                <button onClick={this.setContentNar}>World Builder</button>
                <button onClick={this.setContentImages}>Images</button>
                <button onClick={this.setContentInfo}>Information</button>
            </nav>
            <div className="content">{this.state.content}</div>
        </div>
    }
    
}

export default Layout;