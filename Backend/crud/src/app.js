// Importar los módulos necesarios
const express = require('express');
const cors = require('cors');
const clienteRoutes = require('./routes/clienteRoutes');

// Crear una instancia de la aplicación Express
const app = express();

// Configurar CORS para permitir solicitudes desde el frontend
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

// Middleware para analizar solicitudes JSON
app.use(express.json());

// Rutas de clientes
app.use('/api', clienteRoutes);

// Definir el puerto del servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
