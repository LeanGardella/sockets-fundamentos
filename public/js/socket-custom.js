var socket = io();

// Escucha evento de conexión
socket.on('connect', function() {
    console.log('Conectado al servidor.');
});
// Escucha evento de desconexión
socket.on('disconnect', function() {
    console.log('Oops... Perdimos al server che!');
});

// Envia mensaje al server
socket.emit('enviarMensaje', {
    usuario: 'Leandro',
    mensaje: 'Hola mundo!'
}, function(resp) { // callback que llamará el servidor cuando ejecute algo al recibir el mensaje
    console.log('STATUS_OK: ', resp);
});

// Escucho si el server me manda un mensaje
socket.on('enviarMensaje', function(msg) {
    console.log('Mensaje recibido: ', msg);
});