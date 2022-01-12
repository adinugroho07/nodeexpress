const path = require('path');

/*
untuk mendapatkan root directory secara complete maka kita menggunakan module pada nodejs yaitu main.filename
yang artinya dia akan mencari main file atau entry point file node js ini (app.js , bisa lihat di package.json)
kemudian dengan bantuan salah satu module path yaitu dirname, dimana fitur ini mengembalikan path secara complete dari path file
yang di inputkan ke dalam method ini as parameter.

contoh nyaa adalah di bawah ini.
*/
console.log(require.main.filename); //-> D:\adi\workspacenodejs\nodeexpress\app.js
console.log(path.dirname(require.main.filename)); // -> D:\adi\workspacenodejs\nodeexpress

/*
kenapa kita menggunakan cara ini, di karena kan untuk menghindari hardcode seperti ../ , dll yang ada pada contoh di bawah ini.
respone.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));

jadi cara ini jauh lebih clean.
*/
module.exports = path.dirname(require.main.filename);