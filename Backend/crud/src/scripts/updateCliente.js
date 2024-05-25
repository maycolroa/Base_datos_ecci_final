const readline = require('readline');
const db = require('../config/db');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Cliente ID: ', (id) => {
    rl.question('Nombre: ', (nombre) => {
        rl.question('Dirección: ', (direccion) => {
            rl.question('Teléfono: ', (telefono) => {
                rl.question('Email: ', async (email) => {
                    try {
                        await db.execute('CALL sp_update_cliente(?, ?, ?, ?, ?)', [id, nombre, direccion, telefono, email]);
                        console.log('Cliente actualizado');
                    } catch (error) {
                        console.error('Error:', error.message);
                    }
                    rl.close();
                });
            });
        });
    });
});
