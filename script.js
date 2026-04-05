function sTo(id){var e=document.getElementById(id);if(e)e.scrollIntoView({behavior:"smooth",block:"start"});}
window.addEventListener("scroll",function(){var n=document.getElementById("nav");var s=document.getElementById("sctBtn");if(n)n.classList.toggle("scrolled",window.scrollY>20);if(s)s.classList.toggle("visible",window.scrollY>400);});
var hbtn=document.getElementById("hbtn");var mmenu=document.getElementById("mmenu");
if(hbtn&&mmenu){hbtn.addEventListener("click",function(){hbtn.classList.toggle("active");mmenu.classList.toggle("open");document.body.style.overflow=mmenu.classList.contains("open")?"hidden":"";});}
function cM(){if(hbtn)hbtn.classList.remove("active");if(mmenu)mmenu.classList.remove("open");document.body.style.overflow="";}
function tL(card){var open=card.classList.contains("open");document.querySelectorAll(".lc").forEach(function(c){c.classList.remove("open");});if(!open)card.classList.add("open");}
var vc=document.getElementById("videoCard");if(vc){vc.addEventListener("click",function(){window.open("https://tinyurl.com/qualifyAI-video","_blank");});}
function selP(card,key){var r={blockchain:"blockchain.html",ethics:"ethics.html",genai:"genai.html",cyber:"cyber.html",healthcare:"healthcare.html",softeng:"softeng.html",codegenai:"codegenai.html"};if(r[key])window.location.href=r[key];}
var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target);}});},{threshold:0.1});
document.querySelectorAll(".fin").forEach(function(el){obs.observe(el);});
