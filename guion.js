	/* REALIZA LA FUNCION DEL COPIADO EN GUION */
	 function copyToClipboard(text, showAlert = false) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                if (showAlert) {
                    alert('Texto copiado al portapapeles');
                }
            } catch (err) {
                console.error('No se pudo     al portapapeles', err);
            }

            document.body.removeChild(textarea);
		        }
	
		/* REALIZA LA FUNCION DEL NO SALDOS - MUESTRA EL MENSAJE */
  function mostrarMensaje() {
    var mensaje = document.getElementById("mensaje-personalizado");
    mensaje.style.display = "block";
document.getElementById("siBtn").disabled = true;
  }

 /* REALIZA LA FUNCION DEL SI SALDOS -  SE VA A LETRERO RECIENTES*/
  function mostrarRecientes() {
    var mensajeQuejas = document.getElementById("mensaje-recientes");
    var saldos = document.getElementById("saldos");
    mensajeQuejas.style.display = "block";
    saldos.style.display = "none";
  }
	/* REALIZA LA FUNCION DEL SI PAGOS RECIENTES - MUESTRA EL MENSAJE */
  function mostrarMensajeQuejas() {
    var mensaje = document.getElementById("MenQuejas");
    mensaje.style.display = "block";
document.getElementById("noquejasBtn").disabled = true;
  }

		<!-- REALIZA LA FUNCION DEL NO RECIENTES - SE VA A LETRERO * -->
  function mostrarOrden() {
    var mensaje_orden = document.getElementById("mensaje-orden");
    var quejas1 = document.getElementById("mensaje-quejas");
    mensaje_orden.style.display = "block";
    quejas1.style.display = "none";
  }
	
			<!-- REALIZA LA FUNCION DEL SI QUEJAS - MUESTRA EL MENSAJE -->
  function mostrarMensajeQuejas() {
    var mensaje = document.getElementById("MenQuejas");
    mensaje.style.display = "block";
document.getElementById("noquejasBtn").disabled = true;
  }

		<!-- REALIZA LA FUNCION DEL NO QUEJAS - SE VA A LETRERO ORDENES ABIERTA* -->
  function mostrarOrden() {
    var mensaje_orden = document.getElementById("mensaje-orden");
    var quejas1 = document.getElementById("mensaje-quejas");
    mensaje_orden.style.display = "block";
    quejas1.style.display = "none";
  }

