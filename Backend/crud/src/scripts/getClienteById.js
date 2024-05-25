const readline = require('readline');
const db = require('../config/db');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Cliente ID: ', async (id) => {
    try {
        const [rows] = await db.execute('CALL sp_get_cliente_by_id(?)', [id]);
        if (rows[0].length === 0) {
            console.log('Cliente no encontrado');
        } else {
            console.log('Cliente:', rows[0][0]);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
    rl.close();
});
