/**
 * Translations Dictionary for Nurul Azizah Personal Website
 * Supports: Indonesian ('id') and English ('en')
 */

const translations = {
  id: {
    meta_title: "Nurul Azizah — IT Developer & Full-Stack Engineer",
    nav: {
      home: "Home",
      projects: "Proyek",
      experience: "Pengalaman",
      tools: "Keahlian",
      certificates: "Sertifikat",
      contact: "Kontak",
      download_cv: "Lihat CV"
    },
    hero: {
      status: "Tersedia untuk Peluang Baru",
      role: "IT Developer",
      role_pill: "Full-Stack Engineer",
      description: "Full-Stack Developer berpengalaman yang berdedikasi pada pembelajaran berkelanjutan dan teknologi web modern. Memiliki rekam jejak terbukti dalam menghadirkan solusi sistem enterprise, alur ERP, dan aplikasi web berkualitas tinggi melalui komunikasi efektif dan kolaborasi klien.",
      btn_projects: "Lihat Proyek",
      btn_contact: "Hubungi Saya",
      btn_cv: "Lihat CV",
      location: "Surabaya, Indonesia",
      location_label: "Lokasi",
      email_copy_title: "Klik untuk salin email"
    },
    metrics: {
      exp_num: "+6",
      exp_label: "Tahun Pengalaman Praktis",
      proj_num: "+12",
      proj_label: "Sistem Enterprise & Web Dibangun",
      cert_num: "+16",
      cert_label: "Sertifikasi & Penghargaan Akademik",
      sat_num: "100%",
      sat_label: "Komitmen & Kolaborasi Kerja"
    },
    projects: {
      tag: "Portofolio Karya",
      title: "Recent Projects",
      subtitle: "Kumpulan aplikasi web enterprise, sistem informasi instansi pemerintah, sistem manajemen pendidikan, dan rekayasa data yang telah berhasil diimplementasikan.",
      filter_all: "Semua Proyek (12)",
      filter_enterprise: "Enterprise & ERP",
      filter_public: "Pemerintah & Publik",
      filter_education: "Sistem Pendidikan",
      
      // Items
      p1_cat: "Pemerintah & Energi",
      p1_title: "SIEBA - New Renewable Energy",
      p1_desc: "Sistem informasi monitoring infrastruktur energi baru dan terbarukan untuk Dinas ESDM Provinsi Jawa Timur.",
      p1_full: "Sistem Informasi Energi Baru Terbarukan (SIEBA) dikembangkan untuk Dinas ESDM Provinsi Jawa Timur guna memantau, mendokumentasikan, dan mengelola data infrastruktur pembangkit energi terbarukan di seluruh wilayah Jawa Timur. Dilengkapi fitur autentikasi multi-tier, visualisasi sebaran fasilitas, dan pelaporan operasional berkala.",

      p2_cat: "Sistem Pendidikan",
      p2_title: "School Academic Information",
      p2_desc: "Portal akademik terpadu sekolah Al Anwar Jambi meliputi modul PPDB Online, kalender akademik, dan informasi kelembagaan.",
      p2_full: "Sistem Informasi Akademik Terpadu untuk lembaga pendidikan Al Anwar Jambi. Mengelola pendaftaran siswa baru (PPDB Online), kalender akademik digital, pengumuman lembaga, galeri kegiatan, serta portal informasi publik bagi wali santri dan calon siswa.",

      p3_cat: "Enterprise & CRM",
      p3_title: "Omni Channel Customer Care",
      p3_desc: "Platform agregasi pesan terpadu menghubungkan WhatsApp, Twitter, Instagram, dan web chat dalam satu analitik interaksi petugas.",
      p3_full: "Aplikasi layanan terpadu Omni Channel yang menghubungkan kanal komunikasi publik (WhatsApp, Twitter/X, Instagram DM, dan Web Chat) ke dalam satu dashboard petugas Disdukcapil. Memiliki analitik grafik aktivitas tiket harian, pie chart interaksi media sosial, dan status performa agen pelayanan.",

      p4_cat: "Financial & Pendidikan",
      p4_title: "School Budget Information System",
      p4_desc: "Sistem kontrol dan audit keuangan realisasi dana infaq, penerimaan, dan RKAS untuk jenjang TK, SD, SMP, dan SMA Yayasan Wachid Hasyim.",
      p4_full: "Sistem Pengendalian Anggaran (E-Budget Controlling) Yayasan Wachid Hasyim Surabaya. Mengontrol dan mengaudit alur realisasi keuangan multi-satuan pendidikan (TK, SD, SMP, SMA) meliputi realisasi infaq, penerimaan dana sekolah, dan kepatuhan RKAS.",

      p5_cat: "Payroll & HR",
      p5_title: "School Salary System (SIGAP)",
      p5_desc: "Aplikasi penggajian digital tenaga pendidik dan karyawan sekolah dengan kalkulasi tunjangan otomatis serta cetak slip gaji.",
      p5_full: "SIGAP - School Salary Information System. Solusi penggajian guru dan staf sekolah terotomatisasi dengan modul perhitungan tunjangan, golongan tugas, potongan kehadiran, rekapitulasi slip gaji elektronik, dan grafik komparasi biaya honorarium per bulan.",

      p6_cat: "Billing & Kasir",
      p6_title: "School Payment System (SIPS)",
      p6_desc: "Manajemen pembayaran SPP dan kasir sekolah dengan log audit kas harian, rekapitulasi bulanan, dan integrasi kalender tagihan.",
      p6_full: "SIPS - School Payment Information System. Mengelola transaksi pembayaran SPP, infaq, dan iuran siswa harian. Dilengkapi log aktivitas multi-kasir, kalender jatuh tempo penagihan, status saldo kas harian, dan pencetakan kuitansi resmi sekolah.",

      p7_cat: "Pemerintah & Logistik",
      p7_title: "Delivery Note System (SIJALAN)",
      p7_desc: "Sistem informasi pencatatan surat pengantar, tracking ekspedisi berkas perkara hukum, dan manajemen hak akses seksi dinas.",
      p7_full: "SIJALAN (Sistem Informasi Surat Pengantar dan Ekspedisi). Aplikasi pelacakan distribusi berkas perkara hukum dan surat dinas internal di lingkungan Kejaksaan Negeri. Memiliki kontrol hak akses ketat antar seksi (Pidum, Pidsus, Intelijen, Datun, Pembinaan).",

      p8_cat: "K3 & Audit Korporat",
      p8_title: "Audit System (SMK3 PTPN XI)",
      p8_desc: "Sistem evaluasi dan audit kepatuhan SMK3 terdigitalisasi dengan verifikasi bukti dokumen objektif untuk operasional perkebunan.",
      p8_full: "Sistem Audit Digital Keselamatan dan Kesehatan Kerja (SMK3) di lingkungan pabrik dan operasional PT Perkebunan Nusantara XI. Memfasilitasi auditor dalam pengisian daftar periksa standar, kesesuaian klausul K3, serta pengunggahan bukti dokumen objektif.",

      p9_cat: "Cloud ERP Enterprise",
      p9_title: "Data Engineer of Acumatica",
      p9_desc: "Rekayasa aliran data dan kustomisasi alur bisnis sistem ERP Cloud Acumatica (Sales Orders, Inventory, Payables, Receivables).",
      p9_full: "Implementasi dan rekayasa data alur ERP Acumatica Cloud. Meliputi konfigurasi modul Sales Orders, Purchases, Inventory, Receivables, Payables, hingga integrasi otomatisasi pelaporan keuangan antar entitas bisnis.",

      p10_cat: "Logistik & Armada",
      p10_title: "Data Engineer of TMS System",
      p10_desc: "Dashboard analitik armada logistik real-time untuk memantau performa pengiriman, status tugas harian armada, dan metrik driver.",
      p10_full: "Sistem analitik Transport Management System (TMS) untuk pemantauan armada logistik real-time. Memantau status aktivitas armada (Delivery, Pickup, Returning, Try Delivery), rasio utilisasi driver, dan persentase penyelesaian pengiriman harian.",

      p11_cat: "Manufaktur & Operasional",
      p11_title: "Productivity Management System",
      p11_desc: "Sistem evaluasi produktivitas kerja operasional dan laporan aktivitas harian pabrik fasilitas Cikarang dan GIIC.",
      p11_full: "Sistem Pemantauan Produktivitas Karyawan dan Aktivitas Manufaktur PT Pangan Lestari di lokasi operasional Cikarang dan GIIC. Menampilkan grafik komparasi jenis aktivitas tim, efisiensi pengerjaan tugas, dan laporan harian divisi operasional.",

      p12_cat: "Pelayanan Publik",
      p12_title: "Queue Info System (SI ANIK)",
      p12_desc: "Sistem antrean loket cerdas dengan visualisasi diagram pemanggilan real-time dan rekapitulasi tren kunjungan harian.",
      p12_full: "SI ANIK - Sistem Antrean Informasi dan Pelayanan Publik. Solusi antrean loket terdigitalisasi dengan diagram lingkaran status pelayanan (Belum Dilayani, Sedang Dilayani, Selesai), grafik komparasi pengunjung hari ini vs kemarin, serta panggilan suara otomatis."
    },
    experience: {
      tag: "Pengalaman & Studi",
      title: "Career & Education",
      subtitle: "Rekam jejak profesional dalam rekayasa perangkat lunak, sistem data korporat, serta latar belakang pendidikan teknik informatika.",
      work_heading: "Pengalaman Kerja",
      edu_heading: "Pendidikan Formal",
      
      pangan_role: "Electronic Data Processing",
      pangan_period: "2024 — Sekarang",
      pangan_desc: "Bertanggung jawab atas pemrosesan data operasional elektronik, integrasi data sistem inventori & logistik, pemantauan alur produksi, serta penegakan kepatuhan standar industri pangan dan sistem K3 korporat.",

      prima_role: "Programmer",
      prima_period: "2021 — 2024",
      prima_desc: "Mengembangkan aplikasi web kustom untuk klien instansi dan korporasi, arsitektur database, sistem antrean pintar (SI ANIK), sistem manajemen sekolah, serta integrasi API layanan multi-kanal.",

      thecno_role: "Programmer",
      thecno_period: "2020 — 2021",
      thecno_desc: "Membangun modul backend, query database relasional, antarmuka pengguna interaktif, dan pemeliharaan aplikasi berbasis web untuk berbagai solusi sistem klien.",

      bromo_role: "Programmer Intern",
      bromo_period: "Magang 3 Bulan",
      bromo_desc: "Praktik kerja industri dalam pengembangan software solusi bisnis, pengujian antarmuka aplikasi, dan asistensi teknis tim rekayasa perangkat lunak.",

      doran_role: "Staff Operasional",
      doran_period: "2 Bulan",
      doran_desc: "Mendukung efisiensi alur operasional dan pencatatan inventaris teknologi dalam lingkungan kerja yang dinamis dan berorientasi target.",

      pens_title: "Politeknik Elektronika Negeri Surabaya (PENS)",
      pens_degree: "D3 Informatics Engineering Program (A.Md.Kom.)",
      pens_desc: "Program studi Teknik Informatika dengan fokus pada rekayasa perangkat lunak lanjutan, perancangan basis data relasional skala enterprise, algoritma pemrosesan, dan pengembangan sistem terdistribusi.",
      
      smk_title: "SMK 17 Agustus 1945 Surabaya",
      smk_degree: "Software Engineering (Rekayasa Perangkat Lunak - RPL)",
      smk_desc: "Pendidikan kejuruan spesialisasi pemrograman komputer, dasar arsitektur web, basis data, dan logika pemrograman.",
      smk_award: "★ Peraih Predikat: \"Siswa Terbaik Jenjang XI RPL 2018-2019\"",

      lang_title: "Kemampuan Bahasa",
      lang_id: "Bahasa Indonesia",
      lang_id_lvl: "Native / Fasih",
      lang_en: "Bahasa Inggris",
      lang_en_lvl: "Skor EPT: 493"
    },
    tools: {
      tag: "Keahlian & Teknologi",
      title: "Premium Tools & Skills",
      subtitle: "Teknologi dan metodologi utama yang digunakan dalam merancang, membangun, dan mengoptimalkan sistem perangkat lunak berkinerja tinggi.",
      card1_title: "Backend Development & Frameworks",
      card1_cat: "Core Programming & Architecture",
      card1_desc: "Pengalaman mendalam dalam arsitektur backend MVC, perancangan RESTful API, dan optimasi logika bisnis performa tinggi.",
      
      card2_title: "Databases & Query",
      card2_cat: "Storage & Data Optimization",
      card2_desc: "Perancangan skema relasional, indexing, stored procedures, dan query optimization.",

      card3_title: "Enterprise Systems",
      card3_cat: "ERP & Business Processes",
      card3_desc: "Kustomisasi alur bisnis rantai pasok, manajemen gudang, keuangan, dan logistik.",

      card4_title: "Power BI & Analytics",
      card4_cat: "Business Intelligence",
      card4_desc: "Pembuatan dashboard analitik eksekutif dan visualisasi KPI real-time.",

      card5_title: "Frontend & Version Control",
      card5_cat: "Interface & Git Workflow",
      card5_desc: "Pembuatan UI web yang interaktif, responsif, serta kolaborasi repositori berbasis Git.",

      card6_title: "Methodologies & Professional Skills",
      card6_cat: "Problem Solving & Execution",
      card6_desc: "Kemampuan analitis dalam merumuskan solusi teknis yang tepat guna, manajemen prioritas tugas, dan koordinasi komunikatif dengan stakeholder."
    },
    certificates: {
      tag: "Sertifikasi & Penghargaan",
      title: "Verified Credentials",
      subtitle: "Ijazah kelulusan, sertifikat kompetensi teknologi informasi (AWS, Dart), standar audit industri, dan penghargaan akademik resmi.",
      cert1_issuer: "Politeknik Elektronika Negeri Surabaya",
      cert1_title: "Ahli Madya Komputer (A.Md.Kom.)",
      cert1_date: "Juli 2024",

      cert2_issuer: "SMK 17 Agustus 1945 Surabaya",
      cert2_title: "Piagam Siswa Terbaik XI RPL",
      cert2_date: "Mei 2019",

      cert3_issuer: "Pusat Bahasa Universitas Hang Tuah",
      cert3_title: "English Proficiency Test (Score: 493)",
      cert3_date: "Oktober 2023",

      cert4_issuer: "Dicoding Academy",
      cert4_title: "Cloud Practitioner Essentials (AWS)",
      cert4_date: "Juni 2023",

      cert5_issuer: "Dicoding Academy",
      cert5_title: "Pemrograman dengan Dart",
      cert5_date: "Desember 2021",

      cert6_issuer: "AMEN ASEAN Mentorship",
      cert6_title: "Training of Mentors (ToM) AMEN",
      cert6_date: "Februari 2019",

      cert7_issuer: "PT Peac Bromo",
      cert7_title: "Sertifikat Magang Siswa",
      cert7_date: "April 2019",

      cert8_issuer: "PT Pangan Lestari",
      cert8_title: "Sertifikasi Basic K3",
      cert8_date: "Agustus 2025",

      cert9_issuer: "PT Pangan Lestari",
      cert9_title: "Food Safety System (FSSC 22000)",
      cert9_date: "Agustus 2025",

      cert10_issuer: "PT Pangan Lestari",
      cert10_title: "HACCP Certification",
      cert10_date: "Agustus 2025",

      cert11_issuer: "PT Pangan Lestari",
      cert11_title: "Food Fraud & Food Defense",
      cert11_date: "Agustus 2025",

      cert12_issuer: "PT Pangan Lestari",
      cert12_title: "Food Allergen Management",
      cert12_date: "Agustus 2025"
    },
    contact: {
      tag: "Hubungi Saya",
      headline: "Let's Work Together",
      subtitle: "Tertarik merekrut atau mendiskusikan implementasi sistem informasi, rekayasa data ERP, atau solusi web full-stack? Jangan ragu untuk terhubung secara langsung.",
      direct_wa: "WhatsApp / Telepon",
      direct_email: "Email Resmi",
      direct_linkedin: "LinkedIn",
      direct_github: "GitHub Portfolio",
      btn_download: "Lihat CV Lengkap",
      form_title: "Kirim Pesan Langsung",
      form_subtitle: "Pesan Anda akan otomatis terhubung ke kontak WhatsApp & email Nurul Azizah.",
      name_label: "Nama Anda",
      name_placeholder: "Masukkan nama Anda atau perusahaan",
      email_label: "Alamat Email",
      email_placeholder: "nama@perusahaan.com",
      topic_label: "Topik Diskusi / Layanan",
      topic_opt1: "Tawaran Pekerjaan (Full-Time / Contract)",
      topic_opt2: "Proyek Web Development / Sistem Informasi",
      topic_opt3: "Konsultasi ERP & Rekayasa Data",
      topic_opt4: "Peluang Kolaborasi Lainnya",
      msg_label: "Pesan Anda",
      msg_placeholder: "Jelaskan kebutuhan proyek atau detail posisi pekerjaan...",
      submit_btn: "Kirim via WhatsApp"
    },
    footer: {
      copyright: "Hak cipta dilindungi undang-undang.",
      back_to_top: "Kembali ke atas"
    },
    toast: {
      wa_sent: "Membuka WhatsApp untuk mengirim pesan...",
      email_copied: "Email jobbazizah@gmail.com disalin ke clipboard!"
    },
    modal: {
      project_showcase: "Project Showcase",
      client_label: "Klien / Lembaga",
      timeline_label: "Periode",
      tech_label: "Tech Stack",
      cert_category: "SERTIFIKAT & PENGHARGAAN",
      issuer_label: "Penerbit / Lembaga",
      date_label: "Tanggal Terbit",
      status_label: "Status Kredensial",
      verified_status: "Terverifikasi Resmi"
    },
    cv_modal: {
      title: "Curriculum Vitae",
      protected_badge: "Hanya Lihat (Dilindungi)",
      view_single: "Lembar",
      view_all: "Semua",
      prev_btn: "Sebelumnya",
      next_btn: "Berikutnya",
      page_indicator: "Halaman",
      of: "dari",
      protected_notice: "Dokumen ini diproteksi untuk pratinjau langsung dan tidak dapat diunduh."
    }
  },

  en: {
    meta_title: "Nurul Azizah — IT Developer & Full-Stack Engineer",
    nav: {
      home: "Home",
      projects: "Projects",
      experience: "Experience",
      tools: "Tools & Skills",
      certificates: "Certificates",
      contact: "Contact",
      download_cv: "View CV"
    },
    hero: {
      status: "Available for New Opportunities",
      role: "IT Developer",
      role_pill: "Full-Stack Engineer",
      description: "Experienced Full-Stack Developer passionate about continuous learning and keeping pace with evolving web technologies. Proven track record of delivering high-quality enterprise solutions, ERP flows, and web applications through effective communication and client collaboration.",
      btn_projects: "Recent Projects",
      btn_contact: "Let's Talk",
      btn_cv: "View CV",
      location: "Surabaya, Indonesia",
      location_label: "Location",
      email_copy_title: "Click to copy email"
    },
    metrics: {
      exp_num: "+6",
      exp_label: "Years of Practical Tech Experience",
      proj_num: "+12",
      proj_label: "Enterprise & Web Systems Built",
      cert_num: "+16",
      cert_label: "Certifications & Academic Honors",
      sat_num: "100%",
      sat_label: "Delivery Commitment & Collaboration"
    },
    projects: {
      tag: "Featured Portfolio",
      title: "Recent Projects",
      subtitle: "A curated collection of enterprise web applications, government information systems, educational management platforms, and data engineering solutions.",
      filter_all: "All Projects (12)",
      filter_enterprise: "Enterprise & ERP",
      filter_public: "Govt & Public Sector",
      filter_education: "Educational Systems",

      // Items
      p1_cat: "Government & Energy",
      p1_title: "SIEBA - New Renewable Energy",
      p1_desc: "Renewable energy infrastructure monitoring and reporting information system for the Department of Energy & Mineral Resources of East Java.",
      p1_full: "New Renewable Energy Information System (SIEBA) built for the East Java Provincial Energy and Mineral Resources Office (DESDM Jatim) to track, catalog, and oversee renewable energy plants across East Java. Features multi-role authentication, interactive facility maps, and periodic compliance metrics.",

      p2_cat: "Education System",
      p2_title: "School Academic Information",
      p2_desc: "Unified school academic portal for Al Anwar Jambi featuring online student admissions, academic calendar, and public communication.",
      p2_full: "Comprehensive Academic Information System for Al Anwar Jambi educational foundation. Manages digital new student admissions (PPDB Online), institutional calendar, official announcements, student activity galleries, and family portal.",

      p3_cat: "Enterprise & CRM",
      p3_title: "Omni Channel Customer Care",
      p3_desc: "Unified customer engagement platform integrating WhatsApp, Twitter, Instagram, and web chat into a centralized agent analytics hub.",
      p3_full: "Omnichannel customer care platform integrating public communication streams (WhatsApp, Twitter/X, Instagram DM, and Web Chat) into a single agent dashboard for Disdukcapil. Includes ticket analytics charts, social media pie charts, and real-time support performance tracking.",

      p4_cat: "Finance & Education",
      p4_title: "School Budget Information System",
      p4_desc: "Financial monitoring and budgeting control system for infaq funds, school revenue, and RKAS compliance across multiple school tiers.",
      p4_full: "E-Budget Controlling System for Yayasan Wachid Hasyim Surabaya. Oversees and audits fund realization across Kindergarten, Elementary, Junior High, and Senior High schools (TK, SD, SMP, SMA) ensuring strict RKAS compliance and accountability.",

      p5_cat: "Payroll & HR",
      p5_title: "School Salary System (SIGAP)",
      p5_desc: "Automated teacher and staff payroll system with automated allowance calculation, attendance deduction, and digital pay slips.",
      p5_full: "SIGAP - School Salary Information System. Automated compensation platform calculating teaching allowances, structural roles, attendance deductions, electronic salary slip generation, and monthly expense distribution charts.",

      p6_cat: "Billing & Cashier",
      p6_title: "School Payment System (SIPS)",
      p6_desc: "Daily tuition and fee cashier management with multi-operator audit logs, due date billing calendar, and receipt printing.",
      p6_full: "SIPS - School Payment Information System. Manages daily tuition, infaq, and student fee collections with detailed cashier audit trails, payment deadline calendars, daily balance summaries, and official digital receipts.",

      p7_cat: "Government & Logistics",
      p7_title: "Delivery Note System (SIJALAN)",
      p7_desc: "Document expedition tracking system for judicial case files and official courier registry with role-based divisional security.",
      p7_full: "SIJALAN (Delivery Note and Expedition Information System). Built for the State Prosecution Office (Kejaksaan Negeri) to securely trace legal case files, courier dispatches, and internal department handovers with strict section-level permissions.",

      p8_cat: "HSE & Corporate Audit",
      p8_title: "Audit System (SMK3 PTPN XI)",
      p8_desc: "Digital Occupational Health and Safety Management System (SMK3) compliance checklist with objective evidence upload.",
      p8_full: "Occupational Safety and Health Management System (SMK3) digital audit platform for industrial sugar mills and agricultural operations of PT Perkebunan Nusantara XI. Enables structured audits, compliance verification, and documentary evidence storage.",

      p9_cat: "Enterprise Cloud ERP",
      p9_title: "Data Engineer of Acumatica",
      p9_desc: "Data pipelines and business workflow engineering for Acumatica Cloud ERP modules (Sales Orders, Inventory, Payables, Receivables).",
      p9_full: "Enterprise cloud ERP data engineering and custom workflow design on Acumatica Cloud ERP. Configured Sales Orders, Purchasing, Inventory Control, Accounts Receivable, and Payables, with cross-system automated financial synchronization.",

      p10_cat: "Logistics & Fleet",
      p10_title: "Data Engineer of TMS System",
      p10_desc: "Real-time Transport Management System analytics dashboard monitoring dispatch performance, daily trip statuses, and driver metrics.",
      p10_full: "Logistics fleet analytics platform delivering real-time dispatch oversight across delivery, pickup, returning, and attempt statuses, driver utilization ratios, and daily order fulfillment metrics using Power BI and relational SQL.",

      p11_cat: "Manufacturing & Operations",
      p11_title: "Productivity Management System",
      p11_desc: "Operational productivity monitoring and manufacturing shift reporting for PT Pangan Lestari facilities in Cikarang and GIIC.",
      p11_full: "Manufacturing activity evaluation and worker productivity reporting system for PT Pangan Lestari Cikarang and GIIC plants. Visualizes work category distributions, task turnaround times, and operational performance records.",

      p12_cat: "Public Service",
      p12_title: "Queue Info System (SI ANIK)",
      p12_desc: "Smart multi-counter digital queuing system with real-time status pie charts, daily visitor trend tracking, and audio callouts.",
      p12_full: "SI ANIK - Smart Public Service Queue Information System. Multi-counter digital queue solution featuring real-time visual status charts (Pending, In-Progress, Completed), day-over-day visitor comparisons, and automated audio call announcements."
    },
    experience: {
      tag: "Journey & Background",
      title: "Career & Education",
      subtitle: "Professional trajectory in software engineering, enterprise data processing, and academic foundations in computer science.",
      work_heading: "Work Experience",
      edu_heading: "Formal Education",

      pangan_role: "Electronic Data Processing",
      pangan_period: "2024 — Present",
      pangan_desc: "Responsible for operational electronic data processing, inventory & logistics system integration, manufacturing flow monitoring, and adherence to food safety standards and corporate HSE regulations.",

      prima_role: "Programmer",
      prima_period: "2021 — 2024",
      prima_desc: "Developed custom web applications for government agencies and corporate clients, database architecture, smart queue systems (SI ANIK), school management systems, and multi-channel API integrations.",

      thecno_role: "Programmer",
      thecno_period: "2020 — 2021",
      thecno_desc: "Engineered backend modules, relational SQL queries, interactive frontends, and ongoing web application maintenance for client solutions.",

      bromo_role: "Programmer Intern",
      bromo_period: "3-Month Internship",
      bromo_desc: "Industrial practical training in business software solutions development, UI testing, and technical programming team support.",

      doran_role: "Operations Staff",
      doran_period: "2 Months",
      doran_desc: "Supported operational workflow efficiency and technology inventory documentation in a high-tempo retail environment.",

      pens_title: "Electronic Engineering Polytechnic Institute of Surabaya (PENS)",
      pens_degree: "D3 Informatics Engineering Program (A.Md.Kom.)",
      pens_desc: "Diploma in Informatics Engineering specializing in advanced software engineering, enterprise relational database design, processing algorithms, and distributed web systems.",

      smk_title: "SMK 17 Agustus 1945 Surabaya",
      smk_degree: "Software Engineering (Rekayasa Perangkat Lunak - RPL)",
      smk_desc: "Vocational education focused on computer programming, web architecture foundations, databases, and algorithmic problem solving.",
      smk_award: "★ Awarded: \"Best Student of Class XI Software Engineering 2018-2019\"",

      lang_title: "Language Proficiency",
      lang_id: "Indonesian",
      lang_id_lvl: "Native / Fluent",
      lang_en: "English",
      lang_en_lvl: "EPT Score: 493"
    },
    tools: {
      tag: "Skills & Stack",
      title: "Premium Tools & Skills",
      subtitle: "Core technologies, architectures, and methodologies utilized to design, build, and optimize high-performance software systems.",
      card1_title: "Backend Development & Frameworks",
      card1_cat: "Core Programming & Architecture",
      card1_desc: "Deep expertise in MVC backend architectures, RESTful API design, and high-performance business logic optimization.",

      card2_title: "Databases & Query",
      card2_cat: "Storage & Data Optimization",
      card2_desc: "Relational schema modeling, index tuning, complex stored procedures, and query performance optimization.",

      card3_title: "Enterprise Systems",
      card3_cat: "ERP & Business Processes",
      card3_desc: "Supply chain workflow customization, inventory management, financials, and logistics operations.",

      card4_title: "Power BI & Analytics",
      card4_cat: "Business Intelligence",
      card4_desc: "Executive analytics dashboard creation, business data modeling, and real-time KPI visualization.",

      card5_title: "Frontend & Version Control",
      card5_cat: "Interface & Git Workflow",
      card5_desc: "Building responsive, modern user interfaces alongside collaborative Git version-controlled workflows.",

      card6_title: "Methodologies & Professional Skills",
      card6_cat: "Problem Solving & Execution",
      card6_desc: "Analytical capacity in formulating pragmatic technical solutions, task prioritization, and proactive stakeholder communication."
    },
    certificates: {
      tag: "Credentials & Honors",
      title: "Verified Credentials",
      subtitle: "Academic diplomas, IT competency certifications (AWS, Dart), industrial audit standards, and distinguished honors.",
      cert1_issuer: "Politeknik Elektronika Negeri Surabaya",
      cert1_title: "Associate Expert in Computer Engineering",
      cert1_date: "July 2024",

      cert2_issuer: "SMK 17 Agustus 1945 Surabaya",
      cert2_title: "Best Student Award XI Software Eng.",
      cert2_date: "May 2019",

      cert3_issuer: "Hang Tuah University Language Centre",
      cert3_title: "English Proficiency Test (Score: 493)",
      cert3_date: "October 2023",

      cert4_issuer: "Dicoding Academy",
      cert4_title: "Cloud Practitioner Essentials (AWS)",
      cert4_date: "June 2023",

      cert5_issuer: "Dicoding Academy",
      cert5_title: "Programming with Dart",
      cert5_date: "December 2021",

      cert6_issuer: "AMEN ASEAN Mentorship",
      cert6_title: "Training of Mentors (ToM) AMEN",
      cert6_date: "February 2019",

      cert7_issuer: "PT Peac Bromo",
      cert7_title: "Student Internship Certificate",
      cert7_date: "April 2019",

      cert8_issuer: "PT Pangan Lestari",
      cert8_title: "Basic Occupational Safety (K3)",
      cert8_date: "August 2025",

      cert9_issuer: "PT Pangan Lestari",
      cert9_title: "Food Safety System (FSSC 22000)",
      cert9_date: "August 2025",

      cert10_issuer: "PT Pangan Lestari",
      cert10_title: "HACCP Certification",
      cert10_date: "August 2025",

      cert11_issuer: "PT Pangan Lestari",
      cert11_title: "Food Fraud & Food Defense",
      cert11_date: "August 2025",

      cert12_issuer: "PT Pangan Lestari",
      cert12_title: "Food Allergen Management",
      cert12_date: "August 2025"
    },
    contact: {
      tag: "Get in Touch",
      headline: "Let's Work Together",
      subtitle: "Interested in hiring or discussing information systems, ERP data engineering, or full-stack web solutions? Feel free to reach out directly.",
      direct_wa: "WhatsApp / Direct Phone",
      direct_email: "Official Email",
      direct_linkedin: "LinkedIn",
      direct_github: "GitHub Portfolio",
      btn_download: "View Full CV",
      form_title: "Send a Direct Message",
      form_subtitle: "Your message will automatically link to Nurul Azizah's WhatsApp & email.",
      name_label: "Your Name",
      name_placeholder: "Enter your name or company name",
      email_label: "Email Address",
      email_placeholder: "name@company.com",
      topic_label: "Discussion Topic / Service",
      topic_opt1: "Job Opportunity (Full-Time / Contract)",
      topic_opt2: "Web Development / System Project",
      topic_opt3: "ERP Consulting & Data Engineering",
      topic_opt4: "Other Collaboration Inquiries",
      msg_label: "Your Message",
      msg_placeholder: "Describe project requirements or job opportunity details...",
      submit_btn: "Send via WhatsApp"
    },
    footer: {
      copyright: "All rights reserved.",
      back_to_top: "Back to top"
    },
    toast: {
      wa_sent: "Opening WhatsApp to send your message...",
      email_copied: "Email jobbazizah@gmail.com copied to clipboard!"
    },
    modal: {
      project_showcase: "Project Showcase",
      client_label: "Client / Institution",
      timeline_label: "Timeline",
      tech_label: "Tech Stack",
      cert_category: "CERTIFICATE & CREDENTIAL",
      issuer_label: "Issuer / Organization",
      date_label: "Issue Date",
      status_label: "Credential Status",
      verified_status: "Verified Official"
    },
    cv_modal: {
      title: "Curriculum Vitae",
      protected_badge: "View Only (Protected)",
      view_single: "Single",
      view_all: "All Pages",
      prev_btn: "Previous",
      next_btn: "Next",
      page_indicator: "Page",
      of: "of",
      protected_notice: "This document is protected for direct preview only and cannot be downloaded."
    }
  }
};
