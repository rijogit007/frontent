// const strobject={

// id:0,
// name:"rv",
// conpany:"google"

// };

// console.log(strobject);



const strJSON=`{

"id":0,
"name":"rv",
"company":"google"

}`

console.log(strJSON);
console.log(typeof strJSON);

// JSON.parse()

const parsedJSON = JSON.parse(strJSON);

console.log(typeof parsedJSON);
console.log(parsedJSON.company);




//convert json to object


