let str="Raj Sharma";
console.log(str);

//Convert to Uppercase or Lowercase
let upper=str.toUpperCase();
let lower=str.toLowerCase();
console.log(upper);
console.log(lower);

//Trim-Removes white spaces from start and end only
console.log(str.trim());

//Slice ,Cut out piece from String
let num="012345";
console.log(num.slice(1,4));
console.log(num.slice(2));

//String Concat Join Strings
let str1="Raj ";
let str2="Sharma";
let res=str1.concat(str2);
console.log(res);
console.log("I am " + str1+str2);

//Replace
let rep1="Raj Sharma";
console.log(rep1.replace("a","Z"));
let rep2="Prince Sharma";
console.log(rep2.replaceAll("a","Z"));

//charAt
let word="Raj Sharma";
console.log(word.charAt(2));//j
console.log(word.charAt(8));//j
console.log(word[0]);