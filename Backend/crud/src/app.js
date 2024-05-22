const express = require('express');
const bodyParser = require('body-parser');
const clienteRoutes = require('./routes/clienteRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api', clienteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
