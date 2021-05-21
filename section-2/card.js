document.getElementById("left").onclick = function () {
  var x = document.getElementById("demo");
  x.scrollLeft = x.scrollLeft - 255;
  console.log(x.scrollLeft);
};
document.getElementById("right").onclick = function () {
  var x = document.getElementById("demo");
  x.scrollLeft = x.scrollLeft + 255;
  console.log(x.scrollLeft);
};
