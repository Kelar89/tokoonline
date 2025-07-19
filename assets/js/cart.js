// File: assets/js/cart.js

const Cart = {
  init() {
    this.cart = JSON.parse(localStorage.getItem('tokoonline_cart')) || [];
    this.whatsappNumber = '6285894448143';
    this.updateCartIcon();
    this.addEventListeners();
    this.updateFab(); // Panggil fungsi FAB saat inisialisasi
  },

  addEventListeners() {
    // ... (event listener yang sudah ada tetap sama) ...
    document.body.addEventListener('click', (event) => {
      if (event.target.closest('.js-add-to-cart')) {
        const button = event.target.closest('.js-add-to-cart');
        const productData = button.dataset;
        this.addToCart(productData);
      }
      if (event.target.closest('.js-remove-from-cart')) {
        const button = event.target.closest('.js-remove-from-cart');
        const productSlug = button.dataset.productSlug;
        if (confirm('Anda yakin ingin menghapus item ini dari keranjang?')) {
          this.removeFromCart(productSlug);
        }
      }
      if (event.target.id === 'checkout-whatsapp-button') {
        this.checkoutToWhatsApp();
      }
    });
    const cartOffcanvas = document.getElementById('cartOffcanvas');
    if (cartOffcanvas) {
      cartOffcanvas.addEventListener('show.bs.offcanvas', () => {
        this.renderCartItems();
      });
    }
  },

  // FUNGSI BARU UNTUK MENGONTROL TOMBOL MELAYANG
  updateFab() {
    const fab = document.getElementById('whatsapp-fab');
    const fabText = document.getElementById('whatsapp-fab-text');
    if (!fab || !fabText) return;

    const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);

    if (totalItems > 0) {
      // Jika ada barang di keranjang, tombol menjadi tombol checkout
      fabText.textContent = `Checkout (${totalItems} item)`;
      fab.onclick = (e) => {
        e.preventDefault();
        // Buka panel keranjang, bukan langsung ke WA
        const cartOffcanvas = new bootstrap.Offcanvas(document.getElementById('cartOffcanvas'));
        cartOffcanvas.show();
      };
      fab.removeAttribute('target'); // Hapus target="_blank"
    } else {
      // Jika keranjang kosong, tombol menjadi tombol kontak umum
      fabText.textContent = 'Tanya Stylist';
      fab.onclick = null; // Hapus event click khusus
      fab.href = `https://wa.me/${this.whatsappNumber}?text=Halo, saya ingin bertanya tentang produk Anda.`;
      fab.setAttribute('target', '_blank'); // Tambahkan kembali target="_blank"
    }
  },

  addToCart(productData) {
    // ... (fungsi addToCart tetap sama) ...
    const productSlug = productData.productSlug;
    const existingProduct = this.cart.find(item => item.slug === productSlug);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ slug: productSlug, title: productData.productTitle, price: parseFloat(productData.productPrice), image: productData.productImage, quantity: 1 });
    }
    this.saveCart();
    this.updateCartIcon();
    this.updateFab(); // Panggil updateFab setelah menambah item
    alert(`"${productData.productTitle}" berhasil ditambahkan ke keranjang!`);
  },
  
  removeFromCart(productSlug) {
    this.cart = this.cart.filter(item => item.slug !== productSlug);
    this.saveCart();
    this.updateCartIcon();
    this.renderCartItems();
    this.updateFab(); // Panggil updateFab setelah menghapus item
  },

  // ... (sisa fungsi: renderCartItems, checkoutToWhatsApp, saveCart, updateCartIcon tetap sama) ...
  renderCartItems() {
    const container = document.getElementById('cart-items-container');
    const cartFooter = document.getElementById('cart-footer');
    const totalPriceEl = document.getElementById('cart-total-price');
    if (this.cart.length === 0) {
      container.innerHTML = '<p class="text-center text-muted mt-4">Keranjang Anda masih kosong.</p>';
      cartFooter.style.display = 'none';
      return;
    }
    container.innerHTML = '';
    let totalPrice = 0;
    this.cart.forEach(item => {
      totalPrice += item.price * item.quantity;
      const itemHtml = `<div class="d-flex mb-3 align-items-center"><img src="${item.image}" alt="${item.title}" width="70" height="70" class="rounded me-3"><div class="flex-grow-1"><h6 class="mb-1 small">${item.title}</h6><small class="text-muted">Jumlah: ${item.quantity}</small><p class="fw-bold mb-0">Rp${(item.price * item.quantity).toLocaleString('id-ID')}</p></div><button class="btn btn-sm btn-outline-danger js-remove-from-cart" data-product-slug="${item.slug}" aria-label="Hapus item"><i class="bi bi-x-lg"></i></button></div>`;
      container.innerHTML += itemHtml;
    });
    totalPriceEl.textContent = `Rp${totalPrice.toLocaleString('id-ID')}`;
    cartFooter.style.display = 'block';
  },
  checkoutToWhatsApp() {
    if (this.cart.length === 0) { alert('Keranjang Anda kosong!'); return; }
    const orderCode = `INV-${new Date().getTime().toString().slice(-6)}`;
    let message = `Halo! Saya ingin mengkonfirmasi pesanan saya dengan kode *#${orderCode}*.\n\nBerikut adalah detail pilihan saya:\n-----------------------------------\n`;
    let totalPrice = 0;
    this.cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      totalPrice += itemTotal;
      message += `*${item.title}*\n(Jumlah: ${item.quantity} x Rp${item.price.toLocaleString('id-ID')})\n\n`;
    });
    message += `-----------------------------------\n*TOTAL BELANJA: Rp${totalPrice.toLocaleString('id-ID')}*\n\nMohon siapkan detail pengiriman saya:\nNama Penerima:\nAlamat Lengkap:\nNo. HP Aktif:\n\nSaya siap untuk melanjutkan ke tahap pembayaran. Terima kasih! 🙏`;
    const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  },
  saveCart() {
    localStorage.setItem('tokoonline_cart', JSON.stringify(this.cart));
  },
  updateCartIcon() {
    const cartCountBadge = document.getElementById('cart-count-badge');
    if (cartCountBadge) {
      const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCountBadge.textContent = totalItems;
      cartCountBadge.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
  },
};

document.addEventListener('DOMContentLoaded', () => Cart.init());