// Hace que el H! se esconda
$("h1").hide();

//Estructura basica $ dolar y selector
$(document).ready(function () {
    // Cambia el colo de fondo de los elementos Indicados
    // Especificidad parecida a CSS
    $("p").css({ "background-color": "skyblue" });
    $("#tercero").css({ "background-color": "silver" });
    $(".cuarto").css({ "background-color": "yellow" });

    $("button").click(function () {
        alert("Hola");
    });

    $("#oculta").click(function () {
        $("#tercero").hide();
    });
    $("#muestra").click(function () {
        $("#tercero").show();    
    });


});

