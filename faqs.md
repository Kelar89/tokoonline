---
layout: base.njk
title: Frequently Asked Questions
permalink: /faqs/index.html
---

<div class="container my-5 py-5">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      
      <div class="text-center mb-5">
        <h1 class="fw-bold">{{ title }}</h1>
        <p class="lead">Temukan jawaban untuk pertanyaan yang paling sering diajukan di sini.</p>
      </div>

      <div class="accordion" id="faqAccordion">
        {%- for item in faqs -%}
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading-{{ loop.index }}">
            <button class="accordion-button {% if loop.first %}{% else %}collapsed{% endif %}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-{{ loop.index }}" aria-expanded="{% if loop.first %}true{% else %}false{% endif %}" aria-controls="collapse-{{ loop.index }}">
              {{ item.question }}
            </button>
          </h2>
          <div id="collapse-{{ loop.index }}" class="accordion-collapse collapse {% if loop.first %}show{% endif %}" aria-labelledby="heading-{{ loop.index }}" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              {{ item.answer }}
            </div>
          </div>
        </div>
        {%- endfor -%}
      </div>

    </div>
  </div>
</div>