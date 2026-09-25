/* Click a model diagram to see it at full resolution over a dimmed page.
 *
 * The site is a single-page app: navigating between pages swaps the article
 * without reloading the document, so anything bound directly to the images
 * would stop working after the first navigation. Everything here is either
 * delegated on `document` or driven by a MutationObserver, both of which
 * outlive the swaps.
 */
(function () {
  var SELECTOR = 'img.model-fig';
  var dialog = null;

  function lightbox() {
    if (dialog && document.body.contains(dialog)) return dialog;
    dialog = document.createElement('dialog');
    dialog.className = 'figure-lightbox';
    dialog.innerHTML =
      '<button class="figure-lightbox-close" type="button" aria-label="Close">×</button>' +
      '<img alt="">';
    // clicking the dimmed area or the button closes; clicking the picture does not
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog || e.target.closest('.figure-lightbox-close')) dialog.close();
    });
    document.body.appendChild(dialog);
    return dialog;
  }

  function open(img) {
    var d = lightbox();
    var big = d.querySelector('img');
    big.src = img.currentSrc || img.src;   // the full-resolution file, not the framed size
    big.alt = img.alt || '';
    if (typeof d.showModal === 'function') d.showModal();
  }

  document.addEventListener('click', function (e) {
    var img = e.target && e.target.closest && e.target.closest(SELECTOR);
    if (!img) return;
    e.preventDefault();
    open(img);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var el = document.activeElement;
    if (!el || !el.matches || !el.matches(SELECTOR)) return;
    e.preventDefault();
    open(el);
  });

  // make the figures reachable by keyboard, now and after every page swap
  function markup(root) {
    (root.querySelectorAll ? root.querySelectorAll(SELECTOR) : []).forEach(function (img) {
      if (img.dataset.lightbox) return;
      img.dataset.lightbox = '1';
      img.tabIndex = 0;
      img.setAttribute('role', 'button');
      if (!img.title) img.title = 'Click to enlarge';
    });
  }
  function scan() { markup(document); }
  scan();
  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
})();
