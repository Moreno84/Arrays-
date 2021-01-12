
    //Ejercicio #1

    //Crear una clase para estructurar la informacion.

    class serie {
    titulo;
    tematica;
    actores = [];
    actorFavorito;
   

    //declaramos el constructor.

    constructor(titulo,tematica,actores) {
        this.titulo = titulo;
        this.tematica = tematica;
        this.actores = actores;
        

    
    }
    //Ejercicio #2


    //Funcion para generar el actor favorito.
     generarActorFavorito = function() {
        let actor = this.actores.length;
        let calcular = Math.floor(Math.random() * (actor));
        this.actorFavorito = this.actores[calcular];


    };
    

}

    //Ejercicio #3

    //Crea 3 series diferentes:.

    // la primera serie con 2 actores
let serie01 = new serie("La Que Se Avecina", "Humor",["Fermin","Amador"]);
serie01.generarActorFavorito();
console.log(serie01);

    //la segunda serie con 3 actores

let serie02 = new serie("Cuentame Como Paso", "Historia",["Antonio Alcantara","Mercedes Fernandez","Toni Alcantara"]);
serie02.generarActorFavorito();
console.log(serie02);

    //la tercera serie con 4 actores
let serie03 = new serie("The Simpsons", "Humor",["Homer","Bart","Lisa","Marge"]);
serie03.generarActorFavorito();
console.log(serie03);

    //Ejercicio #4

function muestraSeries() {


 let total_series= new Array(
        new serie("La Que Se Avecina", "Humor",["Fermin","Amador"]),
        new serie("Cuentame Como Paso", "Historia",["Antonio Alcantara","Mercedes Fernandez","Toni Alcantara"]),
        new serie("The Simpsons", "Humor",["Homer","Bart","Lisa","Marge"])
                
                );   
         
     document.getElementById("datosArray").innerHTML="";
            
        let contenidoHTML="";
            
         total_series.forEach(function(serie, posicion) {
            let tituloSerie = serie.titulo;
            let tematicaSerie = serie.tematica;
            let actoresSerie = serie.actores;
            let actor = serie.actores.length;
            let calcular = Math.floor(Math.random() * (actor));
            let actorFavoritoSerie = actoresSerie[calcular];
            
            
            contenidoHTML+= "<div id='d"+posicion+"> onclick='añadir("+posicion+")'>Titulo: "+tituloSerie+"<br> Tematica: "+tematicaSerie+" <br>Actor Favorito: "+ actorFavoritoSerie +" <br>Actores: "+actoresSerie +"</div>"; 
            contenidoHTML+= "<button onclick='borrar_serie("+posicion+")'> Borrar serie </button>";
           
            
            
            });
            
            document.getElementById("datosArray").innerHTML = contenidoHTML;
            
            };



        


            





    
