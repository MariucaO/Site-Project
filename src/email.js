const emailData = {
  serviceID: "service_w03brkp",
  templateID: "template_k3tmz2o",
  publicKey: "UFN0Y4lufLQJB8oQK",
};

(function () {
  emailjs.init(emailData.publicKey);
})();
const bookingForm = document.getElementById("booking-form");

bookingForm.onsubmit = (e) => {
  e.preventDefault();
  console.log("Send Email!");
  emailjs.sendForm(
    emailData.serviceID,
    emailData.templateID,
    bookingForm,
    emailData.publicKey
  );
};
