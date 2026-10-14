const express = require("express");
const app = express();

app.get("/login", (req, res) => {
  const usuario = req.query.username;
  // Vulnerable a inyección de código mediante eval()
  eval("console.log('usuario conectado: '+ " + usuario + ")");
  res.send("ok");
});

app.listen(3000);