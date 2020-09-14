class DrawingQuadraticCurve extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.click = 0;
    }

    onMouseDown(coord, event) {
        if (this.click === 0) {
            this.contextReal.strokeStyle = '#000';
            this.contextReal.lineWidth = 5;
            this.contextReal.beginPath();
            this.origX = coord[0];
            this.origY = coord[1];
        } else if (this.click === 1) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextReal.moveTo(this.origX, this.origY);
            this.contextReal.quadraticCurveTo(coord[0], coord[1], this.newX, this.newY);
            this.contextReal.stroke();
            console.log('final' + coord[0] + ' ' + coord[1]);
        }
        
    }

    onDragging(coord, event) {
        if (this.click === 0) {
            this.draw(coord[0], coord[1]);
        }
    }
    onMouseMove(coord, event) {
        console.log(coord[0] + ' ' + coord[1]);
    }
    onMouseUp(coord, event) {
        if (this.click === 0) {
            this.newX = coord[0];
            this.newY = coord[1];
            this.contextDraft.moveTo(this.newX, this.newY);
            this.contextDraft.lineTo(coord[0], coord[1]);
            this.contextDraft.stroke();
            this.click++;
        }
    }
    // onMouseLeave(){}
    // onMouseEnter(){}

    draw(x, y) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(x, y);
        this.contextDraft.stroke();
    }

}
