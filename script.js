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

var PD = {
  blockchain: {
    name: "Blockchain Engineering",
    desc: "Distributed ledger technology, smart contracts, consensus mechanisms, and enterprise blockchain for healthcare.",
    topics: ["Smart Contracts", "DApps", "Consensus", "Enterprise Blockchain", "Security", "Tokenisation"],
    tiers: [
      {
        lv: "Foundation",
        nm: "Associate",
        pr: "£549",
        du: "5 chapters · 6 months",
        ft: ["Parts I & II", "Online exam", "Digital certificate", "6-month access"]
      },
      {
        lv: "Professional",
        nm: "Practitioner",
        pr: "£1,199",
        du: "All chapters · 1 year",
        ft: ["All chapters", "Comprehensive exam", "Hands-on lab exercises", "1-year access"],
        f: 1
      },
      {
        lv: "Expert",
        nm: "Master",
        pr: "£2,499",
        du: "Complete + mentorship · Lifetime",
        ft: ["Advanced curriculum", "Capstone", "Mentorship", "Lifetime access"]
      }
    ]
  },

  ethics: {
    name: "AI Ethics by Design",
    desc: "Responsible AI, governance, fairness, compliance, and practical frameworks.",
    topics: ["Fairness", "Transparency", "Accountability", "EU AI Act", "IEEE Standards"],
    tiers: [
      { lv: "Foundation", nm: "Associate", pr: "£549", du: "5 chapters · 6 months", ft: ["Core modules", "Online exam", "Certificate"] },
      { lv: "Professional", nm: "Practitioner", pr: "£1,199", du: "All chapters · 1 year", ft: ["All modules", "Comprehensive exam", "Labs"], f: 1 },
      { lv: "Expert", nm: "Master", pr: "£2,499", du: "Lifetime", ft: ["Full curriculum", "Capstone", "Mentorship"] }
    ]
  },

  genai: {
    name: "Generative AI for All",
    desc: "LLMs, prompt engineering, content creation, and responsible GenAI use.",
    topics: ["LLMs", "Prompt Engineering", "AI Tools", "Applications"],
    tiers: [
      { lv: "Foundation", nm: "Associate", pr: "£449", du: "6 months", ft: ["Core modules", "Assessment", "Certificate"] },
      { lv: "Professional", nm: "Practitioner", pr: "£999", du: "1 year", ft: ["All modules", "Exam", "Prompt labs"], f: 1 },
      { lv: "Expert", nm: "Master", pr: "£1,999", du: "Lifetime", ft: ["Advanced track", "Industry project", "Mentorship"] }
    ]
  },

  cyber: {
    name: "AI for Cybersecurity",
    desc: "AI/ML for threat detection, incident response, vulnerability assessment, and security automation.",
    topics: ["Threat Detection", "ML Security", "Incident Response", "Automation"],
    tiers: [
      { lv: "Foundation", nm: "Associate", pr: "£549", du: "6 months", ft: ["Core modules", "Exam", "Certificate"] },
      { lv: "Professional", nm: "Practitioner", pr: "£1,199", du: "1 year", ft: ["All modules", "Labs", "Badge"], f: 1 },
      { lv: "Expert", nm: "Master", pr: "£2,499", du: "Lifetime", ft: ["Advanced track", "Capstone", "Mentorship"] }
    ]
  },

  healthcare: {
    name: "AI in Healthcare",
    desc: "7-lecture programme for medical professionals.",
    topics: ["Clinical AI", "Medical Imaging", "GenAI", "Agentic AI", "Ethics", "Implementation"],
    tiers: [
      { lv: "Foundation", nm: "Associate", pr: "£549", du: "Lectures 1–3 · 6 months", ft: ["AI foundations", "Assessment", "Certificate"] },
      { lv: "Professional", nm: "Practitioner", pr: "£1,199", du: "All 7 lectures · 1 year", ft: ["All lectures", "Assessment", "Case studies"], f: 1 },
      { lv: "Expert", nm: "Master", pr: "£2,499", du: "Lifetime", ft: ["Full programme", "Project", "Mentorship"] }
    ],
    go: "ai-healthcare"
  },

  softeng: {
    name: "AI for Software Engineering",
    desc: "AI-assisted coding, testing, review, DevOps, and engineering productivity.",
    topics: ["Coding", "Testing", "DevOps", "Code Review"],
    tiers: [
      { lv: "Foundation", nm: "Associate", pr: "£449", du: "6 months", ft: ["Core modules", "Assessment", "Certificate"] },
      { lv: "Professional", nm: "Practitioner", pr: "£999", du: "1 year", ft: ["All modules", "Labs", "Badge"], f: 1 },
      { lv: "Expert", nm: "Master", pr: "£1,999", du: "Lifetime", ft: ["Advanced track", "Project", "Mentorship"] }
    ]
  },

  codegenai: {
    name: "Code Gen AI",
    desc: "AI code generation in the workplace, secure coding, ethics, and organisational adoption.",
    topics: ["Copilot", "Cursor", "Secure Coding", "Code Review"],
    tiers: [
      { lv: "Foundation", nm: "Associate", pr: "£449", du: "6 months", ft: ["Core modules", "Assessment", "Certificate"] },
      { lv: "Professional", nm: "Practitioner", pr: "£999", du: "1 year", ft: ["All modules", "Platform labs", "Badge"], f: 1 },
      { lv: "Expert", nm: "Master", pr: "£1,999", du: "Lifetime", ft: ["Advanced track", "Adoption project", "Mentorship"] }
    ]
  }
};

