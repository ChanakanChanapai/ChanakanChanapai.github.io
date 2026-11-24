// Optional interactive utilities for the minimal cozy portfolio & resume

document.addEventListener("DOMContentLoaded", () => {
  // Smooth interaction & print shortcut logging
  const printBtn = document.querySelector(".action-btn.primary");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      console.log("Print / Save PDF requested");
    });
  }

  // Add subtle reveal effect for cards on load
  const cards = document.querySelectorAll(".info-card, .hero-card, .resume-paper");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(10px)";
    card.style.transition = `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`;
    
    requestAnimationFrame(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    });
  });
});
