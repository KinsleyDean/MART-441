// array
var imageTags = ["pug1", "pug2", "pug3", "pug4", "pug5", "pug6","pug7","pug8","pug9","pug10","pug11","pug12"];
// blank image
var blankImagePath = "images/pugPattern.jpg";

// create an empty array for the actual images
var actualImages = [];
var firstNumber = -1;
var secondNumber = -1;
var score = 0;
var allFound = 0;
// JSON declaration
var player = {"firstname":"", "lastname":"", "age":0, "score":0};

// create a variable with the blank image name
// create a empty array for the actual images
var actualImages = new Array();

function printBlanks() {
    // call of random image creation function
    createRandomImageArray();
    // create a for loop
    for (var i = 0; i < imageTags.length; i++) {
        // iterate through the image tag ids and set the source
        document.getElementById(imageTags[i]).src = blankImagePath;
    }
}

function createRandomImageArray() {
    // Clear previous images
    actualImages = [];
    // create an array of actual images
    var actualImagePath = ["images/pug1.jpeg", "images/pug2.jpg", "images/pug3.jpg", "images/pug4.jpg", "images/pug5.jpg", "images/pug6.jpg"];
    // create a count array to track how many times an image has been added
    var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // count for each image path

    //  a while statement to check if our actual image array is full
    while (actualImages.length < 12) {
        // get a random number between 0 and the number of images
        var randomNumber = Math.floor(Math.random() * actualImagePath.length);

        // check if the image has been added less than twice
        if (count[randomNumber] < 2) {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber]++;
        }
    }
}

/*function flipImage(number) {
    // flip image
    //document.getElementById(imageTags[number]).src = actualImages[number];
    
    // prevent clicking on already matched images
    if (document.getElementById(imageTags[number]).src !== blankImagePath) return;

    // reveal the image
    document.getElementById(imageTags[number]).src = actualImages[number];

    //??? track the first and second flipped images
    if (firstNumber === -1) {
        firstNumber = number; // first image flipped
    } else if (secondNumber === -1) {
        secondNumber = number; // second image flipped

    }

}*/






function flipImage(number)
{
    // make the second image appear
    if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageNames[number]).src = actualImages[secondNumber];
        
    }
    else if(firstNumber < 0) // make the first image appear
    {
        firstNumber = number;
        document.getElementById(imageNames[firstNumber]).src= actualImages[firstNumber];
    
    }
    // check to see if the images do not match
    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        score++;
        setTimeout(imagesDisappear, 1000); // calls a method after 1 second
    }
    // check to see if the images do match
    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        score++;
        allFound++;
        
        firstNumber = -1;
        secondNumber = -1;
        if(allFound == actualImages.length/2)
        {  
            player.score = score;
            localStorage.setItem("playerInfo", JSON.stringify(player));
            window.location = "Page3.html";
        }
    }
}

function imagesDisappear()
{

    console.log(firstNumber);
    document.getElementById(imageNames[firstNumber]).src = blankImagePath;
    document.getElementById(imageNames[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}


function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    var str = "Name: " + player.firstname + " " + player.lastname + "<br>" +
    "Age: " + player.age + "<br>" +
    "Score: " + player.score;
    if(document.getElementById("endInformation") != null)
    {
        document.getElementById("endInformation").innerHTML = str;
    }
}

function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;
   
    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "Page3.html";
}







































