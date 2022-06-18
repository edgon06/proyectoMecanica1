/* 
    Proyecto Grupal #1
    
    Cálculo de centroides y momentos de inercia: caso #7

    Integrantes: 
        Edwin González      8-940-1565
        Christian Pinzón    8-929-1046

*/

/* ----------------------------------------------------------------------------------------------------------*/

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

function asignarValor(input, valor){
    input.value = valor;
}

// Establecer que inicie en el origen
p1x.value = 0;
p1y.value = 0;
asignarValor(p18x,p1x.value);
asignarValor(p18y,p1x.value);
asignarValor(p2x,p1x.value);
asignarValor(p17y,p1x.value);

        /* Distancias nombradas */

    let h;  // = distancia(p1x.value,p1y.value,p2x.value,p2y.value);
    let b;  // = h/2;    //distancia(p2x.value,p2y.value,p3x.value,p3y.value);
    let tw; // = distancia(p1x.value,0,p6x.value,0);
    let tf; // = distancia(0,p2y.value,0,p5y.value);
    let m;  // = distancia(b,0,p5x.value,0);
    let n;  // = distancia(0,p5y.value,0,p4y.value);

const asistencia = document.querySelector("#asistencia");
asistencia.onclick = ()=> {
if(asistencia.checked == true)
    {

    limpiarInputs();   

    p2y.style="border-color: rgb(42, 0, 194)";

    p1x.disabled = true;
    p1y.disabled = true;
    p2x.disabled = true;
    p3x.disabled = true;
    p3y.disabled = true;
    p4x.disabled = true;
    p6y.disabled = true;
    p7x.disabled = true;
    p7y.disabled = true;
    p8x.disabled = true;
    p8y.disabled = true;
    p9x.disabled = true;
    p9y.disabled = true;
    p10x.disabled = true;
    p10y.disabled = true;
    p11x.disabled = true;
    p11y.disabled = true;
    p12x.disabled = true;
    p12y.disabled = true;
    p13x.disabled = true;
    p13y.disabled = true;
    p14x.disabled = true;
    p14y.disabled = true;
    p15x.disabled = true;
    p15y.disabled = true;
    p16x.disabled = true;
    p16y.disabled = true;
    p17x.disabled = true;
    p17y.disabled = true;
    p18x.disabled = true;
    p18y.disabled = true;

    p4y.disabled = true;
    p5x.disabled = true;
    p5y.disabled = true;
    p6x.disabled = true;

    //  Evento cuando elemento pierde el focus: focusout

    p2y.oninput = ()=>{ 
        
        h = distancia(p1x.value,p1y.value,p2x.value,p2y.value);
        b = h/2;    

        asignarValor(p3x,b);
        asignarValor(p3y,h);
        asignarValor(p4x,b);
        asignarValor(p14x,b);
        asignarValor(p15x,b);
        asignarValor(p9x,b);
        asignarValor(p15y,h);
        asignarValor(p16x,h);
        asignarValor(p16y,h);
        asignarValor(p17x,h);

        p4y.disabled = false;
        p4y.style="border-color: rgb(42, 0, 194)";
    };

    // #
    p4y.oninput = ()=>{ 
        asignarValor(p14y, p4y.value);

        p5x.disabled = false;
        p5x.style="border-color: rgb(42, 0, 194)";
        p2y.disabled = true; 
    };

    //#
    p5x.oninput = ()=>{ 
            
            m = distancia(b,0,p5x.value,0);

            asignarValor(p8x,p5x.value);
            asignarValor(p13x,b+m);
            asignarValor(p10x,b+m);
            p5y.disabled = false;
            p5y.style="border-color: rgb(42, 0, 194)";
            p4y.disabled = true;
        };

    //#    
    p5y.oninput = () =>{ 
            
            n = distancia(0,p5y.value,0,p4y.value);
            tf = distancia(0,p2y.value,0,p5y.value);

            asignarValor(p8y,tf);
            asignarValor(p9y,tf+n);
            asignarValor(p10y,tf);
            asignarValor(p6y,p5y.value);
            asignarValor(p12y,p5y.value);
            asignarValor(p13y,p5y.value);
            p6x.disabled = false;
            p6x.style="border-color: rgb(42, 0, 194)";
            p5x.disabled = true;
        };

        //#
    p6x.oninput = () =>{
            
            tw = distancia(p1x.value,0,p6x.value,0);

            asignarValor(p7x,p6x.value);
            asignarValor(p7y,tf);
            asignarValor(p11x,h-tw);
            asignarValor(p11y,p7y.value);
            asignarValor(p12x,h-tw);
            asignarValor(p12y,h-tf);
            p5y.disabled = true;
        };    
    }else
    {
        p2y.style="";
        p4y.style="";
        p5x.style="";
        p5y.style="";
        p6x.style="";

        p4y.disabled = false;
        p5x.disabled = false;
        p5y.disabled = false;
        p6x.disabled = false;

        p1x.disabled = false;
        p1y.disabled = false;
        p2x.disabled = false;
        p3x.disabled = false;
        p3y.disabled = false;
        p4x.disabled = false;
        p6y.disabled = false;
        p7x.disabled = false;
        p7y.disabled = false;
        p8x.disabled = false;
        p8y.disabled = false;
        p9x.disabled = false;
        p9y.disabled = false;
        p10x.disabled = false;
        p10y.disabled = false;
        p11x.disabled = false;
        p11y.disabled = false;
        p12x.disabled = false;
        p12y.disabled = false;
        p13x.disabled = false;
        p13y.disabled = false;
        p14x.disabled = false;
        p14y.disabled = false;
        p15x.disabled = false;
        p15y.disabled = false;
        p16x.disabled = false;
        p16y.disabled = false;
        p17x.disabled = false;
        p17y.disabled = false;
        p18x.disabled = false;
        p18y.disabled = false;

            //#
            p2y.oninput = ()=>{ 
            };
            //#
            p4y.oninput = ()=>{ 
            };
            //#
            p5x.oninput = ()=>{ 
            };
            //#    
            p5y.oninput = () =>{       
            };
            //#
            p6x.oninput = () =>{   
            };              
    }
 
}



