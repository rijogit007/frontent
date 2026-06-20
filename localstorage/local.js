// localStorage.setItem("","");
// localStorage.getItem("");
// localStorage.removeItem("");
// localStorage.clear();
// localStorage.key();


localStorage.setItem("id","0");
// localStorage.setItem("token","abcdef")
// localStorage.setItem("name","rijo")


// localStorage.removeItem("id")

// console.log(localStorage.key(1));

// localStorage.clear();


// document.write(localStorage.getItem("id"))
// document.write(localStorage.getItem("token"))


const obj={

    id:0,
    token:"abcdef",

    name:"rijo"
};

localStorage.setItem("data",JSON.stringify(obj))

