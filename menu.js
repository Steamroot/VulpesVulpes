function openNav() {
    document.getElementById("mySidenav").style.width = "30vh";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

window.addEventListener('mouseup', (event) => {
    let menu = document.getElementById('mySidenav');

    if (event.target != menu && event.target.parentNode != menu) {
        document.getElementById("mySidenav").style.width = "0";
    }

});