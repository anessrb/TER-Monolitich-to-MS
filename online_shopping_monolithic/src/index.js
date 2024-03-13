const express = require('express');
const { PORT } = require('./config');
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');

const StartServer = async () => {
    const app = express();
    
    await databaseConnection();
    
    await expressApp(app);

    const customPort = 8000; // Define your custom port here
    
    app.listen(customPort, () => {
        console.log(`listening to port ${customPort}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    });
}

StartServer();
