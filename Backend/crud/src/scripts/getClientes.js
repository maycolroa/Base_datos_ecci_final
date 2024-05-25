const db = require('../config/db');

(async () => {
    try {
        const [rows] = await db.execute('CALL sp_get_clientes()');
        console.log('Clientes:', rows[0]);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
