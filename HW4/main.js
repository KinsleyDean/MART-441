
function storyFunction2(answer) 
{
    //var answer1 = document.getElementById("choice1").innerHTML;
    var answer = document.getElementById("txtBox").value;
    
    //document.getElementById("image1").src= images/image1.jpg
    if (answer == "Right") {
        document.getElementById("photo").src="images/image6.jpg" 
        document.getElementById("story").innerHTML = "You see a road that leads out of the woods. Stay in the woods or Go down the road?"
    } else if (answer ==  "Go down the road") {
       document.getElementById("photo").src="images/image2.jpg";
        document.getElementById("story").innerHTML = "You left the woods! " + "You come to another fork in the road. There is a camp to the left, and a town to the right. Go to camp or Go to town?";
        
    } else if (answer == "Go to town") {
        document.getElementById("photo").src="images/image3.jpg";
        document.getElementById("story").innerHTML = "You walk into town and see coins on the ground. Will you Pick it up, or Leave it?";
       
    } else if(answer ==  "Leave it") {
        document.getElementById("photo").src="images/image8.jpg";
        document.getElementById("story").innerHTML="You have no money to buy food. What will you do? Beg for money or Find a job?";
        
    } else if(answer ==  "Find a job") {
        document.getElementById("photo").src="images/image7.jpg";
        document.getElementById("story").innerHTML = "You find a job at a bar sweeping. you eventually move up the ranks and end up owning the bar one day, and meet a lovely person to spend the rest of your days with, and have enough money to be comfortable the rest of your lives. Restart?";
    }
    }

function storyFunction1(answer)
{
    //var answer1 = document.getElementById("photo").innerHTML;
    var answer = document.getElementById("txtBox").value;
  
    if (answer =="Left"){
        document.getElementById("photo").src="images/image4.jpg";
        document.getElementById("story").innerHTML="You died instantly. Good Job. Restart?";

    }else if (answer ==  "Stay in the woods") {
            document.getElementById("photo").src="images/image9.jpg";
             document.getElementById("story").innerHTML = "You stay in the woods and learn how to survive there. You become a hermit that the nearby town kids tell stories about. Restart?";       
    
    } else if (answer ==  "Go to camp") {
        document.getElementById("photo").src="images/image10.jpg";
        document.getElementById("story").innerHTML = "It is a camp of theives. What do you do? Give them everything or Fight?.";
       
    }else if (answer ==  "Give them everything") {
        document.getElementById("photo").src="images/image4.jpg";
        document.getElementById("story").innerHTML = "You end up naked, afraid and cold. You run back into the woods and die. Restart?";
    
    }else if(answer == "Fight") {
        document.getElementById("photo").src="images/image5.jpg";
        document.getElementById("story").innerHTML = "You fight back and  do an impresssive job. The theieves are impressed. The ask you to join their gang. You decided to join, and live a life of theivery till you eventually get caught and hung in the town square. Restart?"


    } else if (answer ==  "Pick it up") {
        document.getElementById("photo").src="images/image4.jpg";
        document.getElementById("story").innerHTML="You were robbed and stabbed. You died. Restart?";
    
    } else if (answer == "Beg for money") {
        document.getElementById("photo").src="images/image4.jpg";
        document.getElementById("story").innerHTML="Begging didn't go so well. You end up starving and dying. Restart?"
    }
}

//Getting right info textbox
function getRightInfo()
            {
                var answer = document.getElementById("txtBox").value;
                storyFunction2(answer)
                
            }

//getting left info textbox
function getLeftInfo()
{
       var answer = document.getElementById("txtBox").value;
        storyFunction1(answer)
                
 }

//restart 
function restart()
{
     location.reload()
 }
//why when I put this in, everything stopped working
 function theForLoop()
            {
                var name=""
                for(var i = 0; i < 5; i++)
                {
                    
                    name+="Kinsley Dean<br>"
                } 
                document.getElementById("myName").innerHTML=name;
            } 


 