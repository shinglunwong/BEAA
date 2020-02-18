
function closeNav() {
    console.log('close');
    document.getElementById("nav-menu").classList.toggle("display-none");
    document.getElementsByClassName("content-wrapper")[0].classList.toggle("full-width");
}