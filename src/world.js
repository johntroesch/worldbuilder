let worldtypes = ["arid", "oceanic", "jungle"];
let colors = ["emerald", "azure", "vermillion", "murky"];
let materials = ["stone", "steel", "glass", ]
let buildings = ["house", "fortress", "castle", "orb", "dome"]


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