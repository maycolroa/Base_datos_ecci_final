// Importar los módulos necesarios
const express = require('express');
const clienteRoutes = require('./routes/clienteRoutes');

// Crear una instancia de la aplicación Express
const app = express();

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
