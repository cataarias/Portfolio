const express = require('express');
const connect = require('./database/conn.js');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Importar las rutas
const portfolioRoute = require('http://localhost:5000/api/portfolio/get-portfolio-data'); 

// Middleware para parsear solicitudes JSON
app.use(express.json());
app.use(cors());

// Usar las rutas
app.use('/api/portfolio', portfolioRoute);


// Ruta de bienvenida
app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi aplicación!');
});



// Conexión a la base de datos y luego iniciar el servidor
connect().then(() => {
    app.listen(PORT, () => {
        console.log(`Server connected to http://localhost:${PORT}`);
    });
}).catch(error => {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Terminar el proceso con un código de error
});
