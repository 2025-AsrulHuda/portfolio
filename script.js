let themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️ Light Mode";
  } else {
    themeBtn.textContent = "🌙 Dark Mode";
  }
});

let form = document.getElementById("contactForm");
let message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let msg = document.getElementById("message").value.trim();

  if (name === "" || email === "" || msg === "") {
    message.textContent = "⚠️ Please fill all fields!";
    message.style.color = "red";
  } else {
    message.textContent = "✔ Message sent successfully!";
    message.style.color = "green";
    form.reset();
  }
});
