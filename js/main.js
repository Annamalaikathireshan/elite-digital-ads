/**
 * Elite Digital & Ads - Core Application Logic
 * Full-Service Advertising Agency Architecture
 * Multi-Theme Engine & Adinn-Inspired Full-Screen Aperture Zoom (Desktop + Mobile)
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeEngine();
  initStickyHeader();
  initMobileMenu();
  initAgencyHeroPinAnimation();
  initBillboardShowcase();
  initClients();
  initPortfolioRender();
  initInstagramFeed();
  initLightbox();
  initScrollAnimations();
  initBackToTop();
  initGsapPageAnimations();
});

/* ==========================================================================
   1. MULTI-THEME ENGINE (6 CURATED AGENCY AESTHETICS)
   ========================================================================== */
const THEMES = [
  { id: "obsidian", name: "Obsidian Noir", color: "#ffffff" },
  { id: "light", name: "Modern Light", color: "#f1f2f6" },
  { id: "crimson", name: "Electric Crimson", color: "#ff2a4b" },
  { id: "emerald", name: "Royal Emerald", color: "#10b981" },
  { id: "cobalt", name: "Midnight Cobalt", color: "#38bdf8" },
  { id: "amber", name: "Solar Amber", color: "#f59e0b" }
];

function initThemeEngine() {
  const triggerBtn = document.getElementById("themePickerBtn");
  const popover = document.getElementById("themePopover");
  const currentSwatch = document.getElementById("themeCurrentSwatch");
  const pickerLabel = document.getElementById("themePickerText");
  const themeBtns = document.querySelectorAll(".theme-item-btn");
  const mobileDots = document.querySelectorAll(".m-theme-dot");

  let savedTheme = localStorage.getItem("elite_theme") || "obsidian";
  if (!THEMES.some(t => t.id === savedTheme)) {
    savedTheme = "obsidian";
  }

  function applyTheme(themeId) {
    document.documentElement.setAttribute("data-theme", themeId);
    localStorage.setItem("elite_theme", themeId);

    const themeObj = THEMES.find(t => t.id === themeId) || THEMES[0];
    if (currentSwatch) {
      currentSwatch.style.background = themeObj.color;
    }
    if (pickerLabel) {
      pickerLabel.textContent = themeObj.name;
    }

    themeBtns.forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-theme-val") === themeId);
    });

    mobileDots.forEach(dot => {
      dot.classList.toggle("active", dot.getAttribute("data-theme-val") === themeId);
    });
  }

  // Initial apply
  applyTheme(savedTheme);

  // Toggle popover
  if (triggerBtn && popover) {
    triggerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = popover.classList.toggle("is-open");
      triggerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!popover.contains(e.target) && !triggerBtn.contains(e.target)) {
        popover.classList.remove("is-open");
        triggerBtn.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        popover.classList.remove("is-open");
        triggerBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Popover buttons
  themeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const themeVal = btn.getAttribute("data-theme-val");
      if (themeVal) {
        applyTheme(themeVal);
        if (popover && triggerBtn) {
          popover.classList.remove("is-open");
          triggerBtn.setAttribute("aria-expanded", "false");
        }
      }
    });
  });

  // Mobile drawer theme dots
  mobileDots.forEach(dot => {
    dot.addEventListener("click", () => {
      const themeVal = dot.getAttribute("data-theme-val");
      if (themeVal) {
        applyTheme(themeVal);
      }
    });
  });
}

/* ==========================================================================
   2. STICKY HEADER
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 25) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });
}

/* ==========================================================================
   3. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.querySelector(".mobile-toggle");
  const menu = document.querySelector(".nav-menu");
  if (!toggle || !menu) return;

  function closeMenu() {
    toggle.classList.remove("active");
    menu.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isActive = toggle.classList.toggle("active");
    menu.classList.toggle("active");
    toggle.setAttribute("aria-expanded", isActive ? "true" : "false");
    document.body.classList.toggle("menu-open", isActive);
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => closeMenu());
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });
}

/* ==========================================================================
   4. ADINN-STYLE FULL-SCREEN APERTURE ZOOM (DESKTOP + TABLET + MOBILE)
   ========================================================================== */
