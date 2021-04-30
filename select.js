var url = "http://35.223.20.167:8117/api/usuario";

function selectAll() {

    console.log(url);

    $.getJSON(url, 
        function(json){
            console.log(json);

            var arrUsers = json.usuarios;
            var htmlTableUsers = '<table border=1>';

            htmlTableUsers +=   '<tr>' +
                                    '<th>ID</th>'+
                                    '<th>Nombre</th>'+
                                    '<th>Apellido</th>'+
                                    '<th>Cuenta</th>'+
                                    '<th>Fecha de nacimiento</th>'+
                                    '<th>Correo</th>'+
                                    '<th>Password</th>'+
                                    '<th>Calle</th>'+
                                    '<th>Colonia</th>'+
                                    '<th>C.P.</th>'+
                                '</tr>'

            arrUsers.forEach(function(item) {
                console.log(item);
                htmlTableUsers +=   '<tr>' +
                                        '<td>' + item.id + '</td>' +
                                        '<td>' + item.nombre + '</td>' +
                                        '<td>' + item.apellido + '</td>' +
                                        '<td>' + item.cuenta + '</td>' +
                                        '<td>' + item.fechaNacimiento.toString().substring(0,10) + '</td>' +
                                        '<td>' + item.correo + '</td>' +
                                        '<td>' + item.password + '</td>' +
                                        '<td>' + item.calle + '</td>' +
                                        '<td>' + item.colonia + '</td>' +
                                        '<td>' + item.cp + '</td>' +
                                    '<tr>';
            });

            htmlTableUsers += '</table>';

            $('#proyeccion').html(htmlTableUsers);
        }
    );
}