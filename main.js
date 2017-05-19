$(function() {
  console.log('hello world');
  let randomMovieArray = ['Star Wars', 'Logan', 'Harry Potter', 'Lord of the Rings', 'Goonies', 'Groundhog Day', 'Unforgiven', 'Dirty Harry', 'When Harry met Sally ', 'Scream', 'Airheads', 'Star Trek', 'The Matrix', 'The Hangover', 'E.T.', 'Three Amigos', 'Rocky', 'Halloween', 'The Terminator', 'A Nightmare on Elm street', 'Footloose', 'The Little Shop of Horrors', 'Deadpool', 'The Notebook', 'Braveheart', 'The Big Lebowski', 'Forrest Gump', 'Casablanca', 'Godzilla', 'Spaceballs', 'Honey I Shrunk the Kids', 'Snatch', 'The Martian', 'Arrival', 'Dick Tracy', 'Alien', 'King Kong', 'Tombstone', 'Home Alone', 'Die Hard', 'Citizen Kane', 'Ghostbusters', 'No Country for Old Men', 'Friday', 'X-Men', 'Moonlight', 'Captain America: Civil War', 'Iron Man', 'Spider-Man', 'Manchester by the Sea', 'Top Gun', 'Doctor Strange', 'Guardians of the Galaxy', 'Mallrats', 'The Revenant', 'Ex Machina', 'Enter the Dragon', 'Spotlight', 'Beast of No Nation', 'The Hateful Eight', 'Scarface', 'Gone With the Wind', 'Anchorman:The Legend of Ron Burgundy', 'Fight Club', 'Goodwill Hunting', 'Gone With the Wind', 'Pulp Fiction', 'Goddfellas']


  $('#button').on('click', function(event) {

    event.preventDefault();
    let randomNumber = Math.floor((Math.random() * randomMovieArray.length - 1) + 1);
    console.log(randomNumber);
    let randomMovie = randomMovieArray[randomNumber];
    console.log(randomMovie);
    let $xhr = $.getJSON('http://www.omdbapi.com/?t=' + randomMovie);




    $xhr.done(function(data) {
      if ($xhr.status != 200) {
        return;

      }


      $('#card').attr('src', data.Poster);


      // $('#poster').html(data.Poster);
      $('#title').html(data.Title);
      $('#plot').html(data.Plot);
      $('#actors').html(data.Actors);
      $('#director').html(data.Director);
      $('#released').html(data.Released);

      console.log(data);



      $('#easteregg').click(function() {
        $('#body').addClass('unicorn');
        $('#contain').addClass(' pony');
        $('#nav').addClass(' baby');
        $('#foot').addClass(' baby');
        $('#cards').addClass(' baby');
        $('#cardss').addClass(' baby');
        $('#cardsss').addClass(' baby');
        $('#cardssss').addClass(' baby');
        $('#button').addClass(' baby');
        $('#cardsssss').addClass(' unicorn');
        $('#images').addClass(' unicorn');
        $('#corn').addClass(' unicorn');
        $('#back').addClass('card1');
        $('#back2').addClass('card1');
        $('#maincard').addClass('card1');
      });

    });


    $xhr.fail(function(err) {


      console.log(err);
    });


  });


});






//
// let number = Math.floor(Math.random() * 7949999 + 2);
// let numbers = ('tt' + number);
// console.log(numbers);
// let $xhr = $.getJSON('http://www.omdbapi.com/?i=' + numbers);
