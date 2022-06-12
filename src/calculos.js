/* Integrantes: 
    Edwin González      8-940-1565
    Christian Pinzón    8-929-1046
*/


/* Entrada de datos */

/*
    Referencias a elementos de la interfaz gráfica
*/

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


/*    Eventos para asistencia al introducir datos para mantener la proporción   */

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

function igualar(inputA,inputB){
    inputB.value = inputA.value;
}

//  Evento cuando elemento pierde el focus: focusout

p1x.addEventListener("focusout", (event)=>{ 
    igualar(p1x,p18x);
    igualar(p1x,p2x);
    });
p1y.addEventListener("focusout", (event)=>{ 
    igualar(p1x,p18x);
    igualar(p1y,p18y);
    igualar(p1y,p17y);
    }, false);

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

const miX = document.querySelector("#miX");
const miY = document.querySelector("#miY");
const centroideX = document.querySelector("#centroideX");
const centroideY = document.querySelector("#centroideY");

function responder(cX,cY,momentoInerciaX,momentoInerciaY){
    centroideX.innerHTML = `Coordenada de centroide en X:  ${cX} cm`;
    centroideY.innerHTML = `Coordenada de centroide en Y:  ${cY} cm`;
    miX.innerHTML = `Momento de inercia en X: ${momentoInerciaX} cm4`;
    miY.innerHTML = `Momento de inercia en Y: ${momentoInerciaY} cm4`;

}

/*      Dibujar sección completa     */

function dibujar() {
    const canvas = document.getElementById('plano');
    if (canvas.getContext){
      let ctx = canvas.getContext('2d');

        let espacioInicial = 100;
        let proporcion = 20;

      // Sección rellenada 
      ctx.beginPath();
      ctx.fillStyle = "#808080"; 
      
      ctx.lineTo(espacioInicial + (p2x.value*proporcion), 500- p2y.value*proporcion);
      ctx.lineTo(espacioInicial + (p3x.value*proporcion), 500- p3y.value*proporcion);
      ctx.lineTo(espacioInicial + (p4x.value*proporcion), 500- p4y.value*proporcion);
      ctx.lineTo(espacioInicial + (p5x.value*proporcion), 500- p5y.value*proporcion);
      ctx.lineTo(espacioInicial + (p6x.value*proporcion), 500- p6y.value*proporcion);
      ctx.lineTo(espacioInicial + (p7x.value*proporcion), 500- p7y.value*proporcion);
      ctx.lineTo(espacioInicial + (p8x.value*proporcion), 500- p8y.value*proporcion);
      ctx.lineTo(espacioInicial + (p9x.value*proporcion), 500- p9y.value*proporcion);
      ctx.lineTo(espacioInicial + (p10x.value*proporcion), 500- p10y.value*proporcion);
      ctx.lineTo(espacioInicial + (p11x.value*proporcion), 500- p11y.value*proporcion);
      ctx.lineTo(espacioInicial + (p12x.value*proporcion), 500- p12y.value*proporcion);
      ctx.lineTo(espacioInicial + (p13x.value*proporcion), 500- p13y.value*proporcion);
      ctx.lineTo(espacioInicial + (p14x.value*proporcion), 500- p14y.value*proporcion);
      ctx.lineTo(espacioInicial + (p15x.value*proporcion), 500- p15y.value*proporcion);
      ctx.lineTo(espacioInicial + (p16x.value*proporcion), 500- p16y.value*proporcion);
      ctx.lineTo(espacioInicial + (p17x.value*proporcion), 500- p17y.value*proporcion);
      ctx.lineTo(espacioInicial + (p18x.value*proporcion), 500- p18y.value*proporcion);
      
      ctx.fill();
      ctx.closePath();

    //   // Ejemplo de Triángulo contorneado
    //   ctx.beginPath();
    //   ctx.moveTo(125,125);
    //   ctx.lineTo(125,45);
    //   ctx.lineTo(45,125);
    //   ctx.closePath();
    //   ctx.stroke();
    }
  }

  /*      Dibujar un centroide     */
    function dibujarCentroide(x,y){
        const canvas = document.getElementById('plano');
        if (canvas.getContext){
        let ctx = canvas.getContext('2d');

            let espacioInicial = 100;
            let proporcion = 20;
            let punto = 5;              // Cambia el tamaño del punto
            ctx.fillStyle = "#ff2626";  // Color rojo
            ctx.beginPath();            // Iniciar trazo
            //ctx.lineTo(espacioInicial + x*proporcion,y*proporcion);
            ctx.arc(espacioInicial + (x*proporcion),500- y*proporcion, punto, 0, Math.PI * 2, true); // Dibujar un punto usando la funcion arc
            ctx.fill();                 // Terminar trazo
          
        }
    }

