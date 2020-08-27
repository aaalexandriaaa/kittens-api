const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kittenSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true,
        default: "mixed"
    },
    isFluffy: {
        type: Boolean,
        required: true,
        default: true
    }
})

module.exports = mongoose.model("Kitten", kittenSchema)