var typed = new Typed(".text", {
    strings:["Backend Developer", "ML Enthusiast", "Software Engineering Learner"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

function sendEmail()
{
  const bodyMessage = `Name: ${name.value} <br> Email: ${email.value} <br> Message: ${message.value}`;


  Email.send({
  SecureToken : "20b5aa92-cf80-4857-8b05-7815c6289794",
  To: 'masnoon312@gmail.com',
  From: email.value,
  Subject: subject.value,
  Body: bodyMessage
  }).then(
    message => {
      if(message == "OK")
      {
        Swal.fire({
          title: "Good job!",
          text: "Your Text has been sent",
          icon: "success"
        });
      }
    }
).catch(
    error => console.error("Failed to send email: ", error)
);

}

form.addEventListener('submit', (e) => {  
  e.preventDefault();
  sendEmail();
});