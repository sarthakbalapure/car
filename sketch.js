function preload() {
  //load game assets

}


function setup() {
  createCanvas(600, 600);

  edges = createEdgeSprites();
  player = createSprite(40, 550, 30, 30);
  target = createSprite(550, 20, 50, 40);

  brick1 = createSprite(100, 120, 100, 20);
  brick1.velocityX = 5;
  brick2 = createSprite(250, 120, 100, 20);
  brick2.velocityX = 5;
  brick3 = createSprite(400, 120, 100, 20);
  brick3.velocityX = 5;
  brick4 = createSprite(550, 120, 100, 20);
  brick4.velocityX = 5;
  brick5 = createSprite(100, 320, 100, 20);
  brick5.velocityX = -5;
  brick6 = createSprite(250, 320, 100, 20);
  brick6.velocityX = -5;
  brick7 = createSprite(400, 320, 100, 20);
  brick7.velocityX = -5;
  brick8 = createSprite(550, 320, 100, 20);
  brick8.velocityX = -5;
  drawSprites();
}

function draw() {
  background("black");
  target.shapeColor = ("#209AEC ");
  player.shapeColor = ("red");
  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);


  brick1.bounceOff(edges[0]);
  brick1.bounceOff(edges[1]);

  brick2.bounceOff(edges[0]);
  brick2.bounceOff(edges[1]);

  brick3.bounceOff(edges[0]);
  brick3.bounceOff(edges[1]);

  brick4.bounceOff(edges[0]);
  brick4.bounceOff(edges[1]);

  brick5.bounceOff(edges[0]);
  brick5.bounceOff(edges[1]);

  brick6.bounceOff(edges[0]);
  brick6.bounceOff(edges[1]);

  brick7.bounceOff(edges[0]);
  brick7.bounceOff(edges[1]);

  brick8.bounceOff(edges[0]);
  brick8.bounceOff(edges[1]);

  if (keyDown("up")) {
    player.y = player.y - 3;
  }

  if (keyDown("down")) {
    player.y = player.y + 3;
  }

  if (keyDown("left")) {
    player.x = player.x - 3;
  }

  if (keyDown("right")) {
    player.x = player.x + 3;
  }

  if (player.isTouching(brick1)) {
    player.x = 40;
    player.y = 550;
    text("YOU LOSS")
  }
  if (player.isTouching(brick2)) {
    player.x = 40;
    player.y = 550;
    text("YOU LOSS", 200, 200)
  }
  if (player.isTouching(brick3)) {
    player.x = 40;
    player.y = 550;
    text("YOU LOSS", 200, 200)
  }
  if (player.isTouching(brick4)) {
    player.x = 40;
    player.y = 550;
    text("YOU LOSS", 200, 200)
  }
  if (player.isTouching(brick5)) {
    player.x = 40;
    player.y = 550;
    text("YOU LOSS", 200, 200)
  }
  if (player.isTouching(brick6)) {
    player.x = 40;
    player.y = 550;
    text("YOU LOSS", 200, 200)
  }
  if (player.isTouching(brick7)) {
    player.x = 40;
    player.y = 550;
    text("YOU LOSS", 200, 200)
  }
  if (player.isTouching(brick8)) {
    player.x = 40;
    player.y = 550;
    text("YOU LOSS", 200, 200)
  }
  if (player.isTouching(target)) {
    text("YOU WIN", 200, 200)
  }




  drawSprites();
}


