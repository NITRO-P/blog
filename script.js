$('.page-scroll').on('click', function(){
var tujuan = $(this).attr('href');
var elemen = $(tujuan);
$('body').animate({

	scrollTop: elemen.offset().top - 50

});

    	});
