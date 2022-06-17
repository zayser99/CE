$(document).ready(function () {
    //inicializar los pop over

    var carrera_id, opcion;

    //inicializar la tabla alumnos
    tablaCarreras = $('#tablaCarreras').DataTable({
        "bProcessing": true,
        "bDeferRender": true,
        "bServerSide": true,
        "sAjaxSource": "serverside/serversideCarreras.php",
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
    $('#formCarreras').submit(function (e) {
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
        carrera_nombre = $.trim($('#carrera_nombre').val());
        tipoca_id = $.trim($('#selectTipos').val());
        facultad_id = $.trim($('#selectFacultades').val());
        $.ajax({
            url: "API/carreras.php",
            type: "POST",
            datatype: "json",
            data: { carrera_id: carrera_id, carrera_nombre: carrera_nombre, tipoca_id: tipoca_id, facultad_id: facultad_id, opcion: opcion },
            success: function (data) {
                tablaCarreras.ajax.reload(null, false);
            }
        });
        $('#modalCRUD').modal('hide');

        // console.log(carrera_nombre+" "+tipoca_id+" "+facultad_id);
    });

    //para limpiar los campos antes de dar de Alta una Facultad
    $("#btnNuevo").click(function () {
        opcion = 1; //alta           
        carrera_id = null;
        $("#formCarreras").trigger("reset");
        $(".modal-header").css("background-color", "#512DA8");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Alta de Carreras");
        $('#modalCRUD').modal('show');
    });

    //Editar        
    $(document).on("click", ".btnEditar", function () {
        opcion = 2;//editar
        fila = $(this).closest("tr");
        carrera_id = parseInt(fila.find('td:eq(0)').text()); //capturo el ID		            
        carrera_nombre = fila.find('td:eq(1)').text();
        tablaCarreras.column(2).visible(1);   
        tablaCarreras.column(3).visible(1);    
        document.getElementById("selectTipos").value = fila.find('td:eq(2)').text();
        document.getElementById("selectFacultades").value = fila.find('td:eq(3)').text();
        tablaCarreras.column(2).visible(0);   
        tablaCarreras.column(3).visible(0);    
        $("#carrera_nombre").val(carrera_nombre);
        $(".modal-header").css("background-color", "#007bff");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Editar Facultad");
        $('#modalCRUD').modal('show');
    });

    //Borrar
    $(document).on("click", ".btnBorrar", function () {
        fila = $(this);
        carrera_id = parseInt($(this).closest('tr').find('td:eq(0)').text());
        opcion = 3; //eliminar        
        var respuesta = confirm("¿Está seguro de borrar el registro " + carrera_id + "?");
        if (respuesta) {
            $.ajax({
                url: "API/carreras.php",
                type: "POST",
                datatype: "json",
                data: { opcion: opcion, carrera_id: carrera_id },
                success: function () {
                    tablaCarreras.row(fila.parents('tr')).remove().draw();
                }
            });
        }
    });

    // escondemos las filas donde estan las id
    tablaCarreras.column(2).visible(0);   
    tablaCarreras.column(3).visible(0);    

    // llenamos los combobox facultades
    var selectorFacultades = document.getElementById("selectFacultades"); // identificamos el combobox
    $.getJSON('serverside/serversideFacultades.php', function (results) {// consultamos las facultades 
        for (var i = 0; i < results['aaData'].length; i++) {//recorremos la data 
            selectorFacultades.options[i] = new Option(results['aaData'][i][1], results['aaData'][i][0]); //agregamos el renglon por cada registro
        }
    });

    // llenamos los combobox tipos de carreras
    var selectorTiposCarreras = document.getElementById("selectTipos"); // identificamos el combobox
    $.getJSON('serverside/serversideTiposCarreras.php', function (results) {// consultamos las carreras 
        for (var i = 0; i < results['aaData'].length; i++) {//recorremos la data 
            selectorTiposCarreras.options[i] = new Option(results['aaData'][i][1], results['aaData'][i][0]); //agregamos el renglon por cada registro
        }
    });



  
});



