// Godspeed Technologies – site scripts

// Address that contact and newsletter requests are sent to.
// To use a form service instead (e.g. Formspree), set FORM_ENDPOINT to its URL.
const CONTACT_EMAIL = 'info@godspeedtech.com';
const FORM_ENDPOINT = '';

document.addEventListener('DOMContentLoaded', () => {
  // ---- Footer year ----
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ---- Services slider ----
  if (window.Swiper) {
    new Swiper('.services-swiper', {
      rewind: true,
      autoplay: { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true },
      pagination: { el: '.services-pagination', clickable: true },
      navigation: { nextEl: '.services-swiper .swiper-button-next', prevEl: '.services-swiper .swiper-button-prev' },
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 40 },
      },
    });
  }

  // ---- Close the mobile menu after picking a link ----
  const navCollapse = document.getElementById('navbarNav');
  if (navCollapse && window.bootstrap) {
    navCollapse.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        if (navCollapse.classList.contains('show')) {
          bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
        }
      });
    });
  }

  // ---- "How can we help?" popup ----
  // Slides in on the right of the hero, stays for a few seconds, then fades out.
  // Hovering over it (or tabbing into it) keeps it open.
  const popup = document.getElementById('popupAd');
  const SHOW_AFTER_MS = 1500;
  const VISIBLE_FOR_MS = 6000;
  let hideTimer = null;

  function hidePopup() {
    clearTimeout(hideTimer);
    popup.classList.remove('show');
    popup.setAttribute('aria-hidden', 'true');
  }

  function scheduleHide() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hidePopup, VISIBLE_FOR_MS);
  }

  function showPopup() {
    popup.classList.add('show');
    popup.setAttribute('aria-hidden', 'false');
    scheduleHide();
  }

  if (popup) {
    popup.querySelector('.close-btn').addEventListener('click', hidePopup);
    popup.querySelectorAll('a').forEach((a) => a.addEventListener('click', hidePopup));
    popup.addEventListener('mouseenter', () => clearTimeout(hideTimer));
    popup.addEventListener('focusin', () => clearTimeout(hideTimer));
    popup.addEventListener('mouseleave', () => { if (popup.classList.contains('show')) scheduleHide(); });
    popup.addEventListener('focusout', (e) => {
      if (!popup.contains(e.relatedTarget) && popup.classList.contains('show')) scheduleHide();
    });
    setTimeout(showPopup, SHOW_AFTER_MS);
  }

  // ---- Forms ----
  // Without a backend, forms open the visitor's email app with the message
  // pre-filled. If FORM_ENDPOINT is set, they are posted there instead.
  function setStatus(form, text) {
    const status = form.parentElement.querySelector('.form-status') || form.querySelector('.form-status');
    if (status) status.textContent = text;
  }

  async function submitForm(form, subject, body) {
    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(form),
        });
        if (!res.ok) throw new Error(res.statusText);
        form.reset();
        setStatus(form, 'Thank you! We will be in touch soon.');
      } catch (err) {
        setStatus(form, `Sorry, something went wrong. Please email us at ${CONTACT_EMAIL}.`);
      }
      return;
    }
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(form, 'Your email app should open with your message ready to send.');
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = new FormData(contactForm);
      const body = `Name: ${d.get('name')}\nEmail: ${d.get('email')}\n\n${d.get('message')}`;
      submitForm(contactForm, d.get('subject'), body);
    });
  }

  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = new FormData(newsletterForm).get('email');
      submitForm(newsletterForm, 'Newsletter subscription', `Please subscribe ${email} to the Godspeed Technologies newsletter.`);
    });
  }
});
