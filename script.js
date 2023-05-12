const observer = new IntersectionObserver((entries) => {
    // Loop over the entries
    entries.forEach((entry) => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add("image-animation");
      }
    });
  });
  
  const row = document.querySelectorAll(".movie-cards");
  row.forEach((image) => {
    observer.observe(image);
  });
  
  