// ===== YOUR WORK =====
// Keep index.html in D:\Portfolio, with your photos and designs in the
// "Assests" folder next to it (same spelling as your folder).
// Edit this list so each src matches your real file name.
const works = [
  // Photography (meta shows camera and settings in the lightbox)
  { src: "Assests/dance-festival-1.jpg",  title: "Festival Dance: Reaching Up",  category: "Photography", meta: "@pautogenic" },
  { src: "Assests/dance-festival-2.jpg",  title: "Festival Dance: Portrait",     category: "Photography", meta: "@pautogenic" },
  { src: "Assests/live-performance.jpg",  title: "Live Performance",             category: "Photography", meta: "Sony A6400 · 1/320 · ISO 8000" },
  { src: "Assests/counter-culture.jpg",   title: "Counter Culture Shirt Shoot",  category: "Photography", meta: "iPhone 15 Pro · f/1.8 · 1/2000 · ISO 200" },
  { src: "Assests/student-leaders-congress.jpg", title: "7th Student Leaders' Congress", category: "Photography", meta: "Nikon D3100 · 1/160 · ISO 800" },
  { src: "Assests/football-opening.jpg",  title: "Football Cup Opening",         category: "Photography", meta: "@pautogenic" },
  { src: "Assests/football-opening 1.jpg",  title: "Football Cup Opening",         category: "Photography", meta: "@pautogenic" },
  { src: "Assests/football-opening 2.jpg",  title: "Football Cup Opening",         category: "Photography", meta: "@pautogenic" },
  { src: "Assests/football-opening 3.jpg",  title: "Football Cup Opening",         category: "Photography", meta: "@pautogenic" },
  { src: "Assests/football-opening 4.jpg",  title: "Football Cup Opening",         category: "Photography", meta: "@pautogenic" },
  { src: "Assests/football-opening 5.jpg",  title: "Football Cup Opening",         category: "Photography", meta: "@pautogenic" },
  { src: "Assests/Vball (1).jpg",  title: "Volley Ball",         category: "Photography", meta: "@pautogenic" },
  { src: "Assests/Vball (2).jpg",  title: "Volley Ball",         category: "Photography", meta: "@pautogenic" },
  { src: "Assests/Vball (3).jpg",  title: "Volley Ball",         category: "Photography", meta: "@pautogenic" },
  { src: "Assests/Vball (4).jpg",  title: "Volley Ball",         category: "Photography", meta: "@pautogenic" },
  { src: "Assests/Vball (5).jpg",  title: "Volley Ball",         category: "Photography", meta: "@pautogenic" },
  { src: "Assests/Vball (6).jpg",  title: "Volley Ball",         category: "Photography", meta: "@pautogenic" },
  { src: "Assests/Vball (7).jpg",  title: "Volley Ball",         category: "Photography", meta: "@pautogenic" },
  { src: "Assests/Vball (8).jpg",  title: "Volley Ball",         category: "Photography", meta: "@pautogenic" },
  { src: "Assests/Vball (9).jpg",  title: "Volley Ball",         category: "Photography", meta: "@pautogenic" },

  // Social media / announcements
  { src: "Assests/logo-showcase.jpg",         title: "Organization Logo Showcase", category: "Social Media" },
  { src: "Assests/happy-birthday.jpg",        title: "Birthday Greeting",        category: "Social Media" },
  { src: "Assests/congrats-class-2026.jpg",   title: "Graduates Congratulations", category: "Social Media" },
  { src: "Assests/officer-feature.jpg",       title: "Officer Feature (Graduation)", category: "Social Media" },
  { src: "Assests/join-us.jpg",               title: "Officer Call: Join Us",     category: "Social Media" },
  { src: "Assests/cast-your-votes.jpg",       title: "Election: Cast Your Votes", category: "Social Media" }, 
  { src: "Assests/womens-month-poster.jpg",   title: "Women's Month Poster",      category: "Social Media" },
  { src: "Assests/womens-month-photo.jpg",    title: "Women's Month Photo Post",  category: "Social Media" },
  { src: "Assests/faculty-congrats.jpg",      title: "Faculty Congratulations",      category: "Social Media" },  
  { src: "Assests/All-Saints-Day.jpg",    title: "All Saints Day Post",  category: "Social Media" },
  { src: "Assests/All-Souls-Day.jpg",    title: "All Souls Day Post",  category: "Social Media" },

  // Photo features
  //{ src: "Null",      title: "Null",      category: "Photo Feature" },

  // Branding & merch
  { src: "Assests/render-and-wear-shirt.jpg", title: "Render and Wear: Shirt Winner",   category: "Branding & Merch" },
  { src: "Assests/render-and-wear-lanyard.jpg", title: "Render and Wear: Lanyard Winner", category: "Branding & Merch" },
  { src: "Assests/faculty-jersey.jpg",        title: "Faculty Jersey Mockup",     category: "Branding & Merch" },
  { src: "Assests/member-jersey.jpg",         title: "Member Jersey Mockup",      category: "Branding & Merch" }
];

