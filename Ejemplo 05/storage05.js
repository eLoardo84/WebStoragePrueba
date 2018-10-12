function iniciar(){
var boton=document.getElementById('grabar');
boton.addEventListener('click', nuevoitem, false);
window.addEventListener("storage", mostrar, false);
mostrar();
}
function nuevoitem(){
	var clave=document.getElementById('clave').value;
	var valor=document.getElementById('texto').value;
	validacion();
	localStorage.setItem(clave,valor);
	mostrar();
	document.getElementById('clave').value='';
	document.getElementById('texto').value='';
}
function validacion(){
	if(clave.value=='' && valor.value==''){
		clave.setCustomValidity('Inserte al menos una clave');
		clave.style.background='#FFDDDD';
	}
	else
	{
		clave.setCustomValidity('');
		clave.style.background='#FFFFFF';
	}
}
function mostrar(){
	var cajadatos=document.getElementById('cajadatos');
	cajadatos.innerHTML='';
	for(var f=0;f<localStorage.length;f++){
		var clave=localStorage.key(f);
		var valor=localStorage.getItem(clave);
		cajadatos.innerHTML+='<div>'+clave+' - '+valor+'</div>';
	}
}
window.addEventListener('load', iniciar, false);