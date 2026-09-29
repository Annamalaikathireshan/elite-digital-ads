/**
 * Elite Digital - Core Application Logic & Interactions
 * Rhino Creative Agency styled dynamic behavior with White & Black luxury aesthetic
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initStickyHeader();
  initMobileMenu();
  initTypingEffect();
  initServicesRender();
  initPortfolioRender();
  initEstimator();
  initMetricsCounter();
  initTestimonialsSlider();
  initContactForm();
  initBackToTop();
});

/* ==========================================================================
   1. THEME TOGGLE (DARK MODE / LIGHT MODE)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem("welcome_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("welcome_theme", nextTheme);
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
   2. STICKY HEADER & ACTIVE NAV
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/* ==========================================================================
   3. MOBILE MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.querySelector(".mobile-toggle");
  const menu = document.querySelector(".nav-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    menu.classList.toggle("active");
  });

  // Close menu on nav link click
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      menu.classList.remove("active");
    });
  });
}

/* ==========================================================================
   4. DYNAMIC TYPING EFFECT (RHINO STYLE HERO)
   ========================================================================== */
function initTypingEffect() {
  const typingEl = document.getElementById("typingTarget");
  if (!typingEl) return;

  const words = [
    "Outdoor Hoardings",
    "Mobile Road Shows",
    "Mega Flex Banners",
    "Vehicle Fleet Wraps",
    "Sunpack Pole Kiosks",
    "Rental Entrance Arches",
    "Custom Mementos"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typingEl.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typingEl.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 95;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at complete word
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 350;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   5. SERVICES & PRODUCTS RENDERING
   ========================================================================== */
function initServicesRender() {
  const container = document.getElementById("servicesGrid");
  if (!container || !WELCOME_DATA.services) return;

  container.innerHTML = WELCOME_DATA.services.map(svc => `
    <div class="service-card" data-service-id="${svc.id}">
      <div class="service-media">
        <span class="service-badge">${svc.badge}</span>
        <img src="${svc.image}" alt="${svc.title}" loading="lazy">
      </div>
      <div class="service-body">
        <span class="service-category">${svc.category}</span>
        <h3 class="service-title">${svc.title}</h3>
        <p class="service-desc">${svc.description}</p>
        <ul class="service-features">
          ${svc.features.map(f => `<li class="service-feature-item">${f}</li>`).join("")}
        </ul>
        <div class="service-footer">
          <span class="service-price">${svc.priceGuide}</span>
          <button class="btn btn-outline select-service-btn" data-target="${svc.id}">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  `).join("");

  // Connect "Get Quote" buttons directly to the estimator or form
  document.querySelectorAll(".select-service-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute("data-target");
      const estimatorSelect = document.getElementById("estSignType");
      if (estimatorSelect) {
        if (targetId === "outdoor-hoardings") estimatorSelect.value = "hoarding-display";
        else if (targetId === "mobile-roadshow") estimatorSelect.value = "vehicle-wrap";
        else if (targetId === "flex-vinyl-printing") estimatorSelect.value = "flex-banner";
        else if (targetId === "vehicle-wrapping") estimatorSelect.value = "vehicle-wrap";
        else if (targetId === "sunpack-advertising") estimatorSelect.value = "sunpack-bulk";
        else if (targetId === "rental-entrance-arch") estimatorSelect.value = "rental-arch";
        else estimatorSelect.value = "flex-banner";
        
        // Trigger calculation
        estimatorSelect.dispatchEvent(new Event("change"));
        const estimatorSection = document.getElementById("estimator");
        if (estimatorSection) {
          estimatorSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
}

/* ==========================================================================
   6. PORTFOLIO SHOWCASE & LIGHTBOX
   ========================================================================== */
function initPortfolioRender() {
  const container = document.getElementById("portfolioGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (!container || !WELCOME_DATA.portfolio) return;

  function render(items) {
    container.innerHTML = items.map(p => `
      <div class="portfolio-card" data-category="${p.category}" data-img="${p.image}" data-title="${p.title}" data-specs="${p.specs}">
        <div class="portfolio-img-wrapper">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
        </div>
        <div class="portfolio-info">
          <span class="portfolio-category-tag">${p.categoryName}</span>
          <h4 class="portfolio-card-title">${p.title}</h4>
          <p class="portfolio-meta">${p.location} • ${p.client}</p>
        </div>
      </div>
    `).join("");

    attachLightboxEvents();
  }

  // Initial render with all items
  render(WELCOME_DATA.portfolio);

  // Filter tab events
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");

      if (filter === "all") {
        render(WELCOME_DATA.portfolio);
      } else {
        const filtered = WELCOME_DATA.portfolio.filter(item => item.category === filter);
        render(filtered);
      }
    });
  });
}

function attachLightboxEvents() {
  const cards = document.querySelectorAll(".portfolio-card");
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("lightboxImg");
  const modalCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");

  if (!modal || !modalImg || !modalCaption) return;

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const src = card.getAttribute("data-img");
      const title = card.getAttribute("data-title");
      const specs = card.getAttribute("data-specs");

      modalImg.src = src;
      modalCaption.innerHTML = `<strong>${title}</strong><br><span style="font-size:0.85em;color:#999">${specs}</span>`;
      modal.classList.add("active");
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
}

/* ==========================================================================
   7. INTERACTIVE ADVERTISING & PRINTING ESTIMATOR
   ========================================================================== */
function initEstimator() {
  const signTypeSelect = document.getElementById("estSignType");
  const widthInput = document.getElementById("estWidth");
  const heightInput = document.getElementById("estHeight");
  const placementBtns = document.querySelectorAll(".placement-btn");
  const priceDisplay = document.getElementById("estPriceDisplay");
  const breakdownDisplay = document.getElementById("estBreakdownDisplay");
  const whatsappCta = document.getElementById("estWhatsappCta");

  if (!signTypeSelect || !widthInput || !heightInput || !priceDisplay) return;

  let placement = "outdoor";

  placementBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      placementBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      placement = btn.getAttribute("data-placement");
      calculateEstimate();
    });
  });

  signTypeSelect.addEventListener("change", calculateEstimate);
  widthInput.addEventListener("input", calculateEstimate);
  heightInput.addEventListener("input", calculateEstimate);

  function calculateEstimate() {
    const signKey = signTypeSelect.value;
    const rule = WELCOME_DATA.pricingRules[signKey] || WELCOME_DATA.pricingRules["flex-banner"];
    const width = parseFloat(widthInput.value) || 10;
    const height = parseFloat(heightInput.value) || 3;
    const sqFt = width * height;

    // Multiplier for outdoor weatherproofing
    const placementFactor = placement === "outdoor" ? (rule.outdoorMultiplier || 1.1) : 1.0;

    // Calculation formula
    const rawCost = (sqFt * rule.baseSqFtRate * placementFactor) + (rule.fixedCost || 0);

    const minEstimate = Math.max(rule.minPrice, Math.round(rawCost * 0.92));
    const maxEstimate = Math.max(rule.minPrice * 1.15, Math.round(rawCost * 1.15));

    // Update displays
    priceDisplay.textContent = `₹${minEstimate.toLocaleString("en-IN")} – ₹${maxEstimate.toLocaleString("en-IN")}`;
    breakdownDisplay.textContent = `${rule.name} • ${sqFt.toFixed(1)} ${rule.unitLabel || "Sq.Ft"} (${width}' × ${height}') • ${placement.toUpperCase()}`;

    // Update WhatsApp pre-filled action link
    const message = encodeURIComponent(
      `Hello Elite Digital! I am requesting a detailed quotation for:\n` +
      `• Service: ${rule.name}\n` +
      `• Dimensions / Volume: ${width} ft (W) × ${height} ft (H) = ${sqFt.toFixed(1)} ${rule.unitLabel || "Sq.Ft"}\n` +
      `• Placement / Type: ${placement.toUpperCase()}\n` +
      `• Estimated Budget Range: ₹${minEstimate.toLocaleString("en-IN")} - ₹${maxEstimate.toLocaleString("en-IN")}\n` +
      `Please let me know your production timeline and site inspection availability.`
    );

    if (whatsappCta) {
      whatsappCta.href = `https://wa.me/${WELCOME_DATA.company.phoneClean}?text=${message}`;
    }
  }

  // Trigger initial calculation
  calculateEstimate();
}