// ===== GALLERY =====
const gallery = document.getElementById("gallery");
const filtersEl = document.getElementById("filters");
let visible = works.slice();
let current = 0;

function buildFilters() {
  const cats = ["All", ...new Set(works.map(w => w.category))];
  filtersEl.innerHTML = "";
  cats.forEach((c, i) => {
    const b = document.createElement("button");
    b.className = "filter-btn" + (i === 0 ? " active" : "");
    b.textContent = c;
    b.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      visible = c === "All" ? works.slice() : works.filter(w => w.category === c);
      renderGallery();
    });
    filtersEl.appendChild(b);
  });
}

function renderGallery() {
  gallery.innerHTML = "";
  visible.forEach((w, i) => {
    const item = document.createElement("div");
    item.className = "item";
    item.tabIndex = 0;
    item.style.animationDelay = i * 40 + "ms";

    const img = new Image();
    img.src = w.src;
    img.alt = w.title;
    img.loading = "lazy";
    img.onerror = () => {
      img.remove();
      item.classList.add("noimg");
      item.insertAdjacentText("afterbegin", "Add " + w.src);
    };

    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.innerHTML = `<h4>${w.title}</h4><span>${w.category}</span>`;

    item.append(img, overlay);
    item.addEventListener("click", () => openLightbox(i));
    item.addEventListener("keydown", e => { if (e.key === "Enter") openLightbox(i); });
    gallery.appendChild(item);
  });
}

// ===== LIGHTBOX =====
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCap = document.getElementById("lbCap");

function showLightbox() {
  const w = visible[current];
  lbImg.src = w.src;
  lbImg.alt = w.title;
  lbCap.textContent = w.title + " · " + w.category + (w.meta ? " · " + w.meta : "");
}
function openLightbox(i) {
  current = i;
  showLightbox();
  lb.classList.add("open");
  lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  lb.classList.remove("open");
  lb.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
function step(d) {
  current = (current + d + visible.length) % visible.length;
  showLightbox();
}
document.getElementById("lbClose").onclick = closeLightbox;
document.getElementById("lbPrev").onclick = () => step(-1);
document.getElementById("lbNext").onclick = () => step(1);
lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });
document.addEventListener("keydown", e => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

// ===== NAV =====
const nav = document.getElementById("nav");
const navLinks = document.getElementById("navLinks");
window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 40));
document.getElementById("menuBtn").onclick = () => navLinks.classList.toggle("open");
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

// ===== SCROLL REVEAL + COUNTERS + SKILL BARS =====
function animateCount(el) {
  const target = +el.dataset.count;
  let n = 0;
  const t = setInterval(() => {
    n++;
    el.textContent = n;
    if (n >= target) clearInterval(t);
  }, Math.max(30, 900 / target));
}

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("visible");
    e.target.querySelectorAll("[data-count]").forEach(animateCount);
    e.target.querySelectorAll("i[data-level]").forEach(b => (b.style.width = b.dataset.level + "%"));
    io.unobserve(e.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// ===== INIT =====
document.getElementById("year").textContent = new Date().getFullYear();
buildFilters();
renderGallery();
