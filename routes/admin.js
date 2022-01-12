const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

/*
module path ini untuk mendapatkan info operating system yang kita gunakan apa dan dia akan secara otomatis mengubah / atau \ 
sesuai dengan OS yang di gunakan.
*/

const router = express.Router();

//url menjadi /admin/add-product
router.get('/add-product', (request, response, next) => {
    // respone.send(`
    //     <form action="/admin/product" method="post">
    //         <label for="barangid">Nama Barang</label>
    //         <input type="text" name="barang" id="barangid" />
    //         <button type="submit">Add Product</button>
    //     </form>
    // `);
    //response.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    response.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

/*
app.post(path, callback [, callback ...]) -> untuk memfilter jika route mengirimkan data dengan method POST. 
app.get(path, callback [, callback ...]) -> untuk menghandle GET request
app.put(path, callback [, callback ...]) -> untuk menghandle PUT request
app.delete(path, callback [, callback ...]) -> untuk menghandle Delete request
untuk lebih jelas nya silahkan buka link ini : https://expressjs.com/en/4x/api.html#app.all

jadi jika app.post di gunakan maka route ini tidak bisa di gunakan selain sending data dari form dengan method post,
untuk mengakses url nya harus menggunakan Get.
*/
//url menjadi /admin/product
router.post('/product', (request, response, next) => {
    /*
    console log ini akan menghasilkan undefined, karena secara default request akan memberikan kita body request property
    namun secara default request tidak akan mengubah/menterjemahkan/ parse dari incoming request body. oleh karena itu kita 
    harus menginstal 3rd package untuk parse incoming request body tersebut. cara nya ketik npm install --save body-parser.
    */
    console.log(request.body);
    response.redirect('/')
});

module.exports = router;