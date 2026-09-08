/**
 * Nurul Azizah - Personal Website JS
 * Features:
 * 1. Bilingual System (Indonesian & English) with LocalStorage persistence
 * 2. Filterable Projects Showcase
 * 3. Lightbox Modal for Projects & Verified Certificates
 * 4. Mobile Navigation Drawer
 * 5. Interactive WhatsApp Contact Form with Dual-Language Message Template
 * 6. Smooth Scroll & Active Scroll Spy
 */

document.addEventListener('DOMContentLoaded', () => {
  // Current active language: default 'id' or from localStorage
  let currentLang = localStorage.getItem('azizah_lang') || 'id';

  // Helper to get nested value from translations object
  function getNestedTranslation(obj, path) {
    return path.split('.').reduce((prev, curr) => prev ? prev[curr] : null, obj);
  }

  // 1. Apply Language to DOM
  function setLanguage(lang) {
    if (!translations || !translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('azizah_lang', lang);
    document.documentElement.lang = lang;

    // Update document title
    if (translations[lang].meta_title) {
      document.title = translations[lang].meta_title;
    }

    // Update text content for elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = getNestedTranslation(translations[lang], key);
      if (val !== null && val !== undefined) {
        // If element is a project card title with custom highlight inside
        if (key === 'projects.title') {
          if (lang === 'en') {
            el.innerHTML = 'Recent <span class="highlight">Projects</span>';
          } else {
            el.innerHTML = 'Proyek <span class="highlight">Terkini</span>';
          }
        } else if (key === 'experience.title') {
          if (lang === 'en') {
            el.innerHTML = 'Career & <span class="highlight">Education</span>';
          } else {
            el.innerHTML = 'Karier & <span class="highlight">Pendidikan</span>';
          }
        } else if (key === 'tools.title') {
          if (lang === 'en') {
            el.innerHTML = 'Premium <span class="highlight">Tools</span> & Skills';
          } else {
            el.innerHTML = 'Keahlian & <span class="highlight">Alat Utama</span>';
          }
        } else if (key === 'certificates.title') {
          if (lang === 'en') {
            el.innerHTML = 'Verified <span class="highlight">Credentials</span>';
          } else {
            el.innerHTML = 'Sertifikasi <span class="highlight">Terverifikasi</span>';
          }
        } else if (key === 'contact.headline') {
          if (lang === 'en') {
            el.innerHTML = "Let's Work <span>Together</span>";
          } else {
            el.innerHTML = "Mari Bekerja <span>Bersama</span>";
          }
        } else {
          el.textContent = val;
        }
      }
    });

    // Update placeholders for inputs
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = getNestedTranslation(translations[lang], key);
      if (val) el.placeholder = val;
    });

    // Update Project Card dataset texts (for modal lookup)
    document.querySelectorAll('.project-card').forEach(card => {
      const pKey = card.getAttribute('data-i18n-key');
      if (pKey && translations[lang].projects) {
        const fullDesc = translations[lang].projects[`${pKey}_full`];
        const shortDesc = translations[lang].projects[`${pKey}_desc`];
        const title = translations[lang].projects[`${pKey}_title`];
        const cat = translations[lang].projects[`${pKey}_cat`];

        if (fullDesc) card.setAttribute('data-full-desc', fullDesc);
        if (shortDesc) {
          const descEl = card.querySelector('.project-desc');
          if (descEl) descEl.textContent = shortDesc;
        }
        if (title) {
          const titleEl = card.querySelector('.project-title');
          if (titleEl) titleEl.textContent = title;
        }
        if (cat) {
          const catEl = card.querySelector('.project-client-tag');
          if (catEl) catEl.textContent = cat;
        }
      }
    });

    // Update Certificate Card titles & issuers
    document.querySelectorAll('.cert-card').forEach(card => {
      const cKey = card.getAttribute('data-cert-key');
      if (cKey && translations[lang].certificates) {
        const cTitle = translations[lang].certificates[`${cKey}_title`];
        const cIssuer = translations[lang].certificates[`${cKey}_issuer`];
        const cDate = translations[lang].certificates[`${cKey}_date`];

        if (cTitle) {
          const tEl = card.querySelector('.cert-title');
          if (tEl) tEl.textContent = cTitle;
        }
        if (cIssuer) {
          const iEl = card.querySelector('.cert-issuer');
          if (iEl) iEl.textContent = cIssuer;
        }
        if (cDate) {
          const dEl = card.querySelector('.cert-date');
          if (dEl) dEl.textContent = cDate;
        }
      }
    });

    // Update active status indicators on all language buttons
    document.querySelectorAll('.lang-code').forEach(span => {
      if (span.getAttribute('data-lang') === lang) {
        span.classList.add('active');
      } else {
        span.classList.remove('active');
      }
    });
  }

  // Toggle language function
  function toggleLanguage() {
    const nextLang = currentLang === 'id' ? 'en' : 'id';
    setLanguage(nextLang);
    const toastMsg = nextLang === 'en' ? 'Language switched to English' : 'Bahasa diubah ke Bahasa Indonesia';
    showToast(toastMsg);
  }

  // Attach language switcher listeners
  const langSwitchBtn = document.getElementById('langSwitchBtn');
  const langSwitchMobile = document.getElementById('langSwitchMobile');

  if (langSwitchBtn) langSwitchBtn.addEventListener('click', toggleLanguage);
  if (langSwitchMobile) langSwitchMobile.addEventListener('click', toggleLanguage);

  // Initialize language on startup
  setLanguage(currentLang);

  // 2. Mobile Menu Drawer Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const closeDrawer = document.getElementById('closeDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

  function openMobileNav() {
    mobileOverlay.classList.add('open');
    mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileOverlay.classList.remove('open');
    mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openMobileNav);
  if (closeDrawer) closeDrawer.addEventListener('click', closeMobileNav);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileNav);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // 3. Active Section Spy on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset + 200;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // 4. Project Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 5. Lightbox Modal for Projects & Certificates
  const modalBackdrop = document.getElementById('lightboxModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImg = document.getElementById('modalImg');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalDetailsGrid = document.getElementById('modalDetailsGrid');

  function openModal(data) {
    modalImg.src = data.imgSrc;
    modalImg.alt = data.title;
    modalCategory.textContent = data.category || (translations[currentLang].modal.project_showcase);
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;

    if (data.details && data.details.length > 0) {
      modalDetailsGrid.style.display = 'grid';
      modalDetailsGrid.innerHTML = data.details.map(item => `
        <div class="modal-detail-item">
          <span class="modal-detail-label">${item.label}</span>
          <span class="modal-detail-val">${item.val}</span>
        </div>
      `).join('');
    } else {
      modalDetailsGrid.style.display = 'none';
    }

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  // Attach modal trigger to project cards
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const imgSrc = card.getAttribute('data-img');
      const title = card.querySelector('.project-title').textContent.trim();
      const pKey = card.getAttribute('data-i18n-key');
      const desc = (pKey && translations[currentLang].projects[`${pKey}_full`]) 
                   || card.getAttribute('data-full-desc') 
                   || card.querySelector('.project-desc').textContent.trim();
      const category = card.querySelector('.project-client-tag').textContent.trim();
      const client = card.getAttribute('data-client') || '-';
      const year = card.getAttribute('data-year') || '2021-2024';
      const tech = card.getAttribute('data-tech') || 'Full-Stack';

      const modalLang = translations[currentLang].modal;

      openModal({
        imgSrc,
        title,
        desc,
        category,
        details: [
          { label: modalLang.client_label, val: client },
          { label: modalLang.timeline_label, val: year },
          { label: modalLang.tech_label, val: tech }
        ]
      });
    });
  });

  // Attach modal trigger to certificates
  const certCards = document.querySelectorAll('.cert-card');
  certCards.forEach(card => {
    card.addEventListener('click', () => {
      const imgSrc = card.getAttribute('data-img');
      const title = card.querySelector('.cert-title').textContent.trim();
      const issuer = card.querySelector('.cert-issuer').textContent.trim();
      const date = card.querySelector('.cert-date').textContent.trim();
      
      const modalLang = translations[currentLang].modal;
      const desc = currentLang === 'en' 
                   ? `Official verified credential issued by ${issuer}.` 
                   : `Sertifikat kredensial resmi yang diterbitkan oleh ${issuer}.`;

      openModal({
        imgSrc,
        title,
        desc,
        category: modalLang.cert_category,
        details: [
          { label: modalLang.issuer_label, val: issuer },
          { label: modalLang.date_label, val: date },
          { label: modalLang.status_label, val: modalLang.verified_status }
        ]
      });
    });
  });

  // 6. Contact Form Handler (Direct WhatsApp / Email)
  const contactForm = document.getElementById('contactForm');
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(msg) {
    if (!toast) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const subject = document.getElementById('formSubject').value.trim();
      const message = document.getElementById('formMessage').value.trim();

      let text = '';
      if (currentLang === 'en') {
        text = `Hello Azizah, I am ${name} (${email}). I would like to discuss about ${subject}: ${message}`;
      } else {
        text = `Halo Azizah, saya ${name} (${email}). Ingin berdiskusi tentang ${subject}: ${message}`;
      }

      const encoded = encodeURIComponent(text);
      const waUrl = `https://wa.me/6281233792074?text=${encoded}`;

      showToast(translations[currentLang].toast.wa_sent);
      
      setTimeout(() => {
        window.open(waUrl, '_blank');
        contactForm.reset();
      }, 700);
    });
  }

  // 7. Copy Email Pill
  const copyEmailPill = document.getElementById('copyEmailPill');
  if (copyEmailPill) {
    copyEmailPill.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText('jobbazizah@gmail.com').then(() => {
        showToast(translations[currentLang].toast.email_copied);
      }).catch(() => {
        window.location.href = 'mailto:jobbazizah@gmail.com';
      });
    });
  }

  // 8. Back to Top Button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
