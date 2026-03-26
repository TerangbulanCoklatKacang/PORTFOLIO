import { useState, useRef, useEffect } from 'react';
import { Home, User, Briefcase, Wrench, FolderOpen, ChevronLeft, ChevronRight, Play, Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  };

  return (
    <header className="top-header">
      <div
        className="header-brand cursor-pointer"
        onClick={() => scrollToSection('home')}
        title="Go to Top"
      >
        <span className="header-brand-name">Portfolio <span className="text-white">Muh Gilang</span></span>
      </div>

      <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" className="header-nav-item active" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          <Home size={18} /> Home
        </a>
        <a href="#about" className="header-nav-item" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
          <User size={18} /> About Me
        </a>
        <a href="#experience" className="header-nav-item" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>
          <Briefcase size={18} /> Experience
        </a>
        <a href="#tools" className="header-nav-item" onClick={(e) => { e.preventDefault(); scrollToSection('tools'); }}>
          <Wrench size={18} /> Software & Tools
        </a>
        <a href="#portfolio" className="header-nav-item" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>
          <FolderOpen size={18} /> Portfolio
        </a>
      </nav>
    </header>
  );
}

function AboutMe() {
  const roles = [
    'Graphic Designer',
    'Video Editor',
    'Social Media Officer',
    'Social Media Specialist'
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true); // Start fade in after text change
      }, 500); // Half second to match CSS transition
    }, 3000); // Change every 3 seconds

    return () => clearInterval(roleTimer);
  }, []);

  return (
    <div id="about" className="about-me-section">
      <h2 className="section-heading-outside">About Me</h2>
      <div className="brutalist-container about-me-card">

        <div className="about-me-header">
          <img src="/images/Profile.jpg" alt="Profile" className="about-me-avatar" />
          <div className="about-me-title">
            <h1>Muh Gilang Ramadhan</h1>
            <p className={`role-text ${fade ? 'fade-in' : 'fade-out'}`}>
              {roles[roleIndex]}
            </p>
          </div>
        </div>


        <div className="about-me-stats">
          <a href="https://www.instagram.com/gilangg.docx/" target="_blank" rel="noopener noreferrer" className="social-box social-box-instagram" title="Instagram">
            <img src="/images/INSTAGRAM.png" alt="Instagram" className="social-box-logo" />
            <span className="social-box-label">Instagram</span>
          </a>
          <a href="https://www.linkedin.com/in/muhgilang12/" target="_blank" rel="noopener noreferrer" className="social-box social-box-linkedin" title="LinkedIn">
            <img src="/images/LINKEDIN.png" alt="LinkedIn" className="social-box-logo" />
            <span className="social-box-label">LinkedIn</span>
          </a>
        </div>

        <p className="about-me-bio">
          Fresh graduate dari Jurusan Sastra Prancis, Universitas Hasanuddin, dengan keterampilan komunikasi yang tajam dan kemampuan analisis yang kuat. Cepat belajar, detail-oriented, dan memiliki semangat tinggi untuk berkontribusi dalam lingkungan kerja yang dinamis. Siap untuk menghadapi tantangan baru dan beradaptasi dengan cepat dalam dunia profesional.
        </p>

        <div className="about-me-buttons">
          <button className="brutalist-button primary btn-lg">Contact Me</button>
          <button className="brutalist-button btn-lg">Download CV</button>
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div>
      <h2 className="section-heading">Education</h2>
      <div className="experience-list">
        <div className="brutalist-container experience-card">
          <img
            src="/images/logo-unhas.png"
            alt="Hasanuddin University Logo"
            className="w-12 h-12 object-contain"
          />
          <div>
            <div className="font-bold">Hasanuddin University</div>
            <div className="text-xs text-gray-600 mb-1">French Literature</div>
            <div className="text-xs bg-[#f4efeb] border border-black px-2 py-1 inline-block">2020 - 2025</div>
          </div>
        </div>

        <div className="brutalist-container experience-card">
          <img
            src="/images/logo-smapat.png"
            alt="Senior High School 4 Makassar Logo"
            className="w-12 h-12 object-contain"
          />
          <div>
            <div className="font-bold">Senior High School 4 Makassar</div>
            <div className="text-xs text-gray-600 mb-1">Social Sciences Major</div>
            <div className="text-xs bg-white border border-black px-2 py-1 inline-block">2017 - 2020</div>
          </div>
        </div>
      </div>

      <div className="skills-container">
        <div className="skills-badge">SKILLS</div>
        <div className="skills-grid">
          <span className="skill-tag">Kreativitas</span>
          <span className="skill-tag">Komunikasi</span>
          <span className="skill-tag">Problem Solving</span>
          <span className="skill-tag">Kerja Tim</span>
          <span className="skill-tag">Manajemen Waktu</span>
          <span className="skill-tag">Detail-Oriented</span>
          <span className="skill-tag">Adaptabilitas</span>
        </div>
      </div>

      <div className="skills-container mt-8">
        <div className="skills-badge">SKILLS TEKNIS</div>
        <div className="skills-grid">
          <span className="skill-tag">Graphic Design</span>
          <span className="skill-tag">Video Editing</span>
          <span className="skill-tag">Social Media Management</span>
          <span className="skill-tag">Content Creation</span>
          <span className="skill-tag">Copywriting</span>
          <span className="skill-tag">Microsoft Office</span>
          <span className="skill-tag">Google Workspace</span>
        </div>
      </div>
    </div>
  );
}

