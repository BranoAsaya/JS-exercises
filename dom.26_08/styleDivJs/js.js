
// let conI=document.getElementById("conI")
// let divI=document.getElementById("divI")
// let buttonI=document.getElementById("btnI")
// let conII=document.getElementById("conII")
// let divII=document.getElementById("divII")
// let buttonII=document.getElementById("btnII")

// divI.style="width: 200px; height: 200px;background-color: blue;position: absolute;top: 390px; left: 50px;";
// conI.style=" position: relative;box-sizing: border-box;"
// buttonI.onclick=(()=>{
//       divI.style.height=parseInt(divI.style.height)-10 +"px";
//     divI.style.width=parseInt(divI.style.width)-10 +"px"; 
//     divI.style.top=parseInt(divI.style.top)+50 +"px"; 
//     divI.style.left=parseInt(divI.style.left)+50 +"px"; 
    
// })


// let randomI=0;
// let randomII=0;
// let randomIII=0;
// let randomIV=0;



// divII.style="width: 200px; height: 200px;background-color: red;position: absolute; left: 0px;top:0px; ";
// conII.style=" position: relative;"

// let randomInterval=setInterval(()=>{
//     randomI=Math.floor(Math.random()*390)
//     randomII=Math.floor(Math.random()*1000)
  
//     divII.style.top=randomI +"px"; 
//     divII.style.left=randomII +"px"; 


//       },2000)
//       buttonII.onclick=(()=>{
//           clearInterval(randomInterval)
//       })

// const arrCountries=[
//     {name:"Brazil",flag:"https://www.worldometers.info/img/flags/small/tn_br-flag.gif"},
//     {name:"Algeria",flag:"https://www.worldometers.info/img/flags/small/tn_ag-flag.gif"},
//     {name:"Andorra",flag:"https://www.worldometers.info/img/flags/small/tn_an-flag.gif"},
//     {name:"Australia",flag:"https://www.worldometers.info/img/flags/small/tn_as-flag.gif"},
//     {name:"Bahamas",flag:"https://www.worldometers.info/img/flags/small/tn_bf-flag.gif"},
//     {name:"France",flag:"https://www.worldometers.info/img/flags/small/tn_fr-flag.gif"},
//     {name:"Greece",flag:"https://www.worldometers.info/img/flags/small/tn_gr-flag.gif"}
  
// ]
// let counter=0;
// document.getElementById("divV").innerHTML=(`<p>${counter}</p>`)
// let divV=document.getElementById("divV")
// let divVI=document.getElementById("divVI")


// let printFlag=setInterval(()=>{
//     for (let i = 0; i < arrCountries.length; i++) {
//         divVI.innerHTML+=`<img src="${arrCountries[i].flag}" >` 
//     } 
//     setTimeout(()=>{
//         divVI.innerHTML="";
//  },2900)
    
// },3000)        
       
       
       
      

//  divVI.onclick=((e)=>{
//     console.log(e.clientX);
//     console.log(e.clientY);

//  })

//  divVI.addEventListener("click",(e)=>{
     
//     e.target.remove();
//     counter++
//     divV.innerHTML=(`<p>${counter}</p>`)
//   });
   

  
//   for (let i = 0; i < arrCountries.length; i++) {
//     arrCountries[i].flag.style="position: absolute; left: 0px;top:0px;";
    
// let randomFlags=setInterval(()=>{
//     randomI=Math.floor(Math.random()*390)
//     randomII=Math.floor(Math.random()*1000)
  
//     divII.style.top=randomI +"px"; 
//     divII.style.left=randomII +"px"; 


//       },2000)
//       buttonII.onclick=(()=>{
//           clearInterval(randomInterval)
//       })
//   }
 
// let randomFlag=setInterval(()=>{
//         randomI=Math.floor(Math.random()*390)
//     randomII=Math.floor(Math.random()*1000)
  
   
//     for (let i = 0; i < arrCountries.length; i++) {
//         arrCountries[i].flag.style="position: absolute; left: 0px;top:0px;"
//         arrCountries[i].flag.style.top=randomI +"px"; 
//     arrCountries[i].flag.style.left=randomII +"px";   
//     } 

// },3000)        
       
       
       
    
 


