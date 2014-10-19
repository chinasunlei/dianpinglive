// JavaScript Document
$(function() {	
var slidey=$('.banner').unslider({
	
	dots: true,
	delay:5000
});
var data=slidey.data('unslider');
var slides = jQuery('.banner');

slides
.on('swipeleft', function(e) {
 	data.next();
})
.on('swiperight', function(e) {
  data.prev();
});
});
