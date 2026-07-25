import type { SiteData } from '../types';

export const siteContent: SiteData = {
  hero: {
    headline: "Membangun Ekosistem Bisnis dan Talenta Unggul",
    subheadline: "Memadukan ketajaman eksekutif perbankan dan konsultan bisnis dengan pendekatan coaching holistik untuk mencapai pertumbuhan terukur dan berkelanjutan.",
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
    openingHook: "Kesuksesan sebuah bisnis tidak hanya dibangun di atas kekuatan modal, tetapi oleh ketangguhan talenta yang menggerakkannya.",
    journey: "Memulai karir di ranah manajemen mutu dan perbaikan sistem (ISO/HACCP), saya belajar esensi dari sebuah presisi. Pemahaman tersebut kemudian membawa saya memimpin operasional strategis sebagai Branch Manager di perbankan BUMN, di mana saya mengelola risiko dan mengorkestrasi investasi finansial bernilai tinggi.",
    approach: "Sebagai seorang Holisticoach, saya meyakini bahwa standar korporat harus selaras dengan pendekatan psikologis manusia. Saya memastikan setiap mitra bisnis atau investor mendapatkan strategi yang tidak hanya profitable di atas kertas, tetapi juga dapat dieksekusi dengan presisi oleh sumber daya manusia yang terberdayakan.",
    vision: "Visi jangka panjang saya adalah menjadi mitra strategis untuk ekosistem bisnis dan kewirausahaan di Indonesia. Melalui entitas Alphapunca serta keterlibatan aktif di institusi seperti KADIN dan HIPMI, saya menjembatani ide-ide visioner dengan realitas eksekusi bisnis.",
    closingLine: "Mari berdiskusi tentang bagaimana kita bisa membangun ekosistem bisnis yang tangguh bersama-sama."
  },
  
  services: [
    {
      id: "svc-1",
      title: "Strategic Banking & Wealth Management",
      description: "Sebagai praktisi keuangan bersertifikasi resmi (AWP, WPPE, Waperd), saya membantu memetakan manajemen risiko dan menyusun strategi alokasi investasi yang berjangka panjang bagi korporasi maupun portofolio individu Anda."
    },
    {
      id: "svc-2",
      title: "Executive Coaching & People Development",
      description: "Saya menghadirkan layanan pelatihan SDM dan executive coaching untuk meningkatkan kapasitas kepemimpinan tim Anda, berbekal metodologi Grounded Coaching, kecerdasan genetik STIFIn, dan hypnotherapy terapan."
    },
    {
      id: "svc-3",
      title: "Ecosystem & Business Development",
      description: "Membantu merancang dan mengakselerasi ekosistem bisnis rintisan melalui jaringan strategis lintas sektor. Kami memastikan operasional bisnis berjalan dengan kepatuhan standar mutu (ISO) tertinggi."
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
      pillarName: "Pengembangan Manusia (People Development)",
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
      pillarName: "Sains & Standarisasi Mutu Industri",
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
  
  certifications: [
    { id: "cert-1", name: "Professional Trainer", issuer: "BNSP", year: 2025 },
    { id: "cert-2", name: "Genetic Intelligence Licensed", issuer: "STIFIn Genetic Indonesia", year: 2025 },
    { id: "cert-3", name: "Certified Hypnotist (CH)", issuer: "Indonesian Hypnosis Centre (IHC)", year: 2025 },
    { id: "cert-4", name: "Cullinerpreneure", issuer: "Kuliner Mastery Indonesia", year: 2025 },
    { id: "cert-5", name: "Manajemen Resiko Perbankan", issuer: "LSPP", year: 2024 },
    { id: "cert-6", name: "G-Coach", issuer: "Asosiasi Grounded Coaching Indonesia", year: 2023 },
    { id: "cert-7", name: "MMBC", issuer: "ACMI", year: 2022 },
    { id: "cert-8", name: "Associate Wealth Planner (AWP)", issuer: "FPSB Ltd.", year: 2018 },
    { id: "cert-9", name: "Wakil Perantara Pedagang Efek (WPPE)", issuer: "TICMI", year: 2018 },
    { id: "cert-10", name: "Wakil Agen Penjual Reksadana (Waperd)", issuer: "APRDI", year: 2016 },
    { id: "cert-11", name: "ISO 22000 Foundation", issuer: "PT. Garudafood", year: 2010 },
    { id: "cert-12", name: "ISO 9001 Foundation", issuer: "PT. Garudafood", year: 2010 },
    { id: "cert-13", name: "Internal Auditor", issuer: "PT. Garudafood", year: 2010 },
    { id: "cert-14", name: "HACCP (Food Safety) Auditor", issuer: "PT. Garudafood", year: 2010 }
  ],
  
  seo: {
    pageTitle: "Prima Yoga Lan | Eksekutif Perbankan & Konsultan Bisnis",
    metaDescription: "Temukan mitra strategis bisnis Anda bersama Prima Yoga Lan, pakar manajemen perbankan, konsultan bisnis & Holisticoach tersertifikasi nasional. Hubungi sekarang!",
    ogTitle: "Prima Yoga Lan - Holisticoach & Usefulpreneure",
    ogDescription: "Memadukan ketajaman eksekutif perbankan dan pendekatan coaching holistik untuk pertumbuhan bisnis yang terukur serta pembentukan talenta kompeten.",
    ogImage: "/images/hero-portrait.png"
  },

  contact: {
    headline: "Siap Membangun Sinergi Bisnis yang Kuat?",
    body: "Baik Anda seorang investor yang mencari kemitraan strategis, maupun pemimpin perusahaan yang ingin mentransformasi kapasitas tim, pintu diskusi saya selalu terbuka. Mari gabungkan keahlian kita untuk menciptakan dampak yang terukur.",
    ctaButtonText: "Hubungi Saya via Email",
    email: "prima.yoga.lan@gmail.com"
  },

  media: {
    heroPortrait: "/images/hero-portrait.png",
    aboutPortrait: "/images/about-portrait.webp"
  }
};
