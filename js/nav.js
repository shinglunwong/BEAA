
function closeNav() {
    console.log('close');
    document.getElementById("nav-menu").classList.toggle("display-none");
    document.getElementsByClassName("content-wrapper")[0].classList.toggle("full-width");
}
function realCloseNav() {
    console.log('close');
    document.getElementById("nav-menu").classList.add("display-none");
    document.getElementsByClassName("content-wrapper")[0].classList.toggle("full-width");
}
function linkCloseNav() {
    console.log('close');
    if (window.innerWidth < 1000) {
        document.getElementById("nav-menu").classList.toggle("display-none");
        document.getElementsByClassName("content-wrapper")[0].classList.toggle("full-width");
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
        document.getElementById("nav-menu").classList.remove("display-none");
    }
});
