// PASO 2 - Datos y variables

const nombre = prompt("Ingresa tu nombre completo");

let edad = prompt("Ingresa tu edad");

const ocupacion = prompt("Ingresa tu ocupación");

let nuevaEdad = prompt("Ingresa de nuevo tu edad");

edad = nuevaEdad;


// PASO 3 - Conversión y condicionales

edad = Number(edad);

if (isNaN(edad)) {
    alert("La edad ingresada no es válida");
    throw new Error("Edad inválida");
} else if (edad < 18) {
    alert("Debes ser mayor de edad");
    throw new Error("Usuario menor de edad");
} else {
    console.log("Edad válida");
}


// PASO 4 - Funciones

function crearPerfil(nombre, edad, ocupacion) {

    if (nombre === "") {
        return "El nombre no puede estar vacío";
    }

    let mensaje = `Hola, ${nombre}. Tienes ${edad} años y eres un/a ${ocupacion}.`;

    return mensaje;
}

console.log(crearPerfil(nombre, edad, ocupacion));


// PASO 5 - Arrays y bucles

let hobbies = [];

for (let i = 0; i < 3; i++) {

    let hobby = prompt("Ingresa un hobby");

    hobbies.push(hobby);
}

hobbies.forEach(function(hobby) {
    console.log(hobby);
});


// PASO 6 - Objeto y DOM

const perfilUsuario = {
    nombre: nombre,
    edad: edad,
    ocupacion: ocupacion,
    hobbies: hobbies
};

const contenedor = document.getElementById("perfil-container");

contenedor.innerHTML = `
    <h2>${perfilUsuario.nombre}</h2>
    <p>Edad: ${perfilUsuario.edad}</p>
    <p>Ocupación: ${perfilUsuario.ocupacion}</p>
    <p>Hobbies: ${perfilUsuario.hobbies.join(", ")}</p>
`;