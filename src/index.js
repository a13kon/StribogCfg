const express = require('express');
const error404 = require('../middleware/err-404');
app = express();
    
app.use(express.json());
app.use(express.urlencoded());
app.set('view engine', 'ejs');

app.use(error404);



app.listen(3000, () => {
    console.log('server listening');
});