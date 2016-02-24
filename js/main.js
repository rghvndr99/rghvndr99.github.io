jQuery(function($) {
    'use strict',   
    new WOW().init();
    $(window).load(function() {
        'use strict';
        var $portfolio_selectors = $('.portfolio-filter >li>a');
        var $portfolio = $('.portfolio-items');
        $portfolio.isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });
        $portfolio_selectors.on('click', function() {
            $portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: selector
            });
            return false;
        });
        $('.panel-heading a').click(function() {
    $('.panel-heading').removeClass('active');
    $(this).parents('.panel-heading').addClass('active');
    
    $('.panel-title').removeClass('active'); //just to make a visual sense
    $(this).parent().addClass('active'); //just to make a visual sense
    
    
 });
    });
    $(function() {
        
var li = $('.portfolio-filter >li');
var liSelected;
$(window).keydown(function(e){
    var activeSection=$('.headerContainer li.active a[href="#portfolio"]').length;
    if(e.which === 39 && activeSection==1){
        if(liSelected){            
            next = liSelected.next();
            if(next.length > 0){
                liSelected = next;
            }else{
                liSelected = li.eq(0);
            }
        }else{
            liSelected = li.eq(0);
        }
    }else if(e.which === 37 && activeSection==1){
        if(liSelected){            
            next = liSelected.prev();
            if(next.length > 0){
                liSelected = next;
            }else{
                liSelected = li.last();
            }
        }else{
            liSelected = li.last();
        }
    }
    liSelected.find('a').click();
});
    });
   
   
});