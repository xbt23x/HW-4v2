document.getElementById("secondScreen").style.display = "none"



values = [];
//add elements into the array

let inp = document.getElementById('inputtext');

function addRecord() {
  
  values.push(inp.value);
  inp.value = "";  
}
//display values to user
function displayRecord() {
  document.getElementById("values").innerHTML = values.join("<ul></ul> ");
  document.getElementById("secondScreen").style.display = "block"
  document.getElementById("userInput").style.display = "none"
}
//Prompt user to enter words
function userPrompt() {
  alert('Please enter three words to be swapped.(One word at a time.)');
  
}
window.onload = userPrompt;


 inp.values = [x];
let values2 = inp.map(x=> swap(x));

function swap(){


  
  
}