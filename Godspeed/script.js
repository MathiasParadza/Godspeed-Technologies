//swiper

   const swiper = new Swiper('.card-stack-swiper', {
  effect: 'cards',
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const servicesSwiper = new Swiper('.services-swiper', {
    loop: true, // Enables looping through slides
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1, // Number of slides to show
    spaceBetween: 20, // Space between slides in px
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });


   // Show the popup when the page loads
   window.onload = function () {
    setTimeout(() => {
      document.getElementById('popupAd').classList.add('show');
    }, 1000); // Delay for 1 second
  };

  // Close the popup
  function closePopup() {
    document.getElementById('popupAd').classList.remove('show');
  }
  