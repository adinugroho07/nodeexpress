const express = require('express');

const produtcsController = require('../Controllers/ProductController');

//const rootDir = require('../util/path');

/*
module path ini untuk mendapatkan info operating system yang kita gunakan apa dan dia akan secara otomatis mengubah / atau \
sesuai dengan OS yang di gunakan.
*/
//const path = require('path');

const router = express.Router();

/*
jika ada penambahan middleware baru untuk penambahan route, maka harus di tambahkan di paling atas karena urutan proses
eksekusi middleware ini di mulai dari atas dan setiap url pasti akan selalu di mulai dari / , oleh karena itu / di letakkan
di urutan paling bawah, baru url yang /kontak di letakan di urutan atas nya.
*/
//ini adalah contoh penggunaan middleware oleh expressjs
router.get('/kontak', (request, response, next) => {
    response.send('<h2>this is kontak page</h2>');
});

//perbedaan antara use dan get adalah get hanya bisa mengakses path yang sama persis, jika tidak maka akan error sedangkan use masih bisa.
// router.get('/kontak2', (request, response, next) => {
//     response.send('<h2>this is Kontak 2 page</h2>');
// });
router.get('/kontak2', (request, response, next) => {
    response.send('<h2>this is Kontak 2 page</h2>');
});

/*jika menggunakan use kita mengetikkan url /asdasd dimana alamat ini tidak di handle maka secara default akan di handle oleh
route ini / , karena semua route akan berawalan dari / , karena  /asdasd tidak ada maka akan langsund i handle oleh route / .
namun jika di ganti menggunakan get maka akan muncul error "Cannot GET /asdas", karena get hanya akan menghandle url yang sama 
persis dengan url yang sudah di define pada app.get().
*/
router.get('/', produtcsController.getProductPage);

module.exports = router;