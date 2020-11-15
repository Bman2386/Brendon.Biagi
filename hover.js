document.addEventListener("DOMContentLoaded", function() {

    const code = document.getElementById('code');
    const info = document.getElementById('codet');

    code.addEventListener('mouseover', e=> {
        e.preventDefault();
        // debugger
        info.style.display = "block";
    })

    code.addEventListener('mouseout', e=> {
        e.preventDefault();
        // debugger
        info.style.display = "hidden";
    })
})