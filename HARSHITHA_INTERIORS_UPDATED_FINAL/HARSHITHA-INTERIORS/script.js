
function toggleMenu(){const nav=document.querySelector("nav");if(nav)nav.classList.toggle("mobile")}
function chooseStyle(style){const r=document.getElementById("style-result");const d={Minimal:"You love calm, clean spaces with simple forms, soft colours and clutter-free living.",Modern:"You prefer contemporary spaces with elegant furniture, smart layouts and refined details.",Luxury:"You enjoy bold materials, statement lighting, rich textures and sophisticated interiors.",Earthy:"You feel at home around natural materials, warm tones, plants and organic textures."};if(r)r.innerHTML="<strong>Your style: "+style+"</strong><br>"+d[style]}
function calculateBudget(){const s=document.getElementById("homeSize"),f=document.getElementById("finish"),r=document.getElementById("budgetResult");if(!s||!f||!r)return;r.textContent="Estimated budget: ₹"+(Number(s.value)*Number(f.value)).toLocaleString("en-IN")}
function filterProjects(category,button){document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));button.classList.add("active");document.querySelectorAll(".project").forEach(p=>p.style.display=category==="all"||p.classList.contains(category)?"block":"none")}
function toggleFAQ(button){const item=button.parentElement;item.classList.toggle("open");button.querySelector("span").textContent=item.classList.contains("open")?"−":"+"}
function submitForm(e){e.preventDefault();const m=document.getElementById("formMessage");if(m){m.textContent="Thank you! Your enquiry has been received. We'll get back to you soon.";e.target.reset()}}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.15});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));
const counters=document.querySelectorAll(".counter");
const co=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting)return;const c=e.target,t=Number(c.dataset.target);let n=0;const u=()=>{n+=t/50;if(n<t){c.textContent=Math.ceil(n)+"+";requestAnimationFrame(u)}else c.textContent=t+"+"};u();co.unobserve(c)}),{threshold:.7});
counters.forEach(c=>co.observe(c));

// Unique navigation state
document.querySelectorAll('nav a').forEach(a=>{
  if(a.pathname.split('/').pop() === location.pathname.split('/').pop()){
    a.classList.add('active');
  }
});
// Close mobile menu after navigation
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{
  const nav=document.querySelector('nav'); if(nav) nav.classList.remove('mobile');
}));
