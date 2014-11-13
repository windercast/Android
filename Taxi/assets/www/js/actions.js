function captura(){
	var porId = document.getElementById("calcula").value;
	if(porId == "" || porId == undefined || porId < 50){
		porId = 50;
	}
	porId = (Math.round(0.72 * porId)) * 100;
	return porId;
}
function print(valor, recargo){
	$("#resultado").text("$" + valor);
	if(recargo == 0){
		$("#title1").css({'display':'block'});
		$("#title2").css({'display':'none'});
	}else{
		$("#title2").css({'display':'block'});
		$("#title1").css({'display':'none'});
	}
}
function calculoGeneral() {
	var result = captura() + recargo();
	print(result, recargo());
}

function calculoAero(){
	var result = 3600 + captura() + recargo();
	print(result, recargo());
}

function calculoTerminal(){
	var result = 500 + captura() + recargo();
	print(result, recargo());
}

function recargo() {
	//Calulo de los dias festivos
	// Mes-Dia-Año
	var resultado = 0;
	var date = new Date
	var festivos = new Array("11/3/2014", "11/17/2014", "12/8/2014","12/25/2014","10/13/2014",
							 "1/1/2015","1/12/2015","3/23/2015","4/3/2015","4/2/2015","5/1/2015","5/18/2015",
							 "6/8/2015","6/15/2015","6/29/15","7/20/2015","8/7/2015","8/17/2015","10/12/2015",
							 "11/2/2015","11/16/2015","12/8/2015","12/25/2015");
	var temp = new Date(date.toDateString());
	for ( var i in festivos) {
		var date2 = Date.parse(festivos[i]);
		if (temp.valueOf() == date2) {
			resultado += 1700;
			break;
		}
	}

	//Calculo de recargo nocturno
	if ((date.getHours() >= 0 && date.getHours() < 5) 
			|| (date.getHours() >= 20 && date.getHours() <= 23)) {
		resultado += 1700;
	}
	
	//Calculo de recargo dia domingo
	var dias = new Array("Domingo", "Lunes", "Martes", "Miercoles", "Jueves","Viernes", "Sabado", "Domingo");
	if(dias[date.getDay()] == "Domingo") {
		resultado += 1700;
	}
	return resultado;
}	