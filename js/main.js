const plates = document.querySelector('.hotplates');
const holes = ['1', '2', '3', '4'];

let num = '';
for (i=0; i<holes.length; i++) {
    num += `<div class="num" data-holes="${holes[i]}"></div>`;
}

plates.innerHTML += num;

const buttons = document.querySelector('.btn');
const btn = ['1', '2', '3', '4'];

let onOff = '';
for (i=0; i<btn.length; i++) {
    onOff += `<div class="onOff" data-btn="${btn[i]}"></div>`
}

buttons.innerHTML += onOff;