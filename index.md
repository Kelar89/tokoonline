---
layout: base.njk
title: Home
permalink: /
description: "Selamat datang di toko kami. Temukan produk terbaik dengan penawaran menarik, langsung terhubung ke WhatsApp untuk pemesanan."
---

<div class="container my-5">
  <div class="row">
    <div class="col-12 text-center">
      <h1 class="display-4 fw-bold">{{ metadata.tagline }}</h1>
      <p class="lead col-lg-8 mx-auto">
        Jelajahi koleksi produk pilihan kami. Jika ada yang Anda suka, cukup klik untuk bertanya atau memesan langsung melalui WhatsApp. Tanpa ribet, tanpa aplikasi tambahan.
      </p>
      <a href="{{ '/produk/' | url }}" class="btn btn-primary btn-lg mt-3">Lihat Semua Produk</a>
      <a href="https://wa.me/{{ metadata.contact.whatsapp }}?text=Halo%20Admin,%20saya%20tertarik%20dengan%20produk%20Anda." class="btn btn-success btn-lg mt-3" target="_blank">
        <i class="bi bi-whatsapp"></i> Hubungi Kami
      </a>
    </div>
  </div>
</div>

<div class="container my-5 py-5">
    <div class="row text-center mb-5">
      <div class="col">
        <h2 class="fw-bold">Keunggulan Toko Kami</h2>
        <p class="lead">Komitmen kami untuk memberikan yang terbaik bagi Anda.</p>
      </div>
    </div>
    <div class="row g-4">
      {%- for service in services -%}
      <div class="col-md-6 col-lg-4">
        <div class="text-center">
          <i class="{{ service.icon }} fs-1 text-primary"></i>
          <h4 class="fw-bold my-3">{{ service.title }}</h4>
          <p class="text-muted">{{ service.description }}</p>
        </div>
      </div>
      {%- endfor -%}
    </div>
</div>
<div class="bg-light py-5">
  <div class="container">
    <div class="row text-center mb-4">
      <div class="col">
        <h2 class="fw-bold">Apa Kata Mereka?</h2>
        <p class="lead">Testimoni dari pelanggan yang sudah puas berbelanja di toko kami.</p>
      </div>
    </div>
    <div class="row">
      {%- for review in reviews | limit(4) -%}
      <div class="col-lg-6 mb-4">
        <div class="card h-100">
          <div class="card-body text-center">
            <img src="{{ review.avatar }}" alt="Avatar for {{ review.author }}" class="rounded-circle mb-3" style="width: 80px;">
            <p class="fst-italic">"{{ review.quote }}"</p>
            <footer class="blockquote-footer mt-3">{{ review.author }}, <cite title="Source Title">{{ review.origin }}</cite></footer>
          </div>
        </div>
      </div>
      {%- endfor -%}
    </div>
  </div>
</div>