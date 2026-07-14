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

function Header() {
  return (
    <header className="header">
      <a href="#" className="brand">
        <span className="brandIcon" aria-hidden="true">TNI</span>
        <span>
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
          <span>✓ Rutin tersusun</span>
          <span>✓ Guru penyayang</span>
          <span>✓ Belajar sambil bermain</span>
        </div>

        <div className="heroActions">
          <a href="#contact" className="primaryBtn">Atur Sesi Lawatan</a>
          <a href="#programs" className="secondaryBtn">Lihat Program</a>
        </div>
      </div>

      <div className="heroImageWrap" aria-label="Gambaran hari ceria di Taska Nur Iris">
        <div className="heroImage">
          <div className="classroomHeader">
            <span>Hari ini di TNI</span>
            <strong>Isnin, hari meneroka</strong>
          </div>
          <div className="classroomScene">
            <div className="classroomRainbow"><i></i><i></i><i></i></div>
            <div className="classroomBoard">
              <small>Tema minggu ini</small>
              <strong>Warna & Alam</strong>
              <div><b>A</b><b>B</b><b>C</b></div>
            </div>
            <div className="classroomPlant"><i></i><span></span></div>
            <div className="classroomRug"></div>
            <div className="child childOne"><i></i><span></span></div>
            <div className="child childTwo"><i></i><span></span></div>
            <div className="blocks"><i></i><i></i><i></i></div>
          </div>
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
        <Feature icon="💛" title="Penyayang" text="Bimbingan lembut, sabar dan penuh perhatian sepanjang hari." />
        <Feature icon="🎨" title="Kreatif" text="Aktiviti seni, muzik dan storytelling untuk bina keyakinan anak." />
        <Feature icon="🌱" title="Berkembang" text="Fokus perkembangan emosi, sosial, bahasa dan motor." />
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
      <div className="whyVisual" aria-label="Empat fokus pembelajaran">
        <div><strong>Aa</strong><small>Bahasa</small></div>
        <div><strong>123</strong><small>Nombor</small></div>
        <div><strong>✦</strong><small>Kreativiti</small></div>
        <div><strong>∞</strong><small>Eksplorasi</small></div>
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
              <span>✓</span>
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
              <b>⌄</b>
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
      <div>
        <strong>Taska Nur Iris <span>(TNI)</span></strong>
        <p>© 2026 Taska Nur Iris. Hak cipta terpelihara.</p>
      </div>
      <a href="#contact">Atur Lawatan</a>
    </footer>
  );
}


function MobileDock() {
  return (
    <div className="mobileDock" aria-label="Tindakan pantas">
      <a href="#programs">Lihat Program</a>
      <a href="#contact">Atur Lawatan</a>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <article className="feature">
      <div>{icon}</div>
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