const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('¡Hola, bienvenido a mi servidor Express!');
});

//http://localhost:3000/saludo?nombre=bryan
app.get('/saludo', (req, res) => {
    const nombre = req.query.nombre;
    res.send(`Hola, ${nombre}!`);
  });

app.post('/post', (req, res) => {
  const data = req.body;
  const nombre = data.nombre || 'Anónimo'; 
  res.json({ message: '¡Hola desde POST!', nombre: nombre });
});

app.use((req, res) => {
  res.status(404).send('Error 404: Ruta no encontrada');
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
