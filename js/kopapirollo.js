//Véletlenszám generátor
//minszam = 0;
//maxszam = 4;
//let veletlenszam = minszam + Math.floor( Math.random() * ( maxszam - minszam + 1 ) );
//console.log(veletlenszam);

let eredmeny = document.querySelector("small[id='eredmeny']");
let szam1 = 0;
let szam2 = 0;
let jatekosEredmeny = document.querySelector("small[id='jatekosEredmeny']");
jatekosEredmeny.innerHTML = szam1;
let gepEredmeny = document.querySelector("small[id = 'gepEredmeny']");
gepEredmeny.innerHTML = szam2;

//Szabályok
function szabalyok() {
    alert("Agymenők kő-papír-olló szabályai:\n\nAz olló elvágja a papírt.\nA papír bevonja a követ.\nA kő agyonüti a gyíkot.\nA gyík megmarja Spockot.\nSpock eltöri az ollót.\nAz olló lefejezi a gyíkot.\nA gyík megeszi a papírt.\nA papír cáfolja Spockot.\nSpock feloldja a követ.\nÉs mint általában, a kő eltöri az ollót.\n\nA játék 10 nyertes kézig megy!");
}

//Játék gomb
function koValaszt() {
    document.jatekosKep.src = document.vkokep.src;
    veletlenKep();
    kiNyer()
}

function papirValaszt() {
    document.jatekosKep.src = document.vpapirkep.src;
    veletlenKep()
    kiNyer()
}

function olloValaszt() {
    document.jatekosKep.src = document.vollokep.src;
    veletlenKep()
    kiNyer()
}

function gyikValaszt() {
    document.jatekosKep.src = document.vgyikkep.src;
    veletlenKep()
    kiNyer()
}

function spockValaszt() {
    document.jatekosKep.src = document.vspockkep.src;
    veletlenKep()
    kiNyer()
}

//Véletlenkép generátor
function veletlenKep() {
    let kep = new Array()
    kep[1]="img/kopapirollo/ko.jpg"
    kep[2]="img/kopapirollo/papir.jpg"
    kep[3]="img/kopapirollo/ollo.jpg"
    kep[4]="img/kopapirollo/gyik.jpg"
    kep[5]="img/kopapirollo/spock.jpg"
    
    let ry=Math.floor(Math.random()*kep.length)
    if (ry==0) 
    ry=1
    document.gepKep.src = kep[ry]
    }

function kiNyer() {
    if (document.jatekosKep.src == document.gepKep.src) {
        eredmeny.innerHTML = "Döntetlen"
        } else if
            (document.jatekosKep.src.indexOf("/img/kopapirollo/ollo.jpg") >= 0 && document.gepKep.src.indexOf("/img/kopapirollo/papir.jpg") >= 0) {
            eredmeny.innerHTML = "Ön nyert!"
            szam1 += 1
            jatekosEredmeny.innerHTML = szam1
        } else if
            (document.jatekosKep.src.indexOf("/img/kopapirollo/papir.jpg") >= 0 && document.gepKep.src.indexOf("/img/kopapirollo/ko.jpg") >= 0) {
            eredmeny.innerHTML = "Ön nyert!"
            szam1 += 1
            jatekosEredmeny.innerHTML = szam1
        } else if
            (document.jatekosKep.src.indexOf("/img/kopapirollo/ko.jpg") >= 0 && document.gepKep.src.indexOf("/img/kopapirollo/gyik.jpg") >= 0) {
            eredmeny.innerHTML = "Ön nyert!"
            szam1 += 1
            jatekosEredmeny.innerHTML = szam1
        } else if
            (document.jatekosKep.src.indexOf("/img/kopapirollo/gyik.jpg") >= 0 && document.gepKep.src.indexOf("/img/kopapirollo/spock.jpg") >= 0) {
            eredmeny.innerHTML = "Ön nyert!"
            szam1 += 1
            jatekosEredmeny.innerHTML = szam1
        } else if
            (document.jatekosKep.src.indexOf("/img/kopapirollo/spock.jpg") >= 0 && document.gepKep.src.indexOf("/img/kopapirollo/ollo.jpg") >= 0) {
            eredmeny.innerHTML = "Ön nyert!"
            szam1 += 1
            jatekosEredmeny.innerHTML = szam1
        } else if
            (document.jatekosKep.src.indexOf("/img/kopapirollo/ollo.jpg") >= 0 && document.gepKep.src.indexOf("/img/kopapirollo/gyik.jpg") >= 0) {
            eredmeny.innerHTML = "Ön nyert!"
            szam1 += 1
            jatekosEredmeny.innerHTML = szam1
        } else if
            (document.jatekosKep.src.indexOf("/img/kopapirollo/gyik.jpg") >= 0 && document.gepKep.src.indexOf("/img/kopapirollo/papir.jpg") >= 0) {
            eredmeny.innerHTML = "Ön nyert!"
            szam1 += 1
            jatekosEredmeny.innerHTML = szam1
        } else if
            (document.jatekosKep.src.indexOf("/img/kopapirollo/papir.jpg") >= 0 && document.gepKep.src.indexOf("/img/kopapirollo/spock.jpg") >= 0) {
            eredmeny.innerHTML = "Ön nyert!"
            szam1 += 1
            jatekosEredmeny.innerHTML = szam1
        } else if
            (document.jatekosKep.src.indexOf("/img/kopapirollo/spock.jpg") >= 0 && document.gepKep.src.indexOf("/img/kopapirollo/ko.jpg") >= 0) {
            eredmeny.innerHTML = "Ön nyert!"
            szam1 += 1
            jatekosEredmeny.innerHTML = szam1
        } else if
            (document.jatekosKep.src.indexOf("/img/kopapirollo/ko.jpg") >= 0 && document.gepKep.src.indexOf("/img/kopapirollo/ollo.jpg") >= 0) {
            eredmeny.innerHTML = "Ön nyert!"
            szam1 += 1
            jatekosEredmeny.innerHTML = szam1
        } else {
            eredmeny.innerHTML = "Vesztett!"
            szam2 += 1
            gepEredmeny.innerHTML = szam2
        }
        vege();
}

function vege() {
    let letiltMezo1 = document.querySelector("h3[id = 'valassz']");
    let letiltMezo2 = document.querySelector("div[class = 'valasztasDiv']");
    let divH3 = document.querySelector("div[id = 'h3Mezo']");
    let ujGomb = document.createElement("button");
    let ujH = document.createElement("h3");
    ujGomb.className = "btn btn-primary";
    ujGomb.innerHTML = "Új játék";
    ujGomb.addEventListener ("click", function() {
        location.reload();
      });
    if (szam1 == 10 || szam2 == 10) {
        letiltMezo1.hidden = true;
        letiltMezo2.hidden = true;
        divH3.appendChild(ujH);
        ujH.appendChild(ujGomb);
        }
}