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


let sortedJSON1 = JSON.stringify(obj1, Object.keys(obj1).sort());
let sortedJSON2 = JSON.stringify(obj2, Object.keys(obj2).sort());


if (sortedJSON1 === sortedJSON2) {
  console.log("The JSON objects are equal.");
} else {
  console.log("The JSON objects are not equal.");
}