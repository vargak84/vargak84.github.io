let kuldesGomb = document.querySelector("#kuldesGomb");
let kuldesMezo = document.querySelector("#kuldesMezo");
let idMezo = document.querySelectorAll("#idMezo");
let szovegMezo = document.querySelector("#szovegMezo");

function kuldes() {
    let szoveg = kuldesMezo.value;
    console.log(szoveg);

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