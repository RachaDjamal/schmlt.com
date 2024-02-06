document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
M.AutoInit();

var el = document.getElementById('Subtitle');

el.innerHTML = "Test <span>Go</span>";