const mongoose = require('mongoose');
const ENV = require('../config.js');

async function connect() {
    try {
        await mongoose.connect(ENV.ATLAS_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database Connected");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
}

module.exports = connect;
