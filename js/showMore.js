var showButton = document.getElementById("moreBtn");
var articles = document.getElementsByClassName("more");

showButton.onclick = function(event) {
  event.preventDefault(); // voorkom dat de pagina eerst omhoog gaat als op de knop (a) wordt gedrukt, voorkom het standaard gedrag 
  for (var i = 0; i < articles.length; i++) {
    articles[i].classList.remove("hidden");
  }
  setTimeout(function() {
    // de scroll pas na 0.1 seconde starten omdat de pagina nog niet meteen door heeft dat hij hoger is geworden
    window.scrollTo(0, document.body.scrollHeight); // scroll naar onderste punt pagina
  }, 100);
};
