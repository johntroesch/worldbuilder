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
           <nav className="topbar">
           <h1>The World Builder Project</h1>
            <ul className="navbar">
                <li onClick={this.setContentNar}>World Builder</li>
                <li onClick={this.setContentImages}>Images</li>
                <li onClick={this.setContentInfo}>Information</li>
            </ul>
            </nav>
            <div className="content">{this.state.content}</div>
        </div>
    }
    
}

export default Layout;