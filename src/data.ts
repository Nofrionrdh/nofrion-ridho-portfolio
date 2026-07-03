import { SkillMap, Project, Certification, Education, Contact } from "./types";

export const skills: SkillMap = {
  "Backend Development": {
    faIcon: "fa-solid fa-server",
    color: "blue",
    items: ["PHP", "Laravel", "CodeIgniter", "MySQL", "REST API", "Database Design"],
  },
  "Frontend Development": {
    faIcon: "fa-solid fa-display",
    color: "indigo",
    items: ["JavaScript", "TypeScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "React", "Next.js"],
  },
  "Reporting & Business System": {
    faIcon: "fa-solid fa-chart-pie",
    color: "teal",
    items: ["FPDF", "Accounting Module", "Purchasing System", "Manufacturing System", "Inventory Flow"],
  },
  "Design & Tools": {
    faIcon: "fa-solid fa-pen-ruler",
    color: "amber",
    items: ["Git", "GitHub", "Linux", "UI Layout Design", "Poster Design", "Figma"],
  },
};

export const schoolProjects: Project[] = [
  {
    title: "Sistem Manajemen Ekstrakurikuler",
    desc: "Sistem berbasis Laravel dengan multi-role user (Admin, Pengurus, Pembina, dan Siswa) yang mendukung absensi, pendaftaran ekskul, LMS, validasi, dashboard, dan monitoring kegiatan ekstrakurikuler sekolah.",
    tags: ["Laravel", "Bootstrap", "MySQL", "JavaScript", "PHP"],
    image: "/images/project_ekskul.png",
    badge: "School Project",
    badgeIcon: "fa-solid fa-school",
    github: "https://github.com/Nofrionrdh/Projek-XTRA",
  },
  {
    title: "Apotek Online",
    desc: "Sistem penjualan obat berbasis web yang mendukung pengelolaan produk, transaksi pembelian, penjualan, stok barang, dan laporan transaksi.",
    tags: ["Laravel", "Bootstrap", "MySQL", "JavaScript", "PHP"],
    image: "/images/project_apotek.png",
    badge: "School Project",
    badgeIcon: "fa-solid fa-school",
    github: "https://github.com/Nofrionrdh/Apotek-LSP",
  },
];

export const internProjects: Project[] = [
  {
    title: "Sistem Aqiqah",
    desc: "Aplikasi berbasis CodeIgniter untuk pengelolaan penjualan aqiqah, produksi, pembelian, stok kambing, pengiriman pesanan, serta laporan PDF operasional harian.",
    tags: ["CodeIgniter", "MySQL", "FPDF"],
    image: "/images/aqiqah.png",
    badge: "PKL Project",
    badgeIcon: "fa-solid fa-briefcase",
  },
  {
    title: "Accounting & Reporting System",
    desc: "Pengembangan modul akuntansi seperti jurnal umum, posting, closing, arus kas, laporan aktivitas, serta berbagai laporan PDF kompleks menggunakan FPDF.",
    tags: ["CodeIgniter", "MySQL", "FPDF"],
    image: "/images/acc.png",
    badge: "PKL Project",
    badgeIcon: "fa-solid fa-briefcase",
  },
  {
    title: "Manufacturing Module",
    desc: "Modul manufaktur untuk proses produksi seperti painting, work order, purchasing bahan, tracking proses produksi, serta integrasi antar divisi.",
    tags: ["CodeIgniter", "MySQL", "FPDF"],
    image: "/images/manufaktur.png",
    badge: "PKL Project",
    badgeIcon: "fa-solid fa-briefcase",
  },
];

export const certifications: Certification[] = [
  {
    title: "Data Analytics untuk Siswa SMA/Sederajat",
    issuer: "Thematic Academy - Digital Talent Scholarship 2024",
    date: "21-22 Oktober 2024",
    hours: "18 Jam Pelatihan",
    certId: "1949615850-82/TA/BLSDM.Kominfo/2024",
    icon: "fa-solid fa-chart-line",
    previewLink: "https://drive.google.com/drive/folders/1XMZu2HwCozCMj2Vt4dREmfxyeynKAVTC?usp=drive_link",
  },
  {
    title: "TOEIC - Listening and Reading",
    issuer: "Educational Testing Service (ETS)",
    date: "Valid: Aug 2025 - Aug 2027",
    score: "540 (Listening: 315 | Reading: 225)",
    certId: "ID: 0067088056",
    icon: "fa-solid fa-language",
    isScore: true,
    previewLink: "https://drive.google.com/drive/folders/1XMZu2HwCozCMj2Vt4dREmfxyeynKAVTC?usp=drive_link",
  },
  {
    title: "Docker Fundamental",
    issuer: "Btech Academy",
    date: "Maret 2025 - Maret 2027",
    certId: "C01002-00000-36475",
    icon: "fa-brands fa-docker",
    previewLink: "https://drive.google.com/drive/folders/1XMZu2HwCozCMj2Vt4dREmfxyeynKAVTC?usp=drive_link",
  },
  {
    title: "Automation with Ansible",
    issuer: "Btech Academy",
    date: "Oktober 2025 - Oktober 2027",
    certId: "C01003-00000-41750",
    icon: "fa-solid fa-gears",
    previewLink: "https://drive.google.com/drive/folders/1XMZu2HwCozCMj2Vt4dREmfxyeynKAVTC?usp=drive_link",
  },
  {
    title: "Linux System Administration",
    issuer: "Btech Academy",
    date: "Mei 2024 - Mei 2026",
    certId: "C01001-00000-33415",
    icon: "fa-brands fa-linux",
    previewLink: "https://drive.google.com/drive/folders/1XMZu2HwCozCMj2Vt4dREmfxyeynKAVTC?usp=drive_link",
  },
  {
    title: "Jaringan Komputer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "29 April 2025",
    certId: "J 247 00759 2026",
    icon: "fa-solid fa-certificate",
    previewLink: "https://drive.google.com/drive/folders/1XMZu2HwCozCMj2Vt4dREmfxyeynKAVTC?usp=drive_link",
  },
];

export const education: Education[] = [
  {
    school: "SMK Negeri 1 Cibinong",
    major: "Sistem Informasi Jaringan dan Aplikasi (SIJA)",
    description: "Selama masa pendidikan, saya mengembangkan keahlian yang komprehensif di bidang pengembangan perangkat lunak dan infrastruktur IT. Saya mendapatkan pengalaman praktis dalam membangun aplikasi web menggunakan PHP, Laravel, JavaScript, CSS, dan Bootstrap. Selain pemrograman, saya mendalami DevOps dan operasi sistem dengan meraih sertifikasi dalam Administrasi Sistem Linux dan Docker, serta mempelajari otomatisasi server menggunakan Ansible. Di samping itu, saya juga mempelajari jaringan komputer dengan fokus pada konfigurasi dan manajemen infrastruktur menggunakan perangkat MikroTik dan Cisco.",
    icon: "fa-solid fa-school",
    years: "2022 - 2026",
    skills: ["PHP", "Laravel", "CodeIgniter", "JavaScript", "Bootstrap", "MySQL", "Linux", "Docker", "Ansible", "MikroTik", "Cisco"],
  },
];

export const contacts: Contact[] = [
  { label: "Email", faIcon: "fa-solid fa-envelope", value: "nofrionridho2006@email.com", href: "mailto:nofrionridho2006@email.com" },
  { label: "GitHub", faIcon: "fa-brands fa-github", value: "github.com/Nofrionrdh", href: "https://github.com/Nofrionrdh" },
  { label: "LinkedIn", faIcon: "fa-brands fa-linkedin-in", value: "linkedin.com/in/nofrionridho", href: "https://linkedin.com/in/nofrionridho" },
  { label: "WhatsApp", faIcon: "fa-brands fa-whatsapp", value: "+62 858 9223 8838", href: "https://wa.me/6285892238838" },
];

export const designWorks = [
  { id: 1, image: "hqc.png", title: "Web Design" },
  { id: 2, image: "2.png", title: "Information Poster" },
  { id: 3, image: "10.png", title: "Information Poster" },
  { id: 4, image: "25.png", title: "Promotional Poster" },
];
