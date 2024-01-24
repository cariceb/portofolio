var i = 0;
var txt = 'Ik ben Carice Brust en ik ben 16 jaar.  ';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



