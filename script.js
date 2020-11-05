// Write your JavaScript code here!

window.addEventListener("load", function() {
   fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
      response.json().then(function (json) {
         const destination = document.getElementById("missionTarget");
         let index = Math.floor(Math.random()*json.length);
         // destination.addEventListener("click", function(){
            destination.innerHTML = `
            </div>
            <h3>Planet ${json[index].name}</h3>
            <ol> 
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ol>
            <img src=${json[index].image} height=250></img>
            <div>
            `;
            index = (index + 1) % json.length;
         });
      })
   

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();

      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel");
      let cargoMass = document.querySelector("input[name=cargoMass");

      //let launchStatus = document.getElementById("launchStatus")
      let list = document.getElementById("faultyItems")
      let pilotStatus = document.getElementById("pilotStatus")
      let copilotStatus = document.getElementById("copilotStatus")
      let fuelStatus = document.getElementById("fuelStatus")
      let cargoStatus = document.getElementById("cargoStatus")

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
        
      } else if (!isNaN(pilotName.value)|| !isNaN(copilotName.value)|| isNaN(fuelLevel.value)|| isNaN(cargoMass.value)) {
         alert("Enter valid value!"); 
      } else {
         list.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch!`;
         copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch!`;
         let launchStatus = document.getElementById("launchStatus");
         if (fuelLevel.value < 10000 && cargoMass.value <= 10000) {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = `Fuel level ${fuelLevel.value} is too low for launch.`;
            cargoStatus.innerHTML = `Cargo Mass ${cargoMass.value} is low enough for launch.`
            launchStatus.innerHTML = "Shuttle not ready for Launch"
            launchStatus.style.color = "red"
         } else if (fuelLevel.value >= 10000 && cargoMass.value > 10000) {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = `Fuel level ${fuelLevel.value} is good for launch.`;
            cargoStatus.innerHTML = `Cargo Mass ${cargoMass.value} is too large for shuttle takeoff.`; 
            launchStatus.innerHTML = "Shuttle not ready for Launch"
            launchStatus.style.color = "red"
         } else if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = `Fuel level ${fuelLevel.value} is too low for launch.`;
            cargoStatus.innerHTML = `Cargo Mass ${cargoMass.value} is too large for shuttle takeoff.`; 
            launchStatus.innerHTML = "Shuttle not ready for Launch"
            launchStatus.style.color = "red"

         }else{
            fuelStatus.innerHTML = `Fuel level ${fuelLevel.value} is good for launch.`;
            cargoStatus.innerHTML = `Cargo Mass ${cargoMass.value} is low enough for launch.`;
            launchStatus.innerHTML = "Shuttle ready for Launch"
            launchStatus.style.color = "green"

         }
      
      };     
});
});






