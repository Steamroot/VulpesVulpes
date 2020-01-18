function openNav() {
    document.getElementById("mySidenav").style.width = "25vh";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.addEventListener("click", (event) => {
    const navbar = document.getElementById("mySidevav");
    let clickTarget = event.target;

    do {
        if (clickTarget === navbar) {
            return;
        } 
    } while (clickTarget);

});