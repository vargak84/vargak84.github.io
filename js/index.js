let felhasznaloNev = document.querySelector("#felhasznaloNev");
let neveMezo = document.querySelector("#neve");
let okeGomb = document.querySelector("#okeGomb");

neveMezo.innerHTML = "Vendég";
let keresztNev = localStorage.keresztNev;

if (keresztNev == undefined) {
  $(document).ready(function () {
    // Show the Modal on load
    $("#myModal").modal("show");
  });
} else {
  neveMezo.innerHTML = keresztNev;
}

function okeUdvozlet() {
  if (felhasznaloNev.value == "") {
    felhasznaloNev.value = felhasznaloNev.placeholder;
    localStorage.keresztNev = felhasznaloNev.value;
    neveMezo.innerHTML = localStorage.keresztNev;
  } else if(felhasznaloNev.value.indexOf(" ") == 0) {
    keresztNev == undefined;
    alert("Szóköz nem lehet az első karakter!")
    location.reload();
  } else {
    neveMezo.innerHTML = felhasznaloNev.value;
    localStorage.keresztNev = felhasznaloNev.value;
  }
};

function nevTorol() {
  localStorage.clear(keresztNev);
  location.reload();
}