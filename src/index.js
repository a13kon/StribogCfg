const express = require('express');
const mongoose = require('mongoose');

const error404 = require('../middleware/err-404');
const indexRouter = require('../routers/index');
//const configsRouter = require('../routers/configs');

app = express();
     
app.use(express.json());
app.use(express.urlencoded());
app.set('view engine', 'ejs');

app.use('/', indexRouter);
//app.use('/configs', configsRouter);

app.use(error404);

async function start(PORT, UrlDB) {
    try {
        await mongoose.connect(UrlDB, {
            dbName: 'configs-storage'
        });
        app.listen(PORT, () => {
            console.log(`STRIBOG-CFG is listening on port ${PORT}`)
        });
    } catch(e) {
        console.log(e);
    }
}

const UrlDB = process.env.UrlDB;
const PORT = process.env.PORT || 3000;
start(PORT, UrlDB);