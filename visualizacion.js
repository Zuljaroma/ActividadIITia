d3.csv("datos.csv").then(function(data){
    
    console.log("Datos cargados");
    
    d3.select("body").append("h1").text("Segunda Sección");
});