const limpiar = document.querySelector("#btnLimpiar");

function limpiarInputs(){

    p1x.value = 0;
    p1y.value = 0;
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

    asignarValor(p18x,p1x.value);
    asignarValor(p18y,p1x.value);
    asignarValor(p2x,p1x.value);
    asignarValor(p17y,p1x.value);

    borrarGráfica();
    responder(0,0,0,0);
}

limpiar.addEventListener("click", (event)=>{ 
            limpiarInputs();
        }, false);

/* ----------------------------------------------------------------------------------------------------------*/

/*          Funciones de dibujado         */

let espacioInicial = 0;

  /*      Limpiar el Canvas     */
  function borrarGráfica(){
    const canvas = document.getElementById('plano');
    if (canvas.getContext){
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,500,500)
    }
}

  /*      Dibujar centroide     */
  function dibujarCentroide(x,y){
    const canvas = document.getElementById('plano');
    if (canvas.getContext){
    let ctx = canvas.getContext('2d');    
        let proporcion = 20;
        let punto = 5;              // Cambia el tamaño del punto
        ctx.fillStyle = "#ff2626";  // Color rojo
        ctx.beginPath();            // Iniciar trazo
        //ctx.lineTo(espacioInicial + x*proporcion,y*proporcion);
        ctx.arc(espacioInicial + (x*proporcion),500- y*proporcion, punto, 0, Math.PI * 2, true); // Dibujar un punto usando la funcion arc
        ctx.fill();                 // Terminar trazo 
        ctx.closePath(); 
    }
}

/*      Dibujar sección     */
function dibujar() {
    borrarGráfica();
    const canvas = document.getElementById('plano');
    if (canvas.getContext){
      let ctx = canvas.getContext('2d');

        let proporcion = 20;

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

    }
  }

/* ----------------------------------------------------------------------------------------------------------*/

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

/*      Cálculos matemáticos     */

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
let b = distancia(p2x.value,p2y.value,p3x.value,p3y.value); // h/2; 
let tw = distancia(p1x.value,0,p6x.value,0);
let tf = distancia(0,p2y.value,0,p5y.value);
let m = distancia(b,0,p5x.value,0);
let n = distancia(0,p5y.value,0,p4y.value);

if((2*m)<((2*b)-(2*tw))&&((2*n)<(h-(2*tf)))){
    //console.log("Valores de Distancias:")
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
            cy: Math.abs(tf) + n/3,
            mix: miXTriangulo(m,n),
            miy: miYTriangulo(m,n)
        },  
        // Forma 10
        {
            base: Math.abs(b-tw),
            altura: tf,
            area : Math.abs(b-tw) * tf,
            cx: Math.abs(b-tw)/2,
            cy: tf/2,
            mix: miXRectangulo(Math.abs(b-tw),tf),
            miy: miYRectangulo(Math.abs(b-tw),tf)
        }
    ];

    /* Calcular centroide total de la forma compuesta */

    //console.log("Datos de Formas Simples:")
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
        mix: 0, // se calculará con la función calcularMIX()
        miy: 0, // se calculará con la función calcularMIY()
    };

        forma_compuesta.mix = calcularMIX(formas_simples);
        forma_compuesta.miy = calcularMIY(formas_simples);
        responder(forma_compuesta.cx.toFixed(2), forma_compuesta.cy.toFixed(2), forma_compuesta.mix.toFixed(2), forma_compuesta.miy.toFixed(2));
        dibujar();
        dibujarCentroide(forma_compuesta.cx,forma_compuesta.cy);
}else{
    alert("Valores no aceptables, considere otras coordenadas para los puntos.");
    if(asistencia.checked==true){
        asistencia.onclick();
        limpiarInputs();
    }
    
}
}, false);

/* ----------------------------------------------------------------------------------------------------------*/

function valoresDePrueba(asignados){

    if(!asignados){

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
        console.info("Listo para probar con valores propios.");

    } else
    {
        p1x.value = 0;
        p1y.value = 0;
        p2x.value = 0;
        p2y.value = 20;
        p3x.value = 10;
        p3y.value = 20;
        p4x.value = 10;
        p4y.value = 17;
        p5x.value = 8;
        p5y.value = 19;
        p6x.value = 1;
        p6y.value = 19;
        p7x.value = 1;
        p7y.value = 1;
        p8x.value = 8;
        p8y.value = 1;
        p9x.value = 10;
        p9y.value = 3;
        p10x.value = 12;
        p10y.value = 1;
        p11x.value = 19;
        p11y.value = 1;
        p12x.value = 19;
        p12y.value = 19;
        p13x.value = 12;
        p13y.value = 19;    
        p14x.value = 10;
        p14y.value = 17;    
        p15x.value = 10;
        p15y.value = 20;    
        p16x.value = 20;
        p16y.value = 20;
        p17x.value = 20;
        p17y.value = 0;
        p18x.value = 0;
        p18y.value = 0;

        console.info("Listo para probar con valores asignados por el profesor.");
    }
    

    
}

const ajustarDimensiones = document.querySelector("#ajustarDimensiones");
ajustarDimensiones.addEventListener("click", (event)=>{ 
    valoresDePrueba(1);
}, false);

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));