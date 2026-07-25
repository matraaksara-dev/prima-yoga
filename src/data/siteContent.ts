import type { SiteData } from '../types';

export const siteContent: SiteData = {
  hero: {
    eyebrow: "Banking-Grade Business Coaching",
    headline: "Strategi Anda Sudah Benar. Masalahnya di Eksekusi.",
    subheadline: "Saya menutup jarak antara rencana bisnis di atas kertas dan tim yang benar-benar bisa menjalankannya — dengan disiplin risk-management dari dunia perbankan dan pendekatan psikologis dari dunia coaching.",
    primaryCTA: {
      label: "Mulai Kolaborasi Strategis",
      url: "mailto:prima.yoga.lan@gmail.com"
    },
    secondaryCTA: {
      label: "Pelajari Profil Saya",
      url: "#about"
    }
  },
  
  about: {
    quote: "Sistem yang bagus tetap gagal kalau manusia di dalamnya tidak siap.",
    timeline: [
      {
        year: "2010 - Era Standar Mutu",
        title: "ISO & HACCP Auditor",
        insight: "Saya melihat pertama kali saat mengaudit standar mutu pangan: prosedur sempurna di kertas, tapi eksekusi di lapangan berantakan karena manusianya."
      },
      {
        year: "2016 - Era Perbankan",
        title: "Branch Manager BUMN",
        insight: "Sebagai Branch Manager, strategi investasi terbaik pun bisa gagal karena satu keputusan tim yang tidak terlatih menghadapi tekanan."
      },
      {
        year: "2023 - Era Coaching",
        title: "Holisticoach & Ecosystem Builder",
        insight: "Dari rentetan pola itu, saya berhenti melihat 'strategi' dan 'manusia' sebagai dua hal terpisah. Saya membangun pendekatan holistik untuk keduanya."
      }
    ],
    closingLine: "Mari berdiskusi tentang bagaimana kita bisa membangun ekosistem bisnis yang tangguh bersama-sama."
  },
  
  services: [
    {
      id: "svc-1",
      title: "Supaya keputusan investasi Anda tidak lagi berbasis insting.",
      description: "Sebagai praktisi keuangan bersertifikasi resmi (AWP, WPPE, Waperd), saya membantu memetakan manajemen risiko dan menyusun strategi alokasi investasi yang berjangka panjang bagi korporasi maupun portofolio individu Anda."
    },
    {
      id: "svc-2",
      title: "Supaya tim Anda eksekusi rencana, bukan cuma menghadiri rapat.",
      description: "Saya menghadirkan layanan pelatihan SDM dan executive coaching untuk meningkatkan kapasitas kepemimpinan tim Anda, berbekal metodologi Grounded Coaching, kecerdasan genetik STIFIn, dan hypnotherapy terapan."
    },
    {
      id: "svc-3",
      title: "Supaya bisnis rintisan Anda terhubung ke jaringan yang tepat.",
      description: "Membantu merancang dan mengakselerasi ekosistem bisnis rintisan melalui jaringan strategis lintas sektor. Kami memastikan operasional bisnis berjalan dengan kepatuhan standar mutu tertinggi."
    }
  ],
  
  ecosystemPillars: [
    {
      id: "pillar-1",
      pillarName: "Perbankan, Keuangan & Investasi",
      description: "Berpengalaman mengelola risiko, operasional cabang, dan investasi kekayaan untuk portofolio bernilai tinggi.",
      relatedCertIds: ["cert-5", "cert-8", "cert-9", "cert-10"]
    },
    {
      id: "pillar-2",
      pillarName: "Pengembangan Manusia",
      description: "Meningkatkan kapasitas talenta melalui pendekatan psikologis, coaching, dan pelatihan berbasis standar kompetensi nasional.",
      relatedCertIds: ["cert-1", "cert-2", "cert-3", "cert-6"]
    },
    {
      id: "pillar-3",
      pillarName: "Wirausaha & Ekosistem Bisnis",
      description: "Katalis pembangunan ekosistem bisnis melalui keterlibatan lintas sektor dan pengembangan bisnis rintisan.",
      relatedCertIds: ["cert-4", "cert-7"]
    },
    {
      id: "pillar-4",
      pillarName: "Sains & Standarisasi Mutu",
      description: "Memastikan presisi operasional melalui implementasi ketat sistem manajemen mutu dan keamanan pangan standar global.",
      relatedCertIds: ["cert-11", "cert-12", "cert-13", "cert-14"]
    }
  ],

  credibility: [
    {
      id: "cred-1",
      statement: "Dipercaya memimpin operasional dan risiko finansial sebagai Branch Manager perbankan BUMN dengan kredibilitas sertifikasi dari Lembaga Sertifikasi Profesi Perbankan (LSPP) & TICMI."
    },
    {
      id: "cred-2",
      statement: "Berpengalaman mengintegrasikan sistem manajemen mutu (ISO 9001, 22000, 14000) ke dalam standar operasional bisnis korporasi berskala nasional."
    },
    {
      id: "cred-3",
      statement: "Diakui secara aktif dalam memajukan ekosistem pengusaha melalui kepengurusan di KADIN, HIPMI, HIPPI, serta jaringan MMBC - Asosiasi CEO Mastermind Indonesia."
    }
  ],

  testimonials: [
    {
      id: "testi-1",
      name: "[CONTOH - GANTI DENGAN ASLI] Budi S.",
      role: "Founder, Tech Startup",
      quote: "Strategi dari Pak Prima benar-benar membuka mata kami. Bukan hanya soal finansial, tapi bagaimana tim kami akhirnya bisa mengeksekusi rencana dengan disiplin bank."
    },
    {
      id: "testi-2",
      name: "[CONTOH - GANTI DENGAN ASLI] Andi R.",
      role: "CEO, Retail Company",
      quote: "Coaching session-nya sangat praktikal. Kami berhasil menurunkan risiko operasional 30% berkat framework yang beliau bangun untuk tim manajemen."
    },
    {
      id: "testi-3",
      name: "[CONTOH - GANTI DENGAN ASLI] Siti N.",
      role: "VP Operations",
      quote: "Penggabungan ISO dan pendekatan psikologis dari Pak Prima membuat sistem yang tadinya kaku menjadi budaya perusahaan yang hidup."
    }
  ],

  partnerLogos: [
    { id: "logo-1", name: "KADIN" },
    { id: "logo-2", name: "HIPMI" },
    { id: "logo-3", name: "HIPPI" },
    { id: "logo-4", name: "MMBC" }
  ],
  
  certifications: [
    { id: "cert-1", name: "Professional Trainer", issuer: "BNSP", year: 2025, category: "Coaching & Psikologi" },
    { id: "cert-2", name: "Genetic Intelligence Licensed", issuer: "STIFIn", year: 2025, category: "Coaching & Psikologi" },
    { id: "cert-3", name: "Certified Hypnotist (CH)", issuer: "IHC", year: 2025, category: "Coaching & Psikologi" },
    { id: "cert-6", name: "G-Coach", issuer: "Asosiasi Grounded Coaching", year: 2023, category: "Coaching & Psikologi" },
    { id: "cert-5", name: "Manajemen Resiko Perbankan", issuer: "LSPP", year: 2024, category: "Perbankan" },
    { id: "cert-8", name: "Associate Wealth Planner (AWP)", issuer: "FPSB Ltd.", year: 2018, category: "Perbankan" },
    { id: "cert-9", name: "Wakil Perantara Pedagang Efek (WPPE)", issuer: "TICMI", year: 2018, category: "Perbankan" },
    { id: "cert-10", name: "Wakil Agen Penjual Reksadana (Waperd)", issuer: "APRDI", year: 2016, category: "Perbankan" },
    { id: "cert-11", name: "ISO 22000 Foundation", issuer: "PT. Garudafood", year: 2010, category: "Mutu & Standar" },
    { id: "cert-12", name: "ISO 9001 Foundation", issuer: "PT. Garudafood", year: 2010, category: "Mutu & Standar" },
    { id: "cert-13", name: "Internal Auditor", issuer: "PT. Garudafood", year: 2010, category: "Mutu & Standar" },
    { id: "cert-14", name: "HACCP (Food Safety)", issuer: "PT. Garudafood", year: 2010, category: "Mutu & Standar" },
    { id: "cert-4", name: "Cullinerpreneure", issuer: "Kuliner Mastery", year: 2025, category: "Mutu & Standar" },
    { id: "cert-7", name: "MMBC", issuer: "ACMI", year: 2022, category: "Mutu & Standar" }
  ],
  
  seo: {
    pageTitle: "Prima Yoga Lan | Banking-Grade Business Coaching",
    metaDescription: "Temukan mitra strategis bisnis Anda bersama Prima Yoga Lan. Memadukan disiplin perbankan dan executive coaching untuk eksekusi bisnis yang presisi.",
    ogTitle: "Prima Yoga Lan - Banking-Grade Business Coaching",
    ogDescription: "Menutup jarak antara rencana bisnis dan eksekusi tim dengan disiplin risk-management perbankan dan pendekatan psikologis coaching.",
    ogImage: "/images/hero-portrait.png"
  },

  contact: {
    headline: "Siap Membangun Sinergi Bisnis yang Kuat?",
    body: "Tertarik ngobrol dulu sebelum komitmen? 15 menit cukup untuk tahu apakah kita cocok bekerja sama.",
    ctaButtonText: "Hubungi via Email",
    email: "prima.yoga.lan@gmail.com",
    whatsappNumber: "628120000000",
    whatsappButtonText: "Chat via WhatsApp"
  },

  media: {
    heroPortrait: "/images/hero-portrait.png",
    aboutPortrait: "/images/about-portrait.webp"
  }
};
