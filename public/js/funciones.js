

//Funcion que suma parcialmente las 3 flechas de cada arquero, entregando como resultado el total de la serie
function sumaParcial() {
	// body...
	var total,valor1,valor2,valor3;
	valor1 = document.getElementById("input1").value;//obtiene el primer elemento
	valor2 = document.getElementById("input2").value;//obtiene el segundo elemento
	valor3 = document.getElementById("input3").value;//obtiene el tercer elemento

    total= parseInt(valor1) + parseInt(valor2) + parseInt(valor3);
    alert("Total " + total);
	document.getElementById("total").value=total;
	comparar();
	

}

//Funcion que suma los totales de las asignaciones segun la comparacion, es decir, suma los puntajes asignados a quien gano
// y quien perdio, 
function sumaTotal() {
	//body...

	

}

//Funcion que compara los resultados de las sumas parciales y asigna el valor dependiendo de la comparacion,
//es decir, asigna 2 si el contrincante gana, 1 si hay empate y cero si pierde

function comparar(){
	//body...
	var jugador1, jugador2, valor1, valor2;

	valor1 = document.getElementById().value;
	valor2 = document.getElementById().value;

	if (valor1 < valor2) {
		//se deben enviar estos valores a las respectivas casillas de la tabla utilizando los id o el nombre
		jugador1 = 0;
		jugador2 = 2;
	}

	if (valor1 > valor2) {
		//se deben enviar estos valores a las respectivas casillas de la tabla utilizando los id o el nombre
		jugador1 = 2;
		jugador2 = 0;
	}

	if (valor1 = valor2) {
		//se deben enviar estos valores a las respectivas casillas de la tabla utilizando los id o el nombre
		jugador1 = 1;
		jugador2 = 2;
	}

}

//Funcion que define al ganador del match eliminatorio, verificando cual de los contrincantes llega primero a los 6 puntos
//
function ganador(){

	var sumaTotal1, sumaTotal2;

	if (sumaTotal1 < sumaTotal2) {}
		//Gana el competidor 1
	if (sumaTotal1 > sumaTotal2) {}
		//gana el competidor 2
	if (sumaTotal1 = sumaTotal2) {}
		//empate
}	

//Funcion que al producirse un empate 5 a 5 en el quinto set, permite que se defina al ganador con una flecha de desepate
function desempate(){

}









