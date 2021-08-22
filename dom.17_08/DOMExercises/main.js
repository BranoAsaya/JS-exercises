//!1//////

// const btnI=document.getElementById("btnI")
// btnI.addEventListener("click" ,function(){
//     btnI.innerText= "click on me";

// })

//!2//////

// const iBtnI=document.getElementById("iBtnI");
// iBtnI.addEventListener("click" ,function(){
//     alert("this is button 1")
// })
// const iBtnII=document.getElementById("iBtnII");
// iBtnII.addEventListener("click" ,function(){
//     alert("this is button 2")
// })
// const iBtnIII=document.getElementById("iBtnIII");
// iBtnIII.addEventListener("click" ,function(){
//     alert("this is button 3")
// })
// const iBtnIV=document.getElementById("iBtnIV");
// iBtnIV.addEventListener("click" ,function(){
//     alert("this is button 4")
// })

//!3//////

// // const list=document.getElementsByClassName("listI");
// // const Btn=document.getElementById("iBtn");
// // Btn.addEventListener("click" ,function(){
// //     for(i=0;i<list.length;i++){
// //         console.log(list[i].innerText);
// //     }
// // })

// const list=document.getElementsByClassName("listI");
//     for(let i=0;i<list.length;i++){
//         list[i].addEventListener("click" ,function(){

//         console.log(list[i].innerText);
//         })
//     }

//!4//////

// const btnP=document.getElementById("btnP")
// const par=document.getElementById("parNum")
// let num=0;
// btnP.addEventListener("click" ,function(){
//    num++
//    par.innerText=`text input ${num}`
// })

//!5//////

// const btnPi=document.getElementById("btnPi")
// const parN=document.getElementById("parN")
// const btnPii=document.getElementById("btnPii")
// let num=0;
// btnPi.addEventListener("click" ,function(){
//    num++
//    parN.innerText=`text input ${num}`
// })
// btnPii.addEventListener("click" ,function(){
//     num--
//     parN.innerText=`text input ${num}`
//  })

//!6//////3.Blocked clients

// const consumers = [
// {id:3,name:"b",phone:0550052505,email:"a@a",balance:450,block:true},
// {id:8,name:"a",phone:0550052505,email:"a@v",balance:1000000,block:true},
// {id:4,name:"s",phone:0550052505,email:"a@k",balance:120,block:true},
// {id:9,name:"f",phone:0550052505,email:"a@u",balance:50,block:true}
// ]

// function getClientsWithOver(){
//     for(let i=0;i<consumers.length;i++){
//      if(consumers[i].balance>400){
//          console.log(consumers[i].id);
//      }
//    }
//  }   
// getClientsWithOver();

// function getClientsWithLass(){
//     for(let i=0;i<consumers.length;i++){
//      if(consumers[i].balance<200){
//          console.log(consumers[i].id);
//      }
//    }
//  }   
//  getClientsWithLass();

//  function getClientsWithMill(){
//     for(let i=0;i<consumers.length;i++){
//      if(consumers[i].balance>=1000000){
//          console.log(consumers[i].id);
//      }
//    }
//  }   
//  getClientsWithMill();





//!7//////
//!7..a///////////

// const products = [
//   { name: "milk", price: 30, Description: "milk" },
//   { name: "eggs", price: 500, Description: "eggs" },
//   { name: "bread", price: 500, Description: "bread" },
// ];
// let Expensive = products[0].price;
// for (i = 0; i < products.length; i++) {
//   if (products[i].price > Expensive) {
//     Expensive = products[i].name;
//   }

// }
// console.log(Expensive);

//!7..b///////////

// let cheap = products[0].price;
// for (i = 0; i < products.length; i++) {
//   if (products[i].price < cheap) {
//     cheap = products[i].name;
//   }

// }
// console.log(cheap);

//!7..c///////////

// for (i = 0; i < products.length; i++){
//   products[i].price =(products[i].price * 0.70)
// }   
// console.log(products);  





