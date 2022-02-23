 const titulo = document.querySelector(".titulo")
titulo.addEventListener('mouseover', () => {
     if (titulo.classList.contains("color")){
        titulo.classList.remove("color")
    } else {
        titulo.classList.add("color")
    }
})


const h2 = document.querySelector("h2")
const navegacion = document.querySelector(".navegacionPrincipal")

h2.addEventListener('click', () =>{
    if (navegacion.classList.contains("visible")){
        navegacion.classList.remove("visible")
    } else {
        navegacion.classList.add("visible")
    }
})



const nombre = document.querySelector("#nombre")
const email = document.querySelector("#email")
const texto = document.querySelector("#texto")

nombre.addEventListener('input',leerTexto)
email.addEventListener('input',leerTexto)
texto.addEventListener('input',leerTexto)

function leerTexto (e) {
   console.log(e.target.value)
}