# Godspeed Technologies

Company website for Godspeed Technologies — a static, single-page site built with HTML, CSS, Bootstrap 5 and Swiper.

**Live site:** https://mathiasparadza.github.io/Godspeed-Technologies/

## Structure

```
Godspeed/
  index.html   # the page
  styles.css   # site styles
  script.js    # slider, popup, mobile menu and form handling
  images/      # all images used by the page
.github/workflows/pages.yml   # deploys Godspeed/ to GitHub Pages
```

## Running locally

Open `Godspeed/index.html` in a browser, or serve the folder:

```bash
cd Godspeed && python3 -m http.server 8000
```

## Deployment

Every push to `main` publishes the `Godspeed/` folder to GitHub Pages via GitHub Actions.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Forms

GitHub Pages has no server, so the contact and newsletter forms open the visitor's
email app with the message pre-filled (to `info@godspeedtech.com`). To receive
submissions directly instead, create a form on a service such as
[Formspree](https://formspree.io) and set `FORM_ENDPOINT` at the top of `script.js`.
