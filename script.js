// ===== Kiosco solar de salud · interacciones =====
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- Menú móvil ----
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });

    // Cerrar el menú al elegir una sección
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ---- Acordeón de materiales ----
  var accHeads = document.querySelectorAll(".acc-head");
  accHeads.forEach(function (head) {
    head.addEventListener("click", function () {
      var item = head.parentElement;
      var panel = item.querySelector(".acc-panel");
      var isOpen = item.classList.toggle("open");
      head.setAttribute("aria-expanded", isOpen ? "true" : "false");
      panel.style.maxHeight = isOpen ? panel.scrollHeight + "px" : null;
    });
  });

  // ---- Scroll-spy: marcar el enlace activo ----
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav-menu a");

  function linkFor(id) {
    for (var i = 0; i < navLinks.length; i++) {
      if (navLinks[i].getAttribute("href") === "#" + id) return navLinks[i];
    }
    return null;
  }

  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) { l.classList.remove("active"); });
            var link = linkFor(entry.target.id);
            if (link) link.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (s) { spy.observe(s); });
  }

  // ---- Reveal + animación de barras al entrar en pantalla ----
  if (!reduceMotion && "IntersectionObserver" in window) {
    var toReveal = document.querySelectorAll(
      ".stat-card, .subsys, .theory-card, .process-step, .compare-card, .team-card, .flow-step, .cost-card, .limit-col"
    );
    toReveal.forEach(function (el) { el.classList.add("reveal"); });

    var revealObs = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    toReveal.forEach(function (el) { revealObs.observe(el); });

    // Barras de costo: animar el ancho desde cero
    var bars = document.querySelectorAll(".bar-fill");
    bars.forEach(function (b) {
      b.dataset.w = b.style.width;
      b.style.width = "0%";
    });
    var barBlock = document.querySelector(".cost-bars");
    if (barBlock) {
      var barObs = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              bars.forEach(function (b) { b.style.width = b.dataset.w; });
              obs.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      barObs.observe(barBlock);
    }
  }
})();
