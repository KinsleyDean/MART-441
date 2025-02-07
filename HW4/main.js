
function storyFunction2(choice) 
{
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Right") {
        //document.getElementById(image1).src="images/image1.jpg";
        document.getElementById("story").innerHTML = "You see a road that leads to a campsite to the left, and a road that leads to a town on the right. Which way do you choose?";
        document.getElementById("choice1").innerHTML = "Left";
        document.getElementById("choice2").innerHTML = "Right";
    } else if (choice == 2 && answer2 == "Right") {
        //document.getElementById(image2).src="images/image2.jpg";
        document.getElementById("story").innerHTML = "You went right! " + "You come to another fork in the road. There is a camp to the left, and a town to the right. Go to the camp or town?";
        document.getElementById("choice1").innerHTML = "Go to camp";
        document.getElementById("choice2").innerHTML = "Go to town";
        
    } else if (choice == 2 && answer2 == "Go to town") {
        //document.getElementById(image3).src="images/image3.jpg";
        document.getElementById("story").innerHTML = "You walk into town and see coins on the ground. Will you pick it up, or leave it?";
        document.getElementById("choice1").innerHTML = "Pick it up";
        document.getElementById("choice2").innerHTML = "Leave it";
    } else if(choice == 2 && answer2 == "Leave it") {
        document.getElementById("story").innerHTML="You have no money to buy food. What will you do? Beg for money or find a job?";
        document.getElementById("choice1").innerHTML ="Beg for money"
        document.getElementById("choice2").innerHTML = "Find a job";
    } else if(choice == 2 && answer2 == "Find a job") {
        document.getElementById("story").innerHTML = "You find a job at a bar sweeping. you eventually move up the ranks and end up owning the bar one day, and meet a lovely person to spend the rest of your days with, and have enough money to be comfortable the rest of your lives. Restart?";
    }
    }

function storyFunction1(choice)
{
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice==1 && answer1=="Left"){
       // document.getElementById(image1).src="images/image4.jpg";
        document.getElementById("story").innerHTML="You died instantly. Good Job. Restart?";
    
    } else if (choice == 1 && answer1 == "Go to camp") {
       // document.getElementById(image1).src="images/image4.jpg";
        document.getElementById("story").innerHTML = "It is a camp of theives. What do you do? Give them everything or fight?.";
        document.getElementById("choice1").innerHTML = "Give them everything";
        document.getElementById("choice2").innerHTML = "Fight";
    }else if (choice == 1 && answer1 == "Give them everything") {
        document.getElementById("story").innerHTML = "You end up naked, afraid and cold. You run back into the woods and die. Restart?";
    }else if(choice == 2 && answer2 == "Fight") {
        document.getElementById("story").innerHTML = "You fight back and  do an impresssive job. The theieves are impressed. The ask you to join their gang. You decided to jion, and live a life of theivery till you eventually get caught and hung in the town square. Restart?"


    } else if (choice == 1 && answer1 == "Pick it up") {
       // document.getElementById(image1).src="images/image4.jpg";
        document.getElementById("story").innerHTML="You were robbed and stabbed. You died. Restart?";
    } else if (choice == 1 && answer1 == "Beg for money") {
        document.getElementById("story").innerHTML="Begging didn't go so well. You end up starving and dying. Restart?"
    }
}

function getInfo(choice)
            {
                var currentName = document.getElementById("txtBox").value;
                document.getElementById("lblInfo").innerHTML = choice +", " + currentName;
                
            }
