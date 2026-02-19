// We are given array of marks of students. Filter our of the marks of students that scored 90+.

let arr=[23,45,98,97,99,90,43,56];

let marks = arr.filter ( (val) => {
    return val>90;
})
console.log("90+ marks are " , marks);