function initAgencyHeroPinAnimation() {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  const heroSection = document.querySelector(".agency-hero-pin");
  const aperturePortal = document.getElementById("heroAperturePortal");
  const showcaseFrame = document.getElementById("heroShowcaseFrame");

  if (!heroSection || !aperturePortal || !showcaseFrame) return;

  // Set initial 3D transforms
  gsap.set(showcaseFrame, {
    scale: 0.88,
    opacity: 0.18,
    y: 35,
    transformPerspective: 1000
  });

  gsap.set(aperturePortal, {
    scale: 1,
    opacity: 1
  });

  // Calculate dynamic scale needed to punch cleanly out of viewport
  const isMobile = window.innerWidth < 768;
  const zoomScale = isMobile ? 32 : 26;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heroSection,
      start: "top top",
      end: "+=220%",
      scrub: 0.75,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true
    }
  });

  tl.to(aperturePortal, {
    scale: zoomScale,
    opacity: 0,
    duration: 1.4,
    ease: "power2.inOut"
  }, 0)
  .to(showcaseFrame, {
    scale: 1,
    opacity: 1,
    y: 0,
    duration: 1.4,
    ease: "power2.out"
  }, 0.12);

  // Smooth scroll trigger recalculation on orientation / resize
  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  }, { passive: true });
}

/* ==========================================================================
   5. 3D BILLBOARD SHOWCASE (ROTATING CAMPAIGN SLIDES + LIGHTBOX + SWIPE)
   ========================================================================== */
let currentBillboardIndex = 0;
let billboardAutoTimer = null;

function initBillboardShowcase() {
  const slides = document.querySelectorAll(".billboard-slide");
  const dots = document.querySelectorAll(".b-page-dot");
  const prevBtn = document.getElementById("bSlidePrev");
  const nextBtn = document.getElementById("bSlideNext");
  const screen = document.getElementById("billboardScreen");

  if (!slides.length) return;

  function showSlide(index) {
    currentBillboardIndex = (index + slides.length) % slides.length;
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === currentBillboardIndex);
    });
    dots.forEach((d, i) => {
      d.classList.toggle("active", i === currentBillboardIndex);
    });
  }

  function startAutoCycle() {
    stopAutoCycle();
    billboardAutoTimer = setInterval(() => {
      showSlide(currentBillboardIndex + 1);
    }, 4500);
  }

  function stopAutoCycle() {
    if (billboardAutoTimer) clearInterval(billboardAutoTimer);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      stopAutoCycle();
      showSlide(currentBillboardIndex - 1);
      startAutoCycle();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      stopAutoCycle();
      showSlide(currentBillboardIndex + 1);
      startAutoCycle();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const target = parseInt(dot.getAttribute("data-slide-target"), 10);
      if (!isNaN(target)) {
        stopAutoCycle();
        showSlide(target);
        startAutoCycle();
      }
    });
  });

  if (screen) {
    screen.addEventListener("mouseenter", stopAutoCycle);
    screen.addEventListener("mouseleave", startAutoCycle);

    // Lightbox on slide click
    slides.forEach(slide => {
      slide.addEventListener("click", () => {
        const img = slide.querySelector("img");
        const title = slide.querySelector(".slide-heading");
        const sub = slide.querySelector(".slide-sub");
        if (img) {
          const cap = (title ? title.textContent : "") + (sub ? " • " + sub.textContent : "");
          const waUrl = buildWhatsAppQuoteUrl(title ? title.textContent : "Advertising Campaign");
          openLightbox(img.src, cap, waUrl);
        }
      });
    });

    // Touch swipe on mobile
    let touchStartX = 0;
    screen.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoCycle();
    }, { passive: true });

    screen.addEventListener("touchend", (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 40) {
        showSlide(currentBillboardIndex + 1);
      } else if (touchEndX > touchStartX + 40) {
        showSlide(currentBillboardIndex - 1);
      }
      startAutoCycle();
    }, { passive: true });
  }

  showSlide(0);
  startAutoCycle();
}

/* ==========================================================================
   5. CLIENTS SECTION: MOBILE-FIRST EDITORIAL ACCORDION
   ========================================================================== */
