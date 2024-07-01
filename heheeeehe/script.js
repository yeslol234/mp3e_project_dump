var Models = 0;
var ModelsPerClick = 1;
var ModelsPerSecond = 0;
// Script 
var Scripts = 0;
var ScriptsPerClick = 1;
var ScriptsPerSecond = 0;
// Thinking    
var Ideas = 0;
var IdeasPerClick = 1;
var IdeasPerSecond = 0;
// Other
var Games = 0;
var DefaultGameIncrement = 1;
var requirements = 10;
// QUERY SELECTORS
var ModelButton = document.querySelector("#ModelButton")
var ScriptButton = document.querySelector("#ScriptButton")
var IdeaButton = document.querySelector("#IdeaButton")
var PublishGame = document.querySelector("#PublishGame")
window.onload=function(){ // checks if window is loaded (like Jquery's $(document).ready(function(){})
ModelButton.addEventListener("click",  () => {
  Models += ModelsPerClick;
  document.getElementById("TotalModels").innerText = Models;
})
ScriptButton.addEventListener("click", () => {
 Scripts += ScriptsPerClick;
 document.getElementById("TotalScripts").innerText = Scripts;
})
IdeaButton.addEventListener("click", () => {
 Ideas += IdeasPerClick;
 document.getElementById("TotalIdeas").innerText = Ideas;
})
PublishGame.addEventListener("click", () => {
   if (Models >= requirements && Scripts >= requirements && Ideas >= requirements) {
      Games += DefaultGameIncrement;
      console.log("Game Created.")
   } else {
       alert("You Don't Meet the Requirements!")
   }
})
}