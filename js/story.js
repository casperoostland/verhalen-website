function downloading(al) {
  var bar = document.getElementById('progressBar');
  var status = document.getElementById('status');
  status.innerHTML = al + "%";
  bar.value = al;
  al++;
  var sim = setTimeout("downloading(" + al + ")", 1);
  if (al == 100) {
    status.innerHTML = "100%";
    bar.value = 100;
    clearTimeout(sim);
    
  }
  var change = document.getElementById("download");
  if (change.innerHTML == "Download") {
   change.innerHTML = "Open File";
   }
}

