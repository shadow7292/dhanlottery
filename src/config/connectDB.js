const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '142.171.153.18',
    user: 'a7669371_dhanlottery',
    password: '729288@Tabassum$',
    database: 'a7669371_dhanlottery',
});

export default connection;
