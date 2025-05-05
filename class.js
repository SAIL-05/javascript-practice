//strring datatype
let mySchool = "landmark"
console.log(mySchool)

let myName ="mariam"
console.log(myName)

let book="The girl is beautiful"
console.log(book)

//Number datatype
var myLuckyNumber=8
console.log(myLuckyNumber)

 var favDate="08/07"
 console.log(favDate)

//  boolean datatype
 var me = 24
 var myBrother=  18
 console.log(me>myBrother)
  

//practice exercise1
// let me = 24
//  let myBrother=  18
//  var higher= me>myBrother
//  var isit=me<myBrother
//  console.log(higher)
//  console.log(isit)


 //practice exercise2
 let name = "Mariam"
let Age = 21
let canCodeJavascript = true

 console.log(`hello,my name is ${name}, i am ${Age} years old and i can code javascript:${canCodeJavascript}.`)
 console.log(`hello,my name is ${name}, i am ${Age} years old and i can code javascript:${!canCodeJavascript}.`)

//practice exercise 3
let distanceinKm = 130
let distanceinmile = 130/1.60934
console.log(`The distance of ${distanceinKm} kms is equal to ${distanceinmile} miles`)

//practice exercise 4
const heightinCm= 169
const heightinm= 169/100
const heightinInches= 169/2.54
const weightinKg= 51
const weightinPound=2.2046*51
 const bmi= weightinKg/((heightinm)*(heightinm))
 console.log(bmi)

//practice exercise 5
let g=100
let h= 47
const letTest= (g>h)?`yes,${g} is greater than ${h}`:`no ${g} is greater than ${h}`
console.log(letTest)
 
// //practice exercise 6
let score=25

if (score>=70){console.log("A")
} else if(score>=60||score==69){ 
    console.log("B")
} else if(score>=50||score==59){
    console.log("C")
} else if(score>=45||score==49){
    console.log("D")
} else if(score>=40||score==44){
    console.log("E")
} else{
    console.log("fail-F")
}

//practice exercise 7
let y=50
let z= 67
 
if (y>z){
    console.log(`Yes,${y} is greater than ${z}`)
}else{
    console.log(`No,${z} is greater than ${y}`)
}

//function
// function sayHello() {
//     let you = prompt("what's your name? ");
//     console.log("Hello", you + "!");
//     console.log(`hello ${you}!`)
// }
// sayHello()


//practice exercise 8
function checkGreater(num1,num2){
    
    if (num1>num2){
        console.log(`Yes,${num1} is greater than ${num2}`)
    }else{
        console.log(`No,${num2} is greater than ${num1}`)
    }

}
checkGreater(30,15)

//function practice 9
function checkSum(num3,num4){
    console.log(num3 + num4)
}
checkSum(12,13)

//function practice 10
function checkGrade(score){
    if (score>=70){console.log("A")
    } else if(score>=60||score==69){ 
        console.log("B")
    } else if(score>=50||score==59){
        console.log("C")
    } else if(score>=45||score==49){
        console.log("D")
    } else if(score>=40||score==44){
        console.log("E")
    } else{
        console.log("fail-F")
    }
}
checkGrade(45)


//     // Conditional Statement IF, ELSE IF, ELSE/
//     let a = 56
//     let b = 32
//     if(a>b){
//         console.log("the first value is the greatest")
//     } else{console.log("hello")}
//  let valueOne = parseInt(prompt("Enter your first Number"))
//  let valueTwo = parseInt(prompt("Enter your second Number"))
//  let ans = valueOne + valueTwo
//  alert(ans)
//  console.log(ans)

 // write  a program that check if a number is even or odd
 let ans = parseInt(prompt("enter a number"))

  if (ans%2==0){
    alert("this is an even number")
}
  else{
    alert("this is an odd numer")
}
