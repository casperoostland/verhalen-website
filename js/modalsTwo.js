var popup = document.getElementById("addStoryPopup");

add.onclick = function() {
  modal.style.display = "none";
  popup.classList.add("show");
  setTimeout(function() {
    popup.classList.remove("show");
  }, 2500);
};