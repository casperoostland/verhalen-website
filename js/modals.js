// Get the modal
var modal = document.getElementById("playlistModal");

// Get the button that opens the modal
var btns = document.getElementsByClassName("addPlaylist");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var add = document.getElementById("addStory");

var popup = document.getElementById("addStoryPopup");

// When the user clicks the button, open the modal
for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    modal.style.display = "block";
  };
}

add.onclick = function() {
  modal.style.display = "none";
  popup.classList.add("show");
  setTimeout(function() {
    popup.classList.remove("show");
  }, 2500);
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
