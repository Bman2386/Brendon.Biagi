document.addEventListener("DOMContentLoaded", function() {

    const code = document.getElementById('code')
    const code2 = document.getElementById('code2')
    const info = document.getElementById('codet')

    code.addEventListener('hover', e=> {
        e.preventDefault()
        info.style.visibility = "visible"
    })

    code2.addEventListener('hover', e=> {
        e.preventDefault()
        info.style.visibility = "visible"
    })
})