const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Frontend demonstration only: no backend is connected yet.
  const visitorName = document.getElementById("name").value.trim();
  formMessage.textContent = `Thank you, ${visitorName}! The form was validated successfully.`;
  form.reset();
});
