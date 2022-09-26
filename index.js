let homePoints = document.getElementById("home-points")
let homeCount = 0;
homePoints.textContent = homeCount;

let guestPoints = document.getElementById("guest-points")
let guestCount = 0;
guestPoints.textContent = guestCount;


function homeAdd1() {
    let add1 = homeCount += 1
    homePoints.textContent = add1
}

function homeAdd2() {
    let add2 = homeCount += 2;
    homePoints.textContent = add2;
}

function homeAdd3() {
    let add3 = homeCount += 3;
    homePoints.textContent = add3;
}

function guestAdd1() {
    let add1 = guestCount += 1
    guestPoints.textContent = add1
}

function guestAdd2() {
    let add2 = guestCount += 2;
    guestPoints.textContent = add2;
}

function guestAdd3() {
    let add3 = guestCount += 3;
    guestPoints.textContent = add3;
}

function newGame() {
    homeCount = 0;
    guestCount = 0;
    homePoints.textContent = homeCount;
    guestPoints.textContent = guestCount;
}