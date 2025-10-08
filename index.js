const homeCounterEl = document.getElementById("home-count");
const guestCounterEl = document.getElementById("guest-count");

const homePlus1Btn = document.getElementById("home+1");
const homePlus2Btn = document.getElementById("home+2");
const homePlus3Btn = document.getElementById("home+3");

const guestPlus1Btn = document.getElementById("guest+1");
const guestPlus2Btn = document.getElementById("guest+2");
const guestPlus3Btn = document.getElementById("guest+3");

const newGameBtn = document.getElementById("new-game");

let homeCounter = 0;
let guestCounter = 0;

homeCounterEl.textContent = homeCounter;
guestCounterEl.textContent = guestCounter;

function incrementHomeBy1() {
    homeCounter++;
    homeCounterEl.textContent = homeCounter;
    highlightLeader();
}
function incrementHomeBy2() {
    homeCounter += 2;
    homeCounterEl.textContent = homeCounter;
    highlightLeader();
}
function incrementHomeBy3() {
    homeCounter += 3;
    homeCounterEl.textContent = homeCounter;
    highlightLeader();
}

function incrementGuestBy1() {
    guestCounter++;
    guestCounterEl.textContent = guestCounter;
    highlightLeader();
}
function incrementGuestBy2() {
    guestCounter += 2;
    guestCounterEl.textContent = guestCounter;
    highlightLeader();
}
function incrementGuestBy3() {
    guestCounter += 3;
    guestCounterEl.textContent = guestCounter;
    highlightLeader();
}

function newGame() {
    homeCounter = 0;
    homeCounterEl.textContent = homeCounter;
    guestCounter = 0;
    guestCounterEl.textContent = guestCounter;
    highlightLeader();
}

function highlightLeader() {
    if (homeCounter > guestCounter) {
        homeCounterEl.classList.add("leader");
        guestCounterEl.classList.remove("leader");
        console.log(homeCounterEl);
        console.log(guestCounterEl);
    } else if (homeCounter < guestCounter) {
        guestCounterEl.classList.add("leader");
        homeCounterEl.classList.remove("leader");
        console.log(homeCounterEl);
        console.log(guestCounterEl);
    } else {
        homeCounterEl.classList.remove("leader");
        guestCounterEl.classList.remove("leader");
        console.log(homeCounterEl);
        console.log(guestCounterEl);
    }
}
