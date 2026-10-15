/**
 * Elite Digital - Core Application Logic
 * Mobile-First, Minimalist Architecture with Touch Interactions & Story Progress
 * Zero Price Calculations. Direct Contextual WhatsApp Quote Actions.
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initStickyHeader();
  initMobileMenu();
  initOohBoardSwitcher();
  initClients();
  initPortfolioRender();
  initInstagramFeed();
  initLightbox();
  initScrollAnimations();
  initBackToTop();
});

/* ==========================================================================
   1. THEME TOGGLE (DARK MODE / LIGHT MODE)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem("elite_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("elite_theme", nextTheme);
    updateThemeIcon(nextTheme);
  });
}

function updateThemeIcon(theme) {
  const iconSun = document.getElementById("iconSun");
  const iconMoon = document.getElementById("iconMoon");
  if (!iconSun || !iconMoon) return;

  if (theme === "light") {
    iconSun.style.display = "none";
    iconMoon.style.display = "block";
  } else {
    iconSun.style.display = "block";
    iconMoon.style.display = "none";
  }
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
   4. OOH BOARD HERO SHOWCASE (WITH STORY PROGRESS BARS & MOBILE SWIPE)
   ========================================================================== */
let currentOohIndex = 0;
let progressStartTime = 0;
let progressAnimFrame = null;
const SLIDE_DURATION = 6000; // 6 seconds per slide

function initOohBoardSwitcher() {
  const tabs = document.querySelectorAll(".ooh-switcher-tab");
  const boardImg = document.getElementById("oohBoardImg");
  const boardTag = document.getElementById("oohBoardTag");
  const boardTitle = document.getElementById("oohBoardTitle");
  const boardDesc = document.getElementById("oohBoardDesc");
  const boardMetrics = document.getElementById("oohBoardMetrics");
  const boardCta = document.getElementById("oohBoardCta");
  const visualWrapper = document.querySelector(".ooh-visual-frame");
  const progressFills = document.querySelectorAll(".story-segment .story-fill");

  if (!tabs.length || !boardImg || !ELITE_DATA.oohBoards) return;

  function setBoard(index) {
    currentOohIndex = index;
    const board = ELITE_DATA.oohBoards[index];
    if (!board) return;

    // Update active tab styling
    tabs.forEach((tab, i) => {
      tab.classList.toggle("active", i === index);
      tab.setAttribute("aria-selected", i === index ? "true" : "false");
    });

    // Animate visual frame with subtle transition
    if (visualWrapper) {
      visualWrapper.classList.add("changing");
      setTimeout(() => {
        boardImg.src = board.image;
        boardImg.alt = board.title;
        if (boardTag) boardTag.textContent = board.tag;
        if (boardTitle) boardTitle.textContent = board.title;
        if (boardDesc) boardDesc.textContent = board.subtitle;

        // Render metrics pills
        if (boardMetrics && board.metrics) {
          boardMetrics.innerHTML = board.metrics.map(m => `
            <div class="ooh-metric-pill">
              <span class="metric-val">${m.val}</span>
              <span class="metric-lbl">${m.label}</span>
            </div>
          `).join("");
        }

        // Update WhatsApp Quote action
        if (boardCta) {
          boardCta.href = buildWhatsAppQuoteUrl(board.quoteTopic);
        }

        visualWrapper.classList.remove("changing");
      }, 180);
    }

    startStoryProgress();
  }

  function startStoryProgress() {
    if (progressAnimFrame) cancelAnimationFrame(progressAnimFrame);
    progressStartTime = performance.now();

    function step(now) {
      const elapsed = now - progressStartTime;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);

      progressFills.forEach((fill, i) => {
        if (i < currentOohIndex) {
          fill.style.width = "100%";
        } else if (i === currentOohIndex) {
          fill.style.width = `${pct}%`;
        } else {
          fill.style.width = "0%";
        }
      });

      if (elapsed < SLIDE_DURATION) {
        progressAnimFrame = requestAnimationFrame(step);
      } else {
        const nextIndex = (currentOohIndex + 1) % ELITE_DATA.oohBoards.length;
        setBoard(nextIndex);
      }
    }

    progressAnimFrame = requestAnimationFrame(step);
  }

  // Click handler for tabs
  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
      setBoard(i);
    });
  });

  // Touch Swipe support for mobile screens
  const touchFrame = document.getElementById("oohTouchFrame");
  if (touchFrame) {
    let startX = 0;
    let endX = 0;

    touchFrame.addEventListener("touchstart", (e) => {
      startX = e.changedTouches[0].screenX;
      if (progressAnimFrame) cancelAnimationFrame(progressAnimFrame);
    }, { passive: true });

    touchFrame.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const threshold = 40;
      if (endX < startX - threshold) {
        // Swiped Left -> Next
        const nextIndex = (currentOohIndex + 1) % ELITE_DATA.oohBoards.length;
        setBoard(nextIndex);
      } else if (endX > startX + threshold) {
        // Swiped Right -> Previous
        const prevIndex = (currentOohIndex - 1 + ELITE_DATA.oohBoards.length) % ELITE_DATA.oohBoards.length;
        setBoard(prevIndex);
      } else {
        startStoryProgress();
      }
    }
  }

  // Pause on desktop hover
  const heroCard = document.querySelector(".hero-ooh-card");
  if (heroCard) {
    heroCard.addEventListener("mouseenter", () => {
      if (progressAnimFrame) cancelAnimationFrame(progressAnimFrame);
    });
    heroCard.addEventListener("mouseleave", () => {
      startStoryProgress();
    });
  }

  // Initialize first board
  setBoard(0);
}

