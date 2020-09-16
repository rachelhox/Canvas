// var canvas = new fabric.Canvas("canvas-real");
canvas = new fabric.Canvas("canvas-real");

contextFabric = canvas.getContext("2d");
console.log(contextFabric);

function AddRect() {
  var rect = new fabric.Rect({
    left: 100,
    top: 50,
    fill: curFillColor,
    width: 200,
    height: 100,
    objectCaching: false,
    stroke: curStroke,
    strokeWidth: 4,
  });
  canvas.add(rect);
}

function AddTrangle() {
  var trangle = new fabric.Triangle({
    left: 70,
    top: 50,
    fill: "yellow",
    width: 90,
    height: 100,
    stroke: "lime",
    strokeWidth: 4,
  });
  canvas.add(trangle);
}
function AddCircle() {
  var circle = new fabric.Circle({
    radius: 50,
    fill: "green",
    left: 30,
    top: 50,
  });
  canvas.add(circle);
  canvas.moveTo(circle, 10000000);
}
function AddMagi() {
  fabric.Image.fromURL("../assets/imgpng/Magikoopa.png", function (oImg) {
    oImg.filters.push(new fabric.Image.filters.Grayscale());
    oImg.applyFilters();
    canvas.add(oImg);
  });
}
var path = new fabric.Path(
  "M121.32,0L44.58,0C36.67,0,29.5,3.22,24.31,8.41\
c-5.19,5.19-8.41,12.37-8.41,20.28c0,15.82,12.87,28.69,28.69,28.69c0,0,4.4,\
0,7.48,0C36.66,72.78,8.4,101.04,8.4,101.04C2.98,106.45,0,113.66,0,121.32\
c0,7.66,2.98,14.87,8.4,20.29l0,0c5.42,5.42,12.62,8.4,20.28,8.4c7.66,0,14.87\
-2.98,20.29-8.4c0,0,28.26-28.25,43.66-43.66c0,3.08,0,7.48,0,7.48c0,15.82,\
12.87,28.69,28.69,28.69c7.66,0,14.87-2.99,20.29-8.4c5.42-5.42,8.4-12.62,8.4\
-20.28l0-76.74c0-7.66-2.98-14.87-8.4-20.29C136.19,2.98,128.98,0,121.32,0z"
);

// canvas.add(path.set({ left: 100, top: 200 }));

$("#AddRect").click(function () {
  AddRect();
});
$("#AddTrangle").click(function () {
  AddTrangle();
});
$("#AddCircle").click(function () {
  AddCircle();
});
$("#AddMagi").click(function () {
  AddMagi();
});

//   rect.set({ fill: 'red', strokeWidth: 5, stroke: 'rgba(100,200,200,0.5)' });
//   canvas.add(circle);
//   canvas.add(rect);
//   canvas.add(triangle);
//   console.log(rect.get('width'));
