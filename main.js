$(document).ready(function() {
    let imgMarvel = $('.image-marvel');
    let card = $('.card');
    let cardBack = $('.card-back');
    let choix = $('#choix');
    let resultat = $('#resultat');
    let points = $('#points');

    // console.log(imgMarvel);
    // console.log(card);
    // console.log(cardBack);

    //Fonction qui permte de mélanger les éléments d'un array
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array; //Retourne un tableau mélangé
      }

    imgMarvel = shuffle(imgMarvel);

    console.log(imgMarvel);
    console.log(imgMarvel[0]);

    card.attr({disabled: true}); //On rend les img non cliquable au chargement de la page

    $(imgMarvel[0]).attr({
        src: 'img/black-widow.jpeg',
        id: 1
    });

    $(imgMarvel[1]).attr({
        src: 'img/black-widow.jpeg',
        id: 1
    });

    $(imgMarvel[2]).attr({
        src: 'img/captain-america.jpeg',
        id: 2
    });
      
    $(imgMarvel[3]).attr({
        src: 'img/captain-america.jpeg',
        id: 2
    });

    $(imgMarvel[4]).attr({
        src: 'img/iron-man.jpeg',
        id: 3
    });

    $(imgMarvel[5]).attr({
        src: 'img/iron-man.jpeg',
        id: 3
    });

    $(imgMarvel[6]).attr({
        src: 'img/the-hulk.jpeg',
        id: 4
    });

    $(imgMarvel[7]).attr({
        src: 'img/the-hulk.jpeg',
        id: 4
    });

    $(imgMarvel[8]).attr({
        src: 'img/thor.jpeg',
        id: 5
    });

    $(imgMarvel[9]).attr({
        src: 'img/thor.jpeg',
        id: 5
    });

    imgMarvel.hide(); // Permet de cacher les cartes des personages au chargement des pages
    resultat.hide(); // Permet de cacher le message de victoir ou défaite

    $('#start-game').on('click', function() {
        console.log('j\'ai cliquer');

        cardBack.hide(1000).delay(3000).show(1000);
        imgMarvel.show(1000).delay(3000).hide(1000);
        
        setTimeout(function() {
            card.attr({disabled: false}); //On rend les carte cliquable quand on appuie sur le bouton start
        }, 5000)
        $(this).attr({disabled: true}); //On rend le bouton non cliquable quand on appuie une 1er fois sur le bouton start
        
    });

    card.on('click', function() {

        if (choix.text().length == 0) {
            console.log(this);
            console.log($(this).find('img'));
    
            $(this).find('.card-back').hide(1000);
            $(this).find('.image-marvel').show(1000);
    
            let recupId = $(this).find('.image-marvel').attr('id');
    
            console.log(recupId);
    
            choix.text(recupId);
        }
        else{
            $(this).find('.card-back').hide(1000);
            $(this).find('.image-marvel').show(1000);

            let recupId = $(this).find('.image-marvel').attr('id');

            if (recupId == choix.text()) {
                resultat.text('Bonne carte ! Continuer');
                points.text(parseFloat(points.text()) + 1); // parsefloat transfrom une chaine de caratère en nombre floatant
                choix.text(''); // les '' efface le contenu présent
            }
            else{
                resultat.html('<p> GameOver !</p> <button id="restart"> Recommence ! </button>');
                
                $('#restart').on('click', function() {
                    location.reload(); // Permet de recharger la page
                });

                resultat.slideDown(500);
                card.attr({disabled: true});
            }
        }
        
        if (points.text() == 5) {
            resultat.html('<p> Tu as gagner Bravo !</p> <button id="restart"> Recommence ! </button>');
            
            $('#restart').on('click', function() {
                location.reload(); // Permet de recharger la page
            });
            
            resultat.css({background: 'green', border: 'darkgreen'});
            resultat.slideDown(500);
            card.attr({disabled: true});
        }
    })
})