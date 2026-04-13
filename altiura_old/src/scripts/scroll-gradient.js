const lastItem = document.querySelector(".last-item");
const gradientIndicator = document.querySelector(".gradient-indicator");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gradientIndicator.style.opacity = "0";
      } else {
        gradientIndicator.style.opacity = "1";
      }
    });
  },
  {
    root: null, 
    threshold: 0, 
  }
);

observer.observe(lastItem);