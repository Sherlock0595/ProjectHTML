'use strict';

let filterPopup = document.querySelector('.filterPopup');
let filterTitle = document.querySelector('.filterTitle');
let filerIcon = document.querySelector('.filerIcon');

filterTitle.addEventListener('click', function () {
    filterPopup.classList.toggle('hidden');
    filterTitle.classList.toggle('filterTitlePink');
    filerIcon.classList.toggle('filerIconPink');

    if (filerIcon.getAttribute('src') === 'images/filterIcon.svg') {
        filerIcon.setAttribute('src', 'images/filterIconPink.svg')
    } else {
        filerIcon.setAttribute('src', 'images/filterIcon.svg')
    }
});

let categoryHeader = document.querySelectorAll('.categoryHeader');
categoryHeader.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden')
    })
})

let filterSizeCheckbox = document.querySelector('.filterSizeCheckbox ');

let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function () {
    filterSizeCheckbox.classList.toggle('hidden');
})
