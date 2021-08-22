//!1///////

// let button=document.getElementById("btn");
// let input=document.getElementById("in");
// let list=document.getElementById("uli");
// let liItem=document.getElementsByClassName("list");
// button.onclick= function(){
//  list.innerHTML+=`<li>${input.value}</li>` 
// }   
  
//!2///////

// document.write(
// `<button type="button" id="btn">Click</button>
// <input type="number" id="inI">
// <input type="number" id="inII">
// <p id="par"></p>
// `
// )
// let par=document.getElementById("par")
// let inputI=document.getElementById("inI");
// let inputII=document.getElementById("inII");
// let button=document.getElementById("btn");
// button.onclick=function getSumOfTwo(){
// par.innerHTML=Number(inputI.value)+Number(inputII.value);
// console.log(Number(inputI.value)+Number(inputII.value));

// }

//!3///////

// document.write(
// `<button type="button" id="btn">Click</button>`);
// let button=document.getElementById("btn");
// let body=document.getElementById("bo");

// button.onclick=function(){
//     body.style="background-color: red;";
// }


//!4///////

// document.write(
// `<button type="button" id="btn">Click</button>
// <p id="par"></p>`
// )
// let par=document.getElementById("par")
// let button=document.getElementById("btn");
// button.onclick=function(){
//     par.innerHTML=Math.floor(Math.random()*100)
// }

//!5///////


// let con=document.getElementById("con");
// const arr=[
//     {name:"apple",img:"https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261_960_720.jpg"},
//     {name:"milk",img:"https://cdn.pixabay.com/photo/2017/02/13/09/13/drops-of-milk-2062100_960_720.jpg"},
//     {name:"sugar",img:"https://cdn.pixabay.com/photo/2020/04/13/22/55/sugar-5040276_960_720.jpg"},
//     {name:"water",img:"https://cdn.pixabay.com/photo/2014/12/24/05/02/drop-of-water-578897_960_720.jpg"}
// ];
//     for (let i = 0; i < arr.length; i++) {
//         con.innerHTML+=` <h1>${arr[i].name}</h1>`;
//         con.innerHTML+=`<img src="${arr[i].img}" alt="">`;
//     }         


//!6///////

// document.write(
// `<button type="" id="btn">click</button>
//  <input type="number" id="in">       
// `)
// let button=document.getElementById("btn");
// let input=document.getElementById("in");
// let arr=[];
// button.onclick=function(){
// arr.push(input.value)
// console.log(arr);
// }

//!7///////

// document.write(
// `<p id="par">Text</p>      
// `)
// let par=document.getElementById("par");
// par.onclick=function(){
// par.innerHTML=new Date()
// }

//!8///////

// document.write(
// `<p id="par">Text</p>      
// `)
// let par=document.getElementById("par");
// par.onclick=function(){
// par.innerHTML=new Date().getHours();
// }

//!9///////

// document.write(
// `<div id="cDiv"> 
//     <button type="" id="btn">click</button>
//     <input type="number" id="in"> 
// </div>      
// `)
// let button=document.getElementById("btn");
// let input=document.getElementById("in");
// let div=document.getElementById("cDiv");
// let year= new Date().getFullYear();
// button.onclick=function(){
//     div.innerHTML+=`<p>${ year - input.value }</p>`
// }


//!10///////

// document.write(
// `<div id="cDiv"> 
//     <button type="" id="btn">click</button>
//     <input type="number" id="in"> 
// </div>      
// `)
// let button=document.getElementById("btn");
// let input=document.getElementById("in");
// let div=document.getElementById("cDiv");
// let arr=[20,5,9,6,34,1]
// button.onclick= function(){
//     for (let i = 0; i < arr.length; i++) {
//         if(input.value==arr[i]){
//           return div.innerHTML+=`<p>${input.value} is in the array</p>`
//        }
       
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if(input.value!=arr[i]){
//           return div.innerHTML+=`<p>${input.value} is not in the array</p>`
//        }
       
//     }
    
       
// }        
    

//!11///////

// document.write(
// `<div id="cDiv"> 
//     <button type="" id="btn">click</button>
//     <input type="text" id="in"> 
// </div>      
// `)
// let button=document.getElementById("btn");
// let input=document.getElementById("in");
// let div=document.getElementById("cDiv");
// button.onclick= function(){
//      div.innerHTML+=`<p> ${input.value.substring(0,input.value.indexOf(" "))}</p>`
//      div.innerHTML+=`<p> ${input.value.substring(input.value.indexOf(" "))}</p>`
    
       
// }

//!12///////

// document.write(
// `<div id="cDiv"> 
//     <button type="" id="btn">click</button>
//     <input type="text" id="inI"> 
//     <input type="text" id="inII"> 
// </div>      
// `)
// let button=document.getElementById("btn");
// let inputI=document.getElementById("inI");
// let inputII=document.getElementById("inII");
// let div=document.getElementById("cDiv");
// button.onclick= function(){
//    if(inputI.value.length>inputII.value.length){
//     div.innerHTML+=`<p> ${inputI.value} is longer then ${inputII.value} </p>`  
//    } 
//    if(inputII.value.length>inputI.value.length){
//     div.innerHTML+=`<p> ${inputII.value} is longer then ${inputI.value} </p>`  
//    }
       
// }


//!13///////

// document.write(`
// <div id="cDiv"> 
// <form >
//  <label for="fname">First Name</label>
//  <input type="text" id="fname" name="firstname" placeholder="Your name..">
//  <label for="email"><b>Email</b></label>
//  <input type="text" placeholder="Enter Email" name="email" id="email">
//  <label for="age">Enter your age: </label>  
//  <input type="number" name="num" min="50" max="80" id="age">  
//  <input type="button" value="Submit" id="submit">
//  </form>
//  </div> 
// `)
// let fname=document.getElementById("fname");
// let email=document.getElementById("email");
// let ageI=document.getElementById("age");
// let submit=document.getElementById("submit");
// let div=document.getElementById("cDiv");
// const arrClients=[]
// submit.onclick=function(){
//     arrClients.push({name:fname.value,mail:email.value,age:ageI.value})
//     console.log(arrClients);
//     div.innerHTML+=`<p> {name:"${fname.value}", mail:"${email.value}", age:"${ageI.value}"} </p>`
// }

