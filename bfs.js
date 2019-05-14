var cities = [];
var visited = {};
var path = {};
var cities = [];



function rando(bottom, top) {
    return function() {
        return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
    }
}

function setup() {
  createCanvas(800, 500);
  background(51);


  for (var i = 0; i < 8; i++){
      x = random(0,800);
      y = random(0,500);
      edges = []
      cities[i] = [x, y]
      ellipse(x,y,8,8);
    }
    start = cities[0]
    dist.start = 0
}


function draw(){
  var queue = [start]


  while (queue.length > 0){
    node = queue.pop(0)
    cities.pop(node)

    for (x=0; x < cities.length; x++){
      edge = cities[x]
      weight = dist(node[0],node[1], edge[0], edge[1])
      if (!(edge in visited) || visited[edge] > weight ){
        visited[edge] = weight
        queue.push(edge)
        path[edge] = node
        stroke(255,10);
        strokeWeight(4);
        fill(0,155,255);
        ellipse(edge[0], edge[1], 8, 8);
      }
    }
    // console.log(best)
    // stroke(0,255,255);
    // strokeWeight(2);
    // noFill()
    // beginShape();
    // line(node[0], node[1], next_node[0], next_node[1]);
    // endShape();
    // queue.push(next_node)
  }
  console.log(path)
  for (x=0; x < path.length; x++){
    parent = cities[x]
    parent_cords = path[parent]
    console.log(parent_cords)
  }
}
