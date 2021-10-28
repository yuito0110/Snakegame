ctx.fillStyle = "lime";
ctx.fillRect(canv.width/2, canv.height/2, 20, 20);
setInterval(function(){
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.fillStyle = "lime";
  px += xd;
  py += yd;
  snake.push({x:px, y:py});
  for (let i=0; i<snake.length-1; i++) {
    ctx.fillRect(snake[i].x*SIZE,snake[i].y*SIZE, SIZE-2, SIZE-2);
    if (snake[i].x == px && snake[i].y == py) {

      tail = MIN;
    }
    // if(count <=-1){
    //   c.textContent = "game over";
    // }
  }

  while (snake.length > tail) {
    snake.shift();
  }
  if(appleX == px && appleY == py) {
    tail++;
    count++;
    c.textContent = count;
    appleX = Math.floor(Math.random()*canv.width/SIZE);
    appleY = Math.floor(Math.random()*canv.height/SIZE);
  }
  ctx.fillStyle = "red";
  ctx.fillRect(appleX*SIZE, appleY*SIZE, SIZE-2, SIZE-2);

  if(appleM == px && appleN == py) {
    tail--;
    count--;
    c.textContent = count;
    appleM = Math.floor(Math.random()*canv.width/SIZE);
    appleN = Math.floor(Math.random()*canv.height/SIZE);
    if (tail == 0) {
      document.location.reload();
      alert("game over")
    }
  }
  ctx.fillStyle = "purple";
  ctx.fillRect(appleM*SIZE, appleN*SIZE, SIZE-2, SIZE-2);
}, 1000/FPS);
