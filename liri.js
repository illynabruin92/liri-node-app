// Write the code you need to grab the data from keys.js
// Store keys in a variable
// Will take in one of the following commands:



// =======================================================
// * `my-tweets`*
// * This will show your last 20 tweets and when they were created at in your terminal/bash window.



// =======================================================
// * `spotify-this-song`
// * This will show the following information about the song in your terminal/bash window
//    * Artist(s)
//    * The song's name
//    * A preview link of the song from Spotify
//    * The album that the song is from

// * if no song is provided then your program will default to
//    * "The Sign" by Ace of Base



// ========================================================
// * `movie-this`
//* This will output the following information to your terminal/bash window:

//    * Title of the movie.
//    * Year the movie came out.
//    * IMDB Rating of the movie.
//    * Country where the movie was produced.
//    * Language of the movie.
//    * Plot of the movie.
//    * Actors in the movie.
//    * Rotten Tomatoes Rating.
//    * Rotten Tomatoes URL.

//* If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
//    * If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
//    * It's on Netflix!



// ======================================================
// * `do-what-it-says`
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Feel free to change the text in that document to test out the feature for other commands.

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

client.get(path, params, callback);
client.post(path, params, callback);
client.stream(path, params, callback);
