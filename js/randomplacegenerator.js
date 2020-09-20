let digitOne = document.querySelector("#digitOne");
let digitTwo = document.querySelector("#digitTwo");
let digitThree = document.querySelector("#digitThree");
let digitFour = document.querySelector("#digitFour");
let digitFive = document.querySelector("#digitFive");
let digitSix = document.querySelector("#digitSix");
let digitSeven = document.querySelector("#digitSeven");
let digitEight = document.querySelector("#digitEight");
let digitNine = document.querySelector("#digitNine");
let digitTen = document.querySelector("#digitTen");
let digitAll = document.querySelectorAll(".digit");

function generate() {

    for (let i = 0; i < digitAll.length; i++) {
        digitAll[i].value = 0;
    };

    minszam = 0;
    maxszam = 9;
    let randomNumber = minszam + Math.floor(Math.random() * (maxszam - minszam + 1));

    if (randomNumber == 0) {
        digitOne.value = 1;
    } else
        if (randomNumber == 1) {
            digitTwo.value = 1;
        } else
            if (randomNumber == 2) {
                digitThree.value = 1;
            } else
                if (randomNumber == 3) {
                    digitFour.value = 1;
                } else
                    if (randomNumber == 4) {
                        digitFive.value = 1;
                    } else
                        if (randomNumber == 5) {
                            digitSix.value = 1;
                        } else
                            if (randomNumber == 6) {
                                digitSeven.value = 1;
                            } else
                                if (randomNumber == 7) {
                                    digitEight.value = 1;
                                } else
                                    if (randomNumber == 8) {
                                        digitNine.value = 1;
                                    } else
                                        if (randomNumber == 9) {
                                            digitTen.value = 1;
                                        }
};

let bodyTorzs = document.querySelector(".bodyTorzs");

if (window.innerWidth < 750) {
    bodyTorzs.style.width = "70%"
}