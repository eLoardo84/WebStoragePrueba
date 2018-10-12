function iniciar(){
	var boton=document.getElementById('grabar');
	boton.addEventListener('click', nuevoitem, false);
	document.informacion.addEventListener("invalid",validacion, true);
	mostrar();
}

function nuevoitem(){
	var clave=document.getElementById('clave').value;
	var valor=document.getElementById('texto').value;
	validacion();
	sessionStorage.setItem(clave,valor);
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
	cajadatos.innerHTML='<div><button onclick="eliminarTodo()">Eliminar Todo</button></div>';
	for(var f=0;f<sessionStorage.length;f++){
	var clave=sessionStorage.key(f);
	var valor=sessionStorage.getItem(clave);
	cajadatos.innerHTML+='<div>'+clave+' - '+valor+'<br><button onclick="eliminar(\''+clave+'\')">Eliminar</button></div>';
	}
}
function eliminar(clave){
	if(confirm('Está Seguro?')){
	sessionStorage.removeItem(clave);
	mostrar();
	}
}
function eliminarTodo(){
	if(confirm('Está Seguro?')){
	sessionStorage.clear();
	mostrar();
	}
}
window.addEventListener('load', iniciar, false);