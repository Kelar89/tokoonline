---
layout: base.njk
title: Kuis Gaya Personal
permalink: /kuis/index.html
---

<div class="container my-5 py-5">
  <div class="row justify-content-center">
    <div class="col-lg-8 text-center" id="quiz-container">

      <div id="quiz-start-screen">
        <h1 class="display-5 fw-bold hero-headline">{{ quiz.title }}</h1>
        <p class="lead my-4">Jawab 3 pertanyaan singkat untuk mendapatkan rekomendasi produk yang dipersonalisasi khusus untuk Anda.</p>
        <button id="start-quiz-btn" class="btn btn-primary btn-lg">Mulai Kuis Sekarang</button>
      </div>

      <div id="quiz-main" class="hidden">
        <div id="quiz-header">
          <p id="quiz-progress" class="text-muted"></p>
          <h2 id="quiz-question" class="fw-bold mb-4"></h2>
        </div>
        <div id="quiz-answers" class="row justify-content-center g-4">
          </div>
      </div>

      <div id="quiz-results-screen" class="hidden">
        <h2 class="fw-bold">Rekomendasi Gaya Untuk Anda!</h2>
        <p class="lead">Berdasarkan jawaban Anda, berikut adalah produk yang paling cocok untuk melengkapi gaya Anda.</p>
        <div id="quiz-results-products" class="row mt-4">
          </div>
        <hr class="my-4">
        <p>Suka dengan rekomendasinya?</p>
        <a id="quiz-whatsapp-btn" href="#" class="btn btn-success btn-lg" target="_blank">
          <i class="bi bi-whatsapp"></i> Diskusikan dengan Stylist
        </a>
      </div>

    </div>
  </div>
</div>

<script>
  const allProducts = {{ products | dump | safe }};
  const quizData = {{ quiz | dump | safe }};
</script>