/* ==========================================================================
   8. METRICS COUNTER ANIMATION (INTERSECTION OBSERVER)
   ========================================================================== */
function initMetricsCounter() {
  const metricNumbers = document.querySelectorAll(".metric-number");
  if (!metricNumbers.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        metricNumbers.forEach(el => {
          const target = parseFloat(el.getAttribute("data-target"));
          const isDecimal = target % 1 !== 0;
          const duration = 1600;
          const startTime = performance.now();

          function updateNumber(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const ease = 1 - Math.pow(1 - progress, 3);
            const currentVal = target * ease;

            const numSpan = el.querySelector(".num");
            if (numSpan) {
              numSpan.textContent = isDecimal 
                ? currentVal.toFixed(1) 
                : Math.floor(currentVal).toLocaleString("en-IN");
            }

            if (progress < 1) {
              requestAnimationFrame(updateNumber);
            } else {
              if (numSpan) {
                numSpan.textContent = isDecimal 
                  ? target.toFixed(1) 
                  : target.toLocaleString("en-IN");
              }
            }
          }

          requestAnimationFrame(updateNumber);
        });
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.getElementById("metrics");
  if (metricsSection) {
    observer.observe(metricsSection);
  }
}

/* ==========================================================================
   9. TESTIMONIALS SLIDER (RHINO STYLE TRUSTPILOT REVIEW)
   ========================================================================== */
function initTestimonialsSlider() {
  const container = document.getElementById("testimonialCard");
  const dotsContainer = document.getElementById("sliderDots");
  const prevBtn = document.getElementById("sliderPrev");
  const nextBtn = document.getElementById("sliderNext");

  if (!container || !WELCOME_DATA.testimonials) return;

  let currentIndex = 0;
  const items = WELCOME_DATA.testimonials;

  // Build dots
  if (dotsContainer) {
    dotsContainer.innerHTML = items.map((_, i) => `
      <div class="dot-btn ${i === 0 ? "active" : ""}" data-index="${i}"></div>
    `).join("");

    const dots = dotsContainer.querySelectorAll(".dot-btn");
    dots.forEach(d => {
      d.addEventListener("click", () => {
        currentIndex = parseInt(d.getAttribute("data-index"));
        renderSlide();
      });
    });
  }

  function renderSlide() {
    const t = items[currentIndex];
    container.innerHTML = `
      <div class="star-rating">
        ${Array(t.rating).fill(`
          <svg class="star-icon" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        `).join("")}
      </div>
      <p class="testimonial-text">“${t.text}”</p>
      <div class="testimonial-author">
        <h4 class="author-name">${t.name}</h4>
        <span class="author-role">${t.position}, ${t.company}</span>
      </div>
    `;

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll(".dot-btn");
      dots.forEach((d, i) => {
        d.classList.toggle("active", i === currentIndex);
      });
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      renderSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % items.length;
      renderSlide();
    });
  }

  // Initial render
  renderSlide();
}

