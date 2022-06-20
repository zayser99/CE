$(document).ready(function () {
    //inicializar los pop over

    var usuario_id, opcion;

    //inicializar la tabla Usuario
    tablaUsuario = $('#tablaUsuario').DataTable({
        "bProcessing": true,
        "bDeferRender": true,
        "bServerSide": true,
        "sAjaxSource": "serverside/serversideUsuario.php",
        "columnDefs": [{
            sortable: false, //desactivamos el ordenamiento a los botones de eliminar y editar
            "searchable": false,  //quitamos de las bosquedas a los botones de eliminar y editar
            "targets": -1,
            "defaultContent": "<div class='wrapper text-center'><div class='btn-group'><button class='btn btn-info btn-sm btnEditar' data-toggle='tooltip' title='Editar'><i class='material-icons'>Editar</i></button><button class='btn btn-danger btn-sm btnBorrar' data-toggle='tooltip' title='Eliminar'><span class='material-icons'>Eliminar</span></button></div></div>"
        }
        ],
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
    $('#formUsuario').submit(function (e) {
        e.preventDefault(); //evita el comportambiento normal del submit, es dUsuarioir, rUsuarioarga total de la página
        usuario_username = $.trim($('#usuario_username').val());
        usuario_password = $.trim($('#usuario_password').val());
        usuario_puesto = $.trim($('#usuario_puesto').val());
        $.ajax({
            url: "API/Usuario.php",
            type: "POST",
            datatype: "json",
            data: { usuario_id: usuario_id, usuario_username: usuario_username, usuario_password: usuario_password, usuario_puesto: usuario_puesto, opcion: opcion },
            success: function (data) {
                tablaUsuario.ajax.reload(null, false);
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
        usuario_password = fila.find('td:eq(2)').text();
        usuario_puesto = fila.find('td:eq(3)').text();
        tablaUsuario.column(2).visible(2);
        document.getElementById("selUsuariotAlmacen").value = fila.find('td:eq(2)').text();
        tablaUsuario.column(2).visible(0);
        $("#Usuario_numero").val(usuario_username);
        $(".modal-header").css("background-color", "#512DA8");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Editar Estante o Caja");
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
                url: "API/usuario.php",
                type: "POST",
                datatype: "json",
                data: { opcion: opcion, usuario_id: Usuario_id },
                success: function () {
                    tablaUsuario.row(fila.parents('tr')).remove().draw();
                }
            });
        }
    });



    // llenamos los combobox Usuario
    var selUsuariotorFacultades = document.getElementById("selUsuariotAlmacen"); // identificamos el combobox
    selUsuariotorFacultades.options[i] = new Option("lo que mostramos", "lo que vale"); //agregamos el renglon por cada registro
    selUsuariotorFacultades.options[i] = new Option("lo que mostramos", "lo que vale"); //agregamos el renglon por cada registro






});