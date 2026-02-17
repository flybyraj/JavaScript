const Student = {
    fullName : "Rahul Kumar",
    age : 24,
    Cgpa : 8.2,
    isPass : true,
}; 

Student["age"]=Student["age"]+1;
Student["fullName"]= "Rahul Sharma";

console.log(Student["age"]);
console.log(Student.Cgpa);
console.log(Student.fullName);