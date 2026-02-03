document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("cvModal");
  const iframe = document.getElementById("cvFrame");
  const closeBtn = document.querySelector(".cv-close");

  if (!modal || !iframe || !closeBtn) return;

  // Open modal when CV button clicked
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cv]");
    if (!btn) return;

    e.preventDefault();

    const cvPath = btn.getAttribute("data-cv");
    if (!cvPath) return;

    iframe.src = cvPath;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  });

  // Close modal
  function closeModal() {
    modal.classList.remove("open");
    iframe.src = "";
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);

  // Close when clicking outside modal content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Close with ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });

});
