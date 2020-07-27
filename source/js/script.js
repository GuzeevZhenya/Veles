// 'use strict';


// const modalAdd = document.querySelector('.navigation__list');
// const addAd = document.querySelector('.header__burger');


// const modalBtnSubmit = document.querySelector('.modal__btn-submit');
// const modalSubmit = document.querySelector('.modal__submit');

// //открытие окно, удалением класса hide
// addAd.addEventListener('click', (event) => {
//     const target = event.target;




//     if (target.classList.contains('header__burger--close')) {
//         modalAdd.classList.add('navigation__list--hidden');
//     } else {
//         modalAdd.classList.remove('navigation__list--hidden');
//     }
// });



let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

}