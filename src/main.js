var nav = document.getElementById('nav');
var cover = document.getElementById('cover');
var toTop = document.getElementById('to-top');
var doButton = document.getElementById('do');
var didButton = document.getElementById('did');
var contactButton = document.getElementById('contact');
var doAnchor = document.getElementById('do-a');
var didAnchor = document.getElementById('java-a');
var contactAnchor = document.getElementById('contact-a');

function arrowClick() {
    var end = cover.clientHeight + 1;
    window.scroll({
        top: end, 
        left: 0, 
        behavior: 'smooth' 
    });
}

function initToTop() {
    document.addEventListener('scroll', function(e) {
        var currentScroll = document.body.scrollTop;
        if (currentScroll > cover.clientHeight) {
            toTop.classList.remove('hidden');
        } else {
            toTop.classList.add('hidden');
        }
        
        if ((doAnchor.offsetTop - 300 < currentScroll) && (didAnchor.offsetTop - 200 > currentScroll)) {
            doButton.classList.add('active');
        } else {
            doButton.classList.remove('active');
        }
        
        if ((didAnchor.offsetTop - 200 < currentScroll) && (contactAnchor.offsetTop - 200 > currentScroll)) {
            didButton.classList.add('active');
        } else {
            didButton.classList.remove('active');
        }
        
        if (contactAnchor.offsetTop - 200 < currentScroll) {
            contactButton.classList.add('active');
        } else {
            contactButton.classList.remove('active');
        }
    });
    
    doButton.addEventListener('click', function() {
        document.getElementById('do-a').scrollIntoView({behavior: 'smooth', block: 'start'});
    }, false);
    
    didButton.addEventListener('click', function() {
        document.getElementById('java-a').scrollIntoView({behavior: 'smooth', block: 'start'});
    }, false);
}

function main() {
    initToTop();
    document.getElementById('arrow').addEventListener('click', arrowClick);
}
document.addEventListener('DOMContentLoaded', main);
