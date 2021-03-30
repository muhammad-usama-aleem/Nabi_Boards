var main_page = document.getElementById("main_page");
var cart_page = document.getElementById("cart_page");
var tracking_page = document.getElementById("tracking_page");
var contact_page = document.getElementById("contact_page");

function store() {
    main_page.style.display = "block";
    cart_page.style.display = "none";
    tracking_page.style.display = "none";
    contact_page.style.display = "none";
}
function cart(){
    main_page.style.display = "none";
    cart_page.style.display = "block";
    tracking_page.style.display = "none";
    contact_page.style.display = "none";
}
function track(){
    main_page.style.display = "none";
    cart_page.style.display = "none";
    tracking_page.style.display = "block";
    contact_page.style.display = "none";
}
function contact(){
    main_page.style.display = "none";
    cart_page.style.display = "none";
    tracking_page.style.display = "none";
    contact_page.style.display = "block";
}