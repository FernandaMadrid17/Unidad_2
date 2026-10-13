//Ejemplo de codigo inseguro en app.js
const usuario = req.query.username;
// Vulnerable a inyección de código mediante eval()
eval("console.log('usuario conectado: '+ "+usuario+")");