/* =========================================================
   RENDERS THE PAGE FROM config.js — you shouldn't need to
   edit this file to customise the site.
   ========================================================= */
(function () {
  "use strict";

  var W = WEDDING;

  /* ---------- helpers ---------- */
  function byId(id) { return document.getElementById(id); }
  function setText(id, text) { var el = byId(id); if (el) el.textContent = text == null ? "" : text; }
  function setHTML(id, html) { var el = byId(id); if (el) el.innerHTML = html; }

  /* Returns an <img> if a path is set, otherwise a blank square. */
  function photo(src, alt) {
    if (src) return '<img src="' + src + '" alt="' + alt + '" loading="lazy" />';
    return '<div class="placeholder" role="img" aria-label="' + alt + '">Your photo</div>';
  }

  var ICONS = {
    location:  '<path d="M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10z"/><circle cx="12" cy="11" r="2.5"/>',
    party:     '<path d="M5 3v18M5 8h14M19 3v18M9 8v13M15 8v13"/>',
    hotel:     '<path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/>',
    dress:     '<path d="M12 2l2.4 6.9H21l-5.3 4 2 6.9L12 15.8 6.3 19.8l2-6.9L3 8.9h6.6z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>',
    email:     '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    photos:    '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M4 18l5-4 4 3 3-2 4 3"/>'
  };
  function icon(name) {
    var path = ICONS[name] || ICONS.location;
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' + path + "</svg>";
  }

  /* ---------- colours ---------- */
  function applyColors() {
    var root = document.documentElement;
    Object.keys(W.colors).forEach(function (key) {
      var cssVar = "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase();
      root.style.setProperty(cssVar, W.colors[key]);
    });
  }

  /* ---------- sections ---------- */
  function renderHero() {
    setText("brandName", W.monogram);
    setText("heroEyebrow", W.hero.eyebrow);
    setHTML("heroNames", "<span>" + W.bride + '</span><span class="amp">&amp;</span><span>' + W.groom + "</span>");
    setHTML("heroMeta", W.dateLabel + ' <span class="dot">&bull;</span> ' + W.venue + ' <span class="dot">&bull;</span> ' + W.location);
    setHTML("heroCta",
      '<a href="' + W.hero.ctaPrimary.href + '" class="btn btn--light">' + W.hero.ctaPrimary.label + "</a>" +
      '<a href="' + W.hero.ctaSecondary.href + '" class="btn btn--light-ghost">' + W.hero.ctaSecondary.label + "</a>");

    var bg = byId("heroBg");
    if (bg) {
      var shade = "linear-gradient(180deg, rgba(30,26,22,.45) 0%, rgba(30,26,22,.30) 45%, rgba(30,26,22,.62) 100%)";
      if (W.images.hero) {
        bg.style.backgroundImage = shade + ', url("' + W.images.hero + '")';
        bg.style.backgroundSize = "cover";
        bg.style.backgroundPosition = "center";
      } else {
        bg.style.backgroundImage = shade;
        bg.style.backgroundColor = "#a89f92";
      }
    }
    document.title = W.bride + " & " + W.groom + " \u2014 Wedding";
  }

  function renderStory() {
    setHTML("storyMedia", photo(W.images.story, "The couple together"));
    setText("storyEyebrow", W.story.eyebrow);
    setText("storyHeading", W.story.heading);
    setHTML("storyBody", W.story.paragraphs.map(function (p) { return "<p>" + p + "</p>"; }).join(""));
    setText("storyQuote", W.story.quote);
  }

  function renderDetails() {
    setText("detailsEyebrow", W.details.eyebrow);
    setText("detailsHeading", W.details.heading);
    setHTML("detailsCards", W.details.cards.map(function (c) {
      return '<article class="card reveal">' +
        '<div class="card__icon">' + icon(c.icon) + "</div>" +
        "<h3>" + c.title + "</h3>" +
        c.lines.map(function (l) { return "<p>" + l + "</p>"; }).join("") +
        '<span class="card__label">' + c.label + "</span>" +
        "</article>";
    }).join(""));
  }

  function renderSchedule() {
    setText("scheduleEyebrow", W.schedule.eyebrow);
    setText("scheduleHeading", W.schedule.heading);
    setHTML("timeline", W.schedule.items.map(function (i) {
      return '<div class="timeline__item reveal">' +
        '<div class="timeline__time">' + i.time + "</div>" +
        '<div class="timeline__body"><h3>' + i.title + "</h3><p>" + i.text + "</p></div>" +
        "</div>";
    }).join(""));
  }

  function renderGallery() {
    setText("galleryEyebrow", W.gallery.eyebrow);
    setText("galleryHeading", W.gallery.heading);
    setHTML("gallery", W.gallery.items.map(function (g) {
      return '<a href="#" class="' + (g.size || "") + '">' + photo(g.src, g.alt) + "</a>";
    }).join(""));
  }

  function renderRsvp() {
    setText("rsvpEyebrow", W.rsvp.eyebrow);
    setText("rsvpHeading", W.rsvp.heading);
    setText("rsvpIntro", W.rsvp.intro);
    setText("rsvpNote", W.rsvp.note);
    setText("successHeading", W.rsvp.successHeading);
    setText("successText", W.rsvp.successText);
  }

  function renderFooter() {
    setText("footerNames", W.bride + " & " + W.groom);
    setText("footerDate", W.dateLabel);
    setText("registryNote", W.footer.registryNote);
    setText("footerCopy", W.footer.copy + " \u2022 " + W.hashtag);
    setHTML("registryLinks", W.footer.links.map(function (l) {
      return '<a href="' + l.href + '" class="btn btn--light-ghost">' + l.label + "</a>";
    }).join(""));
    setHTML("footerSocial", W.footer.social.map(function (s) {
      return '<a href="' + s.href + '" aria-label="' + s.label + '">' + icon(s.icon) + "</a>";
    }).join(""));
  }

  /* ---------- behaviour ---------- */
  function initNav() {
    var nav = byId("nav"), toggle = byId("navToggle"), links = byId("navLinks");
    if (!nav) return;
    function onScroll() { nav.classList.toggle("is-scrolled", window.scrollY > 60); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  function initCountdown() {
    var target = new Date(W.date);
    var el = byId("countdown");
    if (!el || isNaN(target)) return;
    function pad(n) { return String(n).padStart(2, "0"); }
    function tick() {
      var diff = target - new Date();
      if (diff <= 0) { el.innerHTML = '<p style="font-family:var(--serif);font-size:1.6rem;margin:0">Today is the day!</p>'; return; }
      var s = Math.floor(diff / 1000);
      var vals = { days: Math.floor(s / 86400), hours: Math.floor((s % 86400) / 3600), minutes: Math.floor((s % 3600) / 60), seconds: s % 60 };
      Object.keys(vals).forEach(function (k) {
        var node = el.querySelector('[data-unit="' + k + '"]');
        if (node) node.textContent = k === "days" ? vals[k] : pad(vals[k]);
      });
    }
    tick();
    setInterval(tick, 1000);
  }

  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { items.forEach(function (i) { i.classList.add("is-in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (i) { io.observe(i); });
  }

  function initForm() {
    var form = byId("rsvpForm"), success = byId("formSuccess");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      function done() { form.style.display = "none"; success.classList.add("is-visible"); }
      if (W.rsvp.endpoint) {
        fetch(W.rsvp.endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
          .then(done)
          .catch(function () { alert("Something went wrong. Please try again."); });
      } else { done(); }
    });
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    applyColors();
    renderHero();
    renderStory();
    renderDetails();
    renderSchedule();
    renderGallery();
    renderRsvp();
    renderFooter();
    initNav();
    initCountdown();
    initReveal();  // runs after content is rendered, so new .reveal items animate
    initForm();

    
  });
})();