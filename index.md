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