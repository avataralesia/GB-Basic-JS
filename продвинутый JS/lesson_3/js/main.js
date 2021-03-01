const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';
// Перевести на Promise НЕ ИСПОЛЬЗОВАТЬ fetch
let getRequest = (url, callBack) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status !== 200) {
        console.log('Error');
      } else {
        callBack(xhr.responseText);
      }
    }
  }
  xhr.send();
};

///////////////////////////////////////

class ProductList {
  constructor(container = '.products') {
    console.log('constructor');
    this.container = container;
    this._goods = [];
    this._allProducts = [];

    this._fetchGoods();
    this._render();
    this._getProducts()
      .then((data) => {
        this._goods = [...data];
        this._render();
      });
  }

  goodsTotalPrice() {
    return this._goods.reduce((sum, {
      price
    }) => sum + price, 0);
  }


  _fetchGoods() {
    getRequest(`${API}/catalogData.json`, (data) => {
      //     // console.log(data);
      this._goods = JSON.parse(data);
      this._render();
      console.log(this._goods);
      console.log(this._allProducts);
    });
  }
  _getProducts() {
    return fetch(`${API}/catalogData.json`)
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
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