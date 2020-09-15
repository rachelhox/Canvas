class DrawingStraightLine extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.contextReal.globalCompositeOperation = 'source-over';
        this.contextReal.strokeStyle = '#000';
        this.contextReal.lineWidth = 5;
        this.contextReal.beginPath();
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onDragging(coord, event) {
        // this.contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.strokeStyle = '#000';
        this.contextDraft.lineWidth = 5;
        this.draw(coord[0], coord[1]);
    }
    onMouseMove(){}
    onMouseUp(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.lineTo(coord[0], coord[1]);
        this.contextReal.stroke();
    }
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x, y) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(x, y);
        this.contextDraft.stroke();
    }


}