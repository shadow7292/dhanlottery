const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '142.171.153.18',
    user: 'a7669371_dhanlottery',
    password: 'a7669371_dhanlottery',
    database: '729288@Tabassum$',
});

export default connection;
