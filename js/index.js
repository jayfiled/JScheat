let accordion = document.getElementsByClassName('accordion');

for (let i = 0; i <= accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.Toggle('active');
    })
}