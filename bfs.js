var cities = [];
var visited = {};
var parent = {};

function setup() {
  createCanvas(800, 500);
  background(51);


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

function draw(){
  let start = cities[0]
  var path = {}
  let queue = [cities[0]]

  while (queue.length > 0){
    let parent_node = queue.pop(0);
    for (x in parent_node.adj_list){
      let current_weight = start.distance(x)
      let dist = parent_node.distance(x) + current_weight
      if (dist < cities[x] || !(x in visited)){
        queue.push(x);
        visited[x] = dist;
        parent[x] = parent_node
      }

    }
  }
  for (x in parent){
    console.log(x)

  }
  // stroke(255,0,255);
  // strokeWeight(1);
  // noFill()
  // beginShape();
  // line(line_parent.x, line_parent.y, line_child.x, line_child.y);
  // endShape();
}
