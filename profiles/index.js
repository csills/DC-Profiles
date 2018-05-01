$(function(){



    $.get('https://s3.amazonaws.com/dc-profiles/Students.json', function(){
    //get the student profiles and do something with them

    });

/*Use a similar function to renderMovies to create cards of each students profile:

    function renderMovies(movieArray) {
		var finalHTML = "";

		movieArray.forEach(function(currentMovie){
			finalHTML += '<div class="card style="width: 18rem";>';
			finalHTML += '<img class="card-img-top" src="' + currentMovie.Poster + '" alt="Movie Poster">';
			finalHTML += '<div class="card-body">';
			finalHTML += '<h5 class="card-title">'+ currentMovie.Title +'</h5>';
			finalHTML += '<p class="card-text">'+ currentMovie.Year +'</p>';
			finalHTML += '<button data-id="'+ currentMovie.imdbID +'"class="addMovie">ADD</button>';
			finalHTML += '</div>';
			finalHTML += '</div>';
		});
		return finalHTML;
	}
*/

});