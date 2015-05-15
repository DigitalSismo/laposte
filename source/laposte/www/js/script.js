function adpaterALaTailleDeLaFenetre() {
    var largeur = document.documentElement.clientWidth,
        hauteur = document.documentElement.clientHeight;

    var source = document.getElementById('start'); // récupère l'id source
    source.style.height = hauteur + 'px'; // applique la hauteur de la page
    //source.style.width = largeur + 'px'; // la largeur
}

// Une fonction de compatibilité pour gérer les évènements
function addEvent(element, type, listener) {
    if (element.addEventListener) {
        element.addEventListener(type, listener, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + type, listener);
    }
}

// On exécute la fonction une première fois au chargement de la page
addEvent(window, "load", adpaterALaTailleDeLaFenetre);
// Puis à chaque fois que la fenêtre est redimensionnée
addEvent(window, "resize", adpaterALaTailleDeLaFenetre);


// Transitions entre les pages
$(document).ready(function () {
    var animationIn = 'animated fadeInLeft';
    var animationOut = 'animated fadeOutRight';

    $('.animation').addClass(animationIn);


//    $('a.home').on('click', function (event) {
//        event.preventDefault();
//        newLocation = this.href;
//        $('.animation').addClass(animationOut);
//
//        function newpage() {
//            window.location = newLocation;
//        };
//    });
//
//    $('a.next, a.retour').on('click', function (event) {
//        event.preventDefault();
//        newLocation = this.href;
//        $('.animation').addClass(animationOut);
//
//        function newpage() {
//            window.location = newLocation;
//        };
//    });


        $('a.home').on('click', function () {
            $('.animation').addClass(animationOut);
        });
        $('a.next').on('click', function () {
            $('.animation').addClass(animationOut);
        });
});