function ExperienceItem({ logo, role, organization, type, period, details }: {
  logo: string;
  role: string;
  organization: string;
  type: string;
  period: string;
  details: string[];
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="brutalist-container exp-item">
      <div className="exp-item-header">
        <img
          src={logo}
          alt={`${organization} Logo`}
          className="exp-item-logo"
        />
        <div className="exp-item-info">
          <div className="exp-item-role">{role}</div>
          <div className="exp-item-org">{organization} - {type}</div>
          <div className="exp-item-period">({period})</div>
          <button
            className="exp-toggle-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Kecilkan' : 'Selengkapnya'}
          </button>
        </div>
      </div>
      {expanded && (
        <ul className="exp-item-details">
          {details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ExperiencePanel() {
  const experiences = [
    {
      logo: '/images/logo-unhas.png',
      role: 'Anggota Divisi Hubungan Masyarakat',
      organization: 'Himpunan Mahasiswa Sastra Prancis',
      type: 'Organisasi',
      period: '2021 - 2022',
      details: [
        'Mendukung publikasi kegiatan melalui media sosial, poster digital, grup mahasiswa, dan saluran informasi lainnya.',
        'Menyebarluaskan informasi kegiatan himpunan kepada mahasiswa, alumni, dan pihak eksternal secara jelas, tepat, dan terjadwal.',
        'Merencanakan jadwal unggahan harian, mingguan, atau bulanan agar media sosial tetap konsisten dan terarah.',
        'Mengunggah story, reels, atau update langsung saat kegiatan berlangsung agar audiens mengetahui aktivitas himpunan secara real time.',
        'Mengoperasikan akun resmi himpunan seperti Instagram, TikTok, X, dan platform lainnya secara aktif, teratur, dan komunikatif.',
      ],
    },
    {
      logo: '/images/logo-unhas.png',
      role: 'Koordinator Hubungan Masyarakat',
      organization: 'Himpunan Mahasiswa Sastra Prancis',
      type: 'Organisasi',
      period: '2022 - 2023',
      details: [
        'Merancang arah publikasi media sosial dan website agar informasi yang disampaikan terstruktur, menarik, dan sesuai dengan tujuan himpunan.',
        'Memantau performa media sosial dan efektivitas website, termasuk engagement, jangkauan informasi, dan respons audiens terhadap konten yang dipublikasikan.',
        'Mengoperasikan atau mengarahkan anggota dalam penggunaan software desain, editing, dan pengelolaan digital seperti Canva, Adobe Photoshop, CorelDRAW, CapCut, Adobe Illustrator, serta platform pengelolaan website seperti Blogspot, atau lainnya sesuai kebutuhan himpunan.',
        'Membuat laporan atau rekap kegiatan divisi humas sebagai bentuk pertanggungjawaban kepada pengurus himpunan.',
        'Merancang konsep penyampaian informasi agar seluruh kegiatan, pengumuman, dan program kerja himpunan dapat diketahui mahasiswa dengan jelas dan menarik.',
      ],
    },
    {
      logo: '/images/logo-ojk.png',
      role: 'Bidang Pengawasan Perilaku PUJK, Edukasi, Perlindungan Konsumen, dan Layanan Manajemen Strategis.',
      organization: 'Otoritas Jasa Keuangan Sulawesi Selatan Dan Sulawesi Barat',
      type: 'Magang',
      period: '2025',
      details: [
        'Pada bidang ini, saya diberi kesempatan untuk melakukan pengerjaan daftar biaya logistik. Jobdesk saya ialah mencocokkan harga logistik kemudian saya diarahkan untuk menyalin link dan dimasukkan di spreadsheet.',
        'Bidang ini memberikan saya kesempatan untuk melakukan pemeriksaan hasil Pre-Test dan Post-Test edukasi keuangan yang dilaksanakan di beberapa daerah seperti Kabupaten Enrekang, Soppeng, Sidrap, Pangkep dan beberapa daerah lainnya. Hasil pemeriksaan ini bertujuan untuk mengetahui sejauh mana pemahaman masyarakat tentang keuangan, sektor jasa keuangan, hingga pemahaman dalam memanfaatkan produk dan layanan jasa keuangan. Berkolaborasi dengan tim dari setiap departemen untuk memastikan strategi kampanye selaras dengan nilai dan tujuan bisnis.',
      ],
    },
    {
      logo: '/images/logo-ojk.png',
      role: 'Bidang Pengawasan Lembaga Jasa Keuangan',
      organization: 'Otoritas Jasa Keuangan Sulawesi Selatan Dan Sulawesi Barat',
      type: 'Magang',
      period: '2025',
      details: [
        'Bagian Pengawasan Perbankan dan Keuangan Non-Bank memiliki tanggung jawab untuk mengawasi kegiatan perbankan di wilayah Sulawesi Selatan dan Sulawesi Barat. Saya memiliki tanggung jawab dalam pembuatan desain Flyer OJK Peduli "Program Budaya Kerja OJK Pengurangan Penggunaan Transportasi Pribadi Dan Mengurangi Sampah Plastik". Dan saya juga diarahkan dalam memodifikasi Website OJK yang berisi BPR, BPRS Dan Konsolidasi, saya memperbaharui beberapa tampilan Home dan membuat 20 Page untuk BPR. Website tersebut diperuntukkan untuk pihak internal untuk meninjau keberlangsungan tren APOLO BPR dan BPRS terkait. Website ini masih tahap pengembangan karena terdapat page yang belum dilengkapi seperti BPRS dan Konsolidasi, beberapa data BPR yang belum lengkap seperti tren yang belum dimasukkan ke Website. Menggunakan data yang diambil dari tools seperti Google Analytics untuk memeriksa efektivitas kampanye pemasaran yang sudah dilakukan. Memeriksa keberhasilan kampanye dan mempresentasikan temuannya kepada manajemen.',
      ],
    },
  ];

  return (
    <div id="experience" className="mt-12">
      <div className="section-heading">
        <span>Experience</span>
      </div>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
}

function SoftwareTools() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200; // Adjust for scroll distance
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="tools" className="mt-12">
      <div className="section-heading">
        <span>Software & Tools</span>
        <div className="nav-arrows">
          <button className="nav-arrow" onClick={() => scroll('left')} title="Previous"><ChevronLeft size={16} /></button>
          <button className="nav-arrow" onClick={() => scroll('right')} title="Next"><ChevronRight size={16} /></button>
        </div>
      </div>
      <div className="tools-scroll-container" ref={scrollRef}>
        <div className="brutalist-container tool-card bg-ps">
          <img src="/images/AP.png" alt="Adobe Photoshop" className="w-12 h-12 mb-2 object-contain" />
          <div className="text-xs font-bold text-center">ADOBE<br />PHOTOSHOP</div>
        </div>
        <div className="brutalist-container tool-card bg-ai">
          <img src="/images/AI.png" alt="Adobe Illustrator" className="w-12 h-12 mb-2 object-contain" />
          <div className="text-xs font-bold text-center">ADOBE<br />ILLUSTRATOR</div>
        </div>
        <div className="brutalist-container tool-card bg-canva">
          <img src="/images/CANVA.png" alt="Canva" className="w-12 h-12 mb-2 object-contain" />
          <div className="text-xs font-bold text-center">CANVA</div>
        </div>
        <div className="brutalist-container tool-card bg-affinity">
          <img src="/images/AFFINITY.png" alt="Affinity" className="w-12 h-12 mb-2 object-contain" />
          <div className="text-xs font-bold text-center">AFFINITY</div>
        </div>
        <div className="brutalist-container tool-card bg-figma">
          <img src="/images/FIGMA.png" alt="Figma" className="w-12 h-12 mb-2 object-contain" />
          <div className="text-xs font-bold text-center">FIGMA</div>
        </div>
        <div className="brutalist-container tool-card bg-capcut">
          <img src="/images/CAPCUT.png" alt="Capcut" className="w-12 h-12 mb-2 object-contain" />
          <div className="text-xs font-bold text-center">CAPCUT</div>
        </div>
        <div className="brutalist-container tool-card bg-pr">
          <img src="/images/APP.png" alt="Adobe Premiere Pro" className="w-12 h-12 mb-2 object-contain" />
          <div className="text-xs font-bold text-center">PREMIERE<br />PRO</div>
        </div>
        <div className="brutalist-container tool-card bg-ae">
          <img src="/images/AE.png" alt="After Effects" className="w-12 h-12 mb-2 object-contain" />
          <div className="text-xs font-bold text-center">AFTER<br />EFFECTS</div>
        </div>
      </div>
    </div>
  );
}

function SoftwareToolsAdmin() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200; // Adjust for scroll distance
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="tools-admin" className="mt-12">
      <div className="section-heading">
        <span>Software & Tools Administration</span>
        <div className="nav-arrows">
          <button className="nav-arrow" onClick={() => scroll('left')} title="Previous"><ChevronLeft size={16} /></button>
          <button className="nav-arrow" onClick={() => scroll('right')} title="Next"><ChevronRight size={16} /></button>
        </div>
      </div>
      <div className="tools-scroll-container" ref={scrollRef}>
        <div className="brutalist-container tool-card bg-word">
          <img src="/images/WORD.png" alt="Microsoft Word" className="w-12 h-12 mb-2 object-contain" />
          <div className="text-xs font-bold text-center">MICROSOFT<br />WORD</div>
        </div>
        <div className="brutalist-container tool-card bg-excel">
          <img src="/images/EXCELL.png" alt="Microsoft Excel" className="w-12 h-12 mb-2 object-contain" />
          <div className="text-xs font-bold text-center">MICROSOFT<br />EXCEL</div>
        </div>
        <div className="brutalist-container tool-card bg-ppt">
          <img src="/images/POINT.png" alt="Microsoft PowerPoint" className="w-12 h-12 mb-2 object-contain" />
          <div className="text-xs font-bold text-center">MICROSOFT<br />POWERPOINT</div>
        </div>
        <div className="brutalist-container tool-card bg-outlook">
          <img src="/images/OUTLOOK.png" alt="Outlook" className="w-12 h-12 mb-2 object-contain" />
          <div className="text-xs font-bold text-center">OUTLOOK</div>
        </div>
        <div className="brutalist-container tool-card bg-workspace">
          <img src="/images/WORKSPACE.png" alt="Google Workspace" className="w-12 h-12 mb-2 object-contain" />
          <div className="text-xs font-bold text-center">GOOGLE<br />WORKSPACE</div>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImg(src);
  };

  const closeModal = () => {
    setSelectedImg(null);
  };

  return (
    <div id="portfolio" className="mt-16">
      <h2 className="section-heading-portfolio">PORTFOLIO</h2>

      <div className="portfolio-tab">Otoritas Jasa Keuangan</div>
      <div className="ojk-grid">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className="brutalist-container ojk-card" onClick={() => openModal(`/images/OJK${n}.png`)}>
            <img
              src={`/images/OJK${n}.png`}
              alt={`OJK Portfolio ${n}`}
              className="ojk-img"
            />
          </div>
        ))}
      </div>

      <div className="portfolio-tab teal mt-4">Himpunan Mahasiswa Sastra Prancis</div>
      <div className="ojk-grid">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
          const extension = n <= 2 ? 'webp' : 'jpg';
          const src = `/images/HIMPRA${n}.${extension}`;
          return (
            <div key={n} className="brutalist-container ojk-card" onClick={() => openModal(src)}>
              <img
                src={src}
                alt={`Himpunan Portfolio ${n}`}
                className="ojk-img"
              />
            </div>
          );
        })}
      </div>

      <div className="portfolio-tab mt-4" style={{ backgroundColor: '#4aaac5ff', color: 'white' }}>Lainnya</div>
      <div className="ojk-grid">
        {[
          'LAINNYA1.png',
          'LAINNYA2.png',
          'LAINNYA3.png',
          'LAINNYA4.png',
          'LAINNYA5.jpg',
          'LAINNYA6.png',
          'LAINNYA7.png',
          'LAINNYA8.png',
          'LAINNYA9.png',
          'LAINNYA10.png'
        ].map((fileName, index) => {
          const src = `/images/${fileName}`;
          const isCropped = fileName === 'LAINNYA4.png';
          return (
            <div key={index} className="brutalist-container ojk-card" onClick={() => openModal(src)}>
              <img
                src={src}
                alt={`Lainnya Portfolio ${index + 1}`}
                className={isCropped ? 'ojk-img-cover' : 'ojk-img'}
              />
            </div>
          );
        })}
      </div>

      <div className="portfolio-tab red-block">ANOTHER</div>
      <div className="brutalist-container bg-white mt-4 flex-center" style={{ minHeight: '200px' }}>
        <div style={{ animation: 'fadeLoop 2s ease-in-out infinite', fontSize: '2rem', fontWeight: 'bold' }}>
          COMING SOON
        </div>
      </div>

      {selectedImg && (
        <div className="img-modal-overlay" onClick={closeModal}>
          <div className="img-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="img-modal-close" onClick={closeModal} title="Close"><X size={24} /></button>
            <img src={selectedImg} alt="Portfolio Large View" className="img-modal-image" />
          </div>
        </div>
      )}

      <div className="pb-16"></div>
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Tampilkan loading selama 2 detik

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-overlay">
        <div className="custom-loader"></div>
      </div>
    );
  }

  return (
    <div className="dashboard" id="home">
      <Header />
      <main className="main-content">
        <div className="col-left w-full flex-col gap-8 mt-12">
          <AboutMe />
          <ExperiencePanel />
          <SoftwareTools />
          <SoftwareToolsAdmin />
          <Portfolio />
        </div>

        <div className="col-right w-full flex-col gap-8 mt-12 pt-10">
          <Education />
        </div>
      </main>
    </div>
  );
}
