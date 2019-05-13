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

  //bfs
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
        //let dist = parent_node.distance(neighbor)
        if (neighbor.searched == false){
          queue.push(neighbor)
          neighbor.searched = true
          //visited.neighbor = dist
        }
        //   queue.push(cities[x])
        //   visited.push(cities[x])
      // }
        // }
      }
    }
  }
