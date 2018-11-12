let accordion = document.getElementsByClassName('accordion');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');

        let body = this.nextElementSibling;
        console.dir(body);
        
        if (body.style.display === 'block') {
            body.style.display = 'none';
            body.style.maxHeight = '0px';
        } else {
            body.style.display = 'block';
            body.style.maxHeight = 'none';
        }
    })
}