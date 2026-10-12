/* =========================================================================
   MOTEUR DE L'ÉCRAN — ⚠️ Normalement, pas besoin d'y toucher.
   Les réglages se font dans js/config.js.
   ========================================================================= */

(function () {
  "use strict";

  var C = window.MYG_CONFIG || {};

  /* --- 1) Injecte les textes de config.js dans la page --- */
  function set(id, html) {
    var el = document.getElementById(id);
    if (el && html != null && html !== "") el.innerHTML = html;
  }
  set("cfg-promo-percent",  C.promoPourcent);
  set("cfg-promo-texte",    C.promoTexte);
  set("cfg-promo-liste",    C.promoListe);
  set("cfg-promo-pastille", C.promoPastille);
  set("cfg-telephone",      C.telephone);
  set("cfg-site",           C.siteWeb);
  set("cfg-ville",          C.ville);

  /* --- 2) Durée d'un slide (depuis la config) --- */
  var DUR = (Number(C.dureeParSlideSecondes) > 0 ? Number(C.dureeParSlideSecondes) : 6) * 1000;
  document.documentElement.style.setProperty("--dur", DUR + "ms");

  /* --- 3) Prépare les slides et la barre de progression --- */
  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  var topbar = document.getElementById("topbar");

  var segs = slides.map(function () {
    var s = document.createElement("div");
    s.className = "seg";
    s.innerHTML = "<i></i>";
    topbar.appendChild(s);
    return s;
  });

  /* --- 4) Défilement automatique en boucle --- */
  var i = -1, timer = null;
  function show(n) {
    i = n % slides.length;
    slides.forEach(function (sl, k) { sl.classList.toggle("on", k === i); });
    segs.forEach(function (sg, k) {
      sg.classList.remove("active", "done");
      if (k < i) sg.classList.add("done");
      else if (k === i) sg.classList.add("active");
    });
    clearTimeout(timer);
    timer = setTimeout(function () { show(i + 1); }, DUR);
  }
  show(0);

  /* --- 5) Empêche l'écran de se mettre en veille (si le navigateur l'autorise) --- */
  if ("wakeLock" in navigator) {
    var lock = function () { navigator.wakeLock.request("screen").catch(function () {}); };
    lock();
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible") lock();
    });
  }
})();
