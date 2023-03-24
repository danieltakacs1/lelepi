// Takács Dániel,2023-03-24,SZOFT I-2 N





var AInput = document.querySelector('#A');
var BInput = document.querySelector('#B');
var CInput = document.querySelector('#C');
var eredmenyInput = document.querySelector('#eredmeny');
var calcButton = document.querySelector('#calcButton');

if(calcButton) {


    calcButton.addEventListener('click', () => {

        workInput();
        console.log('Nyomod')

    });

}

function workInput() {

    let AGood = checkInput(AInput.value);
    let BGood = checkInput(BInput.value);
    let CGood = checkInput(CInput.value);

    if (AGood && BGood && CGood) {
        let A = Number(AInput.value);
        let B = Number(BInput.value);
        let C = Number(CInput.value);
        let eredmeny = calcEredmeny(A, B, C);
        eredmenyInput.value = eredmeny;
    } else {
        alert('Hiba')
    }
    //checkInput(baseInput.value);
    //console.log(typeof baseInput.value);
}

function calcEredmeny(A, B, C) {

    return A * B * C

}

function checkInput(input) {

    let res = input.match(/^[0-9]+$/);
    return res;

}












