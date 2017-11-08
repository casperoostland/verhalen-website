function downloading(al) {  // Bron https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_progressbar_label_js
  var bar = document.getElementById('progressBar');
  var status = document.getElementById('status');
  status.innerHTML = al + "%"; // Al is nu nul
  bar.value = al;
  al++;
  var sim = setTimeout("downloading(" + al + ")", 1); // al plus 100% vult helemaal
  if (al == 100) {
    status.innerHTML = "100%";
    bar.value = 100;
    clearTimeout(sim);
    
  }
  var change = document.getElementById("download");
  if (change.innerHTML == "Download") {// als de knop op download staat verander naar Open File
   change.innerHTML = "Open File";
   }
}

