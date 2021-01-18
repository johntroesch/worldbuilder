import React from 'react';

//landscape features
let worldtypes = ["arid", "oceanic", "jungle", "tundra"];
let buildings = ["house", "fortress", "castle", "orb", "dome"]

//resources
let colors = ["emerald", "azure", "vermillion", "murky"];
let materials = ["stone", "steel", "glass"]

//flora
let plants = ["palm trees", "colossal trees", "soft grass", "razor grass", "ferns"]

class Story extends React.Component{
    constructor(){
        super();
    }
        randomize(subj){
             return subj[Math.floor(Math.random() * (subj.length))]
        }
        render(){
          return <div>
              <p>You stand overlooking the {this.randomize(worldtypes)} world.</p>
              <p>Above you, the sky is {this.randomize(colors)}</p>
              <p>In the distance, a {this.randomize(materials) + " " + this.randomize(buildings)} can be seen. </p>
              <p>Surveying the local flora, you note primarily {this.randomize(plants)}.</p>
              </div>  
        }
}

export default Story