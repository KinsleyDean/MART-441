$(document).ready(function () {
    $("button").click(function () {
        showFoodInformation();
        //$("#foodInformation").load("data/foodInfo.json", fadeText);

    });
});


//"background-color", "blue");

(function($){
    $.fn.rainbow = function () {
        this.css("background", "linear-gradient(in hsl longer hue 45deg, red 0 100%)");
        this.css("color", "black");
        this.css("font-size", 50);
        return this;
    };
    }(jQuery));
    $(function () {
        $("button").click(function () {
            $("#foodInformation").rainbow().fadeOut("slow").fadeIn("slow");
        });

    });




function showFoodInformation(){
    $.getJSON("data/foodInfo.json", function(result){
       // $.each(result, function(i,food){ 

            $("#foodInformation").html("Food: " + result.product.product_name
        + "<br>Allergens:" + result.product.allergens + "<br>Counrty:" + result.product.countries) ;  
        
     //   })
      });
 
    }

 
function fadeText()
{
    $("#foodInformation").fadeOut("slow").fadeIn("slow");
}