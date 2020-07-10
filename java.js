document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("mousedown", dibujarMause);
document.addEventListener("mousemove", dibujarMause2);
document.addEventListener("mouseup", dibujarMause3);

var botonRojo =document.getElementById("botonColorRojo");
var botonBlanco =document.getElementById("botonColorBlanco");
var botonNegro =document.getElementById("botonColorNegro");

botonRojo.addEventListener("click", seleccionarRojo);
botonBlanco.addEventListener("click", seleccionarBlanco)
botonNegro.addEventListener("click", seleccionarNegro)

var cuadrito = document.getElementById("area_dibujo");
var papel = cuadrito.getContext("2d");

var x = 250;
var y = 250;
var trazo = false;
var x = 0;
var y = 0;
var color_trazado="black";

/* dibujarlinea("red", 0,0,0,600,papel);
dibujarlinea("red",0,600,1000,600,papel);
dibujarlinea("red", 1000, 600, 1000, 0, papel);
dibujarlinea("red", 1000, 0, 0, 0, papel); */

var teclas = {
	ARRIBA: 38, 
	ABAJO: 40,
	DERECHA: 39,
	IZQUIERDA: 37
};

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
	lienzo.beginPath(); 
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 2;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarTeclado(evento) 
{
	console.log(evento);
	var colorcito = color_trazado;
	var movimiento = 10;

	if(evento.keyCode == teclas.ARRIBA){
		dibujarlinea(colorcito, x , y, x, y - movimiento, papel);
		y = y-movimiento;
	}
	if(evento.keyCode == teclas.ABAJO){
		dibujarlinea(colorcito, x , y, x, y + movimiento, papel);
		y = y+movimiento;
	}
	if(evento.keyCode == teclas.DERECHA){
		dibujarlinea(colorcito, x , y, x  + movimiento, y, papel);
		x = x+movimiento;
	}
	if(evento.keyCode == teclas.IZQUIERDA){
		dibujarlinea(colorcito, x , y, x  - movimiento, y, papel);
		x = x-movimiento;
	}

}

function dibujarMause(evento){
	trazo = true;
	x = evento.layerX;
	y = evento.layerY;
}

function dibujarMause2(evento){
	console.log(evento);
	if (trazo == true){
		dibujarlinea(color_trazado,x,y-20,evento.layerX,evento.layerY-20,papel);
		x = evento.layerX;
		y = evento.layerY;
	}
}
function dibujarMause3(evento){
	trazo = false;
}

function seleccionarRojo(){
	color_trazado ="red";
}
function seleccionarBlanco() {
	color_trazado="white"
}
function seleccionarNegro(){
	color_trazado="black"
}