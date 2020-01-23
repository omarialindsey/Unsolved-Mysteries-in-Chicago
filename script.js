function hideAllSections() {
    $('.reasons').hide();
    $('.Map').hide();
    $('.cases').hide();
    $('.home').hide();
    $('.videos').hide();
}

$(".tablinks1").click(function(){
    hideAllSections();
    $(".reasons").show();
});

$(document).ready(function() {
    $(".home").show();
    $(".labels").hide();
    
});

$(".tablinks2").click(function(){
    hideAllSections();
    $(".cases").show();
    
});

$(".tablinks3").click(function(){
      hideAllSections();
   $(".Map").show(); 
});
    $(".tablinks4").click(function(){
          hideAllSections();
   $(".home").show(); 
});
    $(".tablinks5").click(function(){
          hideAllSections();
   $(".videos").show(); 
});


