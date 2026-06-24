// DIBI scroll-reveal: adds .is-visible to .dibi-reveal elements on enter.
// CSS for .dibi-reveal / .is-visible / prefers-reduced-motion lives in dibi.css.
(function () {
  var els = document.querySelectorAll('.dibi-reveal');
  if (!els.length) return;
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  } else {
    els.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }
})();
