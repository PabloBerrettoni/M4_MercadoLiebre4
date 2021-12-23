import fetch from "node-fetch";

fetch('https://apis.datos.gob.ar/georef/api/provincias')
.then(response => response.json())
.then(result => {
    console.log(result.provincias)
})
.catch(error => console.log(error))