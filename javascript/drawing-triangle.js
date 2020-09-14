/**********************************************
 * Drawing Rectangle Functionality
 * ==================================
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
class DrawingTriangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    // this.color = "red"
  }

  // get the coordinates of the user's mouse
  onMouseDown(coord, event) {
    this.contextReal.fillStyle = "black"; //after releasing the mouse
    this.origX = coord[0];
    this.origY = coord[1];
  }

  // the actual drawing on the canvas
  onDragging(coord, event) {
    this.contextDraft.fillStyle = "black";
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.lineTo(coord[0], coord[1]);
    this.contextDraft.lineTo(this.origX + (this.origX - coord[0]), coord[1]);
    this.contextDraft.fill();
  }

  onMouseMove() {}

  // clear the canvas and move the drawing to the real canvas
  onMouseUp(coord) {
    this.contextReal.fillStyle = "black";
    this.contextReal.shadowBlur = 0;
    this.contextReal.shadowColor = "black";
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.origX, this.origY);
    this.contextReal.lineTo(coord[0], coord[1]);
    this.contextReal.lineTo(this.origX + (this.origX - coord[0]), coord[1]);
    this.contextReal.fill();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
