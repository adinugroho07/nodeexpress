//const http = require('http');

const path = require('path');
const express = require('express');

//untuk mengimport routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//untuk mengimport module body parser
const bodyParser = require('body-parser');

//karena express di import as function.
const app = express();

const NotFoundController = require('./Controllers/Error');
/*
di bawah ini adalah config untuk menset template engine yang di gunakan yang mana dan folder mana yang akan di loopup untuk 
views nya. untuk template engine yang populer ada 3, yaitu pug , ejs dan handlebars .

app.set('view engine', 'nama template engine'); --> app.set('view engine', 'pug');

dan untuk menset template engine ini ngeloop up views di folder mana ada di script di bawah ini.
app.set('views','nama folder untuk di lookup'); --> app.set('views','views');
*/
//app.set('view engine', 'pug'); //template engine untuk pugjs
app.set('view engine', 'ejs'); //template js untuk EJS
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

/*
code di bawah ini berfungsi untuk membuka atau mempublish link yang static kepada public folder supaya bisa di akses file css
nya. jadi di sini kita open supaya di file html nya bisa langsung di akses via path css/main.css atau css/product.css .
jika ini di print express.static(path.join(__dirname, 'public')) -> D:\adi\workspacenodejs\nodeexpress\public
*/
app.use(express.static(path.join(__dirname, 'public')));

/*
jika ada penambahan middleware baru untuk penambahan route, maka harus di tambahkan di paling atas karena urutan proses
eksekusi middleware ini di mulai dari atas dan setiap url pasti akan selalu di mulai dari / , oleh karena itu / di letakkan
di urutan paling bawah, baru url yang /kontak di letakan di urutan atas nya.
*/

//jika di tambakan url lagi seperti di bawah maka setiap url yang ada pada object adminRoutes akan ketambahan prefix url yang
//di define pada method di bawah. cth => url : /add-product akan menjadi /admin/add-product karena ketambahan prefix /admin .
app.use('/admin', adminRoutes);
//ini adalah contoh penggunaan route yang di import dari file lain / outsource.
app.use(shopRoutes);

//ini untuk cath jika ada url yang ga ada tapi tetep di akses.
//menggunakan use karena supaya tidak strict dengan url yang ada.
app.use('/', NotFoundController.pageNotFound)

//const server = http.createServer(app);
//server.listen(3000)

/*
kenapa kita mengunakan app.listen insted of server.listen(3000), karena di dalam expresjs ketika memanggil function listen()
di dalam function tersebut sudah terdefine http.createServer(app); dan server.listen(3000) , dan parameter di dalam function
listen() tersebut adalah no port sama dengan server.listen(3000), sehingga kita sudah tidak membutuhkan pendefinisian module
htpp -> const http = require('http'); karena sudah di handle oleh function listen() ini di expressjs.
*/
app.listen(3000);