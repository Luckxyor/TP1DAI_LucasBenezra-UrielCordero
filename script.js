const passwordField = document.getElementById('contraseña');
const confirmPasswordField = document.getElementById('confirmarContraseña');
const noCoinciden = document.getElementById('noCoinciden');
const contraseñaMal = document.getElementById('contraseñaMal');
const nameField= document.getElementById("nombreApellido");
const emailField=document.getElementById('email');
const nombreMal=document.getElementById('nombreMal');
const emailMal=document.getElementById('emailMal')
const form = document.getElementById('formulario');

function NombreBien(){
    if (nameField.value.length>=3){
        nombreMal.innerHTML='';
    }
    else{
        nombreMal.innerHTML='El nombre completo debe tener al menos 3 caracteres.';
    }

}

function emailBien(){
    if(emailField.value.includes('@')){
        emailMal.innerHTML='';
    }
    else{
        emailMal.innerHTML='El correo electrónico debe contener un "@".';
    }
}

function ConstraseñaBien(){
    let longitud = passwordField.value.length >= 8;
    let numero = /\d/.test(passwordField.value);
    let letra = /[a-zA-Z]/.test(passwordField.value);
    
    if(longitud && letra && numero){
        contraseñaMal.innerHTML='';
    }else{
        contraseñaMal.innerHTML='La contraseña no cumple con los requisitos.';
    }
    CoincidenContraseñas();
}

function CoincidenContraseñas(){
    if(passwordField.value!=confirmPasswordField.value){
        noCoinciden.innerHTML='Las contraseñas no coinciden.';
    }
    else{
        noCoinciden.innerHTML='';
    }
}


function validarFormulario() {
    NombreBien();
    emailBien();
    ConstraseñaBien();
    CoincidenContraseñas();
    if (nombreMal.innerHTML!=='' || emailMal.innerHTML!=='' || contraseñaMal.innerHTML!=='' || noCoinciden.innerHTML!=='') {
        alert("Por favor, corrige los errores antes de enviar el formulario.");
        return false;
    }
    alert("Formulario enviado correctamente.");
    return true;
}
