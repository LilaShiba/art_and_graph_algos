var cities = [];
var totalCities = 8;
var recordDistance;
var bestboy;


function setup() {
  createCanvas(800, 500);
  for (var i = 0; i < 8; i++){
      x = random(0,800);
      y = random(0,500);
      cities[i] = new Node(x,y);
    }
    for (x of cities){
      x.draw();
    }
}

// cities.sort(sortMe);
//
// function sortMe(a, b)
// {
//   return (b.position[0] - a.position[0]) || (b.position[1] - a.position[1]);
// }

function draw(){
  for (var i = 0; i < cities.length-1; i++){
    best = 1000,1000
    for (var j = i+1; j < cities.length; j++){
      temp = cities[i].distance(cities[j])
      console.log(temp)
      if (temp < best){
        stroke(255,0,255,19);
        strokeWeight(1);
        noFill()
        beginShape();
        line(cities[i].x, cities[i].y, cities[j].x, cities[j].y);
        endShape();
      }
      }
    }
  }
