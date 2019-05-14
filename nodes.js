function Node(p1,p2,name){
  this.x = p1;
  this.y = p2;
  this.edges = []
  this.name = name
  this.searched = false
  this.parent = 0
  this.dist = 1000000

  this.distance = function(other){
    var d = dist(this.x, this.y, other.x, other.y);
    return d;
  }

  this.draw = function(){
    stroke(255,10);
    strokeWeight(4);
    fill(0,155,255);
    ellipse(this.x, this.y, 8, 8);
  }

  this.map_draw = function(cities){
    for (x in this.edges){
      x = cities[x]
      stroke(0,255,255);
      strokeWeight(2);
      noFill()
      beginShape();
      line(this.x, this.y, x.x, x.y);
      endShape();
    }

  }
  this.map_draw_p = function(){
      edge = this.parent
      stroke(255,0,0);
      strokeWeight(2);
      noFill()
      beginShape();
      line(this.x, this.y, edge.x, edge.y);
      endShape();
  }

}
