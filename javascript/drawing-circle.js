class DrawingCircle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, e) {
    this.contextReal.fillStyle = "red";
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, e) {
    this.contextDraft.fillStyle = "red";
    var radius = 0;
    var deltaX = this.origX - coord[0];
    var deltaY = this.origY - coord[1];
    radius = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.clientWidth,
      canvasDraft.height
    );
    this.contextDraft.beginPath();
    this.contextDraft.arc(this.origX, this.origY, radius, 0, Math.PI * 2);
    this.contextDraft.fill();
  }

  onMouseMove() {}

  onMouseUp(coord) {
    var radius = 0;
    var deltaX = this.origX - coord[0];
    var deltaY = this.origY - coord[1];
    radius = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.clientWidth,
      canvasDraft.height
    );
    this.contextReal.beginPath();
    this.contextReal.arc(this.origX, this.origY, radius, 0, Math.PI * 2);
    this.contextReal.fill();
  }

  onMouseLeave() {}
  onMouseEnter() {}
}
