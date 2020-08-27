const Kitten = require('../../models/kitten')
const kitten = require('../../models/kitten')

module.exports = {
    index,
    show,
    create,
    update,
    delete: deleteOne
}

function index(req, res) {
    Kitten.find({}, (err, kittens) => {
        res.status(200).json(kittens);
    });
}

function show(req, res) {
    Kitten.findById(req.params.id)
        .then((kitten) => {
            res.status(200).json(kitten)
        })
}

function create(req, res) {
    Kitten.create(req.body)
        .then((kitten) => {
            res.status(201).json(kitten)
        })
}

function update(req, res) {
    Kitten.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .then((kitten) => {
            res.status(200).json(Kitten)
        })
}

function deleteOne(req, res) {
    Kitten.findByIdAndDelete(req.params.id)
        .then((kitten) => {
            res.status(200).json(kitten)
        })
}