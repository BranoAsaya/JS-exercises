document.write(`
<div id="con" >
<div id="clock">

</div>
<div id="div">
  <input type="text" id="fname" placeholder="First name" >
  <input type="text" id="lname" placeholder="Family name" >
  <input type="number" id="year" placeholder="Year of Birth">
  <input type="number" id="id" placeholder="ID">
  <input type="text" id="country" placeholder="Country" >
    <button type="button" id="btn">Add patient</button>
  <button type="button"id="find">Search by Name</button>
  <button type="button"id="findId">Search by id</button>
</div>  
<div id="divII"></div>
<div id="divIII"></div>  
 

</div>
`)
const fName=document.getElementById("fname");
const lName=document.getElementById("lname");
const year=document.getElementById("year");
const id=document.getElementById("id");
const country=document.getElementById("country");
const button=document.getElementById("btn");
let div=document.getElementById("div");
let divII=document.getElementById("divII");
let divIII=document.getElementById("divIII");
let divIV=document.getElementById("clock");
let search=document.getElementById("find");
let findId=document.getElementById("findId");

let patient={}


button.onclick=()=>{
    `
    ${patient.fName=fName.value}
    ${patient.lName=lName.value}
    ${patient.year=year.value}
    ${patient.id=Number(id.value)}
    ${patient.country=country.value}
    `;
}

let time=new Date();

button.addEventListener("click" ,()=>{
    `
    ${patient.testDate=time.toDateString()}
    ${patient.testHour=time.toTimeString()}
   `;
}) 
const arrPatient=[
    {fName:"TI",lName:"RA",year:1999,id:123,country:"japan",testDate:"Wed Jul 13 2008" ,testHour:"02:01:07 GMT-0600 (PDT)"  },
    {fName:"LI",lName:"SA",year:2001,id:456,country:"china",testDate:"Wed Jul 28 1993" ,testHour:"23:00:05 GMT-0600 (PDT)" },
    {fName:"RI",lName:"TA",year:1985,id:789,country:"russia",testDate:"Wed Jul 09 2011" ,testHour:"14:39:07 GMT-0600 (PDT)" }
    ]  

button.addEventListener("click" ,()=>{
 for (let i = 0; i < arrPatient.length; i++) {
    if(id.value==arrPatient[i].id){
        alert("Existing patient");
        return;
    }
    
} 
   
arrPatient.push(patient)
for (let i = 3; i < arrPatient.length; i++) {
    div.innerHTML+=(`<p>${arrPatient[i].fName}${arrPatient[i].lName}${arrPatient[i].year} ${arrPatient[i].id} ${arrPatient[i].country}${arrPatient[i].testDate}${arrPatient[i].testHour}</p>`);}

divIII.innerHTML+=(`
<h2>Patient List</h2>
<table >
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Year of Birth</th>
    <th>ID</th>
    <th>country</th>
    <th>Test date</th>
    <th>Test time</th>
  </tr>
  <tr>
    <td>${arrPatient[0].fName}</td>
    <td>${arrPatient[0].lName}</td>
    <td>${arrPatient[0].year}</td>
    <td>${arrPatient[0].id}</td>
    <td>${arrPatient[0].country}</td>
    <td>${arrPatient[0].testDate}</td>
    <td>${arrPatient[0].testHour}</td>

 </tr>
  <tr>
  <td>${arrPatient[1].fName}</td>
    <td>${arrPatient[1].lName}</td>
    <td>${arrPatient[1].year}</td>
    <td>${arrPatient[1].id}</td>
    <td>${arrPatient[1].country}</td>
    <td>${arrPatient[1].testDate}</td>
    <td>${arrPatient[1].testHour}</td>

  </tr>
  <tr>
  <td>${arrPatient[2].fName}</td>
    <td>${arrPatient[2].lName}</td>
    <td>${arrPatient[2].year}</td>
    <td>${arrPatient[2].id}</td>
    <td>${arrPatient[2].country}</td>
    <td>${arrPatient[2].testDate}</td>
    <td>${arrPatient[2].testHour}</td>
  </tr>
  <tr>
  <td>${arrPatient[3].fName}</td>
    <td>${arrPatient[3].lName}</td>
    <td>${arrPatient[3].year}</td>
    <td>${arrPatient[3].id}</td>
    <td>${arrPatient[3].country}</td>
    <td>${arrPatient[3].testDate}</td>
    <td>${arrPatient[3].testHour}</td>
</tr>



</table>
`)

}) 

fName.oninput = function(){fName.value = fName.value.toLocaleUpperCase();};   
lName.oninput = function(){lName.value = lName.value.toLocaleUpperCase();};   
country.oninput = function(){country.value = country.value.toLocaleUpperCase();};   

 search.onclick=()=>{
 
for (let i = 0; i < arrPatient.length; i++) {
    
    if(fname.value == arrPatient[i].fName){
     divII.innerHTML+=(`
     <p>${arrPatient[i].fName}</p>
     <p>${arrPatient[i].lName}</p>
     <p>${arrPatient[i].year}</p>
     <p>${arrPatient[i].id}</p>
     <p>${arrPatient[i].country}</p>
     <p>${arrPatient[i].testDate}</p>
     <p>${arrPatient[i].testHour}</p>

     `)
     return;
     
    }
   
}    
for (let i = 0; i < arrPatient.length; i++) {
    
    if(fname.value != arrPatient[i].fName){
     divII.innerHTML+=(`
     <p>not in</p>


     `)
     return;
     
    }
   
}    
        
  
}
    



findId.onclick=()=>{
 
    for (let i = 0; i < arrPatient.length; i++) {
        
        if( id.value == arrPatient[i].id){
         divII.innerHTML+=(`
         <p>${arrPatient[i].fName}</p>
         <p>${arrPatient[i].lName}</p>
         <p>${arrPatient[i].year}</p>
         <p>${arrPatient[i].id}</p>
         <p>${arrPatient[i].country}</p>
         <p>${arrPatient[i].testDate}</p>
         <p>${arrPatient[i].testHour}</p>
    
         `)
         return;
         
        }
       
    }    
    for (let i = 0; i < arrPatient.length; i++) {
        
        if(id.value != arrPatient[i].id){
         divII.innerHTML+=(`
         <p>not in</p>
    
    
         `)
         return;
         
        }
       
    }    
            
    
    }  
 
    
    let clock = document.getElementById("clock");

    setInterval(function(){
        let date = new Date();
        clock.innerHTML = date.toLocaleTimeString();
    }, 1000)


        

        
           
        
        
    
        
     
        

    
 
    


  






