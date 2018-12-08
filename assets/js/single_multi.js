//the game sounds
var keySound = new Audio('assets/sounds/typewriter-key.wav');
var winSound = new Audio('assets/sounds/you-win.wav');
var loseSound = new Audio('assets/sounds/you-lose.wav');

//single and multi global variabls
var word = "";
var userRightGuess = 0;
var guessedChar = [];
var trial = 1;
var maxTrials = 8;

var phrases = ["early bird gets the worm", "read between the lines", "i can eat a horse", "cat got your tounge", "one in a million", "i beg to differ", "easier said than done", "add insult to injury", "do not cry over spilled milk", "curiosity killed the cat", "two peas in a pod", "that is the last straw", "piece of cake", "speak of the devil", "go the whole nine yards", "an eye for an eye", "hit the hay", " stab someone in the back", "quit cold turkey", "cut to the chase", "best of both worlds", "kill two birds with one stone", "break a leg", "hit the nail on the head", "kick the bucket"];
var movies = ["frankly my dear i do not give a damn", "may the Force be with you", "titanic", "after all this time Always.", "life is like a box of chocolates", "to infinity and beyond", "i will be back", "wax on wax off", "i am going to make him an offer he cannot refuse", "want to know how i got these scars", "citizen kane", "team edward", "no i am your father", "do or do not there is no try", "do you want to build a snowman", "hakuna matata", "go ahead make my day", "bond james bond.", "you are going to need a bigger boat", "you talking to me", "here is johnny", "the hills are alive", "toto i have a feeling we are not in kansas anymore", "welcome to jurassic park", "say hello to my little friend", "run forest run"];
var songs = ["i came in like a wrecking ball", "yesterday all my troubles seemed so far away", "just a small town girl", "i still havent found what i am looking for", "annie are you oK", "is this the real life is this just fantasy", "we dont need no education", "have you ever seen the rain", "she is got eyes of the bluest skys", "so close no matter how far", "i dont want to miss a thing", "take my hand we will make it i swear", "that is me in the corner", "a mulatto an albino a mosquito my libido", "you have been thunderstruck", "another one bites the dust", "eye of the tiger", "b bennie and the jets", "sing us a song you are the piano man", "hello darkness my old friend", "somewhere over the rainbow blue birds fly", "do not worry about a thing", "imagine there is no heaven", "can you feel the love tonight"];
var challenges = ["early bird gets the worm", "i came in like a wrecking ball", "to infinity and beyond", "add insult to injury", "Two peas in a pod"];

var introPage = document.getElementById("introPage");
var singlePage = document.getElementById("singlePage");
var multiPage = document.getElementById("multiPage");
var gamePage = document.getElementById("gamePage");
var home = document.getElementById("home");
var categoryName = document.getElementById('categoryName');

function singlePlayer() {
    introPage.style.display = "none";
    singlePage.style.display = "block";
    multiPage.style.display = "none";
}

function phrase() {
    rand = Math.floor(Math.random() * phrases.length);
    word = phrases[rand];
    singlePage.style.display = "none";
    gamePage.style.display = "block";
    loadMainScreen();
    categoryName.innerHTML = "Phrases";
    console.log(word);
}

function movie() {
    rand = Math.floor(Math.random() * movies.length);
    word = movies[rand];
    singlePage.style.display = "none";
    gamePage.style.display = "block";
    loadMainScreen();
    categoryName.innerHTML = "Movies and movie quotes";
    console.log(word);
}

function song() {
    rand = Math.floor(Math.random() * songs.length);
    word = songs[rand];
    singlePage.style.display = "none";
    gamePage.style.display = "block";
    loadMainScreen();
    categoryName.innerHTML = "Song titles and lyrics";
    console.log(word);
}

function challenge() {
    rand = Math.floor(Math.random() * challenges.length);
    word = challenges[rand];
    document.getElementById('singlePage').style.display = "none";
    gamePage.style.display = "block";
    loadMainScreen();
    categoryName.innerHTML = "Ramdom Words";
    console.log(word);
}

function multiPlayer() {
    introPage.style.display = "none";
    singlePage.style.display = "none";
    gamePage.style.display = "none";
    multiPage.style.display = "block";
}

function readText() {
    word = document.getElementById('input').value;
    var x = word.length;
    if (x == 0) {
        alert("Please enter something into the text box.");
        return;
    }
    var y = x - 1;

    var validChar = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "'");
    for (z = 0; z < word.length; z++) {
        var letter = word.substring(y, x);
        if (validChar.indexOf(letter) > -1) {
            x--;
            y--;
        }
        else {
            alert("Please remove any special characters.");
            return;
        }
    }
    multiPage.style.display = "none";
    gamePage.style.display = "block";
    loadMainScreen();

}

function loadMainScreen() {
    //create the top "__"
    for (i = 0; i < word.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("id", i);
        div.setAttribute("class", "letters");
        if (word[i] != " ") {
            div.innerHTML = "<h3>" + "_" + "</h3>";
            document.getElementById("top").appendChild(div);
        } else {
            div.innerHTML = "<h3>" + "&nbsp" + "</h3>";
            div.style.margin = "10px"
            document.getElementById("top").appendChild(div);
            userRightGuess++;
        }
    }

    //create image in the middle
    var image = document.createElement("img");
    image.setAttribute("id", "image");
    image.src = "assets/images/imagesHangMan/0.png";
    document.getElementById("middle").appendChild(image);
    //document.getElementById("letterBank").style.display="block";

    var charList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    //create the keyboard at the bottom.
    for (i = 0; i < 26; i++) {
        var div = document.createElement("div");
        div.setAttribute("id", charList[i]);
        div.setAttribute("class", "letter");
        div.innerHTML = "<h3>" + charList[i] + "</h3>";
        div.setAttribute("onclick", "letterClick()");
        document.getElementById("keyboard").appendChild(div);
    }
}

function letterClick() {
    // var key = event.target.textContent;
    var key = event.currentTarget.id;
    keySound.play();
    var hideKey = document.getElementById(key);
    hideKey.style.visibility = "hidden";
    // document.getElementById(key).style.visibility = "hidden";
    key = key.toLowerCase();
    checkLetter(key);
    placeCharTop();
    if (guessedChar.length == 0) {
        changeImage();
        trial++;
        maxTrials--;
        if (maxTrials == 0) {
            lost();
        }
    }
    else if (userRightGuess == word.length) {
        win();
    }
    guessedChar = [];
}

function checkLetter(key) {
    for (i = 0; i < word.length; i++) {
        if (word.charAt(i) == key) {
            guessedChar.push(i);
            userRightGuess++;
        }
    }
}

function placeCharTop() {
    for (i = 0; i < guessedChar.length; i++) {
        var place = document.getElementById(guessedChar[i]);
        place.innerText = word.charAt(guessedChar[i]);
    }
}


function changeImage() {
    document.getElementById("image").src = "assets/images/imagesHangMan/" + trial + ".png";
}

function win() {
    document.getElementById("image").src = "assets/images/imagesHangMan/you-win.png";
    document.getElementById("top").style.display = "none";
    document.getElementById("bottom").style.display = "none";
    home.style.display = "block";
    winSound.play();
}

function lost() {
    document.getElementById("image").src = "assets/images/imagesHangMan/gameover.png"
    document.getElementById("top").style.display = "none"
    document.getElementById("bottom").style.display = "none"
    home.style.display = "block";
    loseSound.play();
}

function countChars(countfrom, displayto) {
    var len = document.getElementById(countfrom).value.length;
    document.getElementById(displayto).innerHTML = len;
}