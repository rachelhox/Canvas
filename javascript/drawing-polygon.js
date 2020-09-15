class DrawingPolygon extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.contextReal.globalCompositeOperation = 'source-over';
        this.contextReal.fillStyle = "#f44";
        this.origX = coord[0];
        this.origY = coord[1];
    }

  onDragging(coord, e) {
    this.sides = 10;
    this.radius = 0;
    this.deltaX = this.origX - coord[0];
    this.deltaY = this.origY - coord[1];
    this.radius = Math.sqrt(
      this.deltaX * this.deltaX + this.deltaY * this.deltaY
    );
    this.startAngle = 0;
    this.angle = (2 * Math.PI) / this.sides;

    this.contextDraft.beginPath();
    this.contextDraft.strokeStyle = curStroke;
    this.contextDraft.lineWidth = 5;
    this.contextDraft.lineJoin = "round";

    this.beginX = this.origX + this.radius * Math.cos(this.startAngle);
    this.beginY = this.origY - this.radius * Math.sin(this.startAngle);
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.moveTo(this.beginX, this.beginY);

    for (let i = 1; i <= this.sides; i++) {
      //current points
      var currentAngle = this.startAngle + i * this.angle;
      var currentPointX = this.origX + this.radius * Math.cos(currentAngle);
      var currentPointY = this.origY - this.radius * Math.sin(currentAngle);
      //draw the line
      this.contextDraft.lineTo(currentPointX, currentPointY);
    }

    this.contextDraft.closePath();
    this.contextDraft.stroke();
    }
  onMouseMove() {}

  onMouseUp(coord) {
    this.contextReal.beginPath();
    this.contextReal.strokeStyle = curStroke;
    this.contextReal.lineWidth = 5;
    this.contextReal.lineJoin = "round";

    this.beginX = this.origX + this.radius * Math.cos(this.startAngle);
    this.beginY = this.origY - this.radius * Math.sin(this.startAngle);
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.moveTo(this.beginX, this.beginY);

    for (let i = 1; i <= this.sides; i++) {
      //current points
      var currentAngle = this.startAngle + i * this.angle;
      var currentPointX = this.origX + this.radius * Math.cos(currentAngle);
      var currentPointY = this.origY - this.radius * Math.sin(currentAngle);
      //draw the line
      this.contextReal.lineTo(currentPointX, currentPointY);
    }

    this.contextReal.closePath();
    this.contextReal.stroke();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
