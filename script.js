const passwordField = document.getElementById('Password');
const confirmPasswordField = document.getElementById('ConfirmPassword');
const noCoinciden = document.getElementById('noCoinciden');
const contraseñaMal = document.getElementById('contraseñaMal');
const nameField= document.getElementById("nombreApellido");

function NombreBien(){
    if (nameField.value.length>=3){
        NombreMal.style.display='none';
    }
    else{
       NombreMal.style.display='block';
    }

}

function ConstraseñaBien(){
    let longitud = passwordField.value.length >= 8;
    let numero = /\d/.test(passwordField.value);
    let letra = /[a-zA-Z]/.test(passwordField.value);
    
    if(longitud && letra && numero){
        contraseñaMal.style.display='none';
    }else{
        contraseñaMal.style.display='block';
    }
    CoincidenContraseñas();
}

function CoincidenContraseñas(){
    if(passwordField.value!==confirmPasswordField.value){
        noCoinciden.style.display='block';
    }
    else{
        noCoinciden.style.display='none';
    }
}
