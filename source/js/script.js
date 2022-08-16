let pricePopupElement = document.querySelector('.popup-price');
let buttonClosePricePopupElement = document.querySelector('.popup-price__button-close');
let trElementHeader = document.querySelector('.table__tr--header');
let editFirmsView = document.querySelector('.table-price__filter-header');

trElementHeader.addEventListener('mouseover', () => {
  console.log('Наведение на tr');

  editFirmsView.classList.remove('visually-hidden');
});

trElementHeader.addEventListener('mouseout', () => {
  editFirmsView.classList.add('visually-hidden');
});

editFirmsView.addEventListener('mouseover', () => {
  editFirmsView.classList.remove('visually-hidden');
});

editFirmsView.addEventListener('mouseout', () => {
  editFirmsView.classList.add('visually-hidden');
});

buttonClosePricePopupElement.addEventListener('click', (evt) => {
  evt.preventDefault();

  pricePopupElement.classList.add('popup-price--hidden');
});
