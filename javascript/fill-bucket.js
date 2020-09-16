class FillBucket extends PaintFunction {
    constructor(contextDraft, contextReal) {
        super();
        this.contextDraft = contextDraft;
        this.contextReal = contextReal;
    }

    onMouseDown(coord, event) {
        this.origX = coord[0];
        this.origY = coord[1];
        //Scan the canvas
        var imgData = this.contextReal.getImageData(0, 0, canvasWidth, canvasHeight);
        var imgDataArray = this.contextReal.getImageData(this.origiX, this.origY, 1, 1);
        var pixelStack = [coord];
        let colorR = imgDataArray.data[0];
        let colorG = imgDataArray.data[1];
        let colorB = imgDataArray.data[2]; 

        while (pixelStack.length) {
            newPos = pixelStack.pop();
            x = newPos[0];
            y = newPos[1];
        }
        //Current pixel position
        pixelPos = (y * canvasWidth + x) * 4;

        while(y-- >= drawingBoundTop && matchStartColor(pixelPos, colorR, colorG, colorB, imgData)) {
            pixelPost -= canvasWidth * 4;
  {
    pixelPos -= canvasWidth * 4;
  }
    }
}

}