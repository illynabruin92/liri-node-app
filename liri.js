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




//**********************************************************

//                    TWITTER SECTION

//*********************************************************
var myTweets = require('./keys.js');
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: myTweets.twitterKeys.consumer_key,
  consumer_secret: myTweets.twitterKeys.consumer_secret,
  access_token_key: myTweets.twitterKeys.access_token_key,
  access_token_secret: myTweets.twitterKeys.access_token_secret
});

var params = {user: "cody javagitt", count: 20};


client.get('statuses/update', params, {status: 'I am a tweet'}, function(error, tweet, response) {
  if (!error) {
    console.log('Tweet is the word. Here are 20.');
  }
});

client.post('statuses/update', {status: 'Brought to you by LIRI'}, function(error, tweet, response) {
  if (error) throw error;
    console.log(tweet);
});






//**********************************************************

//                    SPOTIFY SECTION

//*********************************************************
var spotify = require('spotify');







//**********************************************************

//                     OMDB SECTION

//**********************************************************
