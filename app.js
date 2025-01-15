const botoncolor = document.getElementById("boton-color");
const botoncopy = document.getElementById("boton-copy");
const color = document.getElementById("color");
const copytexto = document.getElementById("copytext");

function generarColor(){
    let digitos = "0123456789ABCDEF";
    let colorHex = "#";

    for (let i=0;i<6;i++){
        let indiceAleatorio = Math.floor(Math.random()*16);
        colorHex += digitos[indiceAleatorio];
    }
    color.textContent = colorHex;
    document.body.style.backgroundColor = colorHex;
    return colorHex;
}

function copypaste(){    
    navigator.clipboard.writeText(color.textContent); 
    
    copytexto.animate(
        [
            { opacity: 0},
            { opacity: 1 }            
        ], {
            duration: 500,
            iterations: 1
        }
        );
}

botoncolor.addEventListener("click", generarColor);
botoncopy.addEventListener("click", copypaste);
