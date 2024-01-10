const express = require('express');
const router = express.Router();
const Config = require ('../models/config');

router.get('/', async (req, res) => {
    try {
        const config = await Config.find().select('-__v');
        res.render("config/index", {
            title: "Конфигурации",
            configs: config,
        })
    } catch(e) {
        res.redirect('/404');
    }
});

router.get('/create', (req, res) => {
    res.render("config/create", {
        title: "Создание конфигурации",
        config: {},
    });
});





module.exports = router;