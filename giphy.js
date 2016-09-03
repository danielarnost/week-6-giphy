 $(document).on('click', 'button', function() {
        var animal = $(this).data('animal');
        
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";


       

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                var results = response.data;
                console.log(results)

                for (var i = 0; i < results.length; i++) {





                    var gifDiv = $('<div class="item">')

                    var rating = results[i].rating;

                    var p = $('<p>').text("Rating: " + rating);

                    var animalImage = $('<img class = "animalImage" id = anIMG>');
                    //var animalImage = $('<img>');
                    animalImage.attr('src', results[i].images.fixed_height.url);
                    animalImage.attr('data-still', results[i].images.fixed_height_still.url);
                    animalImage.attr('data-animate', results[i].images.fixed_height.url);
                    animalImage.attr('data-state','animated');
		            gifDiv.append(p)
                    gifDiv.append(animalImage)
                  
                    $('#gifsAppearHere').prepend(gifDiv);

                }

            });
    });

    
$(document).on('click', '.animalImage', function(){
	
 animalImage = $('<img class = "animalImage">');     
var state = $(this).attr('data-state'); 
	       
if(state =='still'){ 
    var url = $(this).attr('data-animate');
$(this).attr('data-state', 'animate');
$(this).attr('src', url)


}else{

    var url = $(this).attr('data-still'); 
$(this).attr('data-state', 'still');
$(this).attr('src', url);

}
})
//add conditonal to make value of added button equal to data-animal?

$('#addAnimal').on('click', function(){
var addedButton = $('<button>').appendTo('#buttons');
$(addedButton).attr('data-animal', $('#adder').val());
$(addedButton).text($('#adder').val().trim());

});
