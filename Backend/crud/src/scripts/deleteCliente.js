const readline = require('readline');
const db = require('../config/db');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Cliente ID: ', async (id) => {
    try {
        await db.execute('CALL sp_delete_cliente(?)', [id]);
        console.log('Cliente eliminado');
    } catch (error) {
        console.error('Error:', error.message);
    }
    rl.close();
});
