let title = document.querySelector('.thanks');
let redirect = document.getElementById('redirect');

let num = 0;

timer = setInterval(function() {
    if (num < 4) {
        num++;
        redirect.textContent = "RETURNING YOU TO OUR HOMEPAGE";
        redirect.style.textAlign = "center";
        redirect.style.fontSize = "30px";
    } else {
        window.location.replace('bootybodyyouth.com');
    }
}, 3000)
