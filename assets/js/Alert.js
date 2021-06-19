function alert(){
Swal.fire({
	title:'Articulo agregado',
	icon:'success',
	confirmButtonText:'Aceptar',
	padding:'1rem',
	backdrop:true,
	timer:5000,
	timerProgressBar:true,
	position: 'center',
	customClass:{
		container:'',
		popup:'popup-class',
		header:'',
		title:'',
		closeButton:'',
		image:'',
		content:'',
	}
});
}

function ok(){
	Swal.fire({
		title:'Json Ok',
		icon:'success',
		confirmButtonText:'Aceptar',
		padding:'1rem',
		backdrop:true,
		timer:5000,
		timerProgressBar:true,
		position: 'center',
		customClass:{
			container:'',
			popup:'popup-class',
			header:'',
			title:'',
			closeButton:'',
			image:'',
			content:'',
		}
	});
	}

	function err(error){
		Swal.fire({
			title:'Json Ok',
			icon:'success',
			confirmButtonText:'Aceptar',
			padding:'1rem',
			backdrop:true,
			timer:5000,
			timerProgressBar:true,
			position: 'center',
			customClass:{
				container:'',
				popup:'popup-class',
				header:'',
				title:'',
				closeButton:'',
				image:'',
				content:'',
			}
		});
		}


function contacto(){
	
	var nombre = document.getElementById("idNombre").value;
	var apellido = document.getElementById("idApellido").value;
	var sexo = document.getElementById("idSexo").value;
	if(document.getElementById('idEdad1').checked){
		var edad = document.getElementById("idEdad1").value;
	}
	if(document.getElementById('idEdad2').checked){
		var edad = document.getElementById("idEdad2").value;
	}
	if(document.getElementById('idEdad3').checked){
		var edad = document.getElementById("idEdad3").value;
	}
	if(document.getElementById('idEdad4').checked){
		var edad = document.getElementById("idEdad4").value;
	}	
	var email = document.getElementById("idEmail").value;
	var telefono = document.getElementById("idTelefono").value;
	var asunto = document.getElementById("idAsunto").value;
	var mensaje = document.getElementById("idMensaje").value;

	if((nombre == "") || apellido =="" || sexo =="" || email =="" || edad =="" || telefono =="" || asunto =="" || mensaje ==""){
		Swal.fire({
			title:'Error al enviar el mensaje',
			text:'Faltan completar datos',
			icon:'error',
			confirmButtonText:'Aceptar',
			padding:'1rem',
			backdrop:true,
			timer:5000,
			timerProgressBar:true,
			backdrop:true,
			position: 'center',
			customClass:{
				container:'',
				popup:'popup-class',
				header:'',
				title:'',
				closeButton:'',
				image:'',
				content:'',
			}
		});
	
	  } 
	
	  else{	
			Swal.fire({
				title:'Mensaje Enviado',
				text:'Pronto nos contactaremos',
				icon:'success',
				confirmButtonText:'Aceptar',
				padding:'1rem',
				backdrop:true,
				timer:5000,
				timerProgressBar:true,
				backdrop:true,
				position: 'center',
				customClass:{
					container:'',
					popup:'popup-class',
					header:'',
					title:'',
					closeButton:'',
					image:'',
					content:'',
				}
			});
			console.log("Su mensaje fue enviado con los siguientes datos: " + "\n Nombre: " + nombre + "\n Apellido: " + apellido + "\n Sexo: " + sexo + "\n Edad: " + edad + "\n Email: " + email + "\n Telefono: " + telefono + "\n Asunto: " + asunto + "\n Mensaje: " + mensaje);
	}
}


function suscripcion(){
	
	var emailSuscripcion = document.getElementById("idEmailSuscripcion").value;
	if((emailSuscripcion == "")){
		Swal.fire({
			title:'Error al enviar el mensaje',
			text:'Faltan completar datos',
			icon:'error',
			confirmButtonText:'Aceptar',
			padding:'1rem',
			backdrop:true,
			timer:5000,
			timerProgressBar:true,
			backdrop:true,
			position: 'center',
			customClass:{
				container:'',
				popup:'popup-class',
				header:'',
				title:'',
				closeButton:'',
				image:'',
				content:'',
			}
		});

	}
	else{
		Swal.fire({
			title:'Mensaje Enviado',
			text:'Su correo: \n ' + emailSuscripcion + ' ha sido registrado para recibir noticias y promociones',
			icon:'success',
			confirmButtonText:'Aceptar',
			padding:'1rem',
			backdrop:true,
			timer:5000,
			timerProgressBar:true,
			backdrop:true,
			position: 'center',
			customClass:{
				container:'',
				popup:'popup-class',
				header:'',
				title:'',
				closeButton:'',
				image:'',
				content:'',
			}
		});
	}
}