// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Contact form submission (basic example, extend with backend integration)
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // For demo purposes, log to console. Replace with actual backend integration.
    console.log('Form submitted:', { name, email, message });
    alert('Message sent! (This is a demo, integrate with a backend for actual functionality.)');
  
    // Clear form
    this.reset();
  });