let open_price = document.querySelector('.page-btn');
let btn_close = document.querySelector('.price-btn');
let price = document.querySelector('.price');
let modal_price = document.querySelector('.table');
let tdPrice = modal_price.querySelectorAll('td:nth-child(2)');
let tdSale = modal_price.querySelectorAll('td:last-child');

// Подсчет скидки 30%
function countPercent() {
	var price, sale;
	for(let i = 0; i < tdPrice.length; i++) {
		price = Number(tdPrice[i].innerHTML);
		sale = price * 30 / 100;
		tdSale[i].innerHTML = price - sale;
	}
}
countPercent();

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
