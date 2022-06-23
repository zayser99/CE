$(document).ready(function () {
    //inicializar los pop over

    var user_id, opcion;

    //inicializar la tabla alumnos
    tablaAlumnos = $('#tablaAlumnos').DataTable({
        "bProcessing": true,
        "bDeferRender": true,
        "bServerSide": true,
        "sAjaxSource": "serverside/serversideAlumnos.php",
        "columnDefs": [{
            "targets": -1,
            "defaultContent": "<div class='wrapper text-center'><div class='btn-group'><button class='btn btn-info btn-sm btnEditar' data-toggle='tooltip' title='Editar'><i class='material-icons'>Editar</i></button><button class='btn btn-danger btn-sm btnBorrar' data-toggle='tooltip' title='Eliminar'><span class='material-icons'>Eliminar</span></button></div></div>"
        },
        {
            "targets": -2,
            "defaultContent": "<div class='wrapper text-center'><div class='btn-group'><button class='btn btn-secondary btn-sm btnDocumentos' data-toggle='tooltip' title='Documentos'><span class='material-icons'>Documentos</span></button></div></div>"
        },
        {
            "targets": -3,
            "defaultContent": "<div class='wrapper text-center'><div class='btn-group'><button class='btn btn-secondary btn-sm btnCarreras' data-toggle='tooltip' title='Carreras'><span class='material-icons'>Carreras</span></button></div></div>"
        }
        ],
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });

    var fila; //captura la fila, para editar o eliminar
    //submit para el Alta y Actualización
    $('#formAlumnos').submit(function (e) {
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
        username = $.trim($('#username').val());
        first_name = $.trim($('#first_name').val());
        last_name = $.trim($('#last_name').val());
        gender = $.trim($('#gender').val());
        password = $.trim($('#password').val());
        status = $.trim($('#status').val());
        $.ajax({
            url: "bd/crud.php",
            type: "POST",
            datatype: "json",
            data: { user_id: user_id, username: username, first_name: first_name, last_name: last_name, gender: gender, password: password, status: status, opcion: opcion },
            success: function (data) {
                tablaAlumnos.ajax.reload(null, false);
            }
        });
        $('#modalCRUD').modal('hide');
    });

    //para limpiar los campos antes de dar de Alta una Persona
    $("#btnNuevo").click(function () {
        opcion = 1; //alta           
        user_id = null;
        $("#formAlumnos").trigger("reset");
        $(".modal-header").css("background-color", "#512DA8");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Alta de Alumno");
        $('#modalCRUD').modal('show');
    });

    //Editar        
    $(document).on("click", ".btnEditar", function () {
        opcion = 2;//editar
        fila = $(this).closest("tr");
        user_id = parseInt(fila.find('td:eq(0)').text()); //capturo el ID		            
        username = fila.find('td:eq(1)').text();
        first_name = fila.find('td:eq(2)').text();
        last_name = fila.find('td:eq(3)').text();
        gender = fila.find('td:eq(4)').text();
        password = fila.find('td:eq(5)').text();
        status = fila.find('td:eq(6)').text();
        $("#username").val(username);
        $("#first_name").val(first_name);
        $("#last_name").val(last_name);
        $("#gender").val(gender);
        $("#password").val(password);
        $("#status").val(status);
        $(".modal-header").css("background-color", "#512DA8");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Editar Usuario");
        $('#modalCRUD').modal('show');
    });

    //Borrar
    $(document).on("click", ".btnBorrar", function () {
        fila = $(this);
        user_id = parseInt($(this).closest('tr').find('td:eq(0)').text());
        opcion = 3; //eliminar        
        var respuesta = confirm("¿Está seguro de borrar el registro " + user_id + "?");
        if (respuesta) {
            $.ajax({
                url: "bd/crud.php",
                type: "POST",
                datatype: "json",
                data: { opcion: opcion, user_id: user_id },
                success: function () {
                    tablaAlumnos.row(fila.parents('tr')).remove().draw();
                }
            });
        }
    });



    //para mostrarlos documentos
    $(document).on("click", ".btnDocumentos", function () {
        fila = $(this).closest("tr");
        alumno_id = parseInt($(this).closest('tr').find('td:eq(0)').text());
        nombre = fila.find('td:eq(2)').text();
        $.ajax({
            url: "API/alumnos_documentos.php",
            type: "POST",
            datatype: "json",
            data: { alumno_id: alumno_id },
            success: function (data) {
                for (var i = 0; i < data.length; i++) {//recorremos la data 
                    console.log(['cantidad'][i]);
                }

                $("#bodyDocumentos").text(data);
                console.log(data);
            }
        });

        $(".modal-header").css("background-color", "#512DA8");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Documentos del  alumno: " + nombre);
        $('#modalDocumentos').modal('show');
    });



    //para mostrarlos documentos
    $(document).on("click", ".btnCarreras", function () {
        fila = $(this).closest("tr");
        alumno_id = parseInt($(this).closest('tr').find('td:eq(0)').text());
        nombre = fila.find('td:eq(2)').text();
        $.ajax({
            url: "API/alumnos_Carreras.php",
            type: "POST",
            datatype: "json",
            data: { alumno_id: alumno_id },
            success: function (data) {
                for (var i = 0; i < data.length; i++) {//recorremos la data 
                    console.log(['cantidad'][i]);
                }

                $("#bodyCarreras").text(data);
                console.log(data);
            }
        });

        $(".modal-header").css("background-color", "#512DA8");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Carreras del  alumno: " + nombre);
        $('#modalCarreras').modal('show');
    });




});

