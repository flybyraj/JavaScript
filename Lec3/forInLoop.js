let student = {
    name: "Raj Sharma",
    age: 20,
    cgpa: 7.0,
    isPass: true ,
};
 for (let key in student) {
    console.log("key =", key , "value =", student[key]);
 }