async function initClients() {
  const accordion = document.getElementById("clientsAccordion");
  if (!accordion) return;

  let clients = ELITE_DATA.fallbackClients;

  // Attempt fetch from data/clients.json
  try {
    const res = await fetch(`data/clients.json?t=${Date.now()}`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        clients = data;
      }
    }
  } catch (err) {
    console.info("Using embedded client fallback data:", err.message);
  }

  // Helper for monogram initials
  const getInitials = (name) => {
    if (!name) return "ED";
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  // Render Mobile-First Minimalist Accordion Items
  accordion.innerHTML = clients.map((c, index) => {
    const num = String(index + 1).padStart(2, "0");
    const initials = getInitials(c.name);
    const isOpen = index === 0; // First item open initially for immediate interaction affordance
    const whatsappMsg = `Hi Elite Digital, I am interested in outdoor advertising solutions similar to your work for ${c.name}. Please share details and pricing.`;
    const whatsappUrl = buildWhatsAppQuoteUrl(whatsappMsg);

    return `
      <div class="client-acc-item ${isOpen ? "is-open" : ""}" data-client-id="${c.id || "c" + (index + 1)}">
        <button class="client-acc-header" type="button" aria-expanded="${isOpen ? "true" : "false"}" aria-controls="client-drawer-${index}">
          <div class="client-acc-left">
            <span class="client-acc-index">${num}</span>
            <div class="client-acc-avatar">${initials}</div>
            <span class="client-acc-title">${c.name}</span>
          </div>
          <div class="client-acc-toggle" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
        <div class="client-acc-body" id="client-drawer-${index}">
          <div class="client-acc-inner">
            <div class="client-acc-drawer">
              <p class="client-acc-highlight">
                Partnering with <strong>${c.name}</strong> for premier outdoor branding, high-visibility hoardings, and wide-format installations.
              </p>
              <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="client-acc-cta-btn" aria-label="Inquire similar work for ${c.name} on WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.37C16.31 14.25 15.09 13.65 14.86 13.57C14.64 13.49 14.47 13.45 14.31 13.7C14.14 13.95 13.66 14.51 13.51 14.68C13.37 14.85 13.22 14.87 12.97 14.75C12.72 14.62 11.92 14.36 10.97 13.52C10.23 12.86 9.73 12.04 9.59 11.79C9.44 11.54 9.57 11.41 9.7 11.28C9.81 11.17 9.94 11 10.07 10.85C10.19 10.7 10.24 10.59 10.32 10.42C10.4 10.26 10.36 10.11 10.3 9.99C10.24 9.87 9.75 8.66 9.54 8.16C9.34 7.67 9.14 7.74 8.99 7.73C8.84 7.72 8.68 7.72 8.51 7.72C8.35 7.72 8.08 7.78 7.85 8.03C7.63 8.28 7 8.87 7 10.07C7 11.27 7.87 12.43 8 12.6C8.12 12.77 9.73 15.25 12.19 16.31C12.78 16.56 13.23 16.71 13.59 16.82C14.18 17.01 14.72 16.98 15.15 16.92C15.63 16.85 16.62 16.32 16.83 15.74C17.03 15.16 17.03 14.66 16.97 14.56C16.91 14.45 16.81 14.41 16.56 14.37Z"/>
                </svg>
                <span>Request Similar Work</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Attach mobile-first single-open accordion toggle listeners
  const items = accordion.querySelectorAll(".client-acc-item");
  items.forEach((item) => {
    const header = item.querySelector(".client-acc-header");
    if (!header) return;

    header.addEventListener("click", () => {
      const isCurrentlyOpen = item.classList.contains("is-open");

      // Close other items (smart single-open on mobile to avoid endless scroll)
      items.forEach((other) => {
        if (other !== item && other.classList.contains("is-open")) {
          other.classList.remove("is-open");
          const otherHeader = other.querySelector(".client-acc-header");
          if (otherHeader) otherHeader.setAttribute("aria-expanded", "false");
        }
      });

      // Toggle current item
      if (isCurrentlyOpen) {
        item.classList.remove("is-open");
        header.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("is-open");
        header.setAttribute("aria-expanded", "true");
      }
    });
  });

  observeReveals();
}

/* ==========================================================================
   6. OUR WORK & ADVERTISING SOLUTIONS (CATEGORY FILTERS & VISUAL CARDS)
   ========================================================================== */
function initPortfolioRender() {
  const grid = document.getElementById("projectsGrid");
  const filterBtns = document.querySelectorAll(".work-filter-btn");
  if (!grid || !ELITE_DATA.projects) return;

  function renderCards(filterCategory = "all") {
    const filteredProjects = filterCategory === "all"
      ? ELITE_DATA.projects
      : ELITE_DATA.projects.filter(p => {
          if (filterCategory === "hoardings") return p.category === "hoardings";
          if (filterCategory === "roadshow") return p.category === "roadshow";
          if (filterCategory === "printing") return p.category === "printing";
          if (filterCategory === "transit") return p.category === "transit" || p.category === "vehicle";
          return true;
        });

    grid.innerHTML = filteredProjects.map(p => {
      const whatsappUrl = buildWhatsAppQuoteUrl(p.quoteSubject);

      return `
        <article class="project-card reveal-up in-view" data-id="${p.id}" data-category="${p.category}">
          <div class="project-media" onclick="openLightbox('${p.image}', '${escapeHtml(p.title)} • ${escapeHtml(p.client)}', '${whatsappUrl}')">
            <img src="${p.image}" alt="${p.title}" loading="lazy" width="600" height="400">
            <div class="project-media-overlay">
              <span class="project-zoom-btn" title="View Full Photo">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              </span>
            </div>
            <span class="project-category-tag">${p.categoryLabel}</span>
          </div>
          <div class="project-info">
            <div class="project-client-row">
              <span class="project-client">${p.client}</span>
              <span class="project-loc">${p.location}</span>
            </div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-highlight">${p.highlight}</p>
            <div class="project-footer">
              <a href="${whatsappUrl}" target="_blank" rel="noopener" class="project-inquire-link" aria-label="Inquire about ${p.title} on WhatsApp">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
                <span>WhatsApp Rates</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join("");

    if (window.gsap) {
      gsap.fromTo(grid.querySelectorAll(".project-card"),
        { opacity: 0, y: 25, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.05, ease: "power2.out" }
      );
    }
  }

  // Filter button click listeners
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter") || "all";
      filterBtns.forEach(b => {
        b.classList.toggle("active", b === btn);
        b.setAttribute("aria-selected", b === btn ? "true" : "false");
      });
      renderCards(filter);
    });
  });

  renderCards("all");
}

