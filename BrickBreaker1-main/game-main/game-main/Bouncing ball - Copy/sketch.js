// for the variable
var BrickGroup;
var paddle , paddleImg;
var ball , ballImg;
var bk1 , bk2 , bk3 , bk4 , bk5 , bk6 , bk7 , bk8 , bk9 , bk10, bk11 , bk12 , bkImg; 

lives = 3;
score = 0;
Time = 300;

// for the preload of the images
function preload(){
    paddleImg = loadImage("P.png");
    ballImg = loadImage("Ball.png");
    bkImg = loadImage("Block1.png");
}
// for the setup function
function setup(){
    paddle = createSprite(620,580,100,20);
    createCanvas(1345,605);
    paddle.addImage("paddle",paddleImg);

    ball = createSprite(650,500,20,20);
    ball.addImage("Ball",ballImg);
    ball.scale=0.045;

    bk1 = createSprite(350,100,60,20);
    bk1.addImage("BK1",bkImg);

    bk2 = createSprite(550,100,60,20);
    bk2.addImage("BK2",bkImg);

    bk3 = createSprite(750,100,60,20);
    bk3.addImage("BK3",bkImg);

    bk4 = createSprite(950,100,60,20);
    bk4.addImage("BK4",bkImg);

    bk5 = createSprite(450,200,60,20);
    bk5.addImage("BK5",bkImg);

    bk6 = createSprite(850,200,60,20);
    bk6.addImage("BK6",bkImg);

    bk7 = createSprite(650,200,60,20);
    bk7.addImage("BK7",bkImg);
    
    bk8 = createSprite(550,300,60,20);
    bk8.addImage("BK8",bkImg);

    bk9 = createSprite(750,300,60,20);
    bk9.addImage("BK9",bkImg);

    bk10 = createSprite(650,400,60,20);
    bk10.addImage("BK10",bkImg);


}
//for the draw function
function draw(){
    background("#d7dbaf");        
    BrickGroup = new Group();

    if(keyDown("space")){
        ball.velocityY = -10;
        ball.velocityX = 11;
    }
    
    ball.bounceOff(paddle);
    ball.bounceOff(bk1);
    ball.bounceOff(bk2);
    ball.bounceOff(bk3);
    ball.bounceOff(bk4);
    ball.bounceOff(bk5);
    ball.bounceOff(bk6);
    ball.bounceOff(bk7);
    ball.bounceOff(bk8);
    ball.bounceOff(bk9);
    ball.bounceOff(bk10);
    edges = createEdgeSprites();

    // for the scores
    // for (var i = 0; i < BrickGroup.length; i++) {
    //     // for the score to added;
    //     if (ball.isTouching(BrickGroup)) {
    //       BrickGroup.destroy();
    //       score = score + 1;
    //     }
    //   }


    paddle.x = World.mouseX;
    push();
    fill("");
    textSize(30);
    text("Score  : "+score,20,30);

    text("Lives : "+lives , 550,30);

    text("Time : "+Time , 950,30);

    if(ball.position.y > 580){
        lives = lives - 1;
    }

    if(keyDown("space")){
        if(Time = 300||299)
        {
            Time = Time - 1;
        }
    }
    // after the game end
    if(Time === 0){
        ball.x = 650;
        ball.y = 500;        
        ball.velocityX = 0;
        ball.velocityY = 0;
        lives = 0;
        background("Black");
        fill("#d7dbaf");
        textSize(30);
        text("Press ctrl + R to restart the game",450,260);
        push();
        fill("White");
        textSize(30);
        text("Score  : "+score,20,30);
    
        text("Lives : "+lives , 550,30);
    
        text("Time : "+Time , 950,30);        
    }

    if(lives === 0){
        ball.x = 650;
        ball.y = 500;        
        ball.velocityX = 0;
        ball.velocityY = 0;
        
    }
    if(lives === 0){
    background("Black");
    fill("#d7dbaf");
    textSize(30);
    text("Press ctrl + R to restart the game",450,260);
    push();
    fill("White");
    textSize(30);
    text("Score  : "+score,20,30);

    text("Lives : "+lives , 550,30);

    text("Time : "+Time , 950,30);
    }

    // for the edge
    ball.bounceOff(edges);
    drawSprites();
}

function BrickGp(){
    BrickGroup.add(bk1,bk2,bk3,bk4,bk5,bk6,bk7,bk8,bk9,bk10);
}