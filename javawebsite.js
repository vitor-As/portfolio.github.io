// Código Javascript para botão de topo de página: 

// Get the button element
let myButton = document.getElementById("myBtn");

// Hide the button initially
myButton.style.display = "none";

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", scrollFunction);

// Call scrollFunction() initially to check the scroll position
scrollFunction();

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Attach click event listener to the button
myButton.addEventListener("click", topFunction);




// ----------------------------------------------------------------------------------- //


// Smooth scrolling trough the nav bar and the website 

document.addEventListener('DOMContentLoaded', function() {
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

    for (let i = 0; i < smoothScrollLinks.length; i++) {
      smoothScrollLinks[i].addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    } 
});

  // ----------------------------------------------------------------------------------- //
  
  // Copy Email Click 

  document.addEventListener('DOMContentLoaded', function() {
    const copyEmailButton = document.getElementById('copy-email');
    const emailElement = document.getElementById('email');

    if (copyEmailButton && emailElement) {
        copyEmailButton.addEventListener('click', function() {
            const email = emailElement.textContent;
            navigator.clipboard.writeText(email).then(function() {
                alert('E-mail copiado: ' + email);
            }, function() {
                alert('Erro ao copiar e-mail');
            });
        });
    } else {
        console.error('Could not find the email or button element.');
    }
});

// ----------------------------------------------------------------------------------- //
  
  // Back Button (Portfolio Work 1 Page)

  function goBack() {
    window.location.href = 'Index.html';
}

// ----------------------------------------------------------------------------------- //
  
  // Pages Transition Effect

  // javawebsite.js

document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;

  // Apply fade-in effect when the page loads
  body.classList.add('fade-in');

  // Function to navigate with fade-out effect
  function navigateTo(url) {
      body.classList.add('fade-out');
      setTimeout(() => {
          window.location.href = url;
      }, 500); // Match this duration with your fadeOut animation duration
  }

  // Add event listener to the back arrow
  const backArrow = document.querySelector('.back-arrow');
  if (backArrow) {
      backArrow.addEventListener('click', function() {
          navigateTo('Index.html');
      });
  }

  // Example for other navigation links (if any)
  const portfolioLink = document.querySelector('.portfolio-link');
  if (portfolioLink) {
      portfolioLink.addEventListener('click', function() {
          navigateTo('portfolio-item.html');
      });
  }
});
