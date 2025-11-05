document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Message sent successfully (demo)!');
  this.reset();
});
