const elementArray = ["top", "a1", "a2", "a3", "a4", "a5"]
const classListArray = ['top-s', 'nav-s', 'nav-s','nav-s','nav-s', 'nav-s']

window.onscroll = function() {scrollFunction()}
window.onload = function(){onClickHandle()}

const onClickHandle=() => {
    for (let i = 1; i < elementArray.length; i++){
     document
      .getElementById(elementArray[i])
      .addEventListener("click", goToTag)
  }
}

const scrollFunction= () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    for (let i = 0; i < elementArray.length; i++){
      document
      .getElementById(elementArray[i])
      .classList.add(classListArray[i])
    }
  } else {
    for (let i = 0; i < elementArray.length; i++){
      document
      .getElementById(elementArray[i])
      .classList.remove(classListArray[i])
    }
  }
}


const goToTag = (e) => {
  e.preventDefault()
  if (e.target.value) location.href=e.target.value
}