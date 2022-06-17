$(document).ready(function () {
    //inicializar los pop over

    var documento_id, opcion;

    //inicializar la tabla alumnos
    tablaDocumentos = $('#tablaDocumentos').DataTable({
        "bProcessing": true,
        "bDeferRender": true,
        "bServerSide": true,
        "sAjaxSource": "serverside/serversideDocumentos.php",
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
    $('#formDocumentos').submit(function (e) {
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
        documento_nombre = $.trim($('#documento_nombre').val());
        $.ajax({
            url: "API/documentos.php",
            type: "POST",
            datatype: "json",
            data: { documento_id: documento_id, documento_nombre: documento_nombre, opcion: opcion },
            success: function (data) {
                tablaDocumentos.ajax.reload(null, false);
            }
        });
        $('#modalCRUD').modal('hide');
    });

    //para limpiar los campos antes de dar de Alta una documento
    $("#btnNuevo").click(function () {
        opcion = 1; //alta           
        documento_id = null;
        $("#formDocumentos").trigger("reset");
        $(".modal-header").css("background-color", "#512DA8");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Alta de Documentos");
        $('#modalCRUD').modal('show');
    });

    //Editar        
    $(document).on("click", ".btnEditar", function () {
        opcion = 2;//editar
        fila = $(this).closest("tr");
        documento_id = parseInt(fila.find('td:eq(0)').text()); //capturo el ID		            
        documento_nombre = fila.find('td:eq(1)').text();
        $("#documento_nombre").val(documento_nombre);
        $(".modal-header").css("background-color", "#512DA8");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Editar documento");
        $('#modalCRUD').modal('show');
    });

    //Borrar
    $(document).on("click", ".btnBorrar", function () {
        fila = $(this);
        documento_id = parseInt($(this).closest('tr').find('td:eq(0)').text());
        opcion = 3; //eliminar        
        var respuesta = confirm("¿Está seguro de borrar el registro " + documento_id + "?");
        if (respuesta) {
            $.ajax({
                url: "API/documentos.php",
                type: "POST",
                datatype: "json",
                data: { opcion: opcion, documento_id: documento_id },
                success: function () {
                    tablaDocumentos.row(fila.parents('tr')).remove().draw();
                }
            });
        }
    });


});

