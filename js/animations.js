/* We will need these functions to assign the new class name when they enter the viewport and we need it to trigger CSS animations on scroll.

Start by targeting all the reveal elements using*/

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
     /* The scrolling animation needs to be triggered when it comes into view so we need to determine the element’s position on the page, that is, the distance of the element from the top of the viewport.

getBoundingClientRect().top gives us this distance from the top of the viewport and window.innerHeight will give us the height of the viewport.

With this, we can set the conditions using for*/
for (var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    /* The variable, windowHeight is the height of the viewport, elementTop is the distance of the reveal element from the top of the viewpoint or, the length that has been scrolled, and elementVisible is the height at which the element should be revealed to the user.

You can determine when an element has scrolled a certain number of pixels into the page. Now define a function that displays the elements by adding and removing the active class. For this. use if and else statements. These will set the conditions for triggering the animation*/
        if (elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }
}



/* Now we just pass it into an event listener to run it every time the visitor scrolls the page in any direction.*/
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();




//Animation piece of code to help the form to send
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
