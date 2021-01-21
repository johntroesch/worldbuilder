import React from 'react';

//landscape features
let worldtypes = ["arid", "oceanic", "jungle", "tundra"];
let buildings = ["house", "fortress", "castle", "orb", "dome"]

//resources
let colors = ["purple", "cyan", "crimson", "beige"];
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
            let oceanCondition;
            let rworldtype = this.randomize(worldtypes);
            let rcolor = this.randomize(colors);
            let rmaterial = this.randomize(materials);
            let rbuilding = this.randomize(buildings);
            let rplant = this.randomize(plants);
            if (rworldtype==="oceanic"){
                oceanCondition = "Small islands rise above the waves"
            }
            
          return <div className = "description" style= {{borderStyle: "solid", borderColor: rcolor}}>
              <p>You stand overlooking the {rworldtype} world.</p>
              <p>{oceanCondition}</p>
              <p>Above you, the sky is {rcolor}</p>
              <p>In the distance, a {rmaterial + " " + rbuilding} can be seen. </p>
              <p>Surveying the local flora, you note primarily {rplant}.</p>
              </div>  
        }
}

export default Story