const phrases = ["Web Developer", "Frontend Designer"];
let currentPhraseIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;
const typingSpeed = 100;

function type() {
  const typingTextElement = document.getElementById("typingText");
  const currentPhrase = phrases[currentPhraseIndex];

  if (isDeleting) {
    typingTextElement.textContent = currentPhrase.substring(0, currentLetterIndex--);
  } else {
    typingTextElement.textContent = currentPhrase.substring(0, currentLetterIndex++);
  }

  if (!isDeleting && currentLetterIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(type, 800);
  } else if (isDeleting && currentLetterIndex === 0) {
    isDeleting = false;
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(type, typingSpeed);
  }
}

type();


let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=() => {
    let top=window.scrollY;
    sections.forEach(sec => {
     
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>= offset && top<offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}

menuIcon.onclick=()=> {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
} 


/*mailjs.init('wlvtNilpBd6ROJCx1'); // Replace 'your_public_key' with your actual Public Key

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Use the correct Service ID and Template ID
  emailjs.sendForm('service_54sf2f1', 'template_v30zahg', this)
      .then(() => {
          alert('Message sent successfully!');
          this.reset(); // Reset the form after submission
      })
      .catch((error) => {
          console.error('Error sending email:', error);
          alert('Failed to send message. Please try again.');
      });
});*/

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  const form = this;

  // Submit the form using fetch
  fetch(form.action, {
      method: form.method,
      body: new FormData(form),
  })
      .then(response => {
          if (response.ok) {
              alert("Message sent successfully!");
              form.reset(); // Reset the form fields
          } else {
              alert("Failed to send the message. Please try again.");
          }
      })
      .catch(error => {
          console.error("Error:", error);
          alert("Failed to send the message. Please try again.");
      });
});
