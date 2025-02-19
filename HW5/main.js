// array
var imageTags = ["pug1", "pug2", "pug3", "pug4", "pug5", "pug6","pug7","pug8","pug9","pug10","pug11","pug12"];
// blank image
var blankImagePath = "images/pugPattern.jpg";
// create an empty array for the actual images
var actualImages = [];

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

function flipImage(number) {
    // flip image
    document.getElementById(imageTags[number]).src = actualImages[number];
}







































