let num = prompt("Enter the Marks : ");
console.log(num , "is the marks");
let grade;

if (num >= 90 && num<=100) {
    grade="A";
} else if (num >= 80) {
    grade="B";
} else if (num>=70) {
    grade="C";
} else if (num>=60) {
    grade="D";
} else {
    grade="f";
} 

console.log("According to your score , your Grade is : ", grade);