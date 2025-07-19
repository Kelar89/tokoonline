---
layout: base.njk
title: Jurnal Gaya
permalink: /jurnal/index.html
---

<div class="container my-5 py-5">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      
      <div class="text-center mb-5">
        <h1 class="fw-bold display-5 hero-headline">{{ title }}</h1>
        <p class="lead">Inspirasi dan tips dari stylist kami untuk gaya Anda sehari-hari.</p>
      </div>

      {%- for post in collections.post | reverse -%}
        <div class="mb-4">
          <h2><a href="{{ post.url | url }}" class="text-dark text-decoration-none">{{ post.data.title }}</a></h2>
          <p class="text-muted small">Dipublikasikan pada {{ post.data.date | readableDate }}</p>
          <p>{{ post.data.description or post.templateContent | truncate(150) }}</p>
          <a href="{{ post.url | url }}" class="btn btn-outline-primary">Baca Selengkapnya</a>
        </div>
        <hr class="my-4">
      {%- endfor -%}

    </div>
  </div>
</div>