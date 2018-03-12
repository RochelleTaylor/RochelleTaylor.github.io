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
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

