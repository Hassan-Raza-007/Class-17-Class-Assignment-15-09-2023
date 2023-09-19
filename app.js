// var arr = ["Nokia", "Apple", "Samsung", "Oppo", "Redmi"];
// document.write(
//   "<select>" +
//     "<option>" +
//     arr[0] +
//     "</option>" +
//     "<option>" +
//     arr[1] +
//     "</option>" +
//     "<option>" +
//     arr[2] +
//     "</option>" +
//     "<option>" +
//     arr[3] +
//     "</option>" +
//     "<option>" +
//     arr[4] +
//     "</option>" +
//     "</select>"
// )

// var arr = ["Ali Asghar","Hassan Raza", "abc", "100", true]

// console.log(arr[1])

// var arr1 = new Array("Ali Asghar", "Hassan Raza", "abc", "100", true)

// console.log(arr[3])

// var animals = ["dog","cheetah", "lion", "snake","crocodile","elephant"]
// var userinput = prompt("Enter values to add the last of array")
// var userinput1 = prompt("Enter values to add the last of array")
// var userinput2 = prompt("Enter values to add the last of array")
// var userinput3 = prompt("Enter values to add the last of array")
// var userinput4 = prompt("Enter values to add the last of array")

// animals.push(userinput, userinput1, userinput2, userinput3, userinput4)

// console.log(animals)

// var animals = ["dog", "cheetah", "lion", "snake", "crocodile", "elephant"];
// console.log("original array", animals);
// var targetindex = prompt("Enter the target index");
// var deletedindex = prompt("Enter how many delete");
// var addingelement = prompt("Enter elements");
// var addingelement1 = prompt("Enter elements");
// var addingelement2 = prompt("Enter elements");

// animals.splice(
//   targetindex,
//   deletedindex,
//   addingelement,
//   addingelement1,
//   addingelement2
// );
// console.log("copy", animals);

// var animals = ["dog", "cheetah", "lion", "snake", "crocodile", "elephant"];
// console.log("original array", animals);
// var firstvalue = +prompt("Enter the Starting value");
// var endvalue = +prompt("Enter the ending value");
// var addingelement = +prompt("Enter elements");
// var addingelement1 = +prompt("Enter elements");
// var addingelement2 = +prompt("Enter elements");

// animals.slice(
//     firstvalue,
//     endvalue,
//     addingelement,
//     addingelement1,
//     addingelement2
//   );
//   console.log("copy", animals);

// for (var i = 0; i <= 10; i++) {
//   console.log("Hello World");
// }
// for(var i = 1; i <= 10 ; i= i + 2){
//   console.log(i)
// }



// for(var i = 1;i <=10;i++ )
// {
  //   document.write("6" + "x" + i + "="+6*i +"<br>")
  // }
  
  
//   var userinput = +prompt("Enter a number to generate a multiplication table")
//   var tablelength = +prompt("Enter table length")
  
// for(var i = 1;i <tablelength;i++ )
// {
//   document.write(userinput + "x" + i + "="+userinput*i +"<br>")
// }


// var arr = ["Hassan", "Raza", "Ali","Asghar"]
// for (var i = 0;i < arr.length; i++){
//   console.log(arr[i])
// }
// var fruits = ["banana", "mango", "apple","peach"]
// for (var i = 0;i < fruits.length; i++){
//   console.log("Elements of "+ fruits[i]+ " at " + " "+ i)
// }




// *************************ARRAYS AND LOOP***********************

// Q3
// for(var i = 1;i <= 10; i++){
//   document.write(i + "<br>")
// }


// Q4
//   var userinput = +prompt("Enter a number to generate a multiplication table")
//   var tablelength = +prompt("Enter table length")
  
// for(var i = 1;i <tablelength;i++ )
// {
//   document.write(userinput + "x" + i + "="+userinput*i +"<br>")
// }

// Q5
// var fruits = ["apple","banana","mango","orange","strawberry"]
// for (var i = 0;i < fruits.length; i++){
//   document.write("Elements of "+ fruits[i]+ " at " + " "+ i +"<br>")
// }

// Q6
// document.write("Counting:")
// for(var i = 1;i <= 10; i++){
//   document.write(i + ",")
// }
// document.write("<br>")
// document.write("Reverse Counting:")
// for(var a = 10;a >= 1; a--){
//   document.write(a + ",")
// }
// document.write("<br>")
// document.write("Even:")
// for(var i = 0;i <= 20; i=i+2){
//   document.write(i + ",")
// }
// document.write("<br>")
// document.write("Odd:")
// for(var i = 1;i <= 20; i=i+2){
//   document.write(i + ",")
// }
// document.write("<br>")
// document.write("Series:")
// for(var i = 2;i <= 20; i=i+2){
//   document.write(i +"k"+ ",")
// }

// Q7

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Enter an item to search:");

// userInput = userInput.toLowerCase();

// if (A.includes(userInput)) {
//     alert("Yes, " + userInput + " is found in the list.");
// } else {
//     alert("No, " + userInput + " is not found in the list.");
// }

// Q8
// var A = [24, 53, 78, 91, 12]

// var maxNumber = A[0]

// for (var i = 1; i < A.length; i++) {
//   if (A[i] > maxNumber) {
//       maxNumber = A[i];
//   }
// }
// document.write("The largest number in the array is: " + maxNumber);

// Q9
// var A = [24, 53, 78, 91, 12]

// var minNumber = A[0]

// for (var i = 1; i < A.length; i++) {
//   if (A[i] < minNumber) {
//       minNumber = A[i];
//   }
// }
// document.write("The Smallest number in the array is: " + minNumber);


// Q10
// for(var i = 5; i <= 100; i = i+5){
//   document.write(i + ",")
// }



