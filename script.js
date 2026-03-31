function sTo(id) {
  var e = document.getElementById(id);
  if (e) e.scrollIntoView({ behavior: "smooth", block: "start" });
}

window.addEventListener("scroll", function () {
  var nav = document.getElementById("nav");
  var sctBtn = document.getElementById("sctBtn");
  if (nav) nav.classList.toggle("scrolled", window.scrollY > 20);
  if (sctBtn) sctBtn.classList.toggle("visible", window.scrollY > 400);
});

var hbtn = document.getElementById("hbtn");
var mmenu = document.getElementById("mmenu");
if (hbtn && mmenu) {
  hbtn.addEventListener("click", function () {
    hbtn.classList.toggle("active");
    mmenu.classList.toggle("open");
    document.body.style.overflow = mmenu.classList.contains("open") ? "hidden" : "";
  });
}

function cM() {
  if (hbtn) hbtn.classList.remove("active");
  if (mmenu) mmenu.classList.remove("open");
  document.body.style.overflow = "";
}

function tL(card) {
  var open = card.classList.contains("open");
  var all = document.querySelectorAll(".lc");
  for (var i = 0; i < all.length; i++) all[i].classList.remove("open");
  if (!open) card.classList.add("open");
}

var videoCard = document.getElementById("videoCard");
if (videoCard) {
  videoCard.addEventListener("click", function () {
    window.open("https://tinyurl.com/qualifyAI-video", "_blank");
  });
}

var PAGE_ROUTES = {
  blockchain: "blockchain.html",
  ethics:     "ethics.html",
  genai:      "genai.html",
  cyber:      "cyber.html",
  healthcare: "healthcare.html",
  softeng:    "softeng.html",
  codegenai:  "codegenai.html"
};

function selP(card, key) {
  var route = PAGE_ROUTES[key];
  if (route) window.location.href = route;
}

var obs = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

var fades = document.querySelectorAll(".fin");
for (var i = 0; i < fades.length; i++) obs.observe(fades[i]);
