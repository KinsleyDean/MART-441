
function storyFunction2(choice) 
{
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Right") {
        document.getElementById("story").innerHTML = "You see a road that leads to a campsite to the left, and a road that leads to a town on the right. Which way do you choose?";
        document.getElementById("choice1").innerHTML = "Left";
        document.getElementById("choice2").innerHTML = "Right";
    } else if (choice == 2 && answer2 == "Right") {
        document.getElementById("story").innerHTML = "You went right! " + "You come to another fork in the road. There is a camp to the left, and a town to the right. Go to the camp or town?";
        document.getElementById("choice1").innerHTML = "Go to camp";
        document.getElementById("choice2").innerHTML = "Go to town";
        
    } else if (choice == 2 && answer2 == "Go to town") {
        document.getElementById("story").innerHTML = "You walk into town and see coins on the ground. Will you pick it up, or leave it?";
        document.getElementById("choice1").innerHTML = "Pick it up";
        document.getElementById("choice2").innerHTML = "Leave it";
    } else if(choice == 2 && answer2 == "Leave it") {
        document.getElementById("story").innerHTML="You have no money to buy food and starve. You died.";
    }
}

function storyFunction1(choice)
{
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice==1 && answer1=="Left"){
        document.getElementById("story").innerHTML="You died instantly. Good Job.";
    } else if (choice == 1 && answer1 == "Go to camp") {
        document.getElementById("story").innerHTML = "It was a camp of theives. You died.";
    } else if (choice == 1 && answer1 == "Pick it up") {
        document.getElementById("story").innerHTML="You were robbed and stabbed. You died.";
    }

}
