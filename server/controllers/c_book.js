const Book = require('../models/m_book.js')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
const jwt = require('jsonwebtoken')

module.exports = {
  saveBook: function (req, res) {
    let decoded = jwt.verify(req.headers.token, 'secretkeys')
    console.log('masuk controller buku')
    let newBook = new Book({
      judul: req.body.judul,
      penerbit: req.body.penerbit,
      penulis: req.body.penulis,
      image: req.file.cloudStoragePublicUrl,
      userId: decoded.id
    })

    newBook.save()
    .then((response) => {
      res.status(200).json({
        msg: 'Buku berhasil disimpan!',
        data: response
      })
    })
    .catch((err) => {
      msg: 'Buku tidak berhasil disimpan'
    })
  },
  list (req, res) {
    Book.find()
      .then((response) => {
        res.status(200).json({
          msg: 'Data buku berhasil didapatkan',
          data: response
        })
      })
      .catch((err) => {
        res.status(500).json({
          msg: 'Data error tidak dapat buku'
        })
      })
  },
  hapus (req, res) {
    Book.remove({
      _id: req.params.id
    })
      .then((response) => {
          console.log('data masuk ke kondisi hapus')
        res.status(200).json({
          msg: 'Data berhasil dihapus'
        })
      })
      .catch((err) => {
        res.status(500).json({
          msg: 'Data error tidak bisa hapus'
        })
      })
  }
}