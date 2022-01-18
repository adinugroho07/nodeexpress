const Product = require('../models/Product');

exports.getAddProductPage = (request, response, next) => {
    // respone.send(`
    //     <form action="/admin/product" method="post">
    //         <label for="barangid">Nama Barang</label>
    //         <input type="text" name="barang" id="barangid" />
    //         <button type="submit">Add Product</button>
    //     </form>
    // `);
    //response.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    //response.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    response.render('add-product', {
        pageTitle: 'Add Product',
        docTitle: 'Add Product',
        path: '/admin/add-product'
    });
};

exports.insertProduct = (request, response, next) => {
    /*
    console log ini akan menghasilkan undefined, karena secara default request akan memberikan kita body request property
    namun secara default request tidak akan mengubah/menterjemahkan/ parse dari incoming request body. oleh karena itu kita
    harus menginstal 3rd package untuk parse incoming request body tersebut. cara nya ketik npm install --save body-parser.
    */
    //console.log(request.body);
    const productObj = new Product(request.body.title,request.body.harga,request.body.deskripsi)
    productObj.save();
    //console.log(products);
    console.log(productObj);
    response.redirect('/')
};

exports.getProductPage = (request, response, next) => {
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
    //response.sendFile(path.join(rootDir, 'views', 'shop.html'));

    //fetch data dari model.
    const products = Product.fetchAll();

    response.render('shop', { prods: products, docTitle: 'Shop', pageTitle: 'Shop', path: '/' });
    /*
    response.render('nama file template engine', { data dalam format array });
    format nya akan sama seperti di atas ini untuk merender template engine.
    */
};

