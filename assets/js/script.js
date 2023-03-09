// select button
var button = document.getElementById('read_button');

// click Event
button.addEventListener('click', function() {
    // select card
    var card = document.querySelector('.card');

    // add/remove class active
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        // Change button text if has class active
        return button.textContent = 'Read less';
    }
    
    // change button text if hasn't class active
    button.textContent = 'Read more';
});