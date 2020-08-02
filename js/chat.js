let kuldesGomb = document.querySelector("#kuldesGomb");
let kuldesMezo = document.querySelector("#kuldesMezo");
let szovegMezo = document.querySelector("#szovegMezo");
let tbody = document.querySelector("#tbody");
let szoveg;
let idMezo = document.querySelectorAll("#idMezo");

//Adatbekérés



//Mező elkészítés
function ujMezo() {
    idMezo = document.querySelectorAll("#idMezo");
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    let th = document.createElement("th");
    th.id = "idMezo";
    th.scope = "row";
    tr.appendChild(th);
    let td = document.createElement("td");
    td.colSpan = 3;
    tr.appendChild(td);
    let div = document.createElement("div");
    div.id = "szovegMezo";
    div.className = "alert alert-primary";
    div.setAttribute("role", "alert");
    div.innerHTML = "Tesztszöveg";
    td.appendChild(div);
    forCiklus();
    th.innerHTML = idMezo.length + 1;
  };

function forCiklus() {
    for (let i = 0; i < idMezo.length; i++){
      
      console.log(idMezo.length);
    }
  };

function kuldes() {
    ujMezo()
    let message = {
      message: kuldesMezo.value
    };
    let fetchOptions = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify( message )
    };
    fetch( "http://localhost:3000/message/", fetchOptions )
      .then( resp => resp.json() )
      .then( json => console.log(json) );
}

function adatfissites(url) {
  let fetchOptions = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
};
    return fetch( url, fetchOptions ).then(
      resp => resp.json(),
      err => console.error(err)
    )
};

 adatfissites("http://localhost:3000/message/").then(
  data => console.log(data)
);