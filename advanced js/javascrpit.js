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


const globalplayer=[

{
    
    id:1,
    name:"rijo",
    power:100,
}

]

const details=globalplayer.map((data)=> data.id);
console.log(details)



// const number=[15,10,20,34,21,3,1,5,15];

// const sortnumber=number.sort((a,b)=> a-b);

// console.log(number)