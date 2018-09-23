let accordion = document.getElementsByClassName('accordion');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');

        let body = this.nextElementSibling; //document.getElementsByClassName('body');
        console.log(this.nextElementSibling);
        
        if (body.style.display === 'block') {
            body.style.display = 'none';
        } else body.style.display = 'block';
    })
}