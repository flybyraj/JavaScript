let obj = {
    item: "pen",
    price: 10,
};

// console.log("The cost of" , obj.item , "is" , obj.price , "Rupees");

//Template Literals
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

let specialString= `This is a Template Literal`;
console.log(typeof specialString);

let sum= `This is Template Literals ${1+2+5}`;
console.log(sum);