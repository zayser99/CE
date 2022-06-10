$(document).ready(function(){
    $("#tablaAlumnos").DataTable({
       "processing": true,
       "serverSide": true,
       "sAjaxSource": "serverside/serversideAlumnos.php",
       "columnDefs":[{
           "data":null
       }]   
    }); 
 });