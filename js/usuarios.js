$(document).ready(function () {
    //inicializar los pop over

    var usuario_id, opcion;

    //inicializar la tabla Usuario
    tablaUsuarios = $('#tablaUsuarios').DataTable({
        "bProcessing": true,
        "bDeferRender": true,
        "bServerSide": true,
        "sAjaxSource": "serverside/serversideUsuarios.php",
        "columnDefs": [{
            sortable: false, //desactivamos el ordenamiento a los botones de eliminar y editar
            "searchable": false,  //quitamos de las bosquedas a los botones de eliminar y editar
            "targets": -1,
            "defaultContent": "<div class='wrapper text-center'><div class='btn-group'><button class='btn btn-info btn-sm btnEditar' data-toggle='tooltip' title='Editar'><i class='material-icons'>Editar</i></button><button class='btn btn-danger btn-sm btnBorrar' data-toggle='tooltip' title='Eliminar'><span class='material-icons'>Eliminar</span></button></div></div>"

        }
        ],
        "rowCallback": function (row, data) {
            if (data[2] == "A") {
                $('td:eq(2)', row).html('<div class="wrapper text-center"><span class="badge rounded-pill text-bg-primary">ADMINISTRATIV@</span></div>');

            }
            else if (data[2] == "B") {
                $('td:eq(2)', row).html('<div class="wrapper text-center"><span class="badge rounded-pill text-bg-success">SECRETARI@</span></div>');

            }
            else if (data[2] == "C") {
                $('td:eq(2)', row).html('<div class="wrapper text-center"><span class="badge rounded-pill text-bg-secondary">BECARI@</span></div>');

            }
        },
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRUsuarioords": "No se encontraron resultados",
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
    $('#formUsuarios').submit(function (e) {
        e.preventDefault(); //evita el comportambiento normal del submit, es dUsuarioir, rUsuarioarga total de la página
        usuario_username = $.trim($('#usuario_username').val());
        usuario_password = $.trim($('#usuario_password').val());
        usuario_puesto = $.trim($('#selectUsuario').val());
        console.log(usuario_username);
        console.log(usuario_password);
        console.log(usuario_puesto);
        $.ajax({
            url: "API/usuarios.php",
            type: "POST",
            datatype: "json",
            data: { usuario_id: usuario_id, usuario_username: usuario_username, usuario_password: usuario_password, usuario_puesto: usuario_puesto, opcion: opcion },
            success: function (data) {
                tablaUsuarios.ajax.reload(null, false);
            }
        });
        $('#modalCRUD').modal('hide');

        // console.log(Usuario_numero+" "+almacen_id+" "+almacen_sala);
    });

    //para limpiar los campos antes de dar de Alta una Facultad
    $("#btnNuevo").click(function () {
        opcion = 1; //alta           
        usuario_id = null;
        $("#formUsuario").trigger("reset");
        $(".modal-header").css("background-color", "#512DA8");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Alta de Estante o Caja ");
        $('#modalCRUD').modal('show');
    });

    //Editar        
    $(document).on("click", ".btnEditar", function () {
        opcion = 2;//editar
        fila = $(this).closest("tr");
        usuario_id = parseInt(fila.find('td:eq(0)').text()); //capturo el ID		            
        usuario_username = fila.find('td:eq(1)').text();
        // document.getElementById("selectUsuarios").value = fila.find('td:eq(2)').text();
        $("#usuario_username").val(usuario_username);
        $(".modal-header").css("background-color", "#512DA8");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Editar Facultad");
        $('#modalCRUD').modal('show');
    });

    //Borrar
    $(document).on("click", ".btnBorrar", function () {
        fila = $(this);
        usuario_id = parseInt($(this).closest('tr').find('td:eq(0)').text());
        opcion = 3; //eliminar        
        var respuesta = confirm("¿Está seguro de borrar el registro " + usuario_id + "?");
        if (respuesta) {
            $.ajax({
                url: "API/usuarios.php",
                type: "POST",
                datatype: "json",
                data: { usuario_id: usuario_id, usuario_username: usuario_username, usuario_password: usuario_password, usuario_puesto: usuario_puesto, opcion: opcion },
                success: function () {
                    tablaUsuarios.row(fila.parents('tr')).remove().draw();
                }
            });
        }
    });

    // llenamos los combobox Usuario
    var selectUsuario = document.getElementById("selectUsuario"); // identificamos el combobox
    selectUsuario.options[0] = new Option("ADMINISTRATIV@", "A"); //agregamos el renglon por cada registro
    selectUsuario.options[1] = new Option("SECRETARI@", "B"); //agregamos el renglon por cada registro
    selectUsuario.options[2] = new Option("BECARI@", "B"); //agregamos el renglon por cada registro






});