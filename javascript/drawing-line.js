/**********************************************
 * Drawing Line Functionality
 * ==================================
 ***********************************************/
class DrawingLine extends PaintFunction {
  // This class extends the PaintFunction class
  constructor(contextReal) {
    super();
    this.context = contextReal;
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
    this.context.strokeStyle = curStroke;
    this.context.lineJoin = "round";
    this.context.lineWidth = strokeWidth;
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
    this.draw(coord[0], coord[1]);
  }
  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
  }

  onMouseMove() {}

  onMouseUp() {
    savetosaveCard();
  }

  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    this.context.lineTo(x, y);

    this.context.stroke();
  }
}
