$(function() {
  console.log('hello world');
  let randomMovieArray = ['Star Wars', 'Logan', 'Harry Potter', 'Lord of the Rings', 'Goonies', 'Groundhog Day', 'Unforgiven', 'Dirty Harry', 'Dumb and Dumber', 'Scream', 'Airheads', 'Star Trek', 'Matrix Reloaded', 'The Hangover', 'E.T.', 'Three Amigos', 'Rocky', 'Halloween', 'The Terminator', ' A Nightmare on Elm street', 'Footloose', 'The Little Shop of Horrors', 'Deadpool', 'The Notebook', 'Braveheart', 'IP man', 'Forrest Gump', 'Casablanca', 'Godzilla', 'Spaceballs', 'Honey I Shrunk the Kids']



  let randomNumber = Math.floor((Math.random() * randomMovieArray.length - 1) + 1);
  console.log(randomNumber);
  var randomMovie = randomMovieArray[randomNumber];
  console.log(randomMovie);
  let $xhr = $.getJSON('http://www.omdbapi.com/?t=' + randomMovie);

  //
  // let number = Math.floor(Math.random() * 7949999 + 2);
  // let numbers = ('tt' + number);
  // console.log(numbers);
  // let $xhr = $.getJSON('http://www.omdbapi.com/?i=' + numbers);



  $xhr.done(function(data) {
    if ($xhr.status !== 200) {
      return;

    }

    $('#button').on('click', function(event) {
      event.preventDefault();









      // $('#card').attr('src', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MjkzMjczMV5BMl5BanBnXkFtZTgwNDk4NjYyMTI@._V1_SX300.jpg');


      $('#card').attr('src', data.Poster);




      // $('#poster').html(data.Poster);
      $('#title').html(data.Title);
      $('#plot').html(data.Plot);
      $('#actors').html(data.Actors);
      $('#director').html(data.Director);
      $('#released').html(data.Released);

      console.log(data);




    });







  });
  $xhr.fail(function(err) {


    console.log(err);
  });



});
