var betetInput = document.querySelector('#betet');
var kamatInput = document.querySelector('#kamat');
var tokeInput = document.querySelector('#toke');
var tenylegesInput = document.querySelector('#tenyleges');
var calcButton = document.querySelector('#calcButton');

if(calcButton) {


    calcButton.addEventListener('click', () => {

        workInput();
        console.log('Nyomod')

    });

}

function workInput() {

    let betetGood = checkInput(betetInput.value);
    let kamatGood = checkInput(kamatInput.value);
    let tokeGood = checkInput(tokeInput.value);

    if (betetGood && kamatGood && tokeGood) {
        let betet = Number(betetInput.value);
        let kamat = Number(kamatInput.value);
        let toke = Number(tokeInput.value);
        let tenyleges = calcTenylegesKamat(betet, kamat, toke);
        tenylegesInput.value = tenyleges;
    } else {
        alert('Hiba')
    }
    //checkInput(baseInput.value);
    //console.log(typeof baseInput.value);
}

function calcTenylegesKamat(betet, kamat, toke) {

    return ((1 + kamat / (100 * toke)) ^ (toke)-1) * betet

}

function checkInput(input) {

    let res = input.match(/^[0-9]+$/);
    return res;

}












