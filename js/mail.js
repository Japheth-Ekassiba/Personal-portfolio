const form = document.querySelector("form");

const yourName = document.getElementById("contact-name");
const phoneNumber = document.getElementById("contact-phone");
const email = document.getElementById("contact-email");
const subject = document.getElementById("subject");
const yourMessage = document.getElementById("contact-message");

function sendEmail() {

  const bodyMessage =`Full Name: ${yourName.value}<br> Phone Number: ${phoneNumber.value}<br> Email: ${email.value}<br> Subject: ${subject.value}<br> Message: ${yourMessage.value}`;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ekassibajapheth@gmail.com",
    Password : "6882106F7697DDA0F35E00A167761E990CEE",
    To : 'ekassibajapheth@gmail.com',
    From : "ekassibajapheth@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => {
    if (message == "OK"){
      Swal.fire({
        title: "Thank You!",
        text: "Message sent successfully. I'll get back to you shortly.",
        icon: "success"
      });
    }
  }
);
}

function checkInputs(){
  const items = document.querySelectorAll(".form-control");

  for (const item of items) {
    if(item.value == ""){
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if(items[1].value !=""){
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if(item.value != ""){
        item.classList.remove("error");
        item.parentElement.classList.remove("error");

      }
      else{
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    } );
  }

  function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const email = document.getElementById('contact-email');
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if(!email.value.match(emailRegex)){
      email.classList.add("error");
      email.parentElement.classList.add("error");

      if(email.value != ""){
        errorTxtEmail.innerText = "Enter a valid email address";
      }
      else{
        errorTxtEmail.innerText = "Email can't be blank";
      }
    }
     else{
      email.classList.remove("error");
      email.parentElement.classList.remove("error");

     }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  

  sendEmail();
});