/* ==========================================================================
   5. CLIENTS SECTION (STAGE 2: JSON-DRIVEN)
   ========================================================================== */
async function initClients() {
  const tickerTrack = document.getElementById("clientTickerTrack");
  const clientGrid = document.getElementById("clientGrid");
  if (!tickerTrack && !clientGrid) return;

  let clients = ELITE_DATA.fallbackClients;

  // Attempt fetch from data/clients.json
  try {
    const res = await fetch("data/clients.json");
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        clients = data;
      }
    }
  } catch (err) {
    console.info("Using embedded client fallback data:", err.message);
  }

  // Render Infinite Marquee Ticker
  if (tickerTrack) {
    const tickerItems = [...clients, ...clients].map(c => `
      <div class="client-ticker-card">
        <div class="client-monogram">${c.name.substring(0, 2).toUpperCase()}</div>
        <div class="client-info">
          <strong class="client-name">${c.name}</strong>
          <span class="client-tag">${c.tag || c.category}</span>
        </div>
      </div>
    `).join("");
    tickerTrack.innerHTML = tickerItems;
  }

  // Render Minimalist Client Cards Grid
  if (clientGrid) {
    clientGrid.innerHTML = clients.map(c => `
      <div class="client-card reveal-up">
        <div class="client-card-header">
          <div class="client-badge-icon">${c.name.substring(0, 2).toUpperCase()}</div>
          <span class="client-loc">${c.location || "Tamil Nadu"}</span>
        </div>
        <div class="client-card-body">
          <h4 class="client-title">${c.name}</h4>
          <span class="client-category">${c.category}</span>
        </div>
        <div class="client-card-footer">
          <span class="client-tag-pill">${c.tag}</span>
        </div>
      </div>
    `).join("");
  }
  observeReveals();
}

/* ==========================================================================
   6. FEATURED WORKS & PRODUCTION (STAGE 3: ZERO REPETITION)
   ========================================================================== */
function initPortfolioRender() {
  const grid = document.getElementById("projectsGrid");
  const filterBtns = document.querySelectorAll(".project-filter-btn");
  if (!grid || !ELITE_DATA.projects) return;

  function render(filter) {
    const list = filter === "all" 
      ? ELITE_DATA.projects 
      : ELITE_DATA.projects.filter(p => p.category === filter);

    grid.innerHTML = list.map(p => {
      const whatsappUrl = buildWhatsAppQuoteUrl(p.quoteSubject);

      return `
        <article class="project-card reveal-up" data-category="${p.category}">
          <div class="project-media" onclick="openLightbox('${p.image}', '${escapeHtml(p.title)} • ${escapeHtml(p.client)}', '${whatsappUrl}')">
            <img src="${p.image}" alt="${p.title}" loading="lazy" width="600" height="400">
            <div class="project-media-overlay">
              <span class="project-zoom-btn" title="View Fullscreen">
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
                <span>Inquire</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join("");
    observeReveals();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      render(btn.dataset.filter);
    });
  });

  render("all");
}

/* ==========================================================================
   7. LIVE INSTAGRAM FEED (@elitedigitalvdm)
   ========================================================================== */
async function initInstagramFeed() {
  const grid = document.getElementById("instagramGrid");
  if (!grid) return;

  let feed = ELITE_DATA.fallbackInstagram;

  try {
    const res = await fetch("data/instagram.json");
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
      <img src="${item.image}" alt="Elite Digital Instagram Post" loading="lazy" width="400" height="400">
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
  if (!modal || !modalImg) return;

  modalImg.src = imgSrc;
  if (modalCaption) modalCaption.textContent = captionText || "";
  if (modalQuoteBtn && quoteUrl) modalQuoteBtn.href = quoteUrl;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
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
