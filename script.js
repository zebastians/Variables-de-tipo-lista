var lista=[ "Hola" , "Como Estas", "Adiós" ];

var numero=0;

document.getElementById("h1").innerHTML=lista;

document.getElementById("h12").innerHTML=lista[ numero ];

document.getElementById("h13").innerHTML=lista[ numero + 1];

document.getElementById("h14").innerHTML=lista[ numero + 2];


var length=lista.length;

document.getElementById("h15").innerHTML=length;