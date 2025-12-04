function bulb_on() {
    let bulb = document.getElementById("bulb");
    bulb.src = "on.png";
    bulb.classList.add("on");
}

function bulb_off() {
    let bulb = document.getElementById("bulb");
    bulb.src = "off.png";
    bulb.classList.remove("on");
}