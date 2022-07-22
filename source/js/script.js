let pricePopupElement = document.querySelector('.popup-price');
let buttonClosePricePopupElement = document.querySelector('.popup-price__button-close');

console.log(pricePopupElement);

buttonClosePricePopupElement.addEventListener('click', (evt) => {
  evt.preventDefault();

  pricePopupElement.classList.add('popup-price--hidden');
});
