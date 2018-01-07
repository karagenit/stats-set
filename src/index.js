function highlightCard(card) {
    $(card).removeClass("btn-secondary").addClass("btn-primary");
}

function clearCard(card) {
    $(card).removeClass("btn-primary").addClass("btn-primary");
}

function clearAllCards() {

}

function randomizeCard(card) {

}

function randomizeAllCards() {

}

function checkSet() {

}

// Sets up the board, generates each card's state
$(document).ready(function() {
    //init cards
});

// Handles clicks on buttons
$("#btn1").click(function() {
    highlightCard(this);
    checkSet();
});
