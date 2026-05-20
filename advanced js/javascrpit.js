// //spread opertor

// // const globalplayer={

// //     id:0,
// //     name:"rijo",
// //     power:100,
// // };


// // const  globalplayer2={...globalplayer};//pass copy



// // globalplayer2.name="rijo22";


// // console.log(globalplayer)
// // console.log(globalplayer2)


// const player=["Ramu","Ajay","john"];


// const player2={...player}

// player2.powerlevr=50;

// console.log(player)
// console.log(player2)


//map


// const globalplayer=[

// {
    
//     id:1,
//     name:"rijo",
//     power:100,
// }

// ]

// const details=globalplayer.map((data)=> data.id);
// console.log(details)

const globalplayer=[

{
    
    id:1,
    name:"rijo",
    power:1001,
},
{
    
    id:2,
    name:"jijo",
    power:1002,
},
{
    
    id:3,
    name:"tijo",
    power:1003,
},
{
    
    id:4,
    name:"sijo",
    power:1003,
}

]



const newarray=globalplayer.filter((data)=>data.power==1003)

console.log(newarray);



































// const number=[15,10,20,34,21,3,1,5,15];

// const sortnumber=number.sort((a,b)=> a-b);

// console.log(number)