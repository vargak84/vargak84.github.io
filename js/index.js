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

function general() {

    digitOne.value = 0;
    digitTwo.value = 0;
    digitThree.value = 0;
    digitFour.value = 0;
    digitFive.value = 0;
    digitSix.value = 0;
    digitSeven.value = 0;
    digitEight.value = 0;
    digitNine.value = 0;
    digitTen.value = 0;

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