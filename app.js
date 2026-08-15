document.addEventListener("DOMContentLoaded", () => {
  /* ================= HERO SLIDER ================= */

  const heroImg = document.getElementById("heroSlider");

  if (heroImg) {
    const heroImages = [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg"
    ];

    let currentHero = 0;
    const intervalMs = 4000;
    const fadeMs = 600;

    heroImg.style.transition = `opacity ${fadeMs}ms ease`;
    heroImg.style.opacity = "1";

    heroImages.forEach((src) => {
      const preloadImg = new Image();
      preloadImg.src = src;
    });

    if (heroImages.length > 1) {
      setInterval(() => {
        heroImg.style.opacity = "0";

        setTimeout(() => {
          currentHero = (currentHero + 1) % heroImages.length;
          heroImg.src = heroImages[currentHero];
          heroImg.style.opacity = "1";
        }, fadeMs);
      }, intervalMs);
    }
  }

  /* ================= REVIEW SLIDER ================= */

  const reviewImg = document.getElementById("reviewSlider");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (reviewImg) {
    const reviewImages = [
      "IMG_1333.jpg",
      "IMG_1334.jpg",
      "IMG_1335.jpg",
      "IMG_1336.jpg",
      "IMG_1337.jpg",
      "IMG_1338.jpg",
      "IMG_1339.jpg",
      "IMG_1340.jpg",
      "IMG_1341.jpg",
      "IMG_1342.jpg",
      "IMG_1343.jpg"
    ];

    let currentReview = 0;
    let reviewInterval;

    function changeReview() {
      reviewImg.src = reviewImages[currentReview];
    }

    function nextReview() {
      currentReview = (currentReview + 1) % reviewImages.length;
      changeReview();
    }

    function prevReview() {
      currentReview = (currentReview - 1 + reviewImages.length) % reviewImages.length;
      changeReview();
    }

    function startReviewAutoplay() {
      if (reviewImages.length > 1) {
        reviewInterval = setInterval(nextReview, 5000);
      }
    }

    function resetReviewAutoplay() {
      clearInterval(reviewInterval);
      startReviewAutoplay();
    }

    changeReview();

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        nextReview();
        resetReviewAutoplay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        prevReview();
        resetReviewAutoplay();
      });
    }

    startReviewAutoplay();
  }

  /* ================= FOOD GALLERY ================= */

  const foodGallery = document.getElementById("foodGallery");

  if (foodGallery) {
    const foodItems = [
      { img: "cevapi.jpg", naziv: "Ćevapi" },
      { img: "gulasi.jpg", naziv: "Gulaš" },
      { img: "pastrmka.jpg", naziv: "Pastrmka" },
      { img: "vrat.jpg", naziv: "Vrat sa žara" },
      { img: "jafa.jpg", naziv: "Jafa kolač" }
    ];

    foodItems.forEach((item) => {
      const card = document.createElement("div");
      card.className = "food-card";

      const image = document.createElement("img");
      image.src = `hrana/${item.img}`;
      image.alt = item.naziv;
      image.loading = "lazy";

      const title = document.createElement("p");
      title.textContent = item.naziv;

      card.appendChild(image);
      card.appendChild(title);
      foodGallery.appendChild(card);
    });
  }
})