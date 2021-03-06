// toolbox elements

const buttonChecker = document.getElementById('button-checker');
const buttonPicker = document.getElementById('button-picker');
const buttonConverter = document.getElementById('button-converter');
const sizeChecker = document.getElementById('size-checker');
const colorPicker = document.getElementById('color-picker');
const emConverter = document.getElementById('em-converter');
const baseSize = document.querySelector('#base-size');
const px = document.querySelector('#px');
const em = document.querySelector('#em');
const colorButton = document.getElementById('color-button');
const convertButton = document.querySelector('#button-convert');
const resetButton = document.querySelector('#button-reset');

// screen size checker logic

let w = window.innerWidth;
let h = window.innerHeight;

document.getElementById('size').innerHTML = `${w} X 
${h}`;

// color picker logic

function colorRandomizer() {

    function isDark(color) {
        if (color < 130) {
            return true;
        } else {
            return false;
        }
    }

    let rColor = Math.floor(Math.random() * 256);
    let gColor = Math.floor(Math.random() * 256);
    let bColor = Math.floor(Math.random() * 256);
    let opacityColor = parseFloat(Math.random().toFixed(1));

    let randomColorWithOpacity = "rgba(" + rColor + "," + gColor + "," + bColor + ", " + opacityColor + ")";
    let randomColor = "rgb(" + rColor + "," + gColor + "," + bColor + ")";
    let averageColorWithOpacity = (((rColor + gColor + bColor)/3) / opacityColor);
    let averageColor = (rColor + gColor + bColor)/3;

    document.body.style.background = randomColorWithOpacity;
    document.getElementById('color-button').style.backgroundColor = randomColor;
    document.getElementById('button-convert').style.backgroundColor = randomColor;
    document.querySelector('#color-id').innerHTML = `${randomColorWithOpacity}`;
    document.querySelector('#button-color-id').innerHTML = `${randomColor}`;

    if (isDark(averageColor) === true) {
        document.getElementById('color-button').style.color = 'white';
        convertButton.style.color = 'white';
    } else {
        document.getElementById('color-button').style.color = 'black';
        convertButton.style.color = 'black';
    }
    if (isDark(averageColorWithOpacity) === true) {
        colorPicker.style.color = 'white';
        sizeChecker.style.color = 'white';
        emConverter.style.color = 'white';
        resetButton.style.color = 'white';
        convertButton.style.border = '2px solid white';
        resetButton.style.border = '2px solid white';
        colorButton.style.border = '2px solid white';

    } else {
        colorPicker.style.color = 'black';
        sizeChecker.style.color = 'black';
        emConverter.style.color = 'black';
        resetButton.style.color = 'black';
        convertButton.style.border = '2px solid black';
        resetButton.style.border = '2px solid white';
        colorButton.style.border = '2px solid black';
    }

}

colorRandomizer();


// em converter logic

const pxToEm = () => {
    let emResult = parseInt(px.value) / parseInt(baseSize.value);
    em.value = emResult.toFixed(2);
};

const emToPx = () => {
    let pxResult = parseFloat(em.value) * parseInt(baseSize.value);
    px.value = Math.floor(pxResult);
};

// EVENT HANDLERS

// buttons-tabs 

buttonChecker.onclick = function () {
    buttonPicker.style.backgroundColor = 'lightgrey';
    buttonConverter.style.backgroundColor = 'lightgrey';
    buttonChecker.style.backgroundColor = 'transparent';
    buttonChecker.style.paddingTop = '15px';
    buttonConverter.style.paddingTop = '5px';
    buttonPicker.style.paddingTop = '5px';
    sizeChecker.style.display = 'block';
    colorPicker.style.display = 'none';
    emConverter.style.display = 'none';
}

buttonPicker.onclick = function () {
    buttonChecker.style.backgroundColor = 'lightgrey';
    buttonConverter.style.backgroundColor = 'lightgrey';
    buttonPicker.style.backgroundColor = 'transparent';
    buttonPicker.style.paddingTop = '15px';
    buttonConverter.style.paddingTop = '5px';
    buttonChecker.style.paddingTop = '5px';
    sizeChecker.style.display = 'none';
    colorPicker.style.display = 'block';
    emConverter.style.display = 'none';
}

buttonConverter.onclick = function () {
    buttonPicker.style.backgroundColor = 'lightgrey';
    buttonChecker.style.backgroundColor = 'lightgrey';
    buttonConverter.style.backgroundColor = 'transparent';
    buttonConverter.style.paddingTop = '15px';
    buttonChecker.style.paddingTop = '5px';
    buttonPicker.style.paddingTop = '5px';
    sizeChecker.style.display = 'none';
    colorPicker.style.display = 'none';
    emConverter.style.display = 'block';
}

// size checker

document.querySelector('body').onresize = function () {
    w = window.innerWidth;
    h = window.innerHeight;
    document.getElementById('size').innerHTML = `${w} X 
${h}`;
};

// color randomizer

document.querySelector('#color-button').addEventListener('click', e => {colorRandomizer()});

// em converter

convertButton.addEventListener('click', () => {

    if (px.value === "" && (em.value !== "" && baseSize.value !== "")) {
        emToPx();
    }

    if (em.value === "" && (px.value !== "" && baseSize.value !== "")) {
        pxToEm();
    }
});

resetButton.addEventListener('click', () => {

    px.value = "";
    em.value = "";
    baseSize.value = "";
});