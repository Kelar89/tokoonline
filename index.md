---
layout: base.njk
title: Home
permalink: /
description: "Kami bukan sekadar toko. Kami adalah partner Anda dalam menemukan gaya yang benar-benar mewakili diri Anda."
image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1200&auto=format&fit=crop"
---

<div class="container col-xxl-8 px-4 py-5">
  <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div class="col-10 col-sm-8 col-lg-6" data-aos="fade-left">
      <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop" class="d-block mx-lg-auto img-fluid rounded shadow-lg" alt="Stylish Man" loading="lazy">
    </div>
    <div class="col-lg-6" data-aos="fade-right">
      <h1 class="display-4 fw-bold lh-1 mb-3 hero-headline">Gaya Personal Anda, Ditemukan.</h1>
      <p class="lead">Kami bukan sekadar toko. Kami adalah partner Anda dalam menemukan gaya yang benar-benar mewakili diri Anda. Mulai konsultasi gratis dengan fashion stylist kami via WhatsApp.</p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <a href="{{ '/produk/' | url }}" class="btn btn-primary btn-lg px-4 me-md-2">Jelajahi Koleksi</a>
        <a href="https://wa.me/{{ metadata.contact.whatsapp }}?text=Halo, saya ingin mulai konsultasi gaya." target="_blank" class="btn btn-outline-secondary btn-lg px-4">
          <i class="bi bi-whatsapp"></i> Konsultasi Sekarang
        </a>
      </div>
    </div>
  </div>
</div>
<div class="container my-5" data-aos="fade-up">
  <div class="row text-center mb-5">
    <div class="col">
      <h2 class="fw-bold">Inspirasi Gaya Minggu Ini</h2>
      <p class="lead">Klik ikon '+' untuk melihat detail produk dan menambahkannya ke keranjang.</p>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-lg-10">
      <div class="lookbook-wrapper shadow-lg">
        <img src="https://images.unsplash.com/photo-1521577352947-f54270997a3a?q=80&w=2070&auto=format&fit=crop" alt="Lookbook" class="img-fluid rounded">
        
        <button class="hotspot" style="top: 45%; left: 48%;" data-bs-toggle="modal" data-bs-target="#productModal" data-product-slug="kemeja-flanel-premium">
          <span>+</span>
        </button>
        
        <button class="hotspot" style="top: 75%; left: 52%;" data-bs-toggle="modal" data-bs-target="#productModal" data-product-slug="celana-chino-slim-fit">
          <span>+</span>
        </button>

      </div>
    </div>
  </div>
</div>
<div class="container my-5 text-center" data-aos="zoom-in">
    <div class="row justify-content-center">
        <div class="col-md-8 bg-light p-5 rounded">
            <h2 class="fw-bold">Bingung Memilih Gaya?</h2>
            <p class="lead my-3">Biarkan stylist kami membantu. Ikuti kuis singkat kami dan dapatkan rekomendasi produk yang dipersonalisasi untuk Anda.</p>
            <a href="{{ '/kuis/' | url }}" class="btn btn-primary">Ikuti Kuis Gaya Personal</a>
        </div>
    </div>
</div>
<div class="bg-light py-5" data-aos="fade-up">
  <div class="container">
    <div class="row text-center mb-5">
      <div class="col">
        <h2 class="fw-bold">Pesan Semudah Percakapan</h2>
        <p class="lead">Tidak ada lagi form yang rumit. Cukup ikuti alur ini.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="chat-bubble-container">
          <div class="chat-bubble left" data-aos="fade-right" data-aos-delay="200">
            <h3 class="fw-bold mb-2"><span class="badge bg-primary rounded-pill me-2">1</span>Pilih Produk & Hubungi WA</h3>
            <p class="mb-0 text-muted">Jelajahi produk kami. Jika ada yang Anda suka, klik tombol 'Pesan Sekarang' untuk langsung memulai percakapan dengan admin kami di WhatsApp.</p>
          </div>
          <div class="chat-bubble right" data-aos="fade-left" data-aos-delay="400">
            <h3 class="fw-bold mb-2"><span class="badge bg-primary rounded-pill me-2">2</span>Konfirmasi & Pembayaran</h3>
            <p class="mb-0 text-muted">Admin kami akan mengkonfirmasi pesanan, total harga, dan ongkos kirim. Lakukan pembayaran melalui metode yang telah disepakati.</p>
          </div>
          <div class="chat-bubble left" data-aos="fade-right" data-aos-delay="600">
            <h3 class="fw-bold mb-2"><span class="badge bg-primary rounded-pill me-2">3</span>Pesanan Dikirim</h3>
            <p class="mb-0 text-muted">Setelah pembayaran dikonfirmasi, pesanan Anda akan segera kami kemas dengan aman dan kirimkan langsung ke alamat Anda.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container my-5 py-5 text-center" data-aos="zoom-in">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <h2 class="display-5 fw-bold">Siap Menemukan Gaya Anda?</h2>
            <p class="lead my-4">Seluruh koleksi kami siap untuk Anda jelajahi. Temukan potongan fashion yang akan menjadi favorit baru Anda hari ini.</p>
            <a href="{{ '/produk/' | url }}" class="btn btn-primary btn-lg">Lihat Semua Produk Sekarang</a>
        </div>
    </div>
</div>
<script>
  const allProducts = {{ products | dump | safe }};
  const quizData = {{ quiz | dump | safe }};
  const dealEndDate = "{{ metadata.dealEndDate }}";
</script>