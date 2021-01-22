import React from 'react';

class LandingPage extends React.Component{
    render(){
        return <div className="landingdiv">
            <p className="transitional">Welcome to the worldbuilder</p>
            <p className="transitional">To be transported to another world, click"World Builder" in the sidebar</p>
            <p className="transitional">To view the image gallery, click "Image gallery"</p>
            <p className="transitional">For further information about the app, click "Information"</p>
        </div>
    }
}

export default LandingPage;