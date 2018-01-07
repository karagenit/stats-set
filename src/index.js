/*
 * GAME STATES
 *
 * Each button will have a value, 3 characters long
 * Char 1: 1: Box Plot, 2: Histogram, 3: Dot Plot
 * Char 2: 1: Orange, 2: Purple, 3: Blue
 * Char 3: 1, 2, 3
 */

var score = 0;
var time = 9001;

function incrementScore() {
    score += 1;
    $("#score").text(score);
}

function updateTime() {
    time -= 1;
    $("#time").text(time);
    if(time <= 0) {
        window.location = "score.html";
    }
}

// Adds the "active" state to a card
function highlightCard(card) {
    $(card).addClass("active");
}

// Clears the "active" state on a card
function clearCard(card) {
    $(card).removeClass("active");
}

// Clears the "active" state on all cards
function clearAllCards() {
    $(".btn-primary").each(function(i, card) {
        clearCard(this);
    });
}

// Generates a random number 1 ... 3
function randInt() {
    return Math.floor(Math.random() * 3) + 1;
}

// Assigns randonm value to one card
function randomizeCard(card) {
    var code = "" + randInt() + randInt() + randInt();
    $(card).val(code);
    $(card).html('<img src="./img/' + code + '.png">');
    // TODO: assure no repeats on the board
}

// Assigns random values to all cards on the board
function randomizeAllCards() {
    $(".btn-primary").each(function(i, card) {
        randomizeCard(this);
    });
}

// Returns true if either all three are the same or different
function matchOrDiff(one, two, three) {
    return (one === two && two === three && one === three) ||
           (one !=  two && two !=  three && one !=  three);
}

// Determines if the three 'state' strings constitute a set
function isSet(selected) {
    var one = $(selected[0]).val();
    var two = $(selected[1]).val();
    var three = $(selected[2]).val();

    return matchOrDiff(one.charAt(0), two.charAt(0), three.charAt(0)) &&
           matchOrDiff(one.charAt(1), two.charAt(1), three.charAt(1)) &&
           matchOrDiff(one.charAt(2), two.charAt(2), three.charAt(2));
}

// Checks if there is a set on the board
function checkSet() {

    //grab all the currently selected cards
    selected = []
    $(".active").each(function(i, card) {
        selected.push(this);
    });

    //check if 3 are actually selected
    if(selected.length === 3) {
        //if its a set, add score & add new cards
        if(isSet(selected)) {
            incrementScore();
            randomizeCard(selected[0]);
            randomizeCard(selected[1]);
            randomizeCard(selected[2]);
        }
        clearAllCards();
    }
}

// Sets up the board, generates each card's state
$(document).ready(function() {
    randomizeAllCards();
});

// Handles clicks on buttons
$(".btn-primary").click(function() {
    highlightCard(this);
    checkSet();
});

// Updates the clock every 1000 ms
setInterval(function(){
    updateTime();
}, 1000);
