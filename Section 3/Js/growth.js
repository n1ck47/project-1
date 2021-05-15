/*const button = document.getElementById("btn");

document.getElementById("emo-list").style = function() {
    document.getElementById("emo-list").style.display = "none";
}
*/

/*
var x = document.getElementById("emo-list");

function Show() {

    x.classList.toggle('hide');
} 

document.getElementById("btn").addEventListener('click',show);
*/


var x = document.getElementById("emo-hide");

function show() {
  if (x.style.display == "none")
  {
      x.style.dispaly = "block";
  }
  else  
  {
      x.style.display = "none";
  }
}

document.getElementById("btn").addEventListener('click',show);