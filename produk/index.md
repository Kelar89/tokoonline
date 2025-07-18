---
layout: base.njk
title: Semua Produk Kami
permalink: /produk/index.html
description: "Jelajahi semua koleksi produk unggulan dari toko kami."
---

<div class="container my-5">
  <div class="row">
    <div class="col text-center">
      <h1>{{ title }}</h1>
      <p class="lead">Pilih produk yang Anda suka dan hubungi kami langsung via WhatsApp.</p>
    </div>
  </div>

  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
    {%- for product in products -%}
    <div class="col">
      {# Pastikan baris ini persis seperti di bawah #}
      {%- include "components/product-card.njk" -%}
    </div>
    {%- endfor -%}
  </div>
</div>