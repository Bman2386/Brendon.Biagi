window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("top").classList.add('top-s');
    document.getElementById("a1").classList.add('nav-s');
    document.getElementById("a2").classList.add('nav-s');
    document.getElementById("a3").classList.add('nav-s');
    document.getElementById("a4").classList.add('nav-s');
  } else {
    document.getElementById("top").classList.remove('top-s');
    document.getElementById("a1").classList.remove('nav-s');
    document.getElementById("a2").classList.remove('nav-s');
    document.getElementById("a3").classList.remove('nav-s');
    document.getElementById("a4").classList.remove('nav-s');
  }
}