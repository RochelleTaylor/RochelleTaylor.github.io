function displayMenu(element){
	if(element.length){
		element.forEach(function(element){
			if(element.className.includes('hidden')){
				element.className = element.className.replace('hidden','show');
			} else {
				element.className = element.className.replace('show' ,'hidden');
			}
		})
	} else {
	if(element.className.includes('hidden')){
		element.className = element.className.replace('hidden','show');
	} else {
		element.className = element.className.replace('show' ,'hidden');
	}}
};
document.querySelector('.menu-button').addEventListener("click", function() {
	displayMenu(document.querySelectorAll('ul.nav li'))
});
document.querySelector('.modal-content-button').addEventListener("click",function(){
	displayMenu(document.querySelector('#myDiv'))
});
// document.querySelector('.menu-button').addEventListener("click", function() {
// 	displayMenu(document.querySelectorAll('ul.nav li'))
// });
document.querySelector('.about-me-button').addEventListener("click",function(){
	displayMenu(document.querySelector('#about-me-description'))
});
document.querySelector('.contact-info-button').addEventListener("click",function(){
	displayMenu(document.querySelector('#contact-info-description'))
});
// function myFunction() {
//     var x = document.getElementById("myDIV").;
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// };
// <script>
// function openSkills(evt, cityNa) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
    // modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
function carouselShift(carouselItemList, directionButton){
	if(directionButton.className.includes('right-button')){
		// carouselItemList.forEach(function(carouselItem){
		for (let carouselItem of carouselItemList){	
			if (carouselItem.className.includes('left-edge')){
				carouselItem.className = carouselItem.className.replace('left-edge', 'left-focus');
				break;
			} else if(carouselItem.className.includes('left-focus')){
				carouselItem.className= carouselItem.className.replace('left-focus','center-focus');
			} else if(carouselItem.className.includes('center-focus')){
				carouselItem.className= carouselItem.className.replace('center-focus','right-focus');
			} else if(carouselItem.className.includes('right-focus')){
				carouselItem.className = carouselItem.className.replace('right-focus','right-edge');
			}
		}
	}else if(directionButton.className.includes('left-button')){
		//carouselItemList.forEach(function(carouselItem){
		for (let i=carouselItemList.length-1; i>=0; i--){	
			if(carouselItemList[i].className.includes('right-edge')){
				carouselItemList[i].className = carouselItemList[i].className.replace('right-edge','right-focus');
				break;
			} else if(carouselItemList[i].className.includes('right-focus')){
				carouselItemList[i].className = carouselItemList[i].className.replace('right-focus','center-focus');
			} else if(carouselItemList[i].className.includes('center-focus')){
				carouselItemList[i].className = carouselItemList[i].className.replace('center-focus','left-focus');
			} else if(carouselItemList[i].className.includes('left-focus')){
				carouselItemList[i].className = carouselItemList[i].className.replace('left-focus', 'left-edge');
			}
		}
	};
};	
document.querySelector('.left-carousel-nav .left-button').addEventListener("click", function(){
  carouselShift(document.querySelectorAll('.image-carousel .carousel-item'),document.querySelector('.left-carousel-nav .left-button'));
});
document.querySelector('.right-carousel-nav .right-button').addEventListener("click", function(){
  carouselShift(document.querySelectorAll('.image-carousel .carousel-item'),document.querySelector('.right-carousel-nav .right-button'));
});

