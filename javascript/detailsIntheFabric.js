var canvas = new fabric.Canvas('canvas-real');  


var rect = new fabric.Rect({
  left: 100,
  top: 50,
  fill: 'yellow',
  width: 200,
  height: 100,
  objectCaching: false,
  stroke: 'blue',
  strokeWidth: 4,
});

var circle = new fabric.Circle({
    radius: 20, fill: 'green', left: 100, top: 100
  });
  var triangle = new fabric.Triangle({
    width: 20, height: 30, fill: 'blue', left: 50, top: 50
  });
  
  
  $('#fabricrect').click (function(){
      canvas.add(rect);
    });
//   rect.set({ fill: 'red', strokeWidth: 5, stroke: 'rgba(100,200,200,0.5)' });
  canvas.add(circle);
//   canvas.add(rect);
//   canvas.add(triangle);
//   console.log(rect.get('width'));
