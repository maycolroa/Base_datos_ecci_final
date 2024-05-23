const db = require('../config/db');

// Create
exports.createCliente = async (req, res) => {
    const { nombre, direccion, telefono, email } = req.body;
    console.log('Datos recibidos:', nombre, direccion, telefono, email);
    try {
        const [result] = await db.execute('CALL sp_create_cliente(?, ?, ?, ?)', [nombre, direccion, telefono, email]);
        console.log('Resultado de la inserción:', result);
        res.status(201).send({ id: result.insertId });
    } catch (error) {
        console.error('Error al crear el cliente:', error);
        console.log('Datos del cuerpo de la solicitud:', req.body);
        res.status(500).send({ error: error.message });
    }
};

// Read All
exports.getClientes = async (req, res) => {
    try {
        const [rows] = await db.execute('CALL sp_get_clientes()');
        res.status(200).send(rows[0]);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Read by ID
exports.getClienteById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.execute('CALL sp_get_cliente_by_id(?)', [id]);
        if (rows[0].length === 0) {
            res.status(404).send({ message: 'Cliente no encontrado' });
        } else {
            res.status(200).send(rows[0][0]);
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Update
exports.updateCliente = async (req, res) => {
    const { id } = req.params;
    const { nombre, direccion, telefono, email } = req.body;
    console.log('ID del cliente:', id);
    console.log('Datos del cliente:', nombre, direccion, telefono, email);
    console.log('Cuerpo de la solicitud:', req.body); // Agrega esta línea
    try {
        if (nombre !== undefined && direccion !== undefined && telefono !== undefined && email !== undefined) {
            await db.execute('UPDATE Cliente SET Nombre = ?, Dirección = ?, Teléfono = ?, Email = ? WHERE ClienteID = ?', 
                            [nombre, direccion, telefono, email, id]);
            res.status(200).send({ message: 'Cliente actualizado' });
        } else {
            res.status(400).send({ error: 'Faltan datos del cliente' });
        }
    } catch (error) {
        console.error('Error al actualizar el cliente:', error);
        res.status(500).send({ error: error.message });
    }
};

// Delete
exports.deleteCliente = async (req, res) => {
    const { id } = req.params;
    try {
        await db.execute('CALL sp_delete_cliente(?)', [id]);
        res.status(200).send({ message: 'Cliente eliminado' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
