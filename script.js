let btns = document.querySelectorAll('input');
console.log(btns);
for (let i = 1; i < btns.length; i++) {
    btns[i].classList.add('btn', 'btn-secondary', 'm-2', 'btn-lg');
    btns[i].addEventListener('click', function() {
        // btns[0]: claculator screen
        //btns[4] : c (CLEAR BTN)
        // btns[14]: equal btn(=) 
        if (i != 4 && i != 14) {
            btns[0].value += btns[i].value;
        } else if (i == 4) {
            btns[0].value = '';
        } else if (i == 14) {
            btns[0].value = eval(btns[0].value);
        }
    });
}