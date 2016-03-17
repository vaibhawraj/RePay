// Main.js //
// All custom javascript goes here //
$( document ).on( "pagebeforecreate","#loading", function( event ) {
	//Do Nothing
});
$( document ).on( "pageshow","#loading", function( event ) {
	
});
$( document ).on( "pagebeforecreate", function( event ) {
	
  	//page_loader(doc_ready);
});
$(document).ready(function($) {
		//This method is executed after document is loaded
		doc_ready;	//It will first load all pages and then call doc_ready method which in turn initialize other things
	});

function page_loader(callback){
	// This method will load template from template folder and put it on home.html and then call 'callback' at the end
	// callback - It will be function that will be executed post loading of all pages. E.g. Initializer
	
	// loader is defined in loader.js - It loades html into element. Its objective is to load all html modules
	//                                  at once and then continue by calling callback method.
	//                                  Define necessary initialization in callback method.
	// 		To add pages in queue : loader.add(pageUrl,elemId); where 'elemId' will be the element in which pageUrl content will
	//									be pushed
	//		To begin loading : loader.load(callback); where callback will be method performing necessary things after loading
	/*loader.add('template/home_page.html','#home'); 
	loader.add('template/page_User.html','#page_User');
	loader.add('template/page_Notification.html','#page_Notification');
	loader.add('template/page_Favorite.html','#page_Favorite');
	loader.add('template/Favorite.html','#Favorite');
	loader.add('template/Dynamic.html','#Dynamic');
	loader.load(function(){
	$.mobile.changePage('#home');
				callback();
	});*/
}

function doc_ready() {
		$(".scroll").click(function(event){   
				event.preventDefault();
				$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
			});
		$("#owl-demo").owlCarousel({
				items : 1,
				lazyLoad : true,
				autoPlay : true,
				navigation : false,
				navigationText :  false,
				pagination : true,
			});
		$("#owl-demo1").owlCarousel({
				items : 1,
				lazyLoad : true,
				autoPlay : true,
				navigation : false,
				navigationText :  false,
				pagination : true,
			});
		$("#owl-demo2").owlCarousel({
				items : 1,
				lazyLoad : true,
				autoPlay : true,
				navigation : false,
				navigationText :  false,
				pagination : true,
			});

}