$(document).ready(function () {
    $("button").click(function () {
        showFoodInformation();
        //$("#foodInformation").load("data/foodInfo.json", fadeText);

    });
});

/*let food = {
    "Food" : "Bread",
    "alergen" : "Gluten",
    "country" : [
        "France",
        "United Kingdom",
    ]
}*/

function showFoodInformation(){
    $.getJSON("data/foodInfo.json", function(result){
       // $.each(result, function(i,food){

            $("#foodInformation").html("Food: " + result.product_name
        + "<br>Allergens:" + result.allergens + "<br>Counrty:" + result.countries) ;  
        
     //   })
      });
 
    }

 
function fadeText()
{
    $("#foodInformation").fadeOut("slow").fadeIn("slow");
}