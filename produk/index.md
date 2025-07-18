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

  <div class="row justify-content-center my-4">
    <div class="col-auto">
      <div id="product-filters" class="btn-group" role="group" aria-label="Product Filters">
        <button type="button" class="btn btn-outline-dark active" data-filter="*">All</button>
        {#- Ini baris yang diubah, sekarang menggunakan filter baru kita -#}
        {%- set categories = products | getUniqueCategories -%}
        {%- for category in categories -%}
        <button type="button" class="btn btn-outline-dark" data-filter="{{ category }}">{{ category }}</button>
        {%- endfor -%}
      </div>
    </div>
  </div>

  <div id="product-grid" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-1">
    {%- for product in products -%}
    <div class="col product-item" data-category="{{ product.category }}">
      {%- include "components/product-card.njk" -%}
    </div>
    {%- endfor -%}
  </div>
</div>