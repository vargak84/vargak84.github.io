let felhasznaloNev = document.querySelector("#felhasznaloNev");
let udvozloMezo = document.querySelector("#neve");
let okeGomb = document.querySelector("#okeGomb");

$(document).ready(function () {
  // Show the Modal on load
  $("#myModal").modal("show");
});

function okeUdvozlet() {
  udvozloMezo.innerHTML = felhasznaloNev.value;
};

/*     let felhasznalo = prompt("Add meg a keresztneved!", "Vendég");
    if (felhasznalo != null) {
      document.getElementById("udvozlet").innerHTML =
      "Üdvözöllek " + felhasznalo + "! Jó böngészést az oldalon!";
  }; */