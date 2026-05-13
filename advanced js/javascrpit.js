//spread opertor

const globalplayer={

    id:0,
    name:"rijo",
    power:100,
};


const  globalplayer2={...globalplayer};//pass copy



globalplayer2.name="rijo22";


console.log(globalplayer)
console.log(globalplayer2)