/* ----------------------------------------------------------------------------------------------------------*/

/*      Resolución del problema     */

/*      Funciones auxiliares        */

function distancia(x1,y1,x2,y2){
    return Math.sqrt((Math.pow(x2-x1,2)+Math.pow(y2-y1,2)));
}

function miXRectangulo(base,altura){
    return (1/12)*base*Math.pow(altura,3);
}

function miYRectangulo (base,altura){
    return (1/12)*Math.pow(base,3)*altura;
}

function miXTriangulo(base,altura){
    return (1/36)*base*Math.pow(altura,3);
}

function miYTriangulo(base,altura){
    return (1/36)*Math.pow(base,3)*altura;
}

/*      Llamada al cálculo final    */

const calcular = document.querySelector("#btnCalcular");
calcular.addEventListener("click", (event)=>{ 
    

/* Distancias nombradas */

let h = distancia(p1x.value,p1y.value,p2x.value,p2y.value);
let b = distancia(p2x.value,p2y.value,p3x.value,p3y.value);
let tw = distancia(p1x.value,0,p7x.value,0);
let tf = distancia(p7x.value,0,p7x.value,p7y.value);
let m = distancia(p5x.value,p5y.value,p4x.value,p5y.value);
let n = distancia(p4x.value,p5y.value,p4x.value,p4y.value);

console.info("Valores de Distancias:")
console.table({
    h:h,
    b:b,
    tw:tw,
    tf:tf,
    m:m,
    n:n
});

/*    Formas simples    */

let formas_simples = [
    // Forma 1
    {
        base: tw,
        altura: h,
        area: tw * h,
        cx: tw/2,
        cy: h/2,
        mix: miXRectangulo(tw,h),
        miy: miYRectangulo(tw,h)
    },
    // Forma 2
    {
        base: Math.abs(b-tw) ,
        altura: tf,
        area : Math.abs(b-tw) * tf,
        cx: tw + Math.abs(b-tw)/2,
        cy: Math.abs(h-tf) + (tf)/2,
        mix: miXRectangulo(Math.abs(b-tw),tf),
        miy: miYRectangulo(Math.abs(b-tw),tf)
    },
    // Forma 3
    {
        base: m,
        altura: n,
        area : (m * n)/2,
        cx: Math.abs(b-m) + (2*m)/3,
        cy: Math.abs(h-tf) - n/3,
        mix: miXTriangulo(m,n),
        miy: miYTriangulo(m,n)
    },
    // Forma 4
    {
        base: m,
        altura: n,
        area : (m * n)/2,
        cx: b + (m)/3,
        cy: Math.abs(h-tf) - n/3,
        mix: miXTriangulo(m,n),
        miy: miYTriangulo(m,n)
    },
    // Forma 5
    {
        base: b-tw,
        altura: tf,
        area : Math.abs(b-tw)* (tf),
        cx: b  + (Math.abs(b-tw)/2),
        cy: Math.abs(h-tf) + (tf)/2,
        mix: miXRectangulo(Math.abs(b-tw),tf),
        miy: miYRectangulo(Math.abs(b-tw),tf)
    },

    // Forma 6
    {
        base: tw,
        altura: h,
        area : tw * h,
        cx: Math.abs((2*b) -tw )+ (tw/2),
        cy:  h/2,
        mix: miXRectangulo(tw,h),
        miy: miYRectangulo(tw,h)
    },
    // Forma 7
    {
        base: Math.abs(b-tw),
        altura: tf,
        area : Math.abs(b-tw) * tf,
        cx: b  + (Math.abs(b-tw)/2),
        cy: tf/2,
        mix: miXRectangulo(Math.abs(b-tw),tf),
        miy: miYRectangulo(Math.abs(b-tw),tf)
    },
    // Forma 8
    {
        base: m,
        altura: n,
        area : (m * n)/2,
        cx: b + (m)/3,
        cy: tf + (n)/3,
        mix: miXTriangulo(m,n),
        miy: miYTriangulo(m,n)
    },
    // Forma 9
    {
        base: m,
        altura: n,
        area : (m* n)/2,
        cx: Math.abs(b-m) + (2*m)/3,
        cy: Math.abs(h-tf) - n/3,
        mix: miXTriangulo(m,n),
        miy: miYTriangulo(m,n)
    },  
    // Forma 10
    {
        base: Math.abs(b-tw),
        altura: tf,
        area : Math.abs(b-tw) * tf,
        cx: tw + Math.abs(b-tw)/2,
        cy: Math.abs(h-tf) + tf/2,
        mix: miXRectangulo(Math.abs(b-tw),tf),
        miy: miYRectangulo(Math.abs(b-tw),tf)
    }
];

/* Calcular centroide total de la forma compuesta */

console.info("Datos de Formas Simples:")
console.table(formas_simples);

function calcularCentroideX(formas){
    let xiAi = 0;
    let Ai = 0; 
    formas.forEach(forma => {
        xiAi += forma.cx*forma.area;
        Ai += forma.area;
    });
    return xiAi/Ai; 
}

function calcularCentroideY(formas){
    let yiAi = 0;
    let Ai = 0; 
    formas.forEach(forma => {
        yiAi += forma.cy*forma.area;
        Ai += forma.area;
    });
    return yiAi/Ai; 
}

/*
    calcular momento de inerciax:
    // forma_compuesta.mix = Ix1 + Ix2 + Ix3 + Ix4 + Ix5 + Ix6 + Ix7 + Ix8 + Ix9 + Ix10;
    // Ix1 = formas_simple[0].mix + (Math.pow(Math.abs(formas_simple[0].cy-forma_compuesta.cy),2)*formas_simple[0].area); 
*/

    function calcularMIX(formas){ 
        let Ix = 0;
        formas.forEach(forma => {
            Ix += forma.mix + (Math.pow(Math.abs(forma.cy-forma_compuesta.cy),2)*forma.area);
        });
        return Ix; 
    }

    function calcularMIY(formas){ 
        let Iy = 0;
        formas.forEach(forma => {
            Iy += forma.mix + (Math.pow(Math.abs(forma.cx-forma_compuesta.cx),2)*forma.area);
        });
        return Iy; 
    }

let forma_compuesta = {
    cx: calcularCentroideX(formas_simples),
    cy: calcularCentroideY(formas_simples),
    mix: 0, // coming soon
    miy: 0, // coming soon
};

    forma_compuesta.mix = calcularMIX(formas_simples);
    forma_compuesta.miy = calcularMIY(formas_simples);
    
    responder(forma_compuesta.cx.toFixed(2), forma_compuesta.cy.toFixed(2), forma_compuesta.mix.toFixed(2), forma_compuesta.miy.toFixed(2));
    dibujar();
    dibujarCentroide(forma_compuesta.cx,forma_compuesta.cy);

}, false);

function valoresDePrueba(){

    p1x.value = 0;
    p1y.value = 0;
    p2x.value = 0;
    p2y.value = 10;
    p3x.value = 5;
    p3y.value = 10;
    p4x.value = 5;
    p4y.value = 7;
    p5x.value = 4;
    p5y.value = 8;
    p6x.value = 2;
    p6y.value = 8;
    p7x.value = 2;
    p7y.value = 2;
    p8x.value = 4;
    p8y.value = 2;
    p9x.value = 5;
    p9y.value = 3;
    p10x.value = 6;
    p10y.value = 2;
    p11x.value = 8;
    p11y.value = 2;
    p12x.value = 8;
    p12y.value = 8;
    p13x.value = 6;
    p13y.value = 8;    
    p14x.value = 5;
    p14y.value = 7;    
    p15x.value = 5;
    p15y.value = 10;    
    p16x.value = 10;
    p16y.value = 10;
    p17x.value = 10;
    p17y.value = 0;
    p18x.value = 0;
    p18y.value = 0;

    console.info("Listo para probar");
}
