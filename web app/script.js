$(document).ready(function(){

    jsWindow = $(window).height();
    jsHeader = $('.main-head').outerHeight(true)
    jsRightHeaderHeight = $('.right-header').outerHeight(true);


    // calculate
    jsMain = jsWindow - jsHeader;
    jsDescription = jsMain - jsRightHeaderHeight;



    // add to DOM

    $('main').css({
        'height':jsMain+'px',
    })

    $('.right-main-content').css({
        'height': jsMain+ 'px'
    });

    $('.right-main-content-description').css({
          'height': jsDescription+'px'
      });


    // jsaside = $('aside').outerHeight(true);
    jsInbox = $('.inbox').outerHeight(true);
    jsbottom = $('.aside-bottom-buttons').outerHeight(true);
    jsbutton = $('.btn').outerHeight(true);
    jsClients = jsMain - ( jsInbox + jsbottom + jsbutton );

    $('.clients1').css({
        'maxHeight': jsClients+'px'
    });


    // jsclient1 = $('.clients1').outerHeight(true);
    // jsclientsdrop = $('.clients-dropdown').outerHeight(true);

    // jsclientsDropdown = jsclient1 - jsclientsdrop;

    // $('.clients-dropdown').css({
    //     'maxHeight': jsclientsDropdown+'px'
    // });


    // client dropdown


    $('.fa-caret-square-o-down').click(function() {

        $('.clients-dropdown').slideToggle(function(){

        });
        
    });


    // compose-mail


    $('.compose-btn').click(function() {

        $('.mail-compose').show()
    });

    // close-button 

    $('.fa-times').click(function() {

        $('.mail-compose').hide();
    });



    $(document).ready(function(){
        $('.mail-compose').draggable();
        $('.mail-compose').resizable();
    })



    $('.search .fa-caret-down').click(function() {

        $('.pre-defined').slideToggle(function(){

            $('.group-icons').toggle();
        });
    });



    $('.pre-defined').hover(function(){

        $('.group-icons').hide();
    })




    $('.details').click(function() {

        $('.details-pop').toggle();
    });
    
});








