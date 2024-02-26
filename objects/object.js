let obj1 = {name : "Person 1", age: 5};
let obj2 = {age: 5, name : "Person 1"};

let isSame = true;

if(Object.keys(obj1).length === Object.keys(obj1).length) {
   

    for (let key in obj1) {
        if (obj1[key] === obj2[key]) {
    } else {
        isSame = false;
        
    }
} 
} else {
    isSame = false;
    console.log("Objects are different");
}

if(isSame){
    console.log("Objects are same")
} else {
    console.log("Objects are different")
}