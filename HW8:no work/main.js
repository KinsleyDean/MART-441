
function moveSquare()
{
    $("#square").fadeIn("slow").animate({right:250}).animate({bottom:400}).animate({left:250}).animate({top:400}).fadeOut("slow");
    $("#square2").fadeIn("slow").animate({left:250}).animate({top:400}).animate({right:250}).animate({bottom:400}).fadeOut("slow");
    $("#square3").fadeIn("slow").animate({top:400}).animate({bottom:400}).fadeOut("slow");
}

$(document).ready(function () {
    $('#text1').hide();
    $('#text2').hide();
    $('#text3').hide();
    $("#image1").hide();
    $("#image2").hide();
    $("#image3").hide();
    $("#square").hide();
    $("#square2").hide();
    $("#square3").hide();
});

var myArray1 = new Array('#text1', '#text2','#text3');
var myArray2 = new Array('#image1', '#image2','#image3');
var myArray3 = new Array('#square', '#square2','#square3');

$(document).ready(function () {
$("button").click(function () {
$(myArray2[0]).fadeIn("slow").animate({right:250}).animate({left:250});
$("#image1").fadeIn("slow").fadeOut("slow").fadeToggle().animate({right:100}).animate({top:250});
$("#image2").fadeIn("slow").fadeOut("slow").fadeToggle().animate({right:700}).animate({top:250});
$("#image3").fadeIn("slow").fadeOut("slow").fadeToggle().animate({right:1000}).animate({top:250});
moveSquare()
});
})

$(document).ready(function () {
    $("button").click(function () {
    $(myArray1[0]).fadeIn("slow").animate({right:250}).animate({left:250});
    $('#text1').fadeIn("slow").animate({right:250}).animate({left:250});
    $('#text2').fadeIn("slow").animate({right:250}).animate({left:250});
    $('#text3').fadeIn("slow").animate({right:250}).animate({left:250});
});
})




/*
class ViewFinder
{
    constructor(Image, Description, Shape)
    {
		this.Image = Image;
		this.Description = Description;
		this.Shape = Shape;
        
    }
    showInformation()
    {
        document.getElementById("Viewfinder").innerHTML =  "<img src= " + this.Image + "> <br>Description:" + this.Description;
    }

    
    // keep in mind only one return statement can exist in a function
    toString()
    {
    let str; console.log(this.Image)
    str = `<img src=  ${this.Image} ><br>Description: ${this.Description}`;
    return str;
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
    get theShape()
    {
        return this.Shape;
    }
    set theShape(Shape) 
    {
        this.Shape = Shape;
    }
}


// get an object from array
function accessInformation()
{
    
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    console.log(randomNumber)
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();

}
}*/










//
/*  
}
var imageTags = ["image1, image2, image3"]
var myViewFinderArray = new Array();
function initializeArray()
{
    
    var myViewFinder1 = new ViewFinder('images/image1.jpg', "Me when I see how hard my coding homework is", '#square')
   
    var myViewFinder2 = new ViewFinder('images/image2.jpg', "Me currently trying to figure out coding homework", '#square2');
    
   
    var myViewFinder3 = new ViewFinder('images/image3.jpeg', "Me after finishign coding homework and realizing I did not retain anything", '#square3');

   
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
   
}

//????TRYING FOR IMAGES HERE????????????


/*var actualImages = [];
var actualImages = new Array();

function createRandomImageArray() {
    // Clear previous images
    actualImages = [];
    // create an array of actual images
    var actualImagePath = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpeg",];
    // create a count array to track how many times an image has been added
    var count = [0, 0, 0, 0, 0,]; // count for each image path
}

function imagesDisappear() {
    // Assuming "blankImagePath" is defined somewhere or add it here
    var blankImagePath = "images/blank.jpg";
    imageTags.forEach(function(tag) {
        document.getElementById(tag).src = blankImagePath;
    });
}*/

/*jquery that animates stuff-
$(document).ready(function () {
    $("button").click(function () {
        $(".myGreatClass").animate({left: '250px'});
 });
            
jquery that fade in and out slow-
$(document).ready(function () {
    $("button").click(function () {
       $(".myGreatClass").fadeOut("slow").fadeIn("slow");
});

jquery that shows text?
$(document).ready(function () {
    $("button").click(function () {
        window.alert($("#infoid").text());
});

jquery examples?
$(document).ready(function () {
            $("button").click(function () {
                // $("p").toggle();
               // $(this).hide();
                //  $(".info").toggle();
               // $("#infoid").fadeToggle();
            });
*/
