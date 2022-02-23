import { mount as mountProducts } from 'products/ProductsIndex'
import { mount as mountCart } from 'cart/CartShow'

console.log('Container!');

mountProducts(document.querySelector("#dev-products__host"));
mountCart(document.querySelector("#dev-cart__host"));
