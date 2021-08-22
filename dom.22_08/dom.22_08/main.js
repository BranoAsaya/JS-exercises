//!1////////

// const arrTasks=[
//     {task:"buy",isCompleted:true},
//     {task:"sell",isCompleted:false},
//     {task:"write",isCompleted:true},
//     {task:"run",isCompleted:false},
//     {task:"sleep",isCompleted:true}

// ]

//!a//////////

// document.write(`<div id="div"><p id="par"></p></div>`);
// let par=document.getElementById("par");
// let div=document.getElementById("div");
// for (let i = 0; i < arrTasks.length; i++) {
//     div.innerHTML+=(`${arrTasks[i].task}  ${arrTasks[i].isCompleted}`);
    
// }

//!b//////////


// document.write(`
// <div id="div">
// <button type="button" id="btn">Click</button>
// <input type="text" id="in">
// </div>
// `);

// let button=document.getElementById("btn");
// let input=document.getElementById("in");
// let div=document.getElementById("div");
// const task=[];

// button.onclick=function(){
//    task.push({task:input.value,isCompleted:false})
//    console.log(task);
// }


//!c//////////


// document.write(`
// <div id="div">
// <button type="button" id="btn">Click</button>
// <input type="text" id="in">
// </div>
// `);

// let button=document.getElementById("btn");
// let input=document.getElementById("in");
// let div=document.getElementById("div");
// const task=[];

// button.onclick=function(){
//    task.push({task:input.value,isCompleted:false})  
// console.log(task);

   
// }


//!d//////////


// document.write(`
// <div id="div">
// <button type="button" id="btn">Click</button>
// <input type="text" id="in">
// </div>
// `);

// let button=document.getElementById("btn");
// let input=document.getElementById("in");
// let div=document.getElementById("div");
// const task=[];

// button.onclick=function(){
//    task.push({task:input.value,isCompleted:false})
// for (let i = 0; i < task.length; i++) {
//        div.innerHTML+=(`${task[i].task}  ${task[i].isCompleted}`);
// }    
// console.log(task);

   
// }



//!e//////////



// for (let i = 0; i < arrTasks.length; i++) {
//     let random=Math.floor(Math.random()*2000 +1)
//     arrTasks[i].ID=random;
// }   
// console.log(arrTasks);    

    
//!f//////////

// document.write(`<div id="div"></div>`);
// let div=document.getElementById("div");
// for (let i = 0; i < arrTasks.length; i++) {
//     div.innerHTML+=(`<p class="pa">${arrTasks[i].task}  ${arrTasks[i].isCompleted}</p>`);
//     let p=document.getElementsByClassName("pa");
//     if(arrTasks[i].isCompleted){
//         p[i].style="background-color: red;";

//     }
  
// }  


//!2//////////
//!a//////////

// const arrMovies=[
//     {movie:"Django Unchained", photo:"https://cdn.pixabay.com/photo/2021/08/06/18/46/dog-6526980_960_720.jpg"},
//     {movie:"Fatherhood", photo:"https://images.unsplash.com/photo-1627402416790-6d56a206e9f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=349&q=80"},
//     {movie:"Jolt", photo:"https://images.unsplash.com/photo-1627001678108-5039fd094cea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},
//     arrActors=["Jamie Foxx","Kevin Hart","kate beckinsale"]
// ]
// document.write(`<div id="div"></div>`);
// let div=document.getElementById("div");


// for (let i = 0; i < arrMovies.length; i++) {
//     div.innerHTML+=(`<p id="par">${arrMovies[i].movie}<img src="${arrMovies[i].photo}" alt="" id="pic"> ${arrActors}</p>`)
    
// }
// console.log(arrMovies);


//!3//////////

// document.write(`
// <div id="div">
// <button type="button" id="btn">Click</button>
// <input type="text" id="in">
// </div>
// `);
// let button=document.getElementById("btn");
// let inputI=document.getElementById("in");
// let div=document.getElementById("div");


// button.onclick=function(){
// div.innerHTML+=inputI.value;
// }






//!4//////////


// document.write(`
// <div id="div">
// <button type="button" id="btn">Click</button>
// <input type="text" id="inI">
// <input type="text" id="inII">
// </div>
// `);

