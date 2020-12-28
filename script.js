let clicked = false;
function toggle() {
    if(!clicked) {
        clicked = true,
        document.getElementById("btn");
        document.getElementById("basicPrice").innerHTML = "199.99";
        document.getElementById("professionalPrice").innerHTML= "249.99";
        document.getElementById("masterPrice").innerHTML= "399.99";
    } else {
        clicked = false;
        document.getElementById("basicPrice").innerHTML = "19.99";
        document.getElementById("professionalPrice").innerHTML= "24.99";
        document.getElementById("masterPrice").innerHTML= "39.99"
    }
}



