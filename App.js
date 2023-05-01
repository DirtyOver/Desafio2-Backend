const ProductManager = require('./ProductManager');

const productManager = new ProductManager('./productos.txt');

productManager.addProduct({
  title: "Celular Samsung Galaxy S21",
  description: "Celular de alta gama con cámara de 108MP y pantalla de 6.2 pulgadas",
  price: 1299,
  thumbnail: "https://images.samsung.com/is/image/samsung/assets/latin/smartphones/galaxy-s21/images/galaxy-s21_5g_kv_mo_00.jpg",
  code: "S21",
  stock: 50
});

console.log(productManager.getProducts());

console.log(productManager.getProductById(1));

productManager.updateProduct(1, {
  title: "Celular Samsung Galaxy S21 Ultra",
  description: "Celular de alta gama con cámara de 108MP y pantalla de 6.8 pulgadas",
  price: 1499,
  thumbnail: "https://images.samsung.com/is/image/samsung/assets/latin/smartphones/galaxy-s21-ultra/images/galaxy-s21-ultra-5g_kv_mo_00.jpg",
  code: "S21U",
  stock: 30
});

console.log(productManager.getProducts());

productManager.deleteProduct(1);

console.log(productManager.getProducts());