function selP(card, key) {
  var cards = document.querySelectorAll(".pc");
  for (var i = 0; i < cards.length; i++) cards[i].classList.remove("active");
  card.classList.add("active");

  var d = PD[key];
  if (!d) return;

  var tags = "";
  var tiersH = '<div class="tiers">';

  for (var j = 0; j < d.topics.length; j++) {
    tags += '<span class="ptag">' + d.topics[j] + "</span>";
  }

  for (var t = 0; t < d.tiers.length; t++) {
    var T = d.tiers[t];
    var fl = "";

    for (var f = 0; f < T.ft.length; f++) {
      fl += "<li>" + T.ft[f] + "</li>";
    }

    tiersH +=
      '<div class="tier' + (T.f ? " feat" : "") + '">' +
      '<div class="tlv">' + T.lv + "</div>" +
      "<h4>" + T.nm + "</h4>" +
      '<div class="tpr">' + T.pr + " <small>one-time</small></div>" +
      '<div class="tdu">' + T.du + "</div>" +
      '<ul class="tft">' + fl + "</ul>" +
      '<button class="tbtn ' + (T.f ? "pr" : "sc") + '" onclick="sTo(\'contact\')">' +
      (T.f ? "Get Certified" : "Get Started") +
      "</button></div>";
  }

  tiersH += "</div>";

  var el = document.getElementById("pinfo");
  if (!el) return;

  el.className = "pinfo show";
  el.innerHTML =
    '<div class="pbox">' +
    "<h3>" + d.name + "</h3>" +
    "<p>" + d.desc + "</p>" +
    '<div class="ptags">' + tags + "</div>" +
    tiersH +
    (d.go ? '<button class="pcta" onclick="sTo(\'' + d.go + '\')" style="margin-top:24px">View Full Curriculum ↓</button>' : "") +
    "</div>";

  if (d.go) {
    setTimeout(function () {
      sTo(d.go);
    }, 300);
  }
}

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
    d.onmouseover = function () { this.style.transform = "translateY(-6px)"; };
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
      '<img src="' + b.img + '" style="width:100px;height:auto;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,0.15);margin-bottom:8px" alt="' + b.title + '">' +
      '<div style="font-size:0.75rem;font-weight:600;color:var(--p);max-width:110px;line-height:1.3">' + b.title + "</div>" +
      '<div style="font-size:0.68rem;color:var(--m)">' + b.sub + "</div>";
    br.appendChild(d);
  });
}

var obs = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.1 });

var fades = document.querySelectorAll(".fin");
for (var i = 0; i < fades.length; i++) {
  obs.observe(fades[i]);
}
