

 $(document).on('click', 'button', function() {
        var animal = $(this).data('animal');
        
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";


       
//you can use ratings here after equals
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                var results = response.data;
                console.log(results)
//grabbing response from URL, creating the forloop for the above array of gifs iterate thogh gifs
                for (var i = 0; i < results.length; i++) {

//dont use one letter variables this new condition filters out stuff jeff added to the original get url query
               //     if(result[i].rating != "r" && results[i].rating!="pg-13"){}



                    var gifDiv = $('<div class="item">')
// storing div in gif div variable
                    var rating = results[i].rating;

                    var p = $('<p>').text("Rating: " + rating);
//create image 
                    var animalImage = $('<img class = "animalImage" id = anIMG>');
                    //var animalImage = $('<img>');
                    animalImage.attr('src', results[i].images.fixed_height.url);
                    animalImage.attr('data-still', results[i].images.fixed_height_still.url);
                    animalImage.attr('data-animate', results[i].images.fixed_height.url);
                    animalImage.attr('data-state','animated');
					//animalImage.attr('src', results[i].images.fixed_height.url);
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

var title = $('#adder').val().trim();
console.dir(title);

if (title !== "") {
    var addedButton = $('<button>').appendTo('#buttons')
    $(addedButton).attr('data-animal', title)
    $(addedButton).text(title)
}


})
