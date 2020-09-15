let hasInput = false;

class DrawingText extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        // this.origX = null;
        // this.origY = null;
    }
    onMouseDown(coord, event) {
        if (hasInput === false) {
            
            this.origX = coord[0];
            this.origY = coord[1];
            let mouseX = this.origX;
            let mouseY = this.origY;

            this.contextReal.fillStyle = curStroke;
            var input = document.createElement('input');
            input.type = 'text';
            input.style.position = 'fixed';
            input.style.border = "none";
            input.style.outline = "none"; 
            input.style.backgroundColor = "transparent";
            input.style.height = "40px";
            input.style.width = "350px";
            input.placeholder = "Type & hit 'Enter'. 'Esc' to delete";
            input.style.font = "Arial"; // font-family for placeholder
            input.autocomplete = "off";


            input.style.left = (this.origX + 300) + 'px'; //the position of input when you click mouse
            input.style.top = (this.origY + 0) + 'px';
            input.id = 'textBox'
            document.body.appendChild(input);
            hasInput = true;
            
            input.onkeydown = function handleEnter(input) {
                if (input.key === 'Enter') {
                    drawText(this.value, parseInt(this.style.left), parseInt(this.style.top));
                    document.body.removeChild(this);
                    hasInput = false;
                }
                if (input.key === 'Escape') {
                    this.typedText = document.getElementById("textBox").value;
                    contextReal.fillText(this.typedText, this.origX, this.origY);
                    document.body.removeChild(this);
                    hasInput = false;
                }
            };
            function drawText(txt, coord) {
                contextReal.textBaseline = 'top';
                contextReal.textAlign = 'left';
                contextReal.font = "italic 300 2rem times";
                contextReal.fillText(txt, mouseX, mouseY);
            }

        }
    }
    // onDragging() {}
    // onMouseMove() {}
    onMouseUp() {
    }
    onMouseLeave(coord) {
        if (coord[0] < this.origX + 370 && coord[0] > this.origX - 370 && coord[1] < this.origY + 40 && coord[1] > this.origY - 40) {} else {
            hasInput = false;
        }
    }
    onMouseEnter() {}
}
