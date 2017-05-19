
(function displayNone(){
	/*GetElementsByClassName me retorna
	una coleccion de HTML elementos
	en esta coleccion no se puede hacer foreach por lo que la transformo a un arreglo con
	Array.from*/
	var cajas = Array.from(document.getElementsByClassName("caja"));


	console.log(cajas);
	cajas.forEach(function(e){
		//Poner sombrero a e;
		e.addEventListener("click", function(){
			this.classList.toggle("no");
		});
	});

	var boton =	document.getElementById("mostrar");
	boton.addEventListener("click", function(el){
		//Previene el comportamiento por defecto
		//Como este es un enlace lo que evita es que me haga elñ salto de pagina
		el.preventDefault();

		cajas.forEach(function(e){
			e.classList.remove("no");
		})
	})
})()