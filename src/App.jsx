import "./styles/website.css";

export default function App() {
  return (
    <main className="website">
      <Header />
      <Hero />
      <TrustBar />
      <About />
      <Programs />
      <Experience />
      <WhyUs />
      <Faq />
      <Contact />
      <Footer />
      <MobileDock />
    </main>
  );
}

function TniLogo({ className = "" }) {
  return (
    <svg
      className={`brandMark ${className}`.trim()}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="32" cy="32" r="30" fill="#285b4a" />
      <path
        d="M32 34C23 31 18 22 20 12c8 3 13 10 12 22Z"
        fill="#ef805f"
      />
      <path
        d="M32 34C41 31 46 22 44 12c-8 3-13 10-12 22Z"
        fill="#f5ce6c"
      />
      <path
        d="M32 35C25 27 26 16 32 9c6 7 7 18 0 26Z"
        fill="#fff7ea"
      />
      <path
        d="M32 34C23 36 20 44 22 53c7-3 11-10 10-19Z"
        fill="#b9d7a8"
      />
      <path
        d="M32 34C41 36 44 44 42 53c-7-3-11-10-10-19Z"
        fill="#7daa6f"
      />
      <circle cx="32" cy="34" r="3.5" fill="#fff7ea" />
    </svg>
  );
}

