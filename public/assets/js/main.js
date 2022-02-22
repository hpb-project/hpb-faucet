; (function ($) {
    "use strict";

    $(document).ready(function () {

        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
            e.preventDefault();
        })
       
        /*-------------------------------------
            menu
        -------------------------------------*/
        $('.navbar-area .menu').on('click', function() {
            $(this).toggleClass('open');
            $('.navbar-area .navbar-collapse').toggleClass('sopen');
        });
    
        // mobile menu
        if ($(window).width() < 992) {
            $(".in-mobile").clone().appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");

            $(".menu-item-has-children a").on('click', function(e) {
                // e.preventDefault();

                $(this).siblings('.sub-menu').animate({
                    height: "toggle"
                }, 300);
            });
        }

        var menutoggle = $('.menu-toggle');
        var mainmenu = $('.navbar-nav');
        
        menutoggle.on('click', function() {
            if (menutoggle.hasClass('is-active')) {
                mainmenu.removeClass('menu-open');
            } else {
                mainmenu.addClass('menu-open');
            }
        });

        /* -------------------------------------------------------------
            dkt-sitebar-menu
        ------------------------------------------------------------- */
        if ( $(window).width() > 991 ) {
            if ($('.dropdown-menu-btn').length){
                $(".dropdown-menu-btn").on('click', function(){
                    $(".dkt-sitebar-menu").toggleClass("navbar-nav-show");
                    $('.dropdown-menu-btn').toggleClass('open');
                });

                $(".dkt-sitebar-close").on('click', function(){
                    $(".dkt-sitebar-menu").removeClass("navbar-nav-show");
                    $('.dropdown-menu-btn').removeClass('open');
                });

                $('body').on('click', function(event) {
                    if (!$(event.target).closest('.dropdown-menu-btn').length && !$(event.target).closest('.dkt-sitebar-menu').length) {
                        $(".dkt-sitebar-menu").removeClass("navbar-nav-show");
                    }
                    if (!$(event.target).closest('.dropdown-menu-btn').length && !$(event.target).closest('.dkt-sitebar-menu').length) {
                        $('.dropdown-menu-btn').removeClass('open');
                    }
                });
            }
        }

        /*--------------------------------------------------
            select onput
        ---------------------------------------------------*/
        $(document).ready(function() {
            $('select').niceSelect();
        });

      
        /* -------------------------------------------------------------
            fact counter
        ------------------------------------------------------------- */
        $('.counter').counterUp({
            delay: 15,
            time: 2000,
        });
 
        
        

        /*--------------------------------------------
            Search Popup
        ---------------------------------------------*/
        var bodyOvrelay =  $('#body-overlay');
        var searchPopup = $('#td-search-popup');

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click','.login-btn',function(e){
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });


        $(document).on('click','#hiddenButton',function(e){
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });

        /*-------------------------------------------------
            wow js init
        --------------------------------------------------*/
        new WOW().init();

        /*------------------
           back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

    });

    $(window).on("scroll", function() {
        /*---------------------------------------
        sticky menu activation && Sticky Icon Bar
        -----------------------------------------*/

        var mainMenuTop = $(".navbar-area");
        if ($(window).scrollTop() >= 1) {
            mainMenuTop.addClass('navbar-area-fixed');
        }
        else {
            mainMenuTop.removeClass('navbar-area-fixed');
        }
        
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
    });


    $(window).on('load', function () {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

    });



})(jQuery);