/* ==========================================================================
   10. CONTACT FORM TO WHATSAPP INTEGRATION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("callbackForm");
  const toast = document.getElementById("formToast");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("userName").value.trim();
    const phone = document.getElementById("userPhone").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const service = document.getElementById("userService").value;
    const message = document.getElementById("userMessage").value.trim();

    if (!name || !phone) {
      alert("Please provide your name and phone number.");
      return;
    }

    const waText = encodeURIComponent(
      `Hello Elite Digital! New inquiry from Website:\n` +
      `• Name: ${name}\n` +
      `• Phone: ${phone}\n` +
      (email ? `• Email: ${email}\n` : "") +
      `• Required Service: ${service}\n` +
      (message ? `• Project Details: ${message}\n` : "") +
      `Please provide estimated cost and timeline.`
    );

    const waUrl = `https://wa.me/${WELCOME_DATA.company.phoneClean}?text=${waText}`;

    if (toast) {
      toast.style.display = "block";
    }

    setTimeout(() => {
      window.open(waUrl, "_blank");
      form.reset();
      if (toast) {
        setTimeout(() => {
          toast.style.display = "none";
        }, 5000);
      }
    }, 700);
  });
}

/* ==========================================================================
   11. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.style.opacity = "1";
      btn.style.visibility = "visible";
      btn.style.transform = "translateY(0)";
    } else {
      btn.style.opacity = "0";
      btn.style.visibility = "hidden";
      btn.style.transform = "translateY(10px)";
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
