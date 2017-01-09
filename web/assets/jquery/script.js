 /*globals $:false */
  $(document).ready(function(){		
  		var opt = {
  			imageSrc: "/assets/images/symfony-design-wallpaper-3-1.jpg",
  			positionX: "center",
  			naturalHeight: "90vh",
  			speed: 0.2,
  			bleed: 20,
  		};
  		var opt_2 = {
  			imageSrc: "/assets/images/other-potatoes-wallpapers-custom-wallpaper-fun-volume-pictures-symfony-sites.jpg",
  			positionX: "center",
  			speed: 0.2,
  		};
  		var opt_3 = {
  			imageSrc: "/assets/images/pexels-photo.jpeg",
  			positionX: "center",
  			speed: 0.2
  		};
        $('.home').parallax(opt);
        $('.situation').parallax(opt_2);
        $('.hobbies').parallax(opt_3);
  });
var header = document.getElementById("header");
var title1 = document.getElementById("title1");
// var animright = document.getElementById("anim-right");
// var animleft = document.getElementById("anim-left");
// var win = $(window).height();

function scrolled(){
	header.className = (window.pageYOffset >= document.documentElement.clientHeight - header.offsetHeight + 130) ? "fixed" : "";
}
addEventListener("scroll", scrolled, false);
function scrolled2(){
	title1.className = (window.pageYOffset >= document.documentElement.clientHeight - header.offsetHeight + 130) ? "fixed2" : "";
}
addEventListener("scroll", scrolled2, false);
// function scrolled3(){
//   animright.className = (window.pageYOffset >= document.documentElement.clientHeight - (win*5)) ? "fixed3" : "";
// }
// addEventListener("scroll", scrolled3, false);
// function scrolled4(){
//   animleft.className = (window.pageYOffset >= document.documentElement.clientHeight -(win*5)) ? "fixed4" : "";
// }
// addEventListener("scroll", scrolled4, false);


 var divPrecedent=document.getElementById('div_texte1');
    function visibilite(divId)
    {
        divPrecedent.style.display='none';
        divPrecedent=document.getElementById(divId);
        divPrecedent.style.display='';
    }