// let button=document.getElementById("btn");
// let inputI=document.getElementById("inI");
// let inputII=document.getElementById("inII");
// let div=document.getElementById("div");
// const arr=[];

// button.onclick=function(){
// arr.push({inI:inputI.value,inII:inputII.value})
// for (let i = 0; i < arr.length; i++) {
//     div.innerHTML+=(`<p id="par">${arr[i].inI} ${arr[i].inII}</p>`)
// }    
// console.log(arr);
// }


//!5//////////a////b


// document.write(`
// <div id="div">
// <form>
//   <label for="fname">First name:</label>
//   <input type="text" id="fname" name="fname"><br><br>
//   <label for="email">Enter your email:</label>
//   <input type="email" id="email"
//   <label for="age">age:</label>
//   <input type="number" id="age" name="age"
//        min="10" max="100">
//   <input type="button" value="Submit" id="Sub">
// </form>
// </div>
// `)

// let inputI=document.getElementById("fname");
// let inputII=document.getElementById("email");
// let inputIII=document.getElementById("age");
// let submit=document.getElementById("Sub");
// let div=document.getElementById("div");

// const arr=[];

// submit.onclick=function(){
// arr.push({fname:inputI.value,email:inputII.value,age:inputIII.value})
//   for (let i = 0; i < arr.length; i++) {
//     div.innerHTML+=(`<p>${arr[i].fname}${arr[i].email}${arr[i].age}</p>`)
// } 
// console.log(arr);
// }


//!6//////////////


// document.write(`
// <div id="div">
// <button type="button" id="btn">Click</button>
// <input type="text" id="inI">
// <input type="text" id="inII">
// </div>
// `);

// let button=document.getElementById("btn");
// let inputI=document.getElementById("inI");
// let inputII=document.getElementById("inII");
// let div=document.getElementById("div");

// button.onclick=function(){
//   let person={fname:inputI.value,lname:inputII.value}
// console.log(person);

// }

//!7//////////////


// document.write(`
// <div id="div">
// </div>
// `);
// let div=document.getElementById("div");

 
// for (let i = 0; i < 10; i++) {
//   div.innerHTML+=(`<p>${i}</p>`)
  
  
// }

//!8//////////////

// document.write(`
// <div id="div">
// <button type="button" id="btn">Click</button>
// <input type="text" id="in">
// </div>
// `);
// let button=document.getElementById("btn");
// let input=document.getElementById("in");
// let div=document.getElementById("div");

// let arrEmail=["a@mail.com","b@mail.com","c@mail.com"]
// button.onclick=function(){
//   for (let i = 0; i < arrEmail.length; i++) {
//       if(arrEmail[i]==input.value) {
//         div.innerHTML+=(`<p>mail in array</p>`)
//       }   
//   }
// }

//!9//////////////

// document.write(`
// <div id="div">
// <button type="button" id="btn">Click</button>
// <input type="text" id="in">
// <p id="par"></p>
// </div>
// `);
// let button=document.getElementById("btn");
// let input=document.getElementById("in");
// let div=document.getElementById("div");
// let p=document.getElementById("par");

// button.onclick=function(){
//   p.innerText+=input.value.length;
//   console.log(p);
 
  
// }

//!10//////////////


// document.write(`
// <div id="div">
// <form>
//   <label for="fname">First name:</label>
//   <input type="text" id="fname" name="fname"><br><br>
//   <label for="country">country:</label>
//   <input type="text" id="country" name="country"><br><br>
//   <label for="flag">flag:</label>
//   <input type="text" id="flag" name="flag"><br><br>
//   <label for="age">age:</label>
//   <input type="number" id="age" name="age"
//        min="10" max="100">
//   <input type="button" value="Submit" id="Sub">
// </form>
// </div>
// `)

// let inputI=document.getElementById("fname");
// let inputII=document.getElementById("country");
// let inputIII=document.getElementById("flag");
// let inputIV=document.getElementById("age");
// let submit=document.getElementById("Sub");
// let div=document.getElementById("div");

// submit.onclick=function(){
//   let person={fname:inputI.value,country:inputII.value,flag:inputIII.value,age:inputIV.value,}
//   div.innerHTML+=(`<p>${person.fname}${person.country} <img src="${person.flag}" alt="flag" ${person.age}></p>`)
//   console.log(person);
// }




