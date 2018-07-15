var nav = document.getElementById('nav');
var cover = document.getElementById('cover');
var toTop = document.getElementById('to-top');

function arrowClick() {
    var end = cover.clientHeight + 1;
    window.scroll({
        top: end, 
        left: 0, 
        behavior: 'smooth' 
    });
}

function initToTop() {
    document.addEventListener('scroll', function() {
        if (document.body.scrollTop > cover.clientHeight) {
            toTop.classList.remove('hidden');
        } else {
            toTop.classList.add('hidden');
        }
    });
}

function main() {
    initToTop();
    document.getElementById('arrow').addEventListener('click', arrowClick);
}
document.addEventListener('DOMContentLoaded', main);
