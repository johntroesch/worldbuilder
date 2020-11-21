import React from 'react';
//send props from narrative to here, return div for each property

class Infodiv extends React.Component{
    render(){
        let myworld = this.props.world;
        return(
            <div>
                <div>This world is {myworld.wtype}.  The sky above you is a deep {myworld.color}.</div>
            </div>
        )
    }
}

export default Infodiv