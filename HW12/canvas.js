var canvas;
var ctx;
var x = 50;
var y = 50;
var square1;// square2;
var direction;
var questions;
var squareArray = [];
var coinArray = [];
var score = 0;
$(document).ready(function(){
    
    setup();  
    
    $(this).keypress(function(event){
        getKey(event);
        
    });
});



function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create two objects
   square1 = new Square(100,100,50,50,"#0000FF");
    //square2 = new Square(400,400,100,100,"#00FF00");
    //////
    $.getJSON("information.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    });
//why no work???????????
    $.getJSON("coins.json", function(dataC) {
        for(var i = 0; i < dataC.coins.length; i++)
        {
            coinArray.push(new Coins(dataC.coins[i].x, dataC.coins[i].y, dataC.coins[i].h, dataC.coins[i].w, dataC.coins[i].color));
        }
        drawSquare();
    });
}

//make another json file with 3, connect here, put into different array


    function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
        direction = "up";
    }
    if(actualLetter == "s")
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "a")
    {
        moveLeft();
        direction = "left";
    }
    if(actualLetter == "d")
    {
        moveRight();
        direction = "right";
    }
   
   
    // var test = hasCollided(square1,square2);
    var test2 = false;
    for(var i = 0; i < squareArray.length; i++)
    {

        test2 = hasCollided(square1,squareArray[i]);
        if(test2 == true)
        {
            break;
        }
        
       
    }
    if(test2)
    {
        //score++;
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }
    
    }
    drawSquare(); 
    



///////// trying to collide with coins here//get coin array to work
var test3 = false;
    for(var i = 0; i < coinArray.length; i++)
    {

        test3 = hasCollided(square1,coinArray[i]);
        if(test3 == true)
        {
            coinArray.splice(i,1);
            score++;
            break;
        }
        
    }
    
    drawSquare(); 
    
}


function moveUp()
{
    square1.y-=10;
}
function moveDown()
{
    square1.y+=10;
}
function moveRight()
{
    square1.x+=10;
}
function moveLeft()
{
    square1.x-=10;
}

function drawSquare()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
   // ctx.fillStyle = square2.mainColor;
   // ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }

    //trying to add coinc here
for(var i = 0; i < coinArray.length; i++)
{
    ctx.fillStyle = coinArray[i].color;
    ctx.fillRect(coinArray[i].x, coinArray[i].y, coinArray[i].width, coinArray[i].height);
}


    ctx.font = "30px Arial";
    ctx.fillText("Score: " + score, 10, 50);    

}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}