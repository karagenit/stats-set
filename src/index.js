/*
 * GAME STATES
 *
 * Each button will have a value, 3 characters long
 * Char 1: 1: Histogram, 2: Bar Chart, 3: Dot Plot
 * Char 2: 1: Red, 2: Green, 3: Blue
 * Char 3: 1, 2, 3
 */

function highlightCard(card) {
    $(card).addClass("active");
}

function clearCard(card) {
    $(card).removeClass("active");
}

function clearAllCards() {
    $(".btn-primary").each(function(i, card) {
        clearCard(this);
    });
}

function randomizeCard(card) {

}

function randomizeAllCards() {

}

// Returns true if either all three are the same or different
function matchOrDiff(one, two, three) {
    return (one === two && two === three && one === three) ||
           (one !=  two && two !=  three && one !=  three);
}

// Determines if the three 'state' strings constitute a set
function isSet(one, two, three) {
    return matchOrDiff(one.charAt(0), two.charAt(0), three.charAt(0)) &&
           matchOrDiff(one.charAt(1), two.charAt(1), three.charAt(1)) &&
           matchOrDiff(one.charAt(2), two.charAt(2), three.charAt(2));
}

// Checks if there is a set on the board
function checkSet() {
    selected = []
    $(".active").each(function(i, card) {
        selected.push(this);
    });

    //check if 3 are actually selected
    if(selected.length === 3) {
        if(isSet("test", "test", "test")) {
            //add score
            //re-randomize those three cards
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

// TODO: add timer to redirect (with score as post parameter) to score page
