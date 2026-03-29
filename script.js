// ---- SMOOTH SCROLL ----
function sTo(id) {
  var e = document.getElementById(id);
  if (e) e.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ---- NAV SCROLL BEHAVIOUR ----
window.addEventListener("scroll", function () {
  var nav = document.getElementById("nav");
  var sctBtn = document.getElementById("sctBtn");
  if (nav) nav.classList.toggle("scrolled", window.scrollY > 20);
  if (sctBtn) sctBtn.classList.toggle("visible", window.scrollY > 400);
});

// ---- MOBILE MENU ----
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

// ---- CURRICULUM ACCORDION ----
function tL(card) {
  var open = card.classList.contains("open");
  var all = document.querySelectorAll(".lc");
  for (var i = 0; i < all.length; i++) all[i].classList.remove("open");
  if (!open) card.classList.add("open");
}

// ---- VIDEO CARD ----
var videoCard = document.getElementById("videoCard");
if (videoCard) {
  videoCard.addEventListener("click", function () {
    window.open("https://tinyurl.com/qualifyAI-video", "_blank");
  });
}

// ---- PROGRAM DATA ----
var PD = {
  blockchain: {
    name: "Blockchain Engineering",
    desc: "Distributed ledger technology, smart contracts, consensus mechanisms, and enterprise blockchain for secure systems.",
    topics: ["Smart Contracts", "DApps", "Consensus", "Enterprise Blockchain", "Security", "Tokenisation"],
    tiers: [
      {
        lv: "Foundation", nm: "Associate", pr: "£549", du: "5 chapters · 6 months",
        ft: ["Parts I & II", "Online exam", "Digital certificate", "6-month access"]
      },
      {
        lv: "Professional", nm: "Practitioner", pr: "£1,199", du: "All chapters · 1 year",
        ft: ["All chapters", "Comprehensive exam", "Hands-on lab exercises", "1-year access"], f: 1
      },
      {
        lv: "Expert", nm: "Master", pr: "£2,499", du: "Complete + mentorship · Lifetime",
        ft: ["Advanced curriculum", "Capstone project", "1-to-1 mentorship", "Lifetime access"]
      }
    ]
  },
  ethics: {
    name: "AI Ethics by Design",
    desc: "Responsible AI, governance, fairness, compliance, and practical frameworks for ethical AI deployment.",
    topics: ["Fairness", "Transparency", "Accountability", "EU AI Act", "IEEE Standards", "Bias Mitigation"],
    tiers: [
      { lv: "Foundation", nm: "Associate", pr: "£549", du: "5 chapters · 6 months", ft: ["Core modules", "Online exam", "Certificate", "6-month access"] },
      { lv: "Professional", nm: "Practitioner", pr: "£1,199", du: "All chapters · 1 year", ft: ["All modules", "Comprehensive exam", "Ethics labs", "1-year access"], f: 1 },
      { lv: "Expert", nm: "Master", pr: "£2,499", du: "Lifetime", ft: ["Full curriculum", "Capstone project", "Mentorship", "Lifetime access"] }
    ]
  },
  genai: {
    name: "Generative AI for All",
    desc: "LLMs, prompt engineering, RAG pipelines, content creation, and responsible GenAI use across industries.",
    topics: ["LLMs", "Prompt Engineering", "RAG", "AI Tools", "Content Generation", "Applications"],
    tiers: [
      { lv: "Foundation", nm: "Associate", pr: "£449", du: "6 months", ft: ["Core modules", "Assessment", "Certificate", "6-month access"] },
      { lv: "Professional", nm: "Practitioner", pr: "£999", du: "1 year", ft: ["All modules", "Exam", "Prompt labs", "1-year access"], f: 1 },
      { lv: "Expert", nm: "Master", pr: "£1,999", du: "Lifetime", ft: ["Advanced track", "Industry project", "Mentorship", "Lifetime access"] }
    ]
  },
  cyber: {
    name: "AI for Cybersecurity",
    desc: "AI/ML for threat detection, incident response, vulnerability assessment, and autonomous security operations.",
    topics: ["Threat Detection", "ML Security", "Incident Response", "Anomaly Detection", "Automation", "SIEM"],
    tiers: [
      { lv: "Foundation", nm: "Associate", pr: "£549", du: "6 months", ft: ["Core modules", "Exam", "Certificate", "6-month access"] },
      { lv: "Professional", nm: "Practitioner", pr: "£1,199", du: "1 year", ft: ["All modules", "Security labs", "Badge", "1-year access"], f: 1 },
      { lv: "Expert", nm: "Master", pr: "£2,499", du: "Lifetime", ft: ["Advanced track", "Capstone", "Mentorship", "Lifetime access"] }
    ]
  },
  healthcare: {
    name: "AI in Healthcare",
    desc: "7-lecture programme for medical professionals — from AI foundations to clinical implementation and agentic AI.",
    topics: ["Clinical AI", "Medical Imaging", "GenAI", "Agentic AI", "Ethics", "Implementation"],
    tiers: [
      { lv: "Foundation", nm: "Associate", pr: "£549", du: "Lectures 1–3 · 6 months", ft: ["AI foundations", "Assessment", "Certificate", "6-month access"] },
      { lv: "Professional", nm: "Practitioner", pr: "£1,199", du: "All 7 lectures · 1 year", ft: ["All 7 lectures", "Assessment", "Clinical case studies", "1-year access"], f: 1 },
      { lv: "Expert", nm: "Master", pr: "£2,499", du: "Lifetime", ft: ["Full programme", "Capstone project", "Mentorship", "Lifetime access"] }
    ],
    go: "ai-healthcare"
  },
  softeng: {
    name: "AI for Software Engineering",
    desc: "AI-assisted coding, testing, review, DevOps integration, and engineering productivity at scale.",
    topics: ["AI Copilots", "Testing", "DevOps", "Code Review", "Automated QA", "Architecture"],
    tiers: [
      { lv: "Foundation", nm: "Associate", pr: "£449", du: "6 months", ft: ["Core modules", "Assessment", "Certificate", "6-month access"] },
      { lv: "Professional", nm: "Practitioner", pr: "£999", du: "1 year", ft: ["All modules", "Labs", "Badge", "1-year access"], f: 1 },
      { lv: "Expert", nm: "Master", pr: "£1,999", du: "Lifetime", ft: ["Advanced track", "Project", "Mentorship", "Lifetime access"] }
    ]
  },
  codegenai: {
    name: "Code Gen AI",
    desc: "AI code generation in the workplace, secure coding practices, ethics, and organisational adoption strategies.",
    topics: ["Copilot", "Cursor", "Secure Coding", "Code Review", "Adoption", "Ethics"],
    tiers: [
      { lv: "Foundation", nm: "Associate", pr: "£449", du: "6 months", ft: ["Core modules", "Assessment", "Certificate", "6-month access"] },
      { lv: "Professional", nm: "Practitioner", pr: "£999", du: "1 year", ft: ["All modules", "Platform labs", "Badge", "1-year access"], f: 1 },
      { lv: "Expert", nm: "Master", pr: "£1,999", du: "Lifetime", ft: ["Advanced track", "Adoption project", "Mentorship", "Lifetime access"] }
    ]
  }
};

// ---- PROGRAM PAGE ROUTES ----
var PAGE_ROUTES = {
  blockchain: "blockchain.html",
  ethics:     "ethics.html",
  genai:      "genai.html",
  cyber:      "cyber.html",
  healthcare: "healthcare.html",
  softeng:    "softeng.html",
  codegenai:  "codegenai.html"
};

// ---- PROGRAM SELECTOR — navigates to dedicated page ----
function selP(card, key) {
  var route = PAGE_ROUTES[key];
  if (route) {
    window.location.href = route;
    return;
  }
  // Fallback: highlight card only
  var cards = document.querySelectorAll(".pc");
  for (var i = 0; i < cards.length; i++) cards[i].classList.remove("active");
  card.classList.add("active");
}

// ---- BOOKS ----
var books = [
  { img: "images/book1.jpg", title: "Blockchain Engineering", sub: "Springer, 2025", prog: "blockchain" },
  { img: "images/book2.jpg", title: "Engineering AI Ethics by Design", sub: "Springer, 2025", prog: "ethics" },
  { img: "images/book3.jpg", title: "Novel AI & Data Science", sub: "Elsevier, 2022", prog: "healthcare" },
  { img: "images/book4.jpg", title: "Software Engineering in Cloud", sub: "Springer, 2020", prog: "softeng" }
];

var br = document.getElementById("bookRow");
if (br) {
  books.forEach(function (b) {
    var d = document.createElement("div");
    d.style.cssText = "text-align:center;cursor:pointer;transition:transform 0.3s";
    d.onmouseover = function () { this.style.transform = "translateY(-8px)"; };
    d.onmouseout = function () { this.style.transform = "translateY(0)"; };
    d.onclick = function () {
      var cards = document.querySelectorAll(".pc");
      for (var i = 0; i < cards.length; i++) {
        var pcn = cards[i].querySelector(".pcn");
        if (pcn && pcn.textContent.toLowerCase().indexOf(b.prog) > -1) {
          cards[i].click();
          break;
        }
      }
    };
    d.innerHTML =
      '<img src="' + b.img + '" style="width:110px;height:auto;border-radius:10px;box-shadow:0 6px 24px rgba(0,0,0,0.15);margin-bottom:10px" alt="' + b.title + '">' +
      '<div style="font-size:0.75rem;font-weight:600;color:var(--p);max-width:120px;line-height:1.3">' + b.title + "</div>" +
      '<div style="font-size:0.68rem;color:var(--m);margin-top:3px">' + b.sub + "</div>";
    br.appendChild(d);
  });
}

// ---- INTERSECTION OBSERVER (fade-in) ----
var obs = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.08 });

// Trigger hero items immediately on load
window.addEventListener("DOMContentLoaded", function () {
  var heroFins = document.querySelectorAll(".hero .fin");
  heroFins.forEach(function (el, i) {
    setTimeout(function () {
      el.classList.add("visible");
    }, i * 120);
  });

  // Observe all other .fin elements
  var fades = document.querySelectorAll(".fin:not(.hero .fin)");
  for (var i = 0; i < fades.length; i++) {
    obs.observe(fades[i]);
  }
});
