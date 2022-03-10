function cambiaColor(){
	document.getElementById('div1').style.color="green";	
}

function regresaColor(){
	document.getElementById("div1").style.color="black";
}

function actualizaTotal(precio){
	var total = document.getElementById("total").value;

	var num= parseInt(total);
	num+= parseInt(precio);

	document.getElementById("total").value = num.toString();
}