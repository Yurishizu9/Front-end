var modal = document.getElementByClassName("about-modal");
var btn = document.getElementByClassName("about");
var close = document.getElementById("close");

btn.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}