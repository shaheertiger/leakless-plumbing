/* Leakless Plumbing — lightweight UI behaviour (no dependencies) */
(function () {
  "use strict";

  // Mobile navigation toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close menu when a link is tapped
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  // Set current year in footer(s)
  var years = document.querySelectorAll("[data-year]");
  var y = new Date().getFullYear();
  years.forEach(function (el) { el.textContent = y; });

  // Highlight active nav link based on current path
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === path || (path === "index.html" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  // Reveal the floating desktop call button once the hero has scrolled out of view
  var floatCall = document.querySelector(".float-call");
  if (floatCall) {
    var toggleFloatCall = function () {
      floatCall.classList.toggle("is-visible", window.scrollY > 480);
    };
    toggleFloatCall();
    window.addEventListener("scroll", toggleFloatCall, { passive: true });
  }
})();
