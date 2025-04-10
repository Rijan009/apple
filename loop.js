// // // let rows= 5
// // // for (let i=1; i<=rows; i++)
// // // {
// // //     let start = ""
// // // for(let j=1; j<=i; j++)
// // // {
// // //     start+="*"
// // // }
// // //   console.log(start)
// // // }

// // // for(let a=1; a<30; a++)
// // // {
// // //     if(a==3)
// // //     {
// // //         console.log("Happy Birthday 3")
// // //        // continue;
// // //        break;
// // //     }
// // //     console.log("for loop", a)
// // // }

// // //do while
// // // let c=6
// // // do{
// // //     console.log(c)
// // //     c++
// // // }
// // // while(c<10)


// // // for in loop , for of loop (array and object)
// // // let fruits=["apple","banana", "orange"]
// // // // indexing 0
// // // console.log(fruits[2])
// // // for (const a of fruits){
// // //     console.log(a)
// // // }
// // // for (const a in fruits){
// // //     console.log(a)
// // // }
// // // for (const a in fruits){
// // //     console.log(fruits[a])
// // // }

// // // var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
// // // for (const v of country_list) {
// // //     console.log(v)
// // // }

// // function greet(){
// //     console.log("hi");
// // }
// // greet();


// // function greetuser(a)
// // {
// //     console.log ("Good", a, "user")
// // }
// // greetuser("morning");
// // greetuser("Evening");
// // greetuser("night");

// // function person(name="student", ph=999){
// //      console.log("name:",name,"phone:",ph)
// // }
// // person("ram",4556)
// // person("ram")
// // person()

// // Function with parameter and argument 
// // function sum (num1 , num2){
// //  console.log(num1+num2)
// // }
// // sum(2,3)
// // sum(230,13)

// // // function with return value 
// // function Tshrit(a){
// //     return a
// // }
// // let data=Tshrit(3000)
// // console.log(data>2500 ? "went to shop": "Fighting with mom")

// // function cal (num1 , num2, operator){
// //     let result;
// //     switch(operator){
// //         case "+": result=num1+num2;break;
// //         case "-": result=num1-num2;break;
// //         case "*": result=num1*num2;break;
// //         case "/": result=num1/num2;break;
// //     }
// //     return result;
// //    }
// //    console.log(cal(1,4,"/"))
   
// //normal function 
// function sum1(a,b){
//     return a+b
// }
// console.log(sum1(3,4))

// //Function expressions es5(anonymous function)
// let sum = function(a,b){
//     return a+b
// }
// console.log(sum(3,4))

// // arrow function 
// //with single parameter
// let multi=(a)=>a*a
// console.log(multi(2))
// //with multi parameter
// let multi1=(a,b)=>a*b
// console.log(multi1(2,5))
// //with no parameter
// let multi2=()=>console.log("hello")
// multi2()
// // with retun vaule
// let multi3=(a,b)=>{return a*b}
// console.log(multi3(2,5))

// call function
function good(a){
 console.log("good")
 a()
}
function buy(){
    console.log("buy")
}
good(buy)