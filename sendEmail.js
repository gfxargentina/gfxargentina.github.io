 function sendMail(){
    emailjs.sendForm('gmail', 'gfxargentina', 'contacto')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
 } 
