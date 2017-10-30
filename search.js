var container = document.getElementById("searchContainer"); // buitenste container opzoeken
var searchBar = document.getElementById("searchBar"); // de bar opzoeken
var search = document.getElementById("search"); // de echte input opzoeken

container.onclick = function() {
  searchBar.classList.add("active");
  search.classList.add("active");
};

document.onclick = function(event) { // een onclick aan de hele pagina toevoegen
  if (!container.contains(event.target)) { // als event.target is het element waar op geklikt is. als dat niet een element binnen de container is maak de zoekbar dan niet meer ative
    searchBar.classList.remove("active");
    search.classList.remove("active");
  }
};
