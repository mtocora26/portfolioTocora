function mostrarMensaje(){
    alert("¡Hola!,Bienvenidos")
}

//* Validación del Formulario

const form = document.getElementById('contact_form');
form.addEventListener('submit', function(event) {
    const name = document.getElementById('nombre').value;
    const mail = document.getElementById('email').value;
    if(name===''|| mail ===''){
        alert('Por favor, complete los campos requeridos');
        event.preventDefault();
    }else{
        alert("¡Formulario enviado correctamente!")
    }


})
