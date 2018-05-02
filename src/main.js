var nav = document.getElementById('nav');
var cover = document.getElementById('cover');
var toTop = document.getElementById('to-top');

function main() {
    initNav();
    initToTop();
    document.getElementById('arrow').addEventListener('click', arrowClick);
}
document.addEventListener('DOMContentLoaded', main);

function initNav() {
    var javaSection = document.getElementById('java');
    var androidSection = document.getElementById('android');
    var webSection = document.getElementById('web');
    
    var javaButton = document.getElementById('java-button');
    var androidButton = document.getElementById('android-button');
    var webButton = document.getElementById('web-button');
    
    javaButton.addEventListener('click', function() {
        javaSection.scrollIntoView({ behavior: 'smooth' });
    });

    androidButton.addEventListener('click', function() {
        androidSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    webButton.addEventListener('click', function() {
        webSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    document.addEventListener('scroll', function() {
        if (document.body.scrollTop > cover.clientHeight) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
}

function arrowClick() {
    var start = document.body.scrollTop;
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
