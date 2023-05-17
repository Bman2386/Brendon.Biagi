window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  const element = ["top", "a1", "a2", "a3", "a4", "a5"];
  const className = ['top-s', 'nav-s', 'nav-s','nav-s','nav-s', 'nav-s'];
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    for (let i = 0; i < element.length; i++){
      document
      .getElementById(element[i])
      .classList.add(className[i]);
    }
  } else {
    for (let i = 0; i < element.length; i++){
      document
      .getElementById(element[i])
      .classList.remove(className[i]);
    }
  }
}