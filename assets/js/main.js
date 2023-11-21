// import swal from "https://unpkg.com/sweetalert/dist/sweetalert.min.js";

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

//-------------------- Education --------------------------
function updateGraduationYear() {
    var graduationYearElement = document.getElementById("graduationYear");
    var currentYear = new Date().getFullYear();
    var expectedGraduationYear = currentYear + 1; // You can adjust this logic as needed
    graduationYearElement.innerText = expectedGraduationYear;
    var mastersDetails = document.getElementById("mastersDetails");
    mastersDetails.style.display = "inline";
  }
  //--------------------slu----------------------------
        document.addEventListener("DOMContentLoaded", function() {
            // Get the element to update
            var academicInfo = document.getElementById("academic-info");

            // Your academic information
            var program = "Master's in Computer Science";
            var university = "Saint Louis University";
            var arrivalDate = "August 2023";

            // Create the HTML content
            var content = "I am currently pursuing my " + program + " at " + university + ". I arrived USA in " + arrivalDate + ".";

            // Update the element with the content
            academicInfo.innerHTML = content;
        });

/* =============klu=====================*/

document.addEventListener('DOMContentLoaded', function () {
    // Get the "Experience" section
    const experienceSection = document.querySelector('.experience');

    // Get the subtitle within the "Experience" section
    const experienceSubtitle = experienceSection.querySelector('.subtitle');

    // Toggle the visibility of the "Experience" section when clicking on the subtitle
    experienceSubtitle.addEventListener('click', function () {
        experienceSection.classList.toggle('hidden');
    });
});

//==============================dark mode================================

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-btn');
    const body = document.body;

    toggleBtn.addEventListener('click', function () {
        // Toggle between dark and light mode by toggling CSS classes
        body.classList.toggle('dark-mode');

        // Save the user's preference to localStorage
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Check if the user has a preference for dark mode in localStorage
    const savedDarkMode = localStorage.getItem('darkMode');

    if (savedDarkMode === 'true') {
        body.classList.add('dark-mode');
    }
});
//======================= contact =====================


function sendMail(params){
    var tempParams = {
        from_name: document.getElementById("name").value,
        email_sender: document.getElementById("email").value,
        message_sender: document.getElementById("message").value,
    };
    console.log(tempParams);
    emailjs.send('service_evw1h3r','template_54349ay',tempParams)
     .then(function(res){
        alert('Email Sent Succesfully');
     });
}

var photo = document.getElementById('photo');
        var photoData = document.getElementById('photoData');

        // Sample data (you can replace this with your actual data)
        var sampleData = {
            title: 'This is Vishnu',
            description: 'I am a diligent individual who recently completed my Bachelors degree in Computer Science from KL University, India, in 2022. Following my undergraduate studies, I embarked on a professional journey as a Software Engineer at ValueMomentum in Hyderabad, where I dedicated one and a half years to contributing my skills and expertise to various projects. Currently, I am pursuing my Masters degree at Saint Louis University, where I am eager to further enhance my knowledge and capabilities in Computer Science.' 
        };

        // Add click event listener to the photo
        photo.addEventListener('click', function() {
            // Update the content of the photoData element with the data
            photoData.innerHTML = `<h2>${sampleData.title}</h2><p>${sampleData.description}</p>`;
        });