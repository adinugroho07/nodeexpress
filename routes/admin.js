const express = require('express');

const produtcsController = require('../Controllers/ProductController');

const rootDir = require('../util/path');

const path = require('path');
/*
module path ini untuk mendapatkan info operating system yang kita gunakan apa dan dia akan secara otomatis mengubah / atau \
sesuai dengan OS yang di gunakan.
*/

const router = express.Router();

//url menjadi /admin/add-product
router.get('/add-product', produtcsController.getAddProductPage);

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
router.post('/product', produtcsController.insertProduct);

//untuk export routes
module.exports = router;


