document.addEventListener("DOMContentLoaded", function() {

    const code = document.getElementById('code')
    const info = document.getElementById('codet')

    code.addEventListener('hover', e=> {
        e.preventDefault()
        info.style.visibility = "visible"
    })
})