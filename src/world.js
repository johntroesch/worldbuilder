
//landscape features
let worldtypes = ["arid", "oceanic", "jungle", "tundra"];
let buildings = ["house", "fortress", "castle", "orb", "dome"]

//resources
let colors = ["emerald", "azure", "vermillion", "murky"];
let materials = ["stone", "steel", "glass"]

//flora
let plants = ["palm trees", "colossal trees", "soft grass", "razor grass", "ferns"]

function randomize(subj){
    let content = subj[Math.floor(Math.random() * (subj.length))];
    return content;
}

class World{
constructor(){
    this.wtype=randomize(worldtypes)    
    this.color=randomize(colors);
    this.mat=randomize(materials);
    this.build=randomize(buildings);
}
}

export default World;