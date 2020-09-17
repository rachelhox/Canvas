let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');
let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');
let currentFunction;
let dragging = false;
var step = -1;
var saveCard = [];
var loadCard = new Image();



$('#canvas-draft').mousedown(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    // step++
    // saveCard.push(canvasReal.toDataURL());
    // if (step < saveCard.length) {
    //     saveCard.length = step;
    //     console.log(`unknown condition fired`)
    // }
    // console.log(`this is mousedown step ${step}`);
    // console.log(saveCard);
    currentFunction.onMouseDown([mouseX, mouseY], e);
    dragging = true;
});

$("#undo").click(() => {
    var ctx = contextReal;
    if (step > -1) {
        step--;
        ctx.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        console.log(`this is undo step ${step}`);
        loadCard.src = saveCard[step];
        loadCard.onload = function () {
            ctx.drawImage(loadCard, 0, 0);
        }
    }
});

$("#redo").click(() => {
    var ctx = contextReal;
    // ctx.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    console.log(`this is redo ${step}`);
    console.log(saveCard.length);
    if (step <= saveCard.length) {
        console.log(`redo fired`)
        step++;
        console.log(`this is redo ${step}`);
        loadCard.src = saveCard[step];
        console.log(saveCard);
        loadCard.onload = function () {
            ctx.drawImage(loadCard, 0, 0);
        }
    }

});

$('#canvas-draft').mousemove(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    if (dragging) {
        currentFunction.onDragging([mouseX, mouseY], e);
    };
    currentFunction.onMouseMove([mouseX, mouseY], e);
});

$('#canvas-draft').mouseup(function (e) {
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    step++
    saveCard.push(canvasReal.toDataURL());
    console.log(`this is mouseup step ${step}`);
    console.log(saveCard);
    currentFunction.onMouseUp([mouseX, mouseY], e);
});

$('#canvas-draft').mouseleave(function (e) {
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$('#canvas-draft').mouseenter(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseEnter([mouseX, mouseY], e);
});

class PaintFunction {
    constructor() {}
    onMouseDown() {}
    onDragging() {}
    onMouseMove() {}
    onMouseUp() {}
    onMouseLeave() {}
    onMouseEnter() {}
}