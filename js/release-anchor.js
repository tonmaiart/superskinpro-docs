// Version headings on the release notes page are hidden anchors for the sidebar;
// jumping to one also unfolds the version block right after it.
(function () {
  function openFor(hash) {
    if (!hash || hash.length < 2) return;
    var h = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!h || !h.classList.contains("release-anchor")) return;
    var block = h.nextElementSibling;
    if (block && block.tagName === "DETAILS") block.open = true;
  }

  document.addEventListener("DOMContentLoaded", function () { openFor(location.hash); });
  window.addEventListener("hashchange", function () { openFor(location.hash); });
  // Clicking the link of the hash already in the URL fires no hashchange.
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href*='#']");
    if (a && a.pathname === location.pathname) openFor(a.hash);
  });
})();
