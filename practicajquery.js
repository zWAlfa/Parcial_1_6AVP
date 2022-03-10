$(document).ready(function(){
    
    $("#titulo").click(function(){
        $(this).hide();
    });

    $("#boton").click(function(){
        $("#e1").fadeToggle(2000);
        $("#e2").fadeToggle(4000);
        $("#e3").fadeToggle(6000);

        $("#e1").fadeTo("slow", 0.20);
        $("#e2").fadeTo("slow", 0.5);
        $("#e3").fadeTo("slow", 0.7);
   
    });

    $("#lista").click(function(){
        $("#contenido").slideToggle("slow");
    });

});