/*script for navigation*/
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("actived");
  }
  
  slides[index].style.display= "block";
  dot[index].classList.add("actived");
  
  index++;
  
  setTimeout(changeSlide,2000);
  
}
changeSlide();

//Validation form
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById(
        "email-error"
    );
    const subjectError = document.getElementById(
        "subject-error"
    );
  
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
  
    let isValid = true;
  
    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }
  
    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }
  
    if (subject === "") {
        subjectError.textContent =
            "Please select your course.";
        isValid = false;
    }
  
    return isValid;
}