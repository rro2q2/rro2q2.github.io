
(function($){
    "use strict";


    //Vars
    var $moreBtn = $("#more-btn"),
    $moreCards = $("#more-cards");

    function showMore() {
        if($moreCards.css('display') === "none") {
            $moreCards.show("slow");
            $moreBtn.html('Show less');
        } else if($moreCards.css('display') === "block") {
            $moreCards.hide("slow");
            $moreBtn.html('Show more');
        }
    }

    $($moreBtn).on( 'click', function(){
        showMore();
    });

})(jQuery);