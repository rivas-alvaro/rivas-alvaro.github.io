document.addEventListener('DOMContentLoaded', function() {
  document
    .querySelectorAll('sup.footnote-number > a[href^="#footnote-"]')
    .forEach(function(ref) {
      var sup    = ref.parentNode;
      var id     = ref.getAttribute('href').slice(1);
      var parent = sup.parentNode;

      // ← skip if this <sup> is itself in the <p id="footnote-X"> definition
      if (parent.id === id) return;

      var foot = document.getElementById(id);
      if (!foot) return;

      // clone and strip the inner sup from the definition
      var clone   = foot.cloneNode(true);
      var inner   = clone.querySelector('sup.footnote-number');
      if (inner) inner.remove();

      // build & inject the tooltip
      var tip = document.createElement('span');
      tip.className = 'fn-tooltip';
      tip.innerHTML = clone.innerHTML;
      sup.appendChild(tip);
  });
});
