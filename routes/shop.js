const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

/*
module path ini untuk mendapatkan info operating system yang kita gunakan apa dan dia akan secara otomatis mengubah / atau \ 
sesuai dengan OS yang di gunakan.
*/

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
router.get('/', (request, response, next) => {
    //next();//ini adalah untuk melanjut kan ke middleware selanjut nya.
    //response.send('<h2>this is index page</h2>');

    /*
    jadi sendFile() membutuhkan path yang absolute sesuai dengan operating system yang di gunakan. namun jika kita mengisikan
    ../views/shop.html maka akan error. karena yang di butuhkan adalah absolute path (path yang complete).
    contoh nya seperti ini -> 'D:\adi\workspacenodejs\nodeexpress\routes\views\shop.html'. oleh karena itu kita membutuhkan
    bantuan dari node js dengan module path ini. salah satu fitur yang kita gunakan adalah join dimana join ini akan menghasilkan
    path. contoh penggunaannya adalah sebagai berikut.
    
    path.join('path/directory', 'path1/directory1', 'path2/directory2', 'namafile') -> path/directory/path1/directory1/path2/directory2/namafile .
    
    semakin banyak parameter yang di isikan path/directory maka akan semakin banyak yang di join path atau directory nya.
    path.join(__dirname, '../', 'views', 'shop.html') -> 'D:\adi\workspacenodejs\nodeexpress\views\shop.html'

    __dirname : adalah variable untuk mendapatkan posisi file ini ada di dalam directory apa. jika di print maka hasil nya berikut
    cth -> D:\adi\workspacenodejs\nodeexpress\routes
    */
    //console.log(path.join(__dirname));
    //response.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));

    //root directory nya kita ambil dari file path.
    response.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;