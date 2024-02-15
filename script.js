document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.onload = function() {
              lazyImage.removeAttribute("loading");
            };
            observer.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach(function(lazyImage) {
        observer.observe(lazyImage);
      });
    } else {
      // Fallback for browsers that do not support IntersectionObserver
      lazyImages.forEach(function(lazyImage) {
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.removeAttribute("loading");
      });
    }
});