let modal = document.getElementsByClassName("about-modal")[0];
let btn = document.getElementsByClassName("about")[0];
let close = document.getElementById("close");


btn.onclick = function() {
  modal.style.display = "flex";
}

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

