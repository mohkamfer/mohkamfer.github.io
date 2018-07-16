var nav = document.getElementsByTagName('nav')[0];
var cover = document.getElementById('cover');
var toTop = document.getElementById('to-top');
var doButton = document.getElementById('do');
var didButton = document.getElementById('did');
var contactButton = document.getElementById('contact');
var doAnchor = document.getElementById('do-a');
var didAnchor = document.getElementById('java-a');
var contactSection = document.getElementById('contact-section');

var loginScreen = document.getElementById('login-screen');
var userBox = document.getElementById('user-box');
var self = document.getElementById('self');

var heroDo = document.getElementById('hero-do');
var heroDid = document.getElementById('hero-did');

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
        
        if ((didAnchor.offsetTop - 200 < currentScroll) && (contactSection.offsetTop - window.innerHeight / 2 > currentScroll)) {
            didButton.classList.add('active');
        } else {
            didButton.classList.remove('active');
        }
        
        if (contactSection.offsetTop - window.innerHeight / 2 < currentScroll) {
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
    
    heroDo.addEventListener('click', function() {
        document.getElementById('do-a').scrollIntoView({behavior: 'smooth', block: 'start'});
    }, false);
    
    heroDid.addEventListener('click', function() {
        document.getElementById('java-a').scrollIntoView({behavior: 'smooth', block: 'start'});
    }, false);
    
    userBox.addEventListener('click', function() {
        loginScreen.classList.add('hidden');
        setTimeout(function() {
            loginScreen.classList.add('disappeared');
            self.classList.remove('disappeared');
            setTimeout(function() {
                self.classList.remove('hidden');
                setTimeout(function() {
                    document.body.classList.remove('overflow-hidden');
                    nav.classList.remove('hidden');
                }, 400);
            }, 200);
        }, 600);
    }, false);
}

function main() {
    initToTop();
    document.getElementById('arrow').addEventListener('click', arrowClick);
}
document.addEventListener('DOMContentLoaded', main);
