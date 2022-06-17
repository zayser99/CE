$(document).ready(function () {
    //inicializar los pop over

    var almacen_id, opcion;

    //inicializar la tabla alumnos
    tablaAlmacenes = $('#tablaAlmacenes').DataTable({
        "bProcessing": true,
        "bDeferRender": true,
        "bServerSide": true,
        "sAjaxSource": "serverside/serversideAlmacenes.php",
        "columnDefs": [{
            sortable: false, //desactivamos el ordenamiento a los botones de eliminar y editar
            "searchable": false,  //quitamos de las bosquedas a los botones de eliminar y editar
            "targets": -1,
            "defaultContent": "<div class='wrapper text-center'><div class='btn-group'><button class='btn btn-info btn-sm btnEditar' data-toggle='tooltip' title='Editar'><i class='material-icons'>Editar</i></button><button class='btn btn-danger btn-sm btnBorrar' data-toggle='tooltip' title='Eliminar'><span class='material-icons'>Eliminar</span></button></div></div>"
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
    $('#formAlmacenes').submit(function (e) {
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
        almacen_sala = $.trim($('#almacen_sala').val());
        $.ajax({
            url: "API/almacenes.php",
            type: "POST",
            datatype: "json",
            data: { almacen_id: almacen_id, almacen_sala: almacen_sala, opcion: opcion },
            success: function (data) {
                tablaAlmacenes.ajax.reload(null, false);
            }
        });
        $('#modalCRUD').modal('hide');
    });

    //para limpiar los campos antes de dar de Alta una almacen
    $("#btnNuevo").click(function () {
        opcion = 1; //alta           
        almacen_id = null;
        $("#formAlmacenes").trigger("reset");
        $(".modal-header").css("background-color", "#512DA8");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Alta de Almacenes");
        $('#modalCRUD').modal('show');
    });

    //Editar        
    $(document).on("click", ".btnEditar", function () {
        opcion = 2;//editar
        fila = $(this).closest("tr");
        almacen_id = parseInt(fila.find('td:eq(0)').text()); //capturo el ID		            
        almacen_sala = fila.find('td:eq(1)').text();
        $("#almacen_sala").val(almacen_sala);
        $(".modal-header").css("background-color", "#512DA8");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Editar Almacen");
        $('#modalCRUD').modal('show');
    });

    //Borrar
    $(document).on("click", ".btnBorrar", function () {
        fila = $(this);
        almacen_id = parseInt($(this).closest('tr').find('td:eq(0)').text());
        opcion = 3; //eliminar        
        var respuesta = confirm("¿Está seguro de borrar el registro " + almacen_id + "?");
        if (respuesta) {
            $.ajax({
                url: "API/almacenes.php",
                type: "POST",
                datatype: "json",
                data: { opcion: opcion, almacen_id: almacen_id },
                success: function () {
                    tablaAlmacenes.row(fila.parents('tr')).remove().draw();
                }
            });
        }
    });


});

