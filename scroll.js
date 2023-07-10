window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  const elementArray = ["top", "a1", "a2", "a3", "a4", "a5"];
  const classListArray = ['top-s', 'nav-s', 'nav-s','nav-s','nav-s', 'nav-s'];
  if (document.body.scrollTop > 50 || document.documentElementArray.scrollTop > 50) {
    for (let i = 0; i < elementArray.length; i++){
      document
      .getElementById(elementArray[i])
      .classList.add(classListArray[i]);
    }
  } else {
    for (let i = 0; i < elementArray.length; i++){
      document
      .getElementById(elementArray[i])
      .classList.remove(classListArray[i]);
    }
  }
}