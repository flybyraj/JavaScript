// Create 3 divs with common class name - "box". Access them & add some unique text to each
// of them.

let box=window.document.querySelectorAll(".box");
console.log(box);
let count=1;
for (eachBox of box) {
    eachBox.innerText= `New Unique Value ${count}`; //String Interpolation
    count++;
    console.log(eachBox.innerText);
}

//Manual Way
/*box[0].innerText="New value1";
box[1].innerText="New Value2";
box[2].innerText="New Value3";
console.log(box[0]);
console.log(box[1]);
console.log(box[2]);*/