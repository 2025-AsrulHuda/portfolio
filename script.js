let modal = document.getElementById("modal");
let modalImg = document.getElementById("modalImg");
let closeBtn = document.getElementById("closeBtn");
let images = document.querySelectorAll(".gallery img");

// Open modal
images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking outside the image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
