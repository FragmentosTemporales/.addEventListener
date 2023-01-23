const parrafo = document.querySelector("p");
const input = document.querySelector("input");

input.addEventListener('change', (e) =>{
    parrafo.textContent = e.target.value;
})

const contador = document.querySelector("h2");
const boton = document.querySelector("button");

let cont = 0;

boton.addEventListener('click',(e)=>{
    cont++;
    contador.innerHTML = cont;
})