$(document).ready(function () {
    //inicializar los pop over

    var ec_id, opcion;

    //inicializar la tabla ec
    tablaEc = $('#tablaEc').DataTable({
        "bProcessing": true,
        "bDeferRender": true,
        "bServerSide": true,
        "sAjaxSource": "serverside/serversideEc.php",
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
    $('#formEc').submit(function (e) {
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
        ec_numero = $.trim($('#ec_numero').val());
        almacen_id = $.trim($('#selectAlmacen').val());
        $.ajax({
            url: "API/ec.php",
            type: "POST",
            datatype: "json",
            data: { ec_id: ec_id, ec_numero: ec_numero, almacen_id: almacen_id, opcion: opcion },
            success: function (data) {
                tablaEc.ajax.reload(null, false);
            }
        });
        $('#modalCRUD').modal('hide');

        // console.log(ec_numero+" "+almacen_id+" "+almacen_sala);
    });

    //para limpiar los campos antes de dar de Alta una Facultad
    $("#btnNuevo").click(function () {
        opcion = 1; //alta           
        ec_id = null;
        $("#formEc").trigger("reset");
        $(".modal-header").css("background-color", "#512DA8");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Alta de Estante o Caja ");
        $('#modalCRUD').modal('show');
    });

    //Editar        
    $(document).on("click", ".btnEditar", function () {
        opcion = 2;//editar
        fila = $(this).closest("tr");
        ec_id = parseInt(fila.find('td:eq(0)').text()); //capturo el ID		            
        ec_numero = fila.find('td:eq(1)').text();
        tablaEc.column(2).visible(1);   
        document.getElementById("selectAlmacen").value = fila.find('td:eq(2)').text();
        tablaEc.column(2).visible(0);   
        $("#ec_numero").val(ec_numero);
        $(".modal-header").css("background-color", "#512DA8");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Editar Estante o Caja");
        $('#modalCRUD').modal('show');
    });

    //Borrar
    $(document).on("click", ".btnBorrar", function () {
        fila = $(this);
        ec_id = parseInt($(this).closest('tr').find('td:eq(0)').text());
        opcion = 3; //eliminar        
        var respuesta = confirm("¿Está seguro de borrar el registro " + ec_id + "?");
        if (respuesta) {
            $.ajax({
                url: "API/ec.php",
                type: "POST",
                datatype: "json",
                data: { opcion: opcion, ec_id: ec_id },
                success: function () {
                    tablaEc.row(fila.parents('tr')).remove().draw();
                }
            });
        }
    });

    // escondemos las filas donde estan las id
    tablaEc.column(2).visible(0);   

    // llenamos los combobox EC
    var selectorFacultades = document.getElementById("selectAlmacen"); // identificamos el combobox
    $.getJSON('serverside/serversideAlmacenes.php', function (results) {// consultamos las facultades 
        for (var i = 0; i < results['aaData'].length; i++) {//recorremos la data 
            selectorFacultades.options[i] = new Option(results['aaData'][i][1], results['aaData'][i][0]); //agregamos el renglon por cada registro
        }
    });




  
});