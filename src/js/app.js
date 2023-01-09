import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const cards = document.querySelectorAll('.card')

  cards.forEach(card =>{
    const price = card.querySelector('.price')
    if(price.classList.contains('hot')){
      price.innerText += ' 🔥';
    }
  })
});
