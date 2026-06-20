// localStorage.setItem("","");
// localStorage.getItem("");
// localStorage.removeItem("");
// localStorage.clear();
// localStorage.key();


// localStorage.setItem("id","0");
// localStorage.setItem("token","abcdef")
// localStorage.setItem("name","rijo")


// localStorage.removeItem("id")

// console.log(localStorage.key(1));

// localStorage.clear();


// document.write(localStorage.getItem("id"))
// document.write(localStorage.getItem("token"))


// const obj={

//     id:0,
//     token:"abcdef",

//     name:"rijo"
// };

// localStorage.setItem("data",JSON.stringify(obj))

// console.log(JSON.parse(localStorage.getItem("data")))

const input=document.querySelector("input");
const login=document.querySelector("#login");
const logout=document.querySelector("#logout");
const h1=document.querySelector("h1");
if (localStorage.getItem("token")){

    h1.innerHTML="welcome user";
}
login.onclick=()=>{
    if(input.value){

        localStorage.setItem("token",input.value);
        h1.innerText="welcome user";

        
    }

}
logout.onclick=()=>{
localStorage.clear();
locatiom.reload();

}


