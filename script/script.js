//when the about button is clicked opne a modal and close it when the x button is clicked
let modal = document.getElementsByClassName("about-modal")[0];
let btn = document.getElementsByClassName("about")[0];
let close = document.getElementById("close");


btn.onclick = function() {
  modal.style.display = "flex";
}

close.onclick = function() {
  modal.style.display = "none";
}


//on the about-modal show tooltip when the mouse is hovering on svg icons
let python = document.getElementsByClassName("python")[0];





