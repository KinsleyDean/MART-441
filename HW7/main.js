class ViewFinder
{
    constructor(Title, Image, Description, Author, ImageYear)
    {
        this.Title = Title;
		this.Image = Image;
		this.Description = Description;
		this.Author = Author;
        this.ImageYear = ImageYear;
        
    }
    showInformation()
    {
        document.getElementById("Viewfinder").innerHTML = "Title: " + this.Title + "<br>Image: " + this.Image + "<br>Description:" + this.Description + "<br>Author:" + this.Author +"<br>Image Year:" + this.ImageYear;
    }

    
    // keep in mind only one return statement can exist in a function
    toString()
    {
    let str;
    str = `Title: ${this.Title}  <br>Image: ${this.Image}  <br>Description: ${this.Description}  <br>Author:  ${this.Author} <br>Image Year: ${this.ImageYear}`;
    return str;
    }



// this is the property theTitle which returns the title as well only the title
    get theTitle()
    {
        return this.Title;
    }
    set theTitle(Title) 
    {
        this.Title = Title;
    }
//
    get theImage()
    {
        return this.Image;
    }
    set theImage(Image) 
    {
        this.Image = Image;
    }
//
    get theDescription()
    {
        return this.Description;
    }
    set theDescription(Description) 
    {
        this.Description = Description;
    }
//
    get theAuthor()
    {
        return this.Author;
    }
    set theAuthor(Author) 
    {
        this.Author = Author;
    }
//
    get theImageYear()
    {
        return this.ImageYear;
    }
    set theImageYear(mageYear) 
    {
        this.ImageYear = ImageYear;
    }
}
var imageTags = ["Book1","Book2","Book3","Book4","Book5"]
var myViewFinderArray = new Array();
function initializeArray()
{
    
    var myViewFinder1 = new ViewFinder('A Court Of Thorns and Roses',"Book1", "The first book of my favorite series. When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world.", "Sarah J. Mass", "2018");
    
   
    var myViewFinder2 = new ViewFinder('A Court of Mist and Fury','Book2', "The second book of my favorite series. While Feyre navigates a dark web of politics, passion, and dazzling power, a greater evil looms. She might just be the key to stopping it, but only if she can harness her harrowing gifts, heal her fractured soul, and decide how she wishes to shape her future-and the future of a world in turmoil.", "Sarah J. Mass", "2020");
    
   
    var myViewFinder3 = new ViewFinder('A Court of Wing and Ruin','Book3', "The third book of my favorite series. Feyre has returned to the Spring Court, determined to gather information on Tamlin's maneuverings and the invading king threatening to bring Prythian to its knees. But to do so she must play a deadly game of deceit-and one slip may spell doom not only for Feyre, but for her world as well.", "Sarah J. Mass", "2022");

  
    var myViewFinder4 = new ViewFinder('A Court of Frost and Starlight','Book4',  "The fourth book of my favorite series. Feyre, Rhysand, and their close-knit circle of friends are still busy rebuilding the Night Court and the vastly-changed world beyond. But Winter Solstice is finally near, and with it, a hard-earned reprieve. Yet even the festive atmosphere can't keep the shadows of the past from looming.", "Sarah J. Mass", "2024");
    
   
    var myViewFinder5 = new ViewFinder('A Court of Silver Flame', 'Book5', "The fifth book of my favorite series. Nesta Archeron has always been prickly-proud, swift to anger, and slow to forgive. And ever since being forced into the Cauldron and becoming High Fae against her will, she's struggled to find a place for herself within the strange, deadly world she inhabits. Worse, she can't seem to move past the horrors of the war with Hybern and all she lost in it.", "Sarah J. Mass", "2018");
   
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);
    myViewFinderArray.push(myViewFinder5);
console.log(myViewFinderArray.length)
}

//????TRYING FOR IMAGES HERE????????????


var actualImages = [];
var actualImages = new Array();

function createRandomImageArray() {
    // Clear previous images
    actualImages = [];
    // create an array of actual images
    var actualImagePath = ["images/Book1.jpeg", "images/Book2.jpg", "images/Book3.jpg", "images/Book4.jpg", "images/Book5.jpg"];
    // create a count array to track how many times an image has been added
    var count = [0, 0, 0, 0, 0,]; // count for each image path
}

function imagesDisappear() {
    // Assuming "blankImagePath" is defined somewhere or add it here
    var blankImagePath = "images/blank.jpg";
    imageTags.forEach(function(tag) {
        document.getElementById(tag).src = blankImagePath;
    });
}





// get an object from array
function accessInformation()
{
    
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    console.log(randomNumber)
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();

}

