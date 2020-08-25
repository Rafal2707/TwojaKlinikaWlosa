$('.icon').click(function () {
    $('span').toggleClass("cancel");

});
$('#first-link').click( function () {
    if($(".dlaczego").css('display','none')){
        $(".dlaczego").css('display','block');
    }else{
        $(".dlaczego").hide();
    }
    $('.depilation-intro-page').hide();
    $('.przeciwwskazania').hide();
    $('.prepare').hide();
    $('.after').hide();
    $('.worth').hide();
    $('.prices').hide();
});

$('#second-link').click( function () {
    if($('.przeciwwskazania').css('display','none')){
        $('.przeciwwskazania').css('display','block');
    }else{
        $('.przeciwwskazania').hide();
    }
    $('.depilation-intro-page').hide();
    $('.dlaczego').hide();
    $('.prepare').hide();
    $('.after').hide();
    $('.worth').hide();
    $('.prices').hide();
    
});

$('#third-link').click( function () {
    if($('.prepare').css('display','none')){
        $('.prepare').css('display','block');
    }else{
        $('.prepare').hide();
    }
    $('.depilation-intro-page').hide();
    $('.dlaczego').hide();
    $('.przeciwwskazania').hide();
    $('.after').hide();
    $('.worth').hide();
    $('.prices').hide();

});

$('#fourth-link').click( function () {
    if($('.after').css('display','none')){
        $('.after').css('display','block');
    }else{
        $('.after').hide();
    }
    $('.depilation-intro-page').hide();
    $('.dlaczego').hide();
    $('.przeciwwskazania').hide();
    $('.prepare').hide();
    $('.worth').hide();
    $('.prices').hide();

});

$('#fifth-link').click( function () {
    if($('.worth').css('display','none')){
        $('.worth').css('display','block');
    }else{
        $('.worth').hide();
    }
    $('.depilation-intro-page').hide();
    $('.dlaczego').hide();
    $('.przeciwwskazania').hide();
    $('.prepare').hide();
    $('.after').hide();
    $('.prices').hide();

});

$('#sixth-link').click( function () {
    if($('.prices').css('display','none')){
        $('.prices').css('display','block');
    }else{
        $('.prices').hide();
    }
    $('.depilation-intro-page').hide();
    $('.dlaczego').hide();
    $('.przeciwwskazania').hide();
    $('.prepare').hide();
    $('.after').hide();
    $('.worth').hide();

});
$('#problem-link').click(function(){
    if($('.problemy').css('display','none')){
        $('.problemy').css('display','block');
    }
    $('.trychologia-intro-page').hide();
    $('.badania-trychologiczne').hide();
    $('.zabiegi-trychologiczne').hide();
    $('.trychologia-cennik').hide();

})

$('#badania-link').click(function(){
    if($('.badania-trychologiczne').css('display','none')){
        $('.badania-trychologiczne').css('display','block');
    }
    $('.trychologia-intro-page').hide();
    $('.problemy').hide();
    $('.zabiegi-trychologiczne').hide();
    $('.trychologia-cennik').hide();
})

$('#zabiegi-link').click(function(){
    if($('.zabiegi-trychologiczne').css('display','none')){
        $('.zabiegi-trychologiczne').css('display','block');
    }
    $('.trychologia-intro-page').hide();
    $('.problemy').hide();
    $('.badania-trychologiczne').hide();
    $('.trychologia-cennik').hide();
})
$('#cennik-link').click(function(){
    if($('.trychologia-cennik').css('display','none')){
        $('.trychologia-cennik').css('display','block');
    }
    $('.trychologia-intro-page').hide();
    $('.problemy').hide();
    $('.badania-trychologiczne').hide(); 
    $('.zabiegi-trychologiczne').hide();
})


$('#depilacja-cennik-link').click( function () {
    if($('.prices').css('display','none')){
        $('.prices').css('display','block');
    }
    $('.depilation-intro-page').hide();
    $('.dlaczego').hide();
    $('.przeciwwskazania').hide();
    $('.prepare').hide();
    $('.after').hide();
    $('.worth').hide();
});