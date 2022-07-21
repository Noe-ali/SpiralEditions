//Topnav function
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function togglenavbar() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



  //Function to make modal slideshow to work
  let slideIndex = [1,1,1,1];
  let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
  showSlides(1, 0);
  showSlides(1, 1);
  showSlides(1, 2);
  showSlides(1, 3);

  function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
  }
  
  function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}    
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "block";  
  }
