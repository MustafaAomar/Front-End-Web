const bgColors = ['#C0D8E0', '#536ce7', '#5addb1', 'rgb(212, 153, 85)'];
let colorIdx = 0;

setInterval(() => {
  document.body.style.backgroundColor = bgColors[colorIdx];
  colorIdx = (colorIdx + 1) % bgColors.length;
}, 8000);



const contactEmail = document.querySelector('.contact-box a');

if(contactEmail) {
    contactEmail.addEventListener('click', function() {
        alert('Your email client will open to send an email!');
    });
}
