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

  // Smooth scroll for all internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        if (typeof closeMobileNav === 'function') {
          closeMobileNav();
        }
      }
    });
  });

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

  // 9. Protected CV Popup Modal (View Only - No Download)
  const cvModal = document.getElementById('cvModal');
  const cvCloseBtn = document.getElementById('cvCloseBtn');
  const openCvBtns = document.querySelectorAll('.btn-open-cv');
  const cvSingleImg = document.getElementById('cvSingleImg');
  const cvCurrentPage = document.getElementById('cvCurrentPage');
  const cvBottomPage = document.getElementById('cvBottomPage');
  const cvPrevBtn = document.getElementById('cvPrevBtn');
  const cvNextBtn = document.getElementById('cvNextBtn');
  const cvBottomPrevBtn = document.getElementById('cvBottomPrevBtn');
  const cvBottomNextBtn = document.getElementById('cvBottomNextBtn');
  const cvModeSingleBtn = document.getElementById('cvModeSingleBtn');
  const cvModeAllBtn = document.getElementById('cvModeAllBtn');
  const cvSingleView = document.getElementById('cvSingleView');
  const cvScrollView = document.getElementById('cvScrollView');
  const cvZoomInBtn = document.getElementById('cvZoomInBtn');
  const cvZoomOutBtn = document.getElementById('cvZoomOutBtn');
  const cvZoomResetBtn = document.getElementById('cvZoomResetBtn');
  const cvZoomVal = document.getElementById('cvZoomVal');
  const cvPaperWrap = document.getElementById('cvPaperWrap');

  const totalCvPages = 14;
  let currentCvPage = 1;
  let currentZoom = 100;
  let isAllPagesRendered = false;

  function setCvPage(page) {
    if (page < 1) page = 1;
    if (page > totalCvPages) page = totalCvPages;
    currentCvPage = page;

    if (cvSingleImg) {
      cvSingleImg.src = `assets/pages/page_${currentCvPage}.png`;
      const langPage = translations[currentLang]?.cv_modal?.page_indicator || "Halaman";
      cvSingleImg.alt = `Curriculum Vitae Nurul Azizah - ${langPage} ${currentCvPage}`;
    }
    if (cvCurrentPage) cvCurrentPage.textContent = currentCvPage;
    if (cvBottomPage) cvBottomPage.textContent = currentCvPage;

    if (cvPrevBtn) cvPrevBtn.disabled = currentCvPage === 1;
    if (cvBottomPrevBtn) cvBottomPrevBtn.disabled = currentCvPage === 1;
    if (cvNextBtn) cvNextBtn.disabled = currentCvPage === totalCvPages;
    if (cvBottomNextBtn) cvBottomNextBtn.disabled = currentCvPage === totalCvPages;
  }

  function setZoom(zoom) {
    if (zoom < 60) zoom = 60;
    if (zoom > 200) zoom = 200;
    currentZoom = zoom;
    if (cvZoomVal) cvZoomVal.textContent = `${currentZoom}%`;
    if (cvPaperWrap) {
      cvPaperWrap.style.transform = `scale(${currentZoom / 100})`;
      cvPaperWrap.style.transformOrigin = 'top center';
    }
  }

  function renderAllCvPages() {
    if (isAllPagesRendered || !cvScrollView) return;
    cvScrollView.innerHTML = '';
    const langPage = translations[currentLang]?.cv_modal?.page_indicator || "Halaman";
    const langOf = translations[currentLang]?.cv_modal?.of || "dari";

    for (let i = 1; i <= totalCvPages; i++) {
      const pageBox = document.createElement('div');
      pageBox.className = 'cv-scroll-page';
      pageBox.innerHTML = `
        <div class="cv-page-tag">
          ${langPage} ${i} ${langOf} ${totalCvPages}
        </div>
        <div class="cv-page-wrap">
          <div class="cv-protection-shield" aria-hidden="true"></div>
          <img src="assets/pages/page_${i}.png" alt="Curriculum Vitae Nurul Azizah - ${langPage} ${i}" class="cv-page-img" draggable="false" loading="lazy">
        </div>
      `;
      cvScrollView.appendChild(pageBox);
    }
    isAllPagesRendered = true;
  }

  function setCvMode(mode) {
    const pageNav = document.getElementById('cvPageNav');
    const bottomBar = document.querySelector('.cv-bottom-bar');

    if (mode === 'all') {
      if (cvModeAllBtn) cvModeAllBtn.classList.add('active');
      if (cvModeSingleBtn) cvModeSingleBtn.classList.remove('active');
      if (cvSingleView) cvSingleView.style.display = 'none';
      if (cvScrollView) cvScrollView.style.display = 'flex';
      renderAllCvPages();
      if (pageNav) pageNav.style.display = 'none';
      if (bottomBar) bottomBar.style.display = 'none';
    } else {
      if (cvModeSingleBtn) cvModeSingleBtn.classList.add('active');
      if (cvModeAllBtn) cvModeAllBtn.classList.remove('active');
      if (cvSingleView) cvSingleView.style.display = 'flex';
      if (cvScrollView) cvScrollView.style.display = 'none';
      if (pageNav && window.innerWidth > 580) pageNav.style.display = 'flex';
      if (bottomBar && window.innerWidth <= 580) bottomBar.style.display = 'flex';
      setCvPage(currentCvPage);
    }
  }

  function openCvModal() {
    if (typeof closeMobileNav === 'function') closeMobileNav();
    setCvPage(currentCvPage);
    setZoom(100);
    if (cvModal) {
      cvModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCvModal() {
    if (cvModal) {
      cvModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  openCvBtns.forEach(btn => btn.addEventListener('click', openCvModal));
  if (cvCloseBtn) cvCloseBtn.addEventListener('click', closeCvModal);

  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) closeCvModal();
    });

    // Disable right click / context menu for CV protection
    cvModal.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      const notice = (translations[currentLang] && translations[currentLang].cv_modal?.protected_notice) || "Dokumen ini diproteksi untuk pratinjau langsung.";
      showToast(notice);
      return false;
    });
  }

  if (cvPrevBtn) cvPrevBtn.addEventListener('click', () => setCvPage(currentCvPage - 1));
  if (cvNextBtn) cvNextBtn.addEventListener('click', () => setCvPage(currentCvPage + 1));
  if (cvBottomPrevBtn) cvBottomPrevBtn.addEventListener('click', () => setCvPage(currentCvPage - 1));
  if (cvBottomNextBtn) cvBottomNextBtn.addEventListener('click', () => setCvPage(currentCvPage + 1));

  if (cvZoomInBtn) cvZoomInBtn.addEventListener('click', () => setZoom(currentZoom + 15));
  if (cvZoomOutBtn) cvZoomOutBtn.addEventListener('click', () => setZoom(currentZoom - 15));
  if (cvZoomResetBtn) cvZoomResetBtn.addEventListener('click', () => setZoom(100));

  if (cvModeSingleBtn) cvModeSingleBtn.addEventListener('click', () => setCvMode('single'));
  if (cvModeAllBtn) cvModeAllBtn.addEventListener('click', () => setCvMode('all'));

  // Keyboard navigation & anti-download interception
  document.addEventListener('keydown', (e) => {
    if (!cvModal || !cvModal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeCvModal();
    } else if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      if (cvSingleView && cvSingleView.style.display !== 'none') setCvPage(currentCvPage + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      if (cvSingleView && cvSingleView.style.display !== 'none') setCvPage(currentCvPage - 1);
    } else if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P')) {
      e.preventDefault();
      const notice = (translations[currentLang] && translations[currentLang].cv_modal?.protected_notice) || "Dokumen ini diproteksi untuk pratinjau langsung.";
      showToast(notice);
    }
  });
});
