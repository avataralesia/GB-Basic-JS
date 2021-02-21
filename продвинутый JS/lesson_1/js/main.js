const products = [{
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
/*тут скопировала ваше решение*/
const renderProduct = ({
    title,
    price
}, img = 'https://placehold.it/200x150') => `<div class="product-item" data-id="${this.id}">
              <img src="${img}" alt="Some img">
             <div class="desc">
                  <h3>${title}</h3>
                  <p>${price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
               </div>
          </div>`;
/**
 * тут вымучила сама
 *
 */
const renderProducts = (list) => {
    list.forEach(function (element) {
        document.querySelector('.products').insertAdjacentHTML('afterbegin', renderProduct(element)) /*мне не понятно, renderProduct из массива сам забирает нужные элементы ,т.к у его в аргументах уже есть title, price?.. */
    });
}

renderProducts(products);
/**
 * for of мне больше понятней..
 */

/*let Array = products;
for (let elem of Array) {
    document.querySelector('.products').insertAdjacentHTML('afterbegin', renderProduct(elem))
};*/