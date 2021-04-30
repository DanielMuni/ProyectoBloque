var url = "http://35.223.20.167:8117/api/usuario";

function submit() {

    console.log(url);

    var newNombre = $('#nombre').val();
    var newFecha = $('#fechaNacimiento').val();
    var newApellido = $('#apellido').val();
    var newCalle = $('#calle').val();
    var newColonia = $('#colonia').val();
    var newColonia = $('#colonia').val();
    var newCP = $('#codigoPostal').val();
    var newCorreo = $('#correo').val();
    var newCuenta = $('#cuenta').val();
    var newPassword = $('#contraseña').val();

    var newUser = {
        nombre: newNombre,
        apellido: newApellido,
        cuenta: newCuenta,
        fechaNacimiento: newFecha,
        correo: newCorreo,
        password: newPassword,
        calle: newCalle,
        colonia: newColonia,
        cp: newCP
    };

    console.log(newUser);

    $.ajax({

        url: url,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(newUser),
        success: function (data) {
            console.log(data);
        }
    });
    
}
