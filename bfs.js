var cities = [];



function setup() {
  createCanvas(800, 500);
  for (var i = 0; i < 8; i++){
      x = random(0,800);
      y = random(0,500);
      edges = [random(i,8),random(i,8),random(i,8)]
      cities[i] = new Node(x,y, edges);
    }


    for (x of cities){
      x.draw();
      x.map_draw(cities);
    }

}

// cities.sort(sortMe);
//
// function sortMe(a, b)
// {
//   return (b.position[0] - a.position[0]) || (b.position[1] - a.position[1]);
// }

function draw(){

  // stroke(255,0,255);
  // strokeWeight(1);
  // noFill()
  // beginShape();
  // line(line_parent.x, line_parent.y, line_child.x, line_child.y);
  // endShape();
}
