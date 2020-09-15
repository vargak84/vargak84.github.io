let felhasznaloNev = document.querySelector("#felhasznaloNev");
let udvozloMezo = document.querySelector("#neve");
let okeGomb = document.querySelector("#okeGomb");

let keresztNev = localStorage.keresztNev;

if (keresztNev == undefined) {
  $(document).ready(function () {
    // Show the Modal on load
    $("#myModal").modal("show");
  });
} else {
  udvozloMezo.innerHTML = keresztNev;
}

function okeUdvozlet() {
  
  if (felhasznaloNev.value == "") {
    felhasznaloNev.value = felhasznaloNev.placeholder
    localStorage.keresztNev = felhasznaloNev.value;
    udvozloMezo.innerHTML = localStorage.keresztNev;
  } else {
    udvozloMezo.innerHTML = felhasznaloNev.value;
    localStorage.keresztNev = felhasznaloNev.value;
  }
};

function nevTorol() {
  localStorage.clear(keresztNev);
  location.reload();
}