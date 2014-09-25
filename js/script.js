$(document).ready(function() {
    
    $(window).scroll( function(event) {
            
            alert('dentro de scroll');  
               var scrolled_val = $(document).scrollTop().valueOf(); //Capturamos posicion del scroll
			   
			   		$( "#firstScreen h2" ).css({"display": "none", "position": "fixed", "top": "0px"});
					$( "#firstScreen p" ).css({"display": "none", "position": "fixed", "top": "225px"});
					$( "#secondScreen h2" ).css({"display": "none", "position": "fixed", "top": "0px"});
					$( "#secondScreen p" ).css({"display": "none", "position": "fixed", "top": "225px"});
					$( "#thirdScreen h2" ).css({"display": "none", "position": "fixed", "top": "0px"});
					$( "#thirdScreen p" ).css({"display": "none", "position": "fixed", "top": "225px"});
					$( "#fourthScreen h2" ).css({"display": "none", "position": "fixed", "top": "0px"});
					$( "#fourthScreen p" ).css({"display": "none", "position": "fixed", "top": "225px"});
					 
	 
		 
				if (scrolled_val > 650 && scrolled_val < 6000) {//Pasamos parametros del scroll a variable
				
				
				var positionInicio = scrolled_val > 650 && scrolled_val <3649;
				var position1= scrolled_val > 800 && scrolled_val <1549;
				var position2= scrolled_val > 1550 && scrolled_val < 2549; 
				var position3= scrolled_val > 2550 && scrolled_val < 3449; 
				var position4= scrolled_val > 3450 && scrolled_val <3649; 
				var positionFinal=  scrolled_val >3800;	
				if(positionInicio == true)
				{
						$( ".tablet").removeClass( "slideOutUp" ).addClass( "animated fadeInUpBig" );
						$( ".mobile").removeClass( "slideOutUp" ).addClass( "animated fadeInUpBig" );
						$( ".computer").removeClass( "slideOutUp" ).addClass( "animated fadeInUpBig" );
		 	 	
				}		 
				
				if(position1 == true)
				{
				 	$( "#firstScreen h2").removeClass();
					$( "#firstScreen p").removeClass();
					$( "#secondScreen h2").removeClass();
					$( "#secondScreen p").removeClass();
					$( "#thirdScreen h2").removeClass();
					$( "#thirdScreen p").removeClass();
					$( "#fourthScreen h2").removeClass();
					$( "#fourthScreen p").removeClass();
					$( "#firstScreen h2").addClass( "animated fadeInDownBig" );
					$( "#firstScreen p").addClass( "animated fadeInDownBig" );
					$( "#secondScreen h2").addClass( "animated fadeOutDownBig" );
					$( "#secondScreen p").addClass( "animated fadeOutDownBig" );
					$( "#thirdScreen h2").addClass( "animated fadeOutDownBig" );
					$( "#thirdScreen p").addClass( "animated fadeOutDownBig" );
					$( "#fourthScreen h2").addClass( "animated fadeOutDownBig" );
					$( "#fourthScreen p").addClass( "animated fadeOutDownBig" );
					$( "#firstScreen h2").css("display", "block"); 
					$( "#firstScreen p").css("display", "block");
					}
					
				if(position2 == true)
				{
					$( "#firstScreen h2" ).removeClass();
					$( "#firstScreen p" ).removeClass();
					$( "#secondScreen h2" ).removeClass();
					$( "#secondScreen p" ).removeClass();
					$( "#thirdScreen h2" ).removeClass();
					$( "#thirdScreen p" ).removeClass();
					$( "#fourthScreen h2" ).removeClass();
					$( "#fourthScreen p" ).removeClass();
			 
					$( "#secondScreen h2" ).addClass( "animated fadeInDownBig" );
					$( "#secondScreen p" ).addClass( "animated fadeInDownBig" );
					$( "#firstScreen h2" ).addClass( "animated fadeOutDownBig" );
					$( "#firstScreen p" ).addClass( "animated fadeOutDownBig" );
					$( "#thirdScreen h2" ).addClass( "animated fadeOutDownBig" );
					$( "#thirdScreen p" ).addClass( "animated fadeOutDownBig" );
					$( "#fourthScreen h2" ).addClass( "animated fadeOutDownBig" );
					$( "#fourthScreen p" ).addClass( "animated fadeOutDownBig" );
					$( "#secondScreen h2" ).css("display", "block");
					$( "#secondScreen p" ).css("display", "block");
					}
					
				if(position3 == true)
				{
					$( "#firstScreen h2" ).removeClass();
					$( "#firstScreen p" ).removeClass();
					$( "#secondScreen h2" ).removeClass();
					$( "#secondScreen p" ).removeClass();
					$( "#thirdScreen h2" ).removeClass();
					$( "#thirdScreen p" ).removeClass();
					$( "#fourthScreen h2" ).removeClass();
					$( "#fourthScreen p" ).removeClass();
		 
					$( "#thirdScreen h2" ).addClass( "animated fadeInDownBig" );
					$( "#thirdScreen p" ).addClass( "animated fadeInDownBig" );
					$( "#firstScreen h2" ).addClass( "animated fadeOutDownBig" );
					$( "#firstScreen p" ).addClass( "animated fadeOutDownBig" );
					$( "#secondScreen h2" ).addClass( "animated fadeOutDownBig" );
					$( "#secondScreen p" ).addClass( "animated fadeOutDownBig" );
					$( "#fourthScreen h2" ).addClass( "animated fadeOutDownBig" );
					$( "#fourthScreen p" ).addClass( "animated fadeOutDownBig" );
					$( "#thirdScreen h2" ).css("display", "block");
					$( "#thirdScreen p" ).css("display", "block");
					}
					
				if(position4 == true)
				{
				$( "#firstScreen h2" ).removeClass();
					$( "#firstScreen p" ).removeClass();
					$( "#secondScreen h2" ).removeClass();
					$( "#secondScreen p" ).removeClass();
					$( "#thirdScreen h2" ).removeClass();
					$( "#thirdScreen p" ).removeClass();
					$( "#fourthScreen h2" ).removeClass();
					$( "#fourthScreen p" ).removeClass();
					$( "#fourthScreen h2" ).addClass( "animated fadeInDownBig" );
					$( "#fourthScreen p" ).addClass( "animated fadeInDownBig" );
					$( "#firstScreen h2" ).addClass( "animated fadeOutDownBig" );
					$( "#firstScreen p" ).addClass( "animated fadeOutDownBig" );
					$( "#secondScreen h2" ).addClass( "animated fadeOutDownBig" );
					$( "#secondScreen p" ).addClass( "animated fadeOutDownBig" );
					$( "#thirdScreen h2" ).addClass( "animated fadeOutDownBig" );
					$( "#thirdScreen p" ).addClass( "animated fadeOutDownBig" );
					$( "#fourthScreen h2" ).css("display", "block");
					$( "#fourthScreen p" ).css("display", "block");
				}
				
			 
				

				if(positionFinal == true)
				{
	
					$( ".tablet").removeClass( "fadeInUpBig" ).addClass( "slideOutUp" );
					$( ".mobile").removeClass( "fadeInUpBig" ).addClass( "slideOutUp" );
					$( ".computer").removeClass( "fadeInUpBig" ).addClass( "slideOutUp" );
					
			 
					 
					
				}		
				if(scrolled_val >4000){
					$('.primary').css('display', 'none');
				}
				else{
					$('.primary').css('display', 'block')
					}
			 
							
									
                       
                               if(".computer.lenght === 0"){
                                       
                                       $( "#seccionPantalla" ).after( $( "<nav class='primary'><ul><li><a class='firstScreen' href='#firstScreen' >View</a></li><li><a class='secondScreen' href='#secondScreen'>View</a></li><li><a class='thirdScreen' href='#thirdScreen'>View</a></li><li><a class='fourthScreen' href='#fourthScreen'>View</a></li></ul></nav><div class='computer animated fadeInUpBig'><div class='spriteMonitor'></div></div><div class='tablet animated fadeInUpBig'><div class='spriteTablet'></div></div><div class='mobile animated fadeInUpBig'><div class='spriteMobile'></div></div>" ) );//Creamos Div con la imagen a mostrar
                                       if ($('.computer.length > 0')) {
                                           $('.computer').not(':last').remove()
                                        $('.tablet').not(':last').remove()
                                        $('.mobile').not(':last').remove()
										 $('.primary').not(':last').remove()
                                       }
                                       
                               }
                       }else{
                               
                       $( ".computer" ).remove();
                       $( ".tablet" ).remove();
                       $( ".mobile" ).remove();
					   $( ".primary" ).remove();
                       }
               });
       
       
//ICONO FLECHA ABAJO, CONTROLA DESPLAZAMIENTO HASTA DIV "SeccionPantalla
      $('.iconDown').click(function(){
           $('html, body').animate({scrollTop: $("#seccionPantalla").offset().top}, 300);
       });
	   
	   
	

//ABRIMOS EL POP UP PARA IDENTIFICARNOS

$('.openIdentification').click(function() {
   $('.overlay').css({
       'display': 'block',
   });
});

//CERRAMOS EL POP UP PARA IDENTIFICARNOS

$('.background-circle').bind('click', function(event){
   if (event.target == $('.background-circle').get(0)){
       $('.overlay').css({'display': 'none'}); 
               }
});
//PRUEBAS MULTISCROLL





});