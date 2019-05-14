var visited = {};

function make_maze(row,col){
  var maze = [];
  for (x=0; x < row; x++){
    maze[x] = [];
    for (y=0; y < col; y++){
      maze[x][y] = [Math.random(10,100),x,y];
    }
  }
  return maze
}



function bfs(maze,start,end){
  queue = [start]

  while (queue.length > 0){
    node = queue.pop(0)
    //console.log(node)
    x = node[0]
    y = node[1]
    end1 = 9
    end2 = 9

    if (x == end1 && y == end2){
      //console.log(true)
      return true
    }

    edges = [[x+1,y], [x-1,y], [x,y-1], [x+1,y+1]]
    for (x = 0; x < 4; x++){
      child = edges[x]
      cx = child[0]
      cy = child[1]
      if ( !(visited[cx,cy]) ){
        // issue
        if ( 0 <= cx && cx < 10 && 0 <= cy && cy < 10){
          //let weight = dist(cx,cy,x,y)
          //console.log(cx)
          visited[[cx,cy]] = [cx,cy]
          queue.push( [cx,cy] )
        }
      }
    }
  }
}
console.log(visited)

matrix = make_maze(10,10)
ans = bfs(matrix,[0,0], [9,9])
console.log(ans)
