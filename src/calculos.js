
// Entrada de datos

//Evento cuando elemento pierde el focus: focusout

function igualar(inputA,inputB){

    inputB.value = inputA.value;

}

console.warn("Los campos se ajustarán automáticamente para mantener las proporciones.");

const p1x = document.querySelector("#P1x");
const p1y = document.querySelector("#P1y");

const p2x = document.querySelector("#P2x");
const p2y = document.querySelector("#P2y");

const p3x = document.querySelector("#P3x");
const p3y = document.querySelector("#P3y");

const p4x = document.querySelector("#P4x");
const p4y = document.querySelector("#P4y");

const p5x = document.querySelector("#P5x");
const p5y = document.querySelector("#P5y");

const p6x = document.querySelector("#P6x");
const p6y = document.querySelector("#P6y");

const p7x = document.querySelector("#P7x");
const p7y = document.querySelector("#P7y");

const p8x = document.querySelector("#P8x");
const p8y = document.querySelector("#P8y");

const p9x = document.querySelector("#P9x");
const p9y = document.querySelector("#P9y");

const p10x = document.querySelector("#P10x");
const p10y = document.querySelector("#P10y");

const p11x = document.querySelector("#P11x");
const p11y = document.querySelector("#P11y");

const p12x = document.querySelector("#P12x");
const p12y = document.querySelector("#P12y");

const p13x = document.querySelector("#P13x");
const p13y = document.querySelector("#P13y");

const p14x = document.querySelector("#P14x");
const p14y = document.querySelector("#P14y");

const p15x = document.querySelector("#P15x");
const p15y = document.querySelector("#P15y");

const p16x = document.querySelector("#P16x");
const p16y = document.querySelector("#P16y");

const p17x = document.querySelector("#P17x");
const p17y = document.querySelector("#P17y");

const p18x = document.querySelector("#P18x");
const p18y = document.querySelector("#P18y");



p1x.addEventListener("focusout", (event)=>{ 
    igualar(p1x,p18x);
    igualar(p1x,p2x);
    });
p1y.addEventListener("focusout", (event)=>{ 
    igualar(p1x,p18x);
    igualar(p1y,p18y);
    igualar(p1y,p17y);
    }, false);

p2x.addEventListener("focusout", (event)=>{ 
    igualar(p2x,p1x);}, false);
p2y.addEventListener("focusout", (event)=>{ 
    igualar(p2y,p3y);
    igualar(p2y,p15y);
    igualar(p2y,p16y);}, false);

p3x.addEventListener("focusout", (event)=>{ 
    igualar(p3x,p4x);
    igualar(p3x,p9x);
    igualar(p3x,p14x);
    igualar(p3x,p15x);}, false);

p4y.addEventListener("focusout", (event)=>{ 
    igualar(p4y,p14y);}, false);

p5x.addEventListener("focusout", (event)=>{ 
        igualar(p5x,p8x);}, false);
p5y.addEventListener("focusout", (event)=>{ 
        igualar(p5y,p6y);
        igualar(p5y,p12y);
        igualar(p5y,p13y);}, false);

p6x.addEventListener("focusout", (event)=>{ 
        igualar(p6x,p7x);}, false);

p7y.addEventListener("focusout", (event)=>{ 
        igualar(p7y,p8y);
        igualar(p7y,p10y);
        igualar(p7y,p11y);}, false);

p10x.addEventListener("focusout", (event)=>{ 
        igualar(p10x,p13x);}, false);

p11x.addEventListener("focusout", (event)=>{ 
        igualar(p11x,p12x);}, false);

p16x.addEventListener("focusout", (event)=>{ 
        igualar(p16x,p17x);}, false);


const limpiar = document.querySelector("#btnLimpiar");

function limpiarInputs(){

    p1x.value = null;
    p1y.value = null;
    p2x.value = null;
    p2y.value = null;
    p3x.value = null;
    p3y.value = null;
    p4x.value = null;
    p4y.value = null;
    p5x.value = null;
    p5y.value = null;
    p6x.value = null;
    p6y.value = null;
    p7x.value = null;
    p7y.value = null;
    p8x.value = null;
    p8y.value = null;
    p9x.value = null;
    p9y.value = null;
    p10x.value = null;
    p10y.value = null;
    p11x.value = null;
    p11y.value = null;
    p12x.value = null;
    p12y.value = null;
    p13x.value = null;
    p13y.value = null;    
    p14x.value = null;
    p14y.value = null;    
    p15x.value = null;
    p15y.value = null;    
    p16x.value = null;
    p16y.value = null;
    p17x.value = null;
    p17y.value = null;
    p18x.value = null;
    p18y.value = null;

}

limpiar.addEventListener("click", (event)=>{ 
            limpiarInputs();
        }, false);

/*

    igualdades para mantener la proporción: 

    1x = 18x, 2x
    1y = 18y, 17y 
    2y = 3y, 15y, 16y
    3x = 4x, 9x, 14x, 15x
    4Y = 14y
    5x = 8x,
    5y = 6y, 12y, 13y
    6x = 7x
    7y = 8y, 10y 11y
    9y 
    10x = 13x
    11x= 12x
    16x = 17x

*/

// Cálculo

const calcular = document.querySelector("#btnCalcular");
calcular.addEventListener("click", (event)=>{ 
    console.info("Trabajo en proceso");
}, false);



// console.warn("¡Ejecutado por completo!");





















