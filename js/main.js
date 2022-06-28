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
            sortable: false, //desactivamos el ordenamiento a los botones de eliminar y editar
            "searchable": false,  //quitamos de las bosquedas a los botones de eliminar y editar
            "targets": -1,
            "defaultContent": "<div class='wrapper text-center'><div class='btn-group'><button class='btn btn-info btn-sm btnEditar' data-toggle='tooltip' title='Editar'><i class='material-icons'>Editar</i></button><button class='btn btn-danger btn-sm btnBorrar' data-toggle='tooltip' title='Eliminar'><span class='material-icons'>Eliminar</span></button></div></div>"
        },
        {
            sortable: false, //desactivamos el ordenamiento a los botones de eliminar y editar
            "searchable": false,  //quitamos de las bosquedas a los botones de eliminar y editar
            "targets": -2,
            "defaultContent": "<div class='wrapper text-center'><div class='btn-group'><button class='btn btn-secondary btn-sm btnDocumentos' data-toggle='tooltip' title='Documentos'><span class='material-icons'>Documentos</span></button></div></div>"
        },
        {
            sortable: false, //desactivamos el ordenamiento a los botones de eliminar y editar
            "searchable": false,  //quitamos de las bosquedas a los botones de eliminar y editar
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

    $('#modalCRUD').modal({ backdrop: 'static', keyboard: false }) //evita que se puedda cerra el modal picando afuera del mismo

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

    //para mostrarlos documentos del alumno
    $(document).on("click", ".btnDocumentos", function () {
        fila = $(this).closest("tr");//localizamos la fila donde extrearemos los datos
        tablaAlumnos.column(0).visible(1);//ponemos visible el id para consultarlo
        alumno_id = parseInt($(this).closest('tr').find('td:eq(0)').text()); //sacamos la id del alumno
        tablaAlumnos.column(0).visible(0);//lo volvemos a esconder
        nombre = fila.find('td:eq(2)').text(); // sacamos el nombre del alumno
        $.ajax({
            url: "API/alumnos_documentos.php",
            type: "POST",
            datatype: "json",
            data: { alumno_id: alumno_id },
            success: function (data) {
                $("#listaDocumentos").find('li').remove();//limpia la lista de documenentos del modal
                let documentos = JSON.parse(data);// parseamos de la api el string a json 
                let lista = document.querySelector('#listaDocumentos'); // seleccionamos nuesta lista donde mostramos todo
                for (const documento of documentos) {// recorremos el json y seguido hacemos un innerhtml para mostrar los datos
                    if (documento.estado == "A") {
                        lista.innerHTML += `
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                        ${documento.documento_nombre}
                        <span class="badge rounded-pill text-bg-success">BUEN ESTADO</span>
                        <span class="badge bg-primary rounded-pill">${documento.cantidad}</span>
                        </li>`;
                    } else if (documento.estado == "B") {
                        lista.innerHTML += `
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                        ${documento.documento_nombre}
                        <span class="badge rounded-pill text-bg-warning">DAÑADO</span>
                        <span class="badge bg-primary rounded-pill">${documento.cantidad}</span>
                        </li>`;
                    }
                    else if (documento.estado == "C") {
                        lista.innerHTML += `
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                        ${documento.documento_nombre}
                        <span class="badge rounded-pill text-bg-danger">ILEGIBLE</span>
                        <span class="badge bg-primary rounded-pill">${documento.cantidad}</span>
                        </li>`;
                    }

                }
            }
        });

        $(".modal-header").css("background-color", "#512DA8");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Documentos del  alumno: " + nombre);
        $('#modalDocumentos').modal('show');
    });



    //para mostrarlas carreras del alumno
    $(document).on("click", ".btnCarreras", function () {
        fila = $(this).closest("tr");
        tablaAlumnos.column(0).visible(1);//ponemos visible el id para consultarlo
        alumno_id = parseInt($(this).closest('tr').find('td:eq(0)').text());
        tablaAlumnos.column(0).visible(0);//lo volvemos a esconder
        console.log(alumno_id);
        nombre = fila.find('td:eq(2)').text();
        $.ajax({
            url: "API/alumnos_Carreras.php",
            type: "POST",
            datatype: "json",
            data: { alumno_id: alumno_id },
            success: function (data) {

                $("#listaCarreras").find('li').remove();//limpia la lista de carreras del modal
                let carreras = JSON.parse(data);// parseamos de la api el string a json 
                let lista = document.querySelector('#listaCarreras'); // seleccionamos nuesta lista donde mostramos todo
                for (const carrera of carreras) {// recorremos el json y seguido hacemos un innerhtml para mostrar los datos 
                    lista.innerHTML += `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                ${carrera.carrera_nombre} <BR>
                ${carrera.facultad_nombre}
                <span class="badge bg-primary rounded-pill">${carrera.generacion}</span>
                </li>
                `;
                }
            }
        });

        $(".modal-header").css("background-color", "#512DA8");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Carreras del  alumno: " + nombre);
        $('#modalCarreras').modal('show');
    });


    // escondemos las filas donde estan las ID Que no queremos estar moestrando
    tablaAlumnos.column(0).visible(0);
    tablaAlumnos.column(4).visible(0);


    //////////////////////////////////AlmacenS Y EC ////////////////////////////////////////////////////////////////////////////////////////////////////////

    var selectorAlmacenes = document.getElementById("selectAlmacen"); // identificamos el combobox de Almacenes 
    // llenamos los combobox facultades
    $.getJSON('serverside/serversideAlmacenes.php', function (results) {// consultamos las Almacenes 
        var esprimero = true; //declaramos la bariable que no servira como bandera
        for (var i = 0; i < results['aaData'].length; i++) {//recorremos la data de Almacenes
            if (esprimero) { // si es la primera entnces la dejamos seleccionada 
                $("#selectAlmacen").prepend("<option value='" + results['aaData'][i][0] + "' selected='selected'>" + results['aaData'][i][1] + "</option>");
                esprimero = false;//ponemos la bandera en falso 
                llenarEC(selectorAlmacenes.value);// procedemos a llenar el combobox de EC con la primera opcionen de facultades 
            }
            else// todas las demas opciones quedan seleccionadas 
                $("#selectAlmacen").prepend("<option value='" + results['aaData'][i][0] + "'>" + results['aaData'][i][1] + "</option>");

        }
    });

    selectorAlmacenes.addEventListener('change', (e) => {// si el selector de facultades cambia de opcion actualizamos al de EC con la nueva informacion 
        llenarEC(e.target.value);
    });

    //llenamos los combobox EC 
    function llenarEC(idAlmacen) {
        $("#selectEC").find('option').remove();//limpia el select cada que cada que se ejucta el metodo para no tener datos erroneos 
        $.getJSON('serverside/serversideEC.php', function (results) {// consultamos las EC 
            for (var i = 0; i < results['aaData'].length; i++) {//recorremos la data de EC
                if (results['aaData'][i][2] == idAlmacen) {// si la informacion es de la facultas que queremos lo agregamos al select 
                    $("#selectEC").prepend("<option value='" + results['aaData'][i][0] + "' selected='selected'>" + results['aaData'][i][1] + "</option>");
                }
            }
        });
    }

    //////////////////////////////////CARRERAS Y FACULTADES ////////////////////////////////////////////////////////////////////////////////////////////////////////

    var selectorFacultades = document.getElementById("selectFacultades"); // identificamos el combobox de facultades 
    // llenamos los combobox facultades
    $.getJSON('serverside/serversideFacultades.php', function (results) {// consultamos las facultades 
        var esprimero = true; //declaramos la bariable que no servira como bandera
        for (var i = 0; i < results['aaData'].length; i++) {//recorremos la data  de facultades
            if (esprimero) { // si es la primera entnces la dejamos seleccionada 
                $("#selectFacultades").prepend("<option value='" + results['aaData'][i][0] + "' selected='selected'>" + results['aaData'][i][1] + "</option>");
                esprimero = false;//ponemos la bandera en falso 
                llenarCarreras(results['aaData'][i][0]);// procedemos a llenar el combobox de carreras con la primera opcionen de facultades 
            }
            else// todas las demas opciones quedan seleccionadas 
                $("#selectFacultades").prepend("<option value='" + results['aaData'][i][0] + "'>" + results['aaData'][i][1] + "</option>");

        }
    });

    selectorFacultades.addEventListener('change', (e) => {// si el selector de facultades cambia de opcion actualizamos al de carrera con la nueva informacion 
        llenarCarreras(e.target.value);
    });

    //llenamos los combobox carreras 
    function llenarCarreras(idfacultad) {
        $("#selectCarreras").find('option').remove();//limpia el select cada que cada que se ejucta el metodo para no tener datos erroneos 
        $.getJSON('serverside/serversideCarreras.php', function (results) {// consultamos las carreras 
            for (var i = 0; i < results['aaData'].length; i++) {//recorremos la data de carreras
                if (results['aaData'][i][3] == idfacultad) {// si la informacion es de la facultas que queremos lo agregamos al select 
                    $("#selectCarreras").prepend("<option value='" + results['aaData'][i][0] + "' selected='selected'>" + results['aaData'][i][1] + "</option>");
                }
            }
        });
    }



    //////////////////////////////////CARRERAS Y FACULTADES ////////////////////////////////////////////////////////////////////////////////////////////////////////

    var selectorFacultades = document.getElementById("selectDocumentos"); // identificamos el combobox de facultades 
    // llenamos los combobox facultades
    $.getJSON('serverside/serversideDocumentos.php', function (results) {// consultamos las facultades 
        var esprimero = true; //declaramos la bariable que no servira como bandera
        for (var i = 0; i < results['aaData'].length; i++) {//recorremos la data  de facultades
            if (esprimero) { // si es la primera entnces la dejamos seleccionada 
                $("#selectDocumentos").prepend("<option value='" + results['aaData'][i][0] + "' selected='selected'>" + results['aaData'][i][1] + "</option>");
                esprimero = false;//ponemos la bandera en falso 
            }
            else// todas las demas opciones quedan seleccionadas 
                $("#selectDocumentos").prepend("<option value='" + results['aaData'][i][0] + "'>" + results['aaData'][i][1] + "</option>");
        }
    });







});

