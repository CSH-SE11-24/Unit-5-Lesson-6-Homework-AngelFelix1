console.log("Script running...")
// Task 1: Define a function called `calculateArea` that takes length and width as parameters and returns the area (length * width)
function calculateArea(length,width){
  return length*width
}


// Call the `calculateArea` function with any two values. Console log the result to check it.

let area0 = calculateArea(5,5)
console.log(area0)


// Task 2: Define a function called `checkPassing` that takes in `student` (object) as a parameter and returns whether the `grade` attribute is greater than or equal to 63.

function checkPassing(student){
  let grade = student.grade
  if(70<=grade){
    return ("you are passing")
  }
}

// Define a `student` object that has name (string), class (string), and grade (number) attributes.

 let student = {
name:"angel",
class:"math",
grade: 100
 }


// Call the `checkPassing` function with the `student` object. Console log the result to check it.
let  ykw = checkPassing(student)
 console.log(ykw)
// Task 3: Define a function called `printIndex` that takes in `array` and `index` as parameters andconsole logs the element at that index of the array.
// Pink & Blue: Define `printIndex` as an ARROW function
function printIndex(array, index){
  console.log(array[index])
}


// Define an array called `favoriteFoods` and put at least 3 elements in

let favoriteFood = [ "rice","chiken","lamb"]
// Call the `printIndex` function with `favoriteFoods` and any index
pointIndex(favoriteFood,2)


// Extra Credit: Define an arrow function called `calculateTotal` that takes in `array` (array of numbers) as a parameter and returns the total of all the numberes
let calculateTotal = (array) =>{
  let sum = 0 
  for (let x = Number[0]; x < array.legth; x++){
  }
  console.log(sum)
}


// Define an array called `numbers` and put at least 3 numbers in
let Number = [ 1,2,3,4,5,6]

// Call the `calculateTotal` function with `numbers` and any index

calculateTotal(Number)

