//1. Добавьте пустые классы для корзины товаров и элемента корзины товаров.
//Продумайте, какие методы понадобятся для работы с этими сущностями.
//Мне кажется, в корзине нужен только один класс с масивом товаров,который надо собирать из ProductList,
//собирать будет ProductItem по клику,2 метода к нему нужны для суммирования и скидки.
class ProductList {


  constructor(container = '.products') {
    console.log('constructor');
    this.container = container;
    // this._goods = [];
    this._goods = [];
    this._allProducts = [];

    this._fetchGoods();
    this._render();
    this.goodsTotalPrice();
    this.getTotalWithDiscount(2);

  }
  // не понимаю почему сумма 2 раза выводится?..
  goodsTotalPrice() {
    let result = this._goods.reduce(function (acc, good) {
      return acc + good.price;
    }, 0);
    document.querySelector('.someBlock').insertAdjacentHTML('afterbegin', `Сумма = ${result}`);
    return result;
  }

  getTotalWithDiscount(discount) {
    const test = this.goodsTotalPrice() * discount;
    document.querySelector('.someBlock2').insertAdjacentHTML('beforeend', `Итого = ${test}`);
    return test;
  }

  _fetchGoods() {
    this._goods = [{
        id: 1,
        title: 'Notebook',
        price: 20000
      },
      {
        id: 2,
        title: 'Mouse',
        price: 1500
      },
      {
        id: 3,
        title: 'Keyboard',
        price: 5000
      },
      {
        id: 4,
        title: 'Gamepad',
        price: 4500
      },
    ];
  }

  _render() {
    const block = document.querySelector(this.container);

    this._goods.forEach((product) => {
      const productObject = new ProductItem(product);
      console.log(productObject);
      this._allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    });
  }

}
class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}

const productList = new ProductList();

// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = ({ title, price }, img='https://placehold.it/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${title}</h3>
//                   <p>${price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
// document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
//
// renderProducts(products);