function add(){
	//tenemos que tomar el texto ingresado en el textarea
	var comments = document.getElementById('comment').value;

	//limpiar el textarea, super importante ya que con esta función siempre limpiaremos los formularios
	document.getElementById('comment').value = '';

	//contenedor que esta en el html
	var cont = document.getElementById('cont');

	//creamos el div que contiene cada comentario
	var newComments = document.createElement('div');

	//validar que textarea tenga un mensaje
	if(comments.length == 0 || comments == null) {
		alert('Debes ingresar un mensaje');
		return false;
	}
	//crear checkbox
	var chck = document.createElement('input');
	chck.type = 'checkbox';
	
	//creamos icono de corazon
	var heart = document.createElement('i');
	heart.classList.add('fa', 'fa-heart', 'heart');
	//Evento que se realiza cuando hacemos click en el icono corazón
	heart.addEventListener('click', function(){
		heart.classList.toggle('rojo');
	})

	//creamos icono de basura
	var trash = document.createElement('i');
	trash.classList.add('fa', 'fa-trash', 'trash');
	//Evento que se realiza cuando hacemos click en el ícono de la basura.
	trash.addEventListener('click', function(){
		cont.removeChild(newComments);
	})

	//nodos de texto del textarea
	var textNewComment = document.createTextNode(comments);

	var contenedorElemento = document.createElement('p');
	contenedorElemento.appendChild(textNewComment);
	newComments.appendChild(chck);
	newComments.appendChild(trash);
	newComments.appendChild(heart);
	newComments.appendChild(contenedorElemento);

	cont.appendChild(newComments);
}
