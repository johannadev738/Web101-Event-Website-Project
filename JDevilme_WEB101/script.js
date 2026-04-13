document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reservationForm");
  const fName = document.getElementById("person_fname");
  const lName = document.getElementById("person_lname");
  const email = document.getElementById("email");
  const signupList = document.getElementById("signup-list");
  const confirmation = document.getElementById("order-message");
  const modal = document.getElementById("success-modal");
  const successMessage = document.getElementById("success-message");
  const closeModal = document.getElementById("close-modal");

  const preloadedNames = [
    "Alice Johnson",
    "Brian Smith",
    "Clara Martinez",
    "Daniel Wu",
    "Ella Thompson"
  ];

  // Preload names
  preloadedNames.forEach(name => addNameToList(name));

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = fName.value.trim();
    const lastName = lName.value.trim();
    const userEmail = email.value.trim();

    if (firstName && lastName && userEmail) {
      const fullName = `${firstName} ${lastName}`;

      addNameToList(fullName);
      confirmation.textContent = "Reservation Submitted";
      successMessage.textContent = `See you soon, ${firstName}!`;

      // ✅ Show modal using class
      modal.classList.add("show");

    setTimeout(() => {
      modal.classList.remove("show");
    }, 5000);

      form.reset();
    } else {
      confirmation.textContent = "Please fill in your first name, last name, and email.";
    }
  });

  // ✅ Hide modal on close
  closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  function addNameToList(name) {
    const listItem = document.createElement("li");
    listItem.textContent = "🌿 " + name;
    signupList.appendChild(listItem);

    if (signupList.children.length > 7) {
      signupList.removeChild(signupList.firstElementChild);
    }
  }
});

  // Newsletter subscription logic
  const newsletterEmail = document.getElementById("newsletter-email");
  const subscribeBtn = document.getElementById("subscribe-newsletter");
  const newsletterConfirmation = document.getElementById("newsletter-confirmation");

  subscribeBtn.addEventListener("click", () => {
    const emailValue = newsletterEmail.value.trim();

    if (emailValue) {
      newsletterConfirmation.textContent = "✅";
      newsletterConfirmation.style.display = "block";

      // Optionally hide it after a few seconds
      setTimeout(() => {
        newsletterConfirmation.style.display = "none";
        newsletterEmail.value = "";
      }, 3000);
    } else {
      alert("Please enter your email to subscribe.");
    }
  });
