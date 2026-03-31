function sTo(id) {
  var e = document.getElementById(id);
  if (e) e.scrollIntoView({ behavior: "smooth", block: "start" });
}

window.addEventListener("scroll", function () {
  var nav = document.getElementById("nav");
  var sctBtn = document.getElementById("sctBtn");
  if (nav) nav.classList.toggle("scrolled", window.scrollY > 20);
  if (sctBtn) sctBtn.classList.toggle("visible", window.scrollY > 400);
})function sTo(id) {
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

// Program cards — navigate to dedicated pages
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
  if (route) {
    window.location.href = route;
  }
}

// Books — with real Springer links and discount code
var books = [
  {
    color: "#0A2540", accent: "#00D4AA",
    title: "Blockchain Engineering",
    sub: "Springer, 2025",
    url: "https://link.springer.com/book/10.1007/978-3-030-12358-1",
    discount: "Author40"
  },
  {
    color: "#1a0a40", accent: "#8B5CF6",
    title: "Engineering Ethics of AI by Design",
    sub: "Springer, 2026 · £12.99 eBook",
    url: "https://link.springer.com/book/10.1007/978-981-95-2909-4",
    discount: "Author40"
  },
  {
    color: "#0a2020", accent: "#00B4D8",
    title: "Blockchain in Healthcare",
    sub: "Springer, 2025",
    url: "https://link.springer.com/book/10.1007/978-981-96-4360-8",
    discount: "Author40"
  },
  {
    color: "#0a1f40", accent: "#F59E0B",
    title: "Software Engineering in Cloud",
    sub: "Springer, 2020",
    url: "https://tinyurl.com/muthu-pub",
    discount: "Author40"
  }
];

var br = document.getElementById("bookRow");
if (br) {
  books.forEach(function (b) {
    var d = document.createElement("div");
    d.style.cssText = "text-align:center;cursor:pointer;transition:transform 0.3s;max-width:130px;";
    d.onmouseover = function () { this.style.transform = "translateY(-8px)"; };
    d.onmouseout  = function () { this.style.transform = "translateY(0)"; };
    d.onclick = function () { window.open(b.url, "_blank"); };
    d.innerHTML =
      '<div style="width:100px;height:140px;border-radius:8px;background:' + b.color + ';' +
      'box-shadow:0 6px 24px rgba(0,0,0,0.2);margin:0 auto 10px;display:flex;flex-direction:column;' +
      'align-items:center;justify-content:center;padding:12px;border-left:4px solid ' + b.accent + '">' +
      '<div style="font-size:1.6rem;margin-bottom:8px">📚</div>' +
      '<div style="font-size:0.58rem;font-weight:700;color:' + b.accent + ';text-align:center;line-height:1.3">' + b.title + '</div>' +
      '</div>' +
      '<div style="font-size:0.75rem;font-weight:600;color:var(--p);max-width:110px;line-height:1.3;margin:0 auto">' + b.title + '</div>' +
      '<div style="font-size:0.68rem;color:var(--m);margin-top:3px">' + b.sub + '</div>' +
      '<div style="font-size:0.65rem;font-weight:700;color:#E65100;margin-top:4px;background:#FFF3E0;padding:2px 8px;border-radius:20px;display:inline-block">🎟 ' + b.discount + '</div>';
    br.appendChild(d);
  });
}

// Fade-in observer
var obs = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

var fades = document.querySelectorAll(".fin");
for (var i = 0; i < fades.length; i++) obs.observe(fades[i]);;

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

// Program cards — navigate to dedicated pages
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
  if (route) {
    window.location.href = route;
  }
}

// Books — with real Springer links and discount code
var books = [
  {
    color: "#0A2540", accent: "#00D4AA",
    title: "Blockchain Engineering",
    sub: "Springer, 2025",
    url: "https://link.springer.com/book/10.1007/978-3-030-12358-1",
    discount: "Author40"
  },
  {
    color: "#1a0a40", accent: "#8B5CF6",
    title: "Engineering Ethics of AI by Design",
    sub: "Springer, 2026 · £12.99 eBook",
    url: "https://link.springer.com/book/10.1007/978-981-95-2909-4",
    discount: "Author40"
  },
  {
    color: "#0a2020", accent: "#00B4D8",
    title: "Blockchain in Healthcare",
    sub: "Springer, 2025",
    url: "https://link.springer.com/book/10.1007/978-981-96-4360-8",
    discount: "Author40"
  },
  {
    color: "#0a1f40", accent: "#F59E0B",
    title: "Software Engineering in Cloud",
    sub: "Springer, 2020",
    url: "https://tinyurl.com/muthu-pub",
    discount: "Author40"
  }
];

var br = document.getElementById("bookRow");
if (br) {
  books.forEach(function (b) {
    var d = document.createElement("div");
    d.style.cssText = "text-align:center;cursor:pointer;transition:transform 0.3s;max-width:130px;";
    d.onmouseover = function () { this.style.transform = "translateY(-8px)"; };
    d.onmouseout  = function () { this.style.transform = "translateY(0)"; };
    d.onclick = function () { window.open(b.url, "_blank"); };
    d.innerHTML =
      '<div style="width:100px;height:140px;border-radius:8px;background:' + b.color + ';' +
      'box-shadow:0 6px 24px rgba(0,0,0,0.2);margin:0 auto 10px;display:flex;flex-direction:column;' +
      'align-items:center;justify-content:center;padding:12px;border-left:4px solid ' + b.accent + '">' +
      '<div style="font-size:1.6rem;margin-bottom:8px">📚</div>' +
      '<div style="font-size:0.58rem;font-weight:700;color:' + b.accent + ';text-align:center;line-height:1.3">' + b.title + '</div>' +
      '</div>' +
      '<div style="font-size:0.75rem;font-weight:600;color:var(--p);max-width:110px;line-height:1.3;margin:0 auto">' + b.title + '</div>' +
      '<div style="font-size:0.68rem;color:var(--m);margin-top:3px">' + b.sub + '</div>' +
      '<div style="font-size:0.65rem;font-weight:700;color:#E65100;margin-top:4px;background:#FFF3E0;padding:2px 8px;border-radius:20px;display:inline-block">🎟 ' + b.discount + '</div>';
    br.appendChild(d);
  });
}

// Fade-in observer
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
