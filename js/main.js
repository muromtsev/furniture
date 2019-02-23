let open_price = document.querySelector('.page-btn');
let btn_close = document.querySelector('.price-btn');
let price = document.querySelector('.price');
let modal_price = document.querySelector('.table');
let tdPrice = modal_price.querySelectorAll('td:nth-child(2)');
let tdSale = modal_price.querySelectorAll('td:last-child');
// skidka = cena * skidka / 100%

// ПОДСЧЕТ СКИДКИ И ВЫВЕСТИ В ТАБЛИЦУ

open_price.addEventListener('click', function() {
        price.classList.remove('price-hide');
        price.classList.add('price-show');
});

btn_close.addEventListener('click', function() {
        price.classList.remove('price-show');
        price.classList.add('price-hide');
});

document.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
        price.classList.remove('price-show');
        price.classList.add('price-hide');
    }
  });
