const readline = require('readline');
const db = require('../config/db');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nombre: ', (nombre) => {
    rl.question('Dirección: ', (direccion) => {
        rl.question('Teléfono: ', (telefono) => {
            rl.question('Email: ', async (email) => {
                try {
                    const [result] = await db.execute('CALL sp_create_cliente(?, ?, ?, ?)', [nombre, direccion, telefono, email]);
                    console.log('Cliente creado con ID:', result.insertId);
                } catch (error) {
                    console.error('Error:', error.message);
                }
                rl.close();
            });
        });
    });
});
