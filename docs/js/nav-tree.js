// Sidebar tree for nav sections (e.g. "How to use"):
// - the section name opens the section's first page (as listed in
//   mkdocs.yml)
// - the +/- button folds / unfolds the section; folded sections are remembered
//   per browser
(function () {
  var KEY = "ssp-nav-collapsed";

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
  }

  function save(list) {
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) { /* ignore */ }
  }

  // The theme sets `.current` only after this runs, but it renders the
  // current page's link as href="#"
  function isCurrent(a) {
    return a.getAttribute("href") === "#" || a.classList.contains("current");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var collapsed = load();

    document.querySelectorAll(".wy-menu-vertical p.caption").forEach(function (cap) {
      var name = cap.textContent.trim();
      var list = cap.nextElementSibling;
      if (!list) return;

      // Section name -> link to the section's page
      var firstItem = list.querySelector(":scope > li.toctree-l1");
      var firstLink = firstItem && firstItem.querySelector(":scope > a");
      var label = cap.querySelector(".caption-text") || cap;
      if (firstLink) {
        var link = document.createElement("a");
        link.href = isCurrent(firstLink) ? location.pathname : firstLink.href;
        link.textContent = label.textContent;
        label.textContent = "";
        label.appendChild(link);
      }

      // +/- fold button
      var btn = document.createElement("button");
      btn.className = "nav-fold";
      btn.type = "button";
      btn.title = "Open/close section";
      cap.insertBefore(btn, cap.firstChild);

      // Never fold away the section holding the page you're on
      var hasCurrent = Array.prototype.some.call(list.querySelectorAll("li.toctree-l1 > a"), isCurrent);
      if (collapsed.indexOf(name) !== -1 && !hasCurrent) cap.classList.add("collapsed");
      btn.setAttribute("aria-expanded", String(!cap.classList.contains("collapsed")));

      btn.addEventListener("click", function () {
        var isCollapsed = cap.classList.toggle("collapsed");
        btn.setAttribute("aria-expanded", String(!isCollapsed));
        var now = load().filter(function (n) { return n !== name; });
        if (isCollapsed) now.push(name);
        save(now);
      });
    });
  });
})();
