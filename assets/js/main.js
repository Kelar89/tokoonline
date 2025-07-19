// Logika untuk Modal Quick View Produk
document.addEventListener('DOMContentLoaded', function() {
  const productModal = document.getElementById('productModal');
  if (productModal && typeof allProducts !== 'undefined') {
    productModal.addEventListener('show.bs.modal', function(event) {
      const button = event.relatedTarget;
      const productSlug = button.getAttribute('data-product-slug');
      const productData = allProducts.find(p => p.slug === productSlug);
      
      if (productData) {
        document.getElementById('modal-product-image').src = productData.image;
        document.getElementById('modal-product-title').textContent = productData.title;
        document.getElementById('modal-product-price').textContent = `Rp${productData.price.toLocaleString('id-ID')}`;
        document.getElementById('modal-product-description').textContent = productData.description;
        
        const addToCartButton = document.getElementById('modal-add-to-cart-button');
        addToCartButton.setAttribute('data-product-slug', productData.slug);
        addToCartButton.setAttribute('data-product-title', productData.title);
        addToCartButton.setAttribute('data-product-price', productData.price);
        addToCartButton.setAttribute('data-product-image', productData.image);
        addToCartButton.classList.add('js-add-to-cart');
      }
    });
  }
});

// Logika untuk Notifikasi Social Proof
document.addEventListener('DOMContentLoaded', function() {
  const toastElement = document.getElementById('social-proof-toast');
  const reviews = [
    { quote: "Kemejanya di luar ekspektasi, bahannya adem...", author: "Budi S.", avatar: "https://placehold.co/100x100/343A40/FFF?text=BS" },
    { quote: "Akhirnya nemu sneakers yang pas di kaki...", author: "Citra L.", avatar: "https://placehold.co/100x100/6C757D/FFF?text=CL" },
    { quote: "Tas ranselnya keren! Desainnya modern...", author: "Agus W.", avatar: "https://placehold.co/100x100/212529/FFF?text=AW" },
    { quote: "Kaos katun bambunya beneran lembut...", author: "Dewi A.", avatar: "https://placehold.co/100x100/495057/FFF?text=DA" }
  ];

  if (toastElement && reviews.length > 0) {
    let lastReviewIndex = -1;
    const showRandomReview = () => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * reviews.length);
      } while (randomIndex === lastReviewIndex);
      
      lastReviewIndex = randomIndex;
      const review = reviews[randomIndex];
      
      document.getElementById('sp-avatar').src = review.avatar;
      document.getElementById('sp-author').textContent = `${review.author} baru saja membeli...`;
      document.getElementById('sp-quote').textContent = review.quote.substring(0, 40) + '...';
      
      toastElement.classList.add('show');
      
      setTimeout(() => {
        toastElement.classList.remove('show');
      }, 5000);
    };
    
    setTimeout(showRandomReview, 7000); 
    setInterval(showRandomReview, 12000);
  }
});

// Logika untuk Tombol Kembali ke Atas
document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.getElementById('back-to-top');
  if (backToTopButton) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
      } else {
        backToTopButton.classList.remove('active');
      }
    });

    backToTopButton.addEventListener('click', function(event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});

// Logika untuk Countdown Timer
document.addEventListener('DOMContentLoaded', function() {
  const countdownElement = document.getElementById('countdown');
  
  if (countdownElement && typeof dealEndDate !== 'undefined') {
    const countDownDate = new Date(dealEndDate).getTime();

    const interval = setInterval(function() {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('days').innerText = days;
      document.getElementById('hours').innerText = hours;
      document.getElementById('minutes').innerText = minutes;
      document.getElementById('seconds').innerText = seconds;

      if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "<div class='fs-4 text-danger'>Promo Telah Berakhir!</div>";
      }
    }, 1000);
  }
});

// Logika untuk Filter Produk
document.addEventListener('DOMContentLoaded', function() {
    const filtersContainer = document.querySelector('#product-filters');
    if (!filtersContainer) return;

    const productItems = document.querySelectorAll('#product-grid .product-item');

    filtersContainer.addEventListener('click', function(event) {
        if (event.target.tagName !== 'BUTTON') {
            return;
        }

        const currentActive = filtersContainer.querySelector('.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        event.target.classList.add('active');

        const filterValue = event.target.getAttribute('data-filter');

        productItems.forEach(function(item) {
            const itemCategory = item.getAttribute('data-category');
            if (filterValue === '*' || itemCategory === filterValue) {
                item.classList.remove('d-none');
            } else {
                item.classList.add('d-none');
            }
        });
    });
});