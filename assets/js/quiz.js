// File: assets/js/quiz.js

document.addEventListener('DOMContentLoaded', () => {
  // Pastikan kita berada di halaman kuis
  const quizContainer = document.getElementById('quiz-container');
  if (!quizContainer) {
    return;
  }

  // --- Ambil semua elemen dari HTML ---
  const startScreen = document.getElementById('quiz-start-screen');
  const quizMain = document.getElementById('quiz-main');
  const resultsScreen = document.getElementById('quiz-results-screen');
  
  const startBtn = document.getElementById('start-quiz-btn');
  const progressText = document.getElementById('quiz-progress');
  const questionText = document.getElementById('quiz-question');
  const answersContainer = document.getElementById('quiz-answers');
  const resultsContainer = document.getElementById('quiz-results-products');
  const whatsappBtn = document.getElementById('quiz-whatsapp-btn');

  // --- Variabel untuk state kuis ---
  let currentQuestionIndex = 0;
  let userAnswers = [];

  // --- Fungsi Utama ---

  function startQuiz() {
    startScreen.classList.add('hidden');
    quizMain.classList.remove('hidden');
    userAnswers = [];
    currentQuestionIndex = 0;
    showQuestion();
  }

  function showQuestion() {
    const question = quizData.questions[currentQuestionIndex];
    progressText.textContent = `Pertanyaan ${currentQuestionIndex + 1} dari ${quizData.questions.length}`;
    questionText.textContent = question.question_text;
    answersContainer.innerHTML = ''; // Kosongkan jawaban sebelumnya

    question.answers.forEach(answer => {
      const answerEl = document.createElement('div');
      answerEl.classList.add('col-md-6');
      answerEl.innerHTML = `
        <div class="answer-card" data-value="${answer.value}">
          <img src="${answer.image_url}" alt="${answer.answer_text}">
          <div class="answer-text">${answer.answer_text}</div>
        </div>
      `;
      answersContainer.appendChild(answerEl);
    });
  }

  function selectAnswer(selectedValue) {
    userAnswers.push(selectedValue);
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
    quizMain.classList.add('hidden');
    resultsScreen.classList.remove('hidden');

    // Algoritma sederhana untuk mencocokkan produk
    const recommendedProducts = allProducts.filter(product => {
      if (!product.tags) return false;
      // Hitung berapa banyak tag produk yang cocok dengan jawaban user
      const matchCount = product.tags.filter(tag => userAnswers.includes(tag)).length;
      return matchCount >= 2; // Rekomendasikan jika cocok minimal 2 tag
    }).slice(0, 3); // Ambil maksimal 3 produk

    resultsContainer.innerHTML = ''; // Kosongkan hasil sebelumnya
    
    if (recommendedProducts.length > 0) {
        recommendedProducts.forEach(product => {
            const productEl = document.createElement('div');
            productEl.classList.add('col-md-4');
            // Menggunakan komponen kartu produk yang sudah kita punya
            productEl.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <h4 class="card-price text-end fw-bold text-primary">Rp${product.price}</h4>
                </div>
                <div class="card-footer bg-white border-top-0">
                    <a href="/produk/${product.slug}/" class="btn btn-outline-secondary w-100">Lihat Detail</a>
                </div>
            </div>
            `;
            resultsContainer.appendChild(productEl);
        });
    } else {
        resultsContainer.innerHTML = '<p class="text-muted">Maaf, kami belum menemukan produk yang cocok. Coba jelajahi semua koleksi kami!</p>';
    }

    // Buat pesan WhatsApp
    let message = `Halo, saya sudah menyelesaikan Kuis Gaya Personal!\n\nHasil jawaban saya:\n- ${userAnswers.join('\n- ')}\n\nBisa bantu saya lebih lanjut dengan rekomendasinya? Terima kasih!`;
    whatsappBtn.href = `https://wa.me/6285894448143?text=${encodeURIComponent(message)}`;
  }

  // --- Event Listeners ---
  startBtn.addEventListener('click', startQuiz);

  answersContainer.addEventListener('click', (event) => {
    const selectedCard = event.target.closest('.answer-card');
    if (selectedCard) {
      const selectedValue = selectedCard.dataset.value;
      selectAnswer(selectedValue);
    }
  });
});