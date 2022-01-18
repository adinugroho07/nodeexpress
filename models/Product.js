const products = [];

module.exports = class Product {
    constructor(title,harga,deskripsi) {
        this.title = title;
        this.price = harga;
        this.description = deskripsi;
        this.docTitle = 'Shop';
        this.pageTitle = 'Shop';
    }

    save(){
        products.push(this);
    }

    static fetchAll(){
        return products;
    }
};