/* ==========================================================================
   7. LIVE INSTAGRAM FEED (@elitedigitalvdm)
   ========================================================================== */
async function initInstagramFeed() {
  const grid = document.getElementById("instagramGrid");
  if (!grid) return;

  let feed = ELITE_DATA.fallbackInstagram;

  try {
    const res = await fetch(`data/instagram.json?t=${Date.now()}`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        feed = data;
      }
    }
  } catch (err) {
    console.info("Using embedded instagram fallback feed:", err.message);
  }

  grid.innerHTML = feed.map(item => `
    <a href="${item.postUrl}" target="_blank" rel="noopener" class="instagram-card reveal-up" aria-label="View Instagram post by @elitedigitalvdm">
      <img src="${item.image}" alt="Elite Digital and Ads Instagram Post" loading="lazy" width="400" height="400">
      <div class="instagram-overlay">
        <span class="insta-badge">
          ${item.type === "reel" ? "▶ Reel" : "📷 Post"}
        </span>
        <div class="insta-caption">${escapeHtml(item.caption)}</div>
      </div>
    </a>
  `).join("");

  observeReveals();
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/'/g, "&#39;").replace(/"/g, "&quot;");
}

/* ==========================================================================
   8. LIGHTBOX MODAL
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById("lightboxModal");
  const closeBtn = document.getElementById("lightboxClose");
  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}

function openLightbox(imgSrc, captionText, quoteUrl) {
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("lightboxImg");
  const modalCaption = document.getElementById("lightboxCaption");
  const modalQuoteBtn = document.getElementById("lightboxQuoteBtn");
  const modalContent = document.querySelector(".lightbox-content");
  if (!modal || !modalImg) return;

  modalImg.src = imgSrc;
  if (modalCaption) modalCaption.textContent = captionText || "";
  if (modalQuoteBtn && quoteUrl) modalQuoteBtn.href = quoteUrl;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  if (window.gsap && modalContent) {
    gsap.fromTo(modalContent, 
      { scale: 0.88, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(1.6)" }
    );
  }
}

/* ==========================================================================
   9. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
let revealObserver = null;

function initScrollAnimations() {
  if ("IntersectionObserver" in window) {
    document.documentElement.classList.add("js-animated");
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.01,
      rootMargin: "0px 0px 80px 0px"
    });
  }
  observeReveals();
}

function observeReveals() {
  const reveals = document.querySelectorAll(".reveal-up:not(.in-view), .reveal-fade:not(.in-view)");
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight + 80 && rect.bottom >= -80) {
      el.classList.add("in-view");
    } else if (revealObserver) {
      revealObserver.observe(el);
    } else {
      el.classList.add("in-view");
    }
  });
}

/* ==========================================================================
   10. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ==========================================================================
   11. GSAP FLUID ENTRANCE ANIMATIONS (MOBILE & DESKTOP)
   ========================================================================== */
function initGsapPageAnimations() {
  if (!window.gsap) return;

  // Header entrance
  gsap.from(".site-header", { 
    y: -30, 
    opacity: 0, 
    duration: 0.7, 
    ease: "power3.out" 
  });

  // Aperture Hero Entrance Stagger
  gsap.from(".aperture-agency-tag", { 
    y: 18, 
    opacity: 0, 
    duration: 0.6, 
    delay: 0.15, 
    ease: "power3.out" 
  });

  gsap.from(".aperture-hero-title", { 
    scale: 0.9, 
    opacity: 0, 
    duration: 0.85, 
    delay: 0.25, 
    ease: "back.out(1.4)" 
  });

  gsap.from(".aperture-hero-desc", { 
    y: 20, 
    opacity: 0, 
    duration: 0.6, 
    delay: 0.4, 
    ease: "power3.out" 
  });

  gsap.from(".aperture-scroll-action", { 
    opacity: 0, 
    duration: 0.6, 
    delay: 0.55, 
    ease: "power2.out" 
  });
}
