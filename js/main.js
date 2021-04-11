$(document).ready(function() {

    /*** Dropdown ***/

    //Referenze
    var dropDown = $('.with-dropdown');
    var dropLinks = dropDown.children('a');
    var dropMenu = dropDown.children('.dropdown-menu');

    // Click mostrare/nascondere il sottomenu associato
    dropLinks.click(function(e) {
        // a (soluzione corretta se c'era solo un dropmenu)
        // $(this).next('.dropdown-menu').toggle();

        //b 
        var actualMenu = $(this).next('.dropdown-menu');

        dropMenu.not(actualMenu).hide();

        actualMenu.toggle();

    });

    // End doc ready
});