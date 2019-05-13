var cities = [];
var visited = {};
var parent = {};

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
      cities[i] = new Node(x,y,i);
    }
  cities[0].edges = [cities[1], cities[2]]
  cities[1].edges = [cities[0], cities[3]]
  cities[2].edges = [cities[3], cities[2]]
  cities[3].edges = [cities[4], cities[5]]
  cities[4].edges = [cities[6], cities[5]]
  cities[5].edges = [cities[7],cities[2]]
  cities[6].edges = [cities[3],cities[7]]
  cities[7].edges = [cities[1],cities[2]]

  for (x of cities){
    x.draw();
    x.map_draw(cities);
  }
}


function draw(){
  let end = cities[8]
  let start = cities[0]
  let queue = [cities[0]]

  while (queue.length > 0){
    var parent_node = queue.pop(0);
    console.log(parent_node.edges)
    fill(255,0,0)
    ellipse(parent_node.x, parent_node.y, 8,8)
    // explore edges
    var edges = parent_node.edges
    for (i = 0; i < edges.length; i++){
      neighbor = edges[i]
      let dist = parent_node.distance(neighbor)
      if (neighbor.searched == false || dist < visited.neighbor){
        queue.push(neighbor)
        neighbor.searched = true
        visited.neighbor = dist
        stroke(255,0,0);
        strokeWeight(5);
        noFill()
        beginShape();
        line(parent_node.x, parent_node.y, neighbor.x, neighbor.y);
        endShape();
      }

    }
  }
}
