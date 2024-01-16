const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear el cuerpo de la solicitud como JSON
app.use(bodyParser.json());

// Ruta para manejar solicitudes POST
app.post('/api/endpoint', (req, res) => {
  // Obtiene los datos de la solicitud POST
  const data = req.body;

  // Construye la respuesta en formato JSON
  const response = {
    message: 'Solicitud POST recibida con éxito',
    data: data
  };

  // Envía la respuesta en formato JSON
  res.json(response);
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
