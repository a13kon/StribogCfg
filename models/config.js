const {Schema, model} = require('mongoose');

const configSchema = new Schema ({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        defaule: "",
    },
    authors: {
        type: String,
        default: "",
    }
});

module.exports = model('Config', configSchema);