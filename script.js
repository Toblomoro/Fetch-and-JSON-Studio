window.addEventListener("load", function() {
   console.log('window loaded');
   fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
     response.json().then( function(json) {
       const conatiner = document.getElementById("container")
       function name(a){
       let name = (`Name: ${json[a].firstName} ${json[a].lastName}`)
               return(name)}
               console.log(name(1))
               
               container.addEventListener("load", function name(a){
       let name = (`Name: ${json[a].firstName} ${json[a].lastName}`)
               return(name)});
               for (let i = 0; i < json.length; i++) {
 
                 console.log(json[i]);
               
            container.innerHTML = `
         <div class="astronaut">
            <h3 >Name: ${json[0].firstName} ${json[0].lastName}</h3>
            <ul>
             <li> Hours in space: ${json[0].hoursInSpace}</li>
             <li> Active: ${json[0].active}</li>
             <li> Skills: ${json[0].skills}</li>
             </ul>
             <img class="avatar" src=${json[0].picture} ></img>
         </div>
         <div class="astronaut">
            <h3>Name: ${json[1].firstName} ${json[1].lastName}</h3>
            <ul>
             <li> Hours in space: ${json[1].hoursInSpace}</li>
             <li> Active: ${json[1].active}</li>
             <li> Skills: ${json[1].skills}</li>
             </ul>
             <img class="avatar" src=${json[1].picture} ></img>
         </div>
         <div class="astronaut">
            <h3>Name: ${json[2].firstName} ${json[2].lastName}</h3>
            <ul>
             <li> Hours in space: ${json[2].hoursInSpace}</li>
             <li> Active: ${json[2].active}</li>
             <li> Skills: ${json[2].skills}</li>
             </ul>
             <img class="avatar" src=${json[2].picture} ></img>
         </div>
         <div class="astronaut">
            <h3>Name: ${json[3].firstName} ${json[3].lastName}</h3>
            <ul>
             <li> Hours in space: ${json[3].hoursInSpace}</li>
             <li> Active: ${json[3].active}</li>
             <li> Skills: ${json[3].skills}</li>
             </ul>
             <img class="avatar" src=${json[3].picture} ></img>
         </div>
         <div class="astronaut">
            <h3>Name: ${json[4].firstName} ${json[4].lastName}</h3>
            <ul>
             <li> Hours in space: ${json[4].hoursInSpace}</li>
             <li> Active: ${json[4].active}</li>
             <li> Skills: ${json[4].skills}</li>
             </ul>
             <img class="avatar" src=${json[4].picture} ></img>
         </div>
         <div class="astronaut">
            <h3>Name: ${json[5].firstName} ${json[5].lastName}</h3>
            <ul>
             <li> Hours in space: ${json[5].hoursInSpace}</li>
             <li> Active: ${json[5].active}</li>
             <li> Skills: ${json[5].skills}</li>
             </ul>
             <img class="avatar" src=${json[5].picture} ></img>
         </div>
         <div class="astronaut">
            <h3>Name: ${json[6].firstName} ${json[6].lastName}</h3>
            <ul>
             <li> Hours in space: ${json[6].hoursInSpace}</li>
             <li> Active: ${json[6].active}</li>
             <li> Skills: ${json[6].skills}</li>
             </ul>
            <img class="avatar" src=${json[6].picture} ></img>
         </div>
          `;
               }
               })
       })
     })
           
      