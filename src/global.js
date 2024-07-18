//Variables 

//var a; // Estamos declarando la variable a 
//var b = 'b'; //Estamos declarando / Asignamos

//b = 'bb'; //Reasignación 
//var a = 'aa'; //Redeclaración 


// Global Scope example 

var fruit = 'Apple'; // Global 
console.log(fruit);

//Crear una funcion que pueda leer el elemento 

function bestFruit() {
    console.log(fruit);
}


bestFruit();

function countries (){
    country = 'Colombia';  
    console.log(country);
}