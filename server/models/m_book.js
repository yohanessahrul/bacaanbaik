const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    judul: String,
    penerbit: String,
    penulis: String,
    image: String,
    userId: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
    timestamps: true
})

var Book = mongoose.model('book', schema)

module.exports = Book