//const http = require('http');

const express = require('express');
const res = require('express/lib/response');

//untuk mengimport module body parser
const bodyParser = require('body-parser');

//karena express di import as function.
const app = express();

/*

*/
app.use(bodyParser.urlencoded({ extended: false }));

/*
jika ada penambahan middleware baru untuk penambahan route, maka harus di tambahkan di paling atas karena urutan proses
eksekusi middleware ini di mulai dari atas dan setiap url pasti akan selalu di mulai dari / , oleh karena itu / di letakkan
di urutan paling bawah, baru url yang /kontak di letakan di urutan atas nya.
*/
//ini adalah contoh penggunaan middleware oleh expressjs
app.use('/kontak', (request, respone, next) => {
    respone.send('<h2>this is kontak page</h2>');
});

app.use('/kontak2', (request, respone, next) => {
    respone.send('<h2>this is Kontak 2 page</h2>');
});

app.use('/add-product', (request, respone, next) => {
    respone.send(`
        <form action="/product" method="post">
            <label for="barangid">Nama Barang</label>
            <input type="text" name="barang" id="barangid" />
            <button type="submit">Add Product</button>
        </form>
    `);
});

app.use('/product', (request, respone, next) => {
    /*
    console log ini akan menghasilkan undefined, karena secara default request akan memberikan kita body request property
    namun secara default request tidak akan mengubah/menterjemahkan/ parse dari incoming request body. oleh karena itu kita 
    harus menginstal 3rd package untuk parse incoming request body tersebut. cara nya ketik npm install --save body-parser.
    */
    console.log(request.body);
    respone.redirect('/')
});

app.use('/', (request, respone, next) => {
    //next();//ini adalah untuk melanjut kan ke middleware selanjut nya.
    respone.send('<h2>this is index page</h2>');
});



//const server = http.createServer(app);
//server.listen(3000)

/*
kenapa kita mengunakan app.listen insted of server.listen(3000), karena di dalam expresjs ketika memanggil function listen()
di dalam function tersebut sudah terdefine http.createServer(app); dan server.listen(3000) , dan parameter di dalam function
listen() tersebut adalah no port sama dengan server.listen(3000), sehingga kita sudah tidak membutuhkan pendefinisian module
htpp -> const http = require('http'); karena sudah di handle oleh function listen() ini di expressjs.
*/
app.listen(3000);