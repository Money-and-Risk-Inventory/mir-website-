/* MRI click tracking for Google Analytics (GA4). Sends events only; page views come from the GA tag on each page. */
(function () {
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a || typeof window.gtag !== 'function') return;
    var href = a.getAttribute('href') || '';
    var text = (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 60);
    var info = { page_path: location.pathname, link_text: text, transport_type: 'beacon' };
    if (href.indexOf('calendly.com') > -1) {
      window.gtag('event', 'book_walkthrough_click', info);
    } else if (href.indexOf('couples.moneyandriskinventory.com') > -1 || href.indexOf('MRICORE.html') > -1 || href.indexOf('genesis-dashboard') > -1) {
      window.gtag('event', 'demo_click', info);
    }
  }, true);
})();
