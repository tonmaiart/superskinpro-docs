// Sidebar tree for nav sections, top-level captions (e.g. "User Guide") and
// nested sections (e.g. "Paint Weight Tools") alike: clicking the section
// name or its +/- button folds / unfolds it; folded sections are remembered
// per browser.
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

  // `head` gets the `collapsed` class (CSS hides `list` then); clicks on
  // `target` toggle it.
  function makeFoldable(head, btnParent, target, list, name, collapsed) {
    var btn = document.createElement("button");
    btn.className = "nav-fold";
    btn.type = "button";
    btn.title = "Open/close section";
    btn.tabIndex = -1;
    btnParent.insertBefore(btn, btnParent.firstChild);

    // Never fold away the section holding the page you're on
    var hasCurrent = Array.prototype.some.call(list.querySelectorAll("a"), isCurrent);
    if (collapsed.indexOf(name) !== -1 && !hasCurrent) head.classList.add("collapsed");
    target.setAttribute("aria-expanded", String(!head.classList.contains("collapsed")));

    function toggle(e) {
      // Keeps the click from reaching the theme's own nav toggle.
      e.preventDefault();
      e.stopPropagation();
      var isCollapsed = head.classList.toggle("collapsed");
      target.setAttribute("aria-expanded", String(!isCollapsed));
      var now = load().filter(function (n) { return n !== name; });
      if (isCollapsed) now.push(name);
      save(now);
    }

    target.addEventListener("click", toggle);
    target.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") toggle(e);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var collapsed = load();

    document.querySelectorAll(".wy-menu-vertical p.caption").forEach(function (cap) {
      var list = cap.nextElementSibling;
      if (!list) return;
      var label = cap.querySelector(".caption-text") || cap;
      cap.setAttribute("role", "button");
      cap.tabIndex = 0;
      makeFoldable(cap, cap, cap, list, label.textContent.trim(), collapsed);
    });

    document.querySelectorAll(".wy-menu-vertical a.nav-section").forEach(function (a) {
      var li = a.parentElement;
      var list = li.querySelector(":scope > ul");
      if (!list) return;
      li.classList.add("nav-section-item");
      makeFoldable(li, a, a, list, a.textContent.trim(), collapsed);
    });
  });
})();
