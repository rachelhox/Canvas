let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');
let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');
let currentFunction;
let dragging = false;
var step = -1;
var rstep = -1;
var saveCard = [];
var redolist = [];
var loadCard = new Image();



$('#canvas-draft').mousedown(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseDown([mouseX, mouseY], e);
    dragging = true;
});


// save to the redo list
//load from Savecard [step]

$("#undo").click(() => {
    var ctx = contextReal;
    
    if (step > -1) {
        step--;
        rstep++;
        ctx.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        loadCard.src = saveCard[step];
        redolist.push(saveCard.pop());
        console.log(`removed from Savedcard and saved to the redolist`);
        loadCard.onload = function () {
            ctx.drawImage(loadCard, 0, 0);
        }
        console.log(`this is loading from saveCard[${step}]`);
    }
});

// rstep+1 
// setp+1
// load from redolist[rstep+1] if save 

$("#redo").click(() => {
    var ctx = contextReal;
    // ctx.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    rstep++
    if (step <= saveCard.length) {
        console.log(`redo fired`)
        step++;
        // if (rstep == -1){rstep = 0}
        loadCard.src = redolist.pop();
        saveCard.push(loadCard.src);   // save to saveCard
        console.log(`this is poped from redolist
        and push to saveCard`);
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

// it save and add step and save to saveCard
function savetosaveCard () {
    step++
    if (step < saveCard.length) { 
        saveCard.length = step;
        console.log(`reset Savecard ${step} < ${saveCard.length}`)
     }
    saveCard.push(canvasReal.toDataURL());
    console.log(`this saved to saveCard`);
}

$('#canvas-draft').mouseup(function (e) {
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;

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