function Header() {
  return (
    <header className="header">
      <a href="#" className="brand" aria-label="Taska Nur Iris — laman utama">
        <TniLogo />
        <span className="brandWordmark">
          <strong>Taska Nur Iris</strong>
          <small>Ruang kecil, impian besar</small>
        </span>
      </a>

      <nav className="nav">
        <a href="#about">Tentang Kami</a>
        <a href="#programs">Program</a>
        <a href="#experience">Rutin Harian</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Hubungi</a>
      </nav>

      <a className="headerBtn" href="#contact">
        Atur Lawatan
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="heroContent">
        <p className="label">Pendaftaran 2026 Dibuka</p>
        <h1>Tempat anak kecil <em>membesar dengan yakin.</em></h1>
        <p className="heroText">
          Persekitaran yang selamat, ceria dan penuh kasih sayang untuk anak
          berumur 2 hingga 6 tahun belajar melalui bermain.
        </p>
        <div className="heroAssurances" aria-label="Keutamaan Taska Nur Iris">
          <span><Icon name="check" size={15} /> Rutin tersusun</span>
          <span><Icon name="check" size={15} /> Guru penyayang</span>
          <span><Icon name="check" size={15} /> Belajar sambil bermain</span>
        </div>

        <div className="heroActions">
          <a href="#contact" className="primaryBtn">Atur Sesi Lawatan</a>
          <a href="#programs" className="secondaryBtn">Lihat Program</a>
        </div>
      </div>

      <div className="heroImageWrap" aria-label="Gambaran hari ceria di Taska Nur Iris">
        <div className="heroImage">
          <img
            className="heroPhoto"
            src="https://images.unsplash.com/photo-1761208663763-c4d30657c910?auto=format&fit=crop&w=1400&q=85"
            alt="Kanak-kanak bermain bersama di ruang pembelajaran yang ceria"
            loading="eager"
            fetchPriority="high"
          />
          <div className="heroPhotoShade" aria-hidden="true"></div>
          <div className="classroomHeader">
            <span>Hari ini di TNI</span>
            <strong>Isnin, hari meneroka</strong>
          </div>
          <p className="heroPhotoCredit">
            Foto oleh{" "}
            <a
              href="https://unsplash.com/photos/children-playing-with-toys-in-a-bright-room-4UFIg9htJgE?utm_source=taska_nur_iris&utm_medium=referral"
              target="_blank"
              rel="noreferrer"
            >
              Rewired Digital
            </a>
          </p>
          <div className="classroomMoments">
            <span><small>9:00 pagi</small><strong>Circle time</strong></span>
            <span><small>11:30 pagi</small><strong>Aktiviti seni</strong></span>
          </div>
        </div>

        <div className="floatingInfo top">
          <strong>2 - 6 tahun</strong>
          <span>Program mengikut umur</span>
        </div>

        <div className="floatingInfo bottom">
          <strong>Pendaftaran dibuka</strong>
          <span>Temujanji lawatan dialu-alukan</span>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    ["Umur", "2 - 6 Tahun"],
    ["Waktu", "7:30 Pagi - 6:00 Petang"],
    ["Hari", "Isnin - Jumaat"],
    ["Lawatan", "Temujanji Dialu-alukan"],
  ];

  return (
    <section className="trustBar">
      {items.map(([label, value]) => (
        <div key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="sectionIntro">
        <p className="label">Tentang Taska Nur Iris</p>
        <h2>Ibu bapa rasa tenang. Anak pula seronok untuk datang.</h2>
        <p>
          Kami melihat penjagaan awal sebagai hubungan kepercayaan antara anak,
          keluarga dan pendidik. Setiap ruang dan rutin di Taska Nur Iris dibina
          untuk menyokong perkembangan emosi, sosial, bahasa dan kreativiti.
        </p>
      </div>

      <div className="featureGrid">
        <Feature icon="heart" title="Penyayang" text="Bimbingan lembut, sabar dan penuh perhatian sepanjang hari." />
        <Feature icon="palette" title="Kreatif" text="Aktiviti seni, muzik dan storytelling untuk bina keyakinan anak." />
        <Feature icon="sprout" title="Berkembang" text="Fokus perkembangan emosi, sosial, bahasa dan motor." />
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section className="section programs" id="programs">
      <div className="sectionIntro left">
        <p className="label">Program Kami</p>
        <h2>Program mengikut tahap umur dan perkembangan anak.</h2>
      </div>

      <div className="programGrid">
        <Program no="01" title="Toddler Care" age="2 - 3 tahun" text="Rutin asas, sensory play, aktiviti motor dan pembiasaan sosial dalam suasana yang tenang." />
        <Program no="02" title="Early Learners" age="4 - 5 tahun" text="Kenal huruf, nombor, storytelling, kreativiti dan aktiviti tema mingguan." />
        <Program no="03" title="School Readiness" age="5 - 6 tahun" text="Persediaan sekolah, keyakinan diri, komunikasi dan aktiviti berkumpulan." />
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience" id="experience">
      <div>
        <p className="label">Aktiviti Harian</p>
        <h2>Hari anak diisi dengan rutin yang ceria dan seimbang.</h2>
        <p>
          Anak-anak melalui aktiviti pembelajaran, free play, outdoor play,
          storytelling, rehat dan aktiviti kreatif untuk membantu mereka lebih
          yakin dan seronok datang ke taska.
        </p>
      </div>

      <div className="dayCard">
        <Day time="7:30 Pagi" text="Sambutan Pagi & Free Play" />
        <Day time="9:00 Pagi" text="Circle Time & Tema Pembelajaran" />
        <Day time="10:30 Pagi" text="Snek & Aktiviti Luar" />
        <Day time="11:30 Pagi" text="Aktiviti Kreatif / Bercerita" />
        <Day time="12:30 Tgh" text="Makan Tengah Hari & Rehat" />
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    "Ruang pembelajaran ceria dan selamat",
    "Guru mesra, sabar dan penyayang",
    "Aktiviti harian mengikut tema mingguan",
    "Komunikasi mudah bersama ibu bapa",
    "Fokus kepada perkembangan anak secara menyeluruh",
  ];

  return (
    <section className="section why">
      <div className="whyVisual photoCollage" aria-label="Suasana pembelajaran kanak-kanak">
        <figure className="photoCard photoCardLarge">
          <img
            src="https://images.unsplash.com/photo-1763310225230-6e15b125935a?auto=format&fit=crop&w=1200&q=85"
            alt="Ruang pembelajaran kanak-kanak dengan meja dan kerusi kecil"
            loading="lazy"
          />
          <figcaption>
            Ruang yang mengundang rasa ingin tahu.
            <a
              href="https://unsplash.com/photos/childrens-playroom-with-small-tables-and-chairs-7Lbw1Dxwj3Y?utm_source=taska_nur_iris&utm_medium=referral"
              target="_blank"
              rel="noreferrer"
            >
              Foto: Camila Mofsovich
            </a>
          </figcaption>
        </figure>
        <figure className="photoCard photoCardSmall">
          <img
            src="https://images.unsplash.com/photo-1761208662441-9ba3264ca7fd?auto=format&fit=crop&w=1000&q=85"
            alt="Kanak-kanak melukis menggunakan pensel di meja"
            loading="lazy"
          />
          <figcaption>
            Kreativiti melalui aktiviti harian.
            <a
              href="https://unsplash.com/photos/young-boy-drawing-with-a-yellow-pencil-at-a-table-_rEnjWQXFcA?utm_source=taska_nur_iris&utm_medium=referral"
              target="_blank"
              rel="noreferrer"
            >
              Foto: Rewired Digital
            </a>
          </figcaption>
        </figure>
      </div>

      <div className="whyContent">
        <p className="label">Kenapa Pilih Kami</p>
        <h2>Memberi ketenangan kepada ibu bapa setiap hari.</h2>
        <p>
          Kami mahu ibu bapa rasa yakin setiap kali menghantar anak. Sebab itu
          kami menitikberatkan keselamatan, rutin, komunikasi dan suasana yang
          menyokong perkembangan anak-anak.
        </p>

        <div className="checkList">
          {points.map((point) => (
            <div className="check" key={point}>
              <span><Icon name="check" size={16} /></span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Faq() {
  const items = [
    {
      question: "Umur berapa yang diterima?",
      answer: "Program Taska Nur Iris direka untuk kanak-kanak berumur 2 hingga 6 tahun, dengan aktiviti mengikut tahap perkembangan.",
    },
    {
      question: "Apakah waktu operasi taska?",
      answer: "Waktu operasi ialah Isnin hingga Jumaat, 7:30 pagi hingga 6:00 petang. Hubungi kami untuk semak kekosongan semasa.",
    },
    {
      question: "Boleh datang melawat sebelum mendaftar?",
      answer: "Boleh. Sesi lawatan membantu ibu bapa melihat ruang, memahami rutin harian dan berbincang tentang keperluan anak.",
    },
    {
      question: "Bagaimana perkembangan anak dikongsi?",
      answer: "Maklumat rutin, aktiviti dan perkembangan boleh dikongsi melalui saluran komunikasi yang dipersetujui bersama ibu bapa.",
    },
  ];

  return (
    <section className="section faq" id="faq">
      <div className="sectionIntro left">
        <p className="label">Soalan Ibu Bapa</p>
        <h2>Sebelum melawat, mungkin ini yang anda ingin tahu.</h2>
        <p>Jawapan ringkas untuk membantu anda membuat perbandingan dengan lebih mudah.</p>
      </div>

      <div className="faqList">
        {items.map((item, index) => (
          <details className="faqItem" key={item.question} open={index === 0}>
            <summary>
              <span>{item.question}</span>
              <b className="faqChevron" aria-hidden="true"></b>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contactContent">
        <p className="label">Jom Datang Melawat</p>
        <h2>Lihat sendiri ruang yang bakal menjadi dunia kecil anak anda.</h2>
        <p>
          Berminat untuk daftar anak? Tinggalkan maklumat anda dan kami akan
          hubungi untuk semak kekosongan, program yang sesuai dan jadual lawatan.
        </p>

        <div className="contactInfo">
          <p><strong>Waktu Operasi:</strong> Isnin - Jumaat, 7:30 AM - 6:00 PM</p>
          <p><strong>Program:</strong> Taska, Tadika & Early Learning</p>
        </div>
      </div>

      <form className="form">
        <div className="formHeading">
          <span>Permintaan lawatan</span>
          <strong>Ceritakan sedikit tentang anak anda</strong>
        </div>
        <label>
          <span>Nama ibu / bapa</span>
          <input name="parent-name" placeholder="Contoh: Nur Aisyah" />
        </label>
        <div className="formRow">
          <label>
            <span>No. telefon</span>
            <input name="phone" type="tel" placeholder="01X-XXXXXXX" />
          </label>
          <label>
            <span>Umur anak</span>
            <input name="child-age" placeholder="Contoh: 4 tahun" />
          </label>
        </div>
        <label>
          <span>Soalan atau perkara yang ingin dibincangkan</span>
          <textarea name="message" placeholder="Contoh: Anak pertama kali masuk taska..." />
        </label>
        <button type="button">Hantar Permintaan Lawatan</button>
        <small className="formNote">Maklumat anda hanya digunakan untuk urusan lawatan.</small>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footerBrand">
        <TniLogo className="footerMark" />
        <div>
          <strong>Taska Nur Iris <span>(TNI)</span></strong>
          <p>© 2026 Taska Nur Iris. Hak cipta terpelihara.</p>
        </div>
      </div>
      <a href="#contact">Atur Lawatan</a>
    </footer>
  );
}


function MobileDock() {
  return (
    <div className="mobileDock" aria-label="Tindakan pantas">
      <a href="#programs"><Icon name="book" size={17} /> Lihat Program</a>
      <a href="#contact"><Icon name="calendar" size={17} /> Atur Lawatan</a>
    </div>
  );
}

function Icon({ name, size = 20 }) {
  const shapes = {
    check: <path d="m5 12 4 4L19 6" />,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
    palette: (
      <>
        <path d="M12 3a9 9 0 0 0 0 18h1.5a2.5 2.5 0 0 0 0-5H12a1.5 1.5 0 0 1 0-3h3.5A5.5 5.5 0 0 0 21 7.5C21 5 17 3 12 3Z" />
        <path d="M7.5 10h.01M9 6.5h.01M14 6h.01M17 9h.01" />
      </>
    ),
    sprout: (
      <>
        <path d="M12 21V10" />
        <path d="M12 13C7 13 4 10 4 5c5 0 8 3 8 8ZM12 16c0-5 3-8 8-8 0 5-3 8-8 8Z" />
      </>
    ),
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </>
    ),
    calendar: (
      <>
        <path d="M6 2v4M18 2v4M3 9h18" />
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="m8 15 2 2 5-5" />
      </>
    ),
  };

  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {shapes[name]}
    </svg>
  );
}

function Feature({ icon, title, text }) {
  return (
    <article className="feature">
      <div className="featureIcon"><Icon name={icon} size={25} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function Program({ no, title, age, text }) {
  return (
    <article className="programCard">
      <span>{no}</span>
      <div>
        <h3>{title}</h3>
        <strong>{age}</strong>
        <p>{text}</p>
      </div>
    </article>
  );
}

function Day({ time, text }) {
  return (
    <div className="dayRow">
      <span>{time}</span>
      <p>{text}</p>
    </div>
  );
}