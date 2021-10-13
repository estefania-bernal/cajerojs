function login(form){
    if (form.u.value == "Estefania"){
        if (form.p.value == "1234"){
            location = "../html/botonesestefania.html"
        } else {
            alert("Contraseña incorrecta")
        }
} else if (form.u.value == "Sandra"){
        if (form.p.value == "2468"){
            location = "../html/botonessandra.html"
        } else {
            alert("Contraseña incorrecta")
}
} else if (form.u.value == "Camila"){
        if (form.p.value == "9876"){
            location = "../html/botonescamila.html"
        } else {
            alert("Contraseña incorrecta")
        }
 } else {
        alert("Usuario incorrecto");
    }
}



// OTRAS FORMAS

// 1

// if (form.u.value=="Estefania" && form.p.value=="1234") {
//     location="..html/botones.hrml"
// } else if (form.u.value=="Sandra" && form.p.value=="2468") {
//     location="../html/botones.html"
// } else if (form.u.value=="Camila" && form.p.value=="9876") {
//     location="../html/botones.html"
// } else {
//     alert{"Usuario o contraseña incorrecto"}
// };


// 2


// if (form.u.value==“Estefania” && form.p.value==“1234" || form.u.value==“Sandra” && form.p.value==“2468" || form.u.value==“Camila” && form.p.value==“9876") {
//     location=“..html/botones.hrml”
// } else {
//     alert{“Usuario o contraseña incorrecto”}
// };
// marca_de_verificación_blanca
// ojos
// manos_levantadas


// si agregamos los or || a la función

// podemos poner a todos en una sola condición (


// 3


//     if (form.u.value === "Estefania" && form.p.value === "1234" || form.u.value === "Sandra" && form.p.value === "2468" || form.u.value === "Camila" && form.p.value === "9876") {
//         location="..html/botones.hrml";
//     } else {
//         alert{"Usuario o contraseña incorrecto"};
//     };
