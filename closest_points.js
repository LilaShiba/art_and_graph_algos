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
  cities[0].edges = cities
  cities[1].edges = cities
  cities[2].edges = cities
  cities[3].edges = cities
  cities[4].edges = cities
  cities[5].edges = cities
  cities[6].edges = cities
  cities[7].edges = cities

  for (x of cities){
    x.draw();
    x.map_draw(cities);
  }
}


function draw(){
  let end = cities[8]
  let start = cities[0]
  start.dist = 0
  start.searched = true
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
      if (parent_node != neighbor){
        let dist = parent_node.distance(neighbor)
        if (dist < neighbor.dist){
          console.log(dist)
          queue.push(neighbor)
          neighbor.searched = true
          neighbor.dist = dist
          neighbor.parent = parent_node
        }
      }
    }
  }
  for (x of cities){
    x.map_draw_p();
  }
}


// nodes

// function Node(p1,p2,name){
//   this.x = p1;
//   this.y = p2;
//   this.edges = []
//   this.name = name
//   this.searched = false
//   this.parent = 0
//   this.dist = 1000000
//
//   this.distance = function(other){
//     var d = dist(this.x, this.y, other.x, other.y);
//     return d;
//   }
//
//   this.draw = function(){
//     stroke(255,10);
//     strokeWeight(4);
//     fill(0,155,255);
//     ellipse(this.x, this.y, 8, 8);
//   }
//
//   this.map_draw = function(cities){
//     for (x in this.edges){
//       x = cities[x]
//       stroke(0,255,255);
//       strokeWeight(2);
//       noFill()
//       beginShape();
//       line(this.x, this.y, x.x, x.y);
//       endShape();
//     }
//
//   }
//   this.map_draw_p = function(){
//       edge = this.parent
//       stroke(255,0,0);
//       strokeWeight(2);
//       noFill()
//       beginShape();
//       line(this.x, this.y, edge.x, edge.y);
//       endShape();
//   }
//
// }
