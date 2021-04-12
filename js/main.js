const plates = document.querySelector('.hotplates');
const holes = ['1', '2', '3', '4'];

let num = '';
for (i=0; i<holes.length; i++) {
    num += `<div class="num" data-holes="${holes[i]}"></div>`;
}

plates.insertAdjacentHTML('beforeend', num);

const buttons = document.querySelector('.btn');
const btn = ['1', '2', '3', '4'];

let onOff = '';
for (i=0; i<btn.length; i++) {
    onOff += `<div class="onOff" data-btn="${btn[i]}"></div>`
}

buttons.insertAdjacentHTML('beforeend', onOff);

const bottom = buttons.querySelectorAll('.onOff');
const plt = plates.querySelectorAll('.num');

bottom[0].addEventListener('click', function () {
    plt[0].classList.toggle('red');
})

bottom[1].addEventListener('click', function () {
    plt[1].classList.toggle('red');
})

bottom[2].addEventListener('click', function () {
    plt[2].classList.toggle('red');
})

bottom[3].addEventListener('click', function () {
    plt[3].classList.toggle('red');
})