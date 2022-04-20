'use strict';

let brandDark = document.querySelector('.brandDark');
let iconbar = document.querySelector('.iconbar');
let menuCross = document.querySelector('.menuCross');

function toggleMenu() {
    brandDark.classList.toggle('hidden');
}

iconbar.addEventListener('click', toggleMenu);
menuCross.addEventListener('click', toggleMenu);
