---
layout: base.njk
title: Hubungi Kami
permalink: /contact/index.html
---

<div class="container my-5 py-5">
  <div class="row justify-content-center">
    <div class="col-lg-10">

      <div class="text-center mb-5">
        <h1 class="fw-bold">{{ title }}</h1>
        <p class="lead">Kami siap membantu. Kirim pesan atau kunjungi lokasi kami.</p>
      </div>

      <div class="row g-5">
        <div class="col-md-5">
          <h3 class="fw-bold mb-3">Info Kontak</h3>
          <p>Jangan ragu untuk menghubungi kami melalui detail di bawah ini. Tim kami akan merespons secepat mungkin.</p>
          <div class="d-flex align-items-start mb-3">
            <i class="bi bi-geo-alt-fill fs-4 text-primary me-3"></i>
            <div>
              <strong>Alamat:</strong><br>
              Jl. Digital Kreatif No. 123<br>
              Jakarta Utara, Indonesia
            </div>
          </div>
          <div class="d-flex align-items-start mb-3">
            <i class="bi bi-whatsapp fs-4 text-primary me-3"></i>
            <div>
              <strong>WhatsApp:</strong><br>
              <a href="https://wa.me/{{ metadata.contact.whatsapp }}" target="_blank">{{ metadata.contact.whatsappFormatted }}</a>
            </div>
          </div>
          <div class="d-flex align-items-start">
            <i class="bi bi-envelope-fill fs-4 text-primary me-3"></i>
            <div>
              <strong>Email:</strong><br>
              <a href="mailto:{{ metadata.contact.email }}">{{ metadata.contact.email }}</a>
            </div>
          </div>
        </div>

        <div class="col-md-7">
           <div class="ratio ratio-16x9">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.822591696223!2d106.8242230750361!3d-6.154749393832168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2c6bf1de393897!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1677840822453!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded shadow"></iframe>
           </div>
        </div>
      </div>

    </div>
  </div>
</div>