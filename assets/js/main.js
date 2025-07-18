document.addEventListener('DOMContentLoaded', function() {
  const filtersContainer = document.querySelector('#product-filters');
  const productItems = document.querySelectorAll('#product-grid .product-item');

  if (filtersContainer) {
    filtersContainer.addEventListener('click', function(event) {
      // Pastikan yang diklik adalah tombol filter
      if (event.target.tagName !== 'BUTTON') {
        return;
      }

      // Hapus kelas 'active' dari semua tombol, lalu tambahkan ke yang diklik
      const currentActive = filtersContainer.querySelector('.active');
      if (currentActive) {
        currentActive.classList.remove('active');
      }
      event.target.classList.add('active');

      const filterValue = event.target.getAttribute('data-filter');

      // Loop semua item produk
      productItems.forEach(function(item) {
        const itemCategory = item.getAttribute('data-category');
        
        // Jika filter adalah "All" (*) ATAU kategori item cocok dengan filter
        if (filterValue === '*' || itemCategory === filterValue) {
          item.classList.remove('d-none'); // Tampilkan item
        } else {
          item.classList.add('d-none'); // Sembunyikan item
        }
      });
    });
  }
});