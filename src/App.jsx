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
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <a href="#" className="brand">
        <span className="brandIcon">🌸</span>
        <span>
          <strong>Taska Iris</strong>
          <small>Early Learning Centre</small>
        </span>
      </a>

      <nav className="nav">
        <a href="#about">Tentang Kami</a>
        <a href="#programs">Program</a>
        <a href="#experience">Aktiviti</a>
        <a href="#contact">Hubungi</a>
      </nav>

      <a className="headerBtn" href="#contact">
        Book Lawatan
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="heroContent">
        <p className="label">Pendaftaran 2026 Dibuka</p>
        <h1>Ruang selamat untuk anak belajar, bermain dan membesar.</h1>
        <p className="heroText">
          Taska Iris menyediakan persekitaran yang ceria, bersih dan penuh kasih
          sayang untuk membantu perkembangan awal anak-anak melalui aktiviti
          pembelajaran, bermain, sosial dan kreativiti.
        </p>

        <div className="heroActions">
          <a href="#contact" className="primaryBtn">Book Sesi Lawatan</a>
          <a href="#programs" className="secondaryBtn">Lihat Program</a>
        </div>
      </div>

      <div className="heroImageWrap">
        <div className="heroImage">
          <div className="sun">☀️</div>
          <div className="bear">🧸</div>
          <div className="cloud cloudOne"></div>
          <div className="cloud cloudTwo"></div>
        </div>

        <div className="floatingInfo top">
          <strong>2 - 6 tahun</strong>
          <span>Program mengikut umur</span>
        </div>

        <div className="floatingInfo bottom">
          <strong>Guru penyayang</strong>
          <span>Suasana seperti keluarga</span>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    ["Umur", "2 - 6 Tahun"],
    ["Rutin", "Harian Tersusun"],
    ["Aktiviti", "Belajar Sambil Bermain"],
    ["Status", "Pendaftaran Dibuka"],
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
        <p className="label">Tentang Taska Iris</p>
        <h2>Lebih daripada sekadar tempat jagaan.</h2>
        <p>
          Kami percaya anak-anak belajar dengan lebih baik apabila mereka rasa
          selamat, disayangi dan bebas meneroka. Di Taska Iris, setiap rutin
          dibina untuk membantu perkembangan emosi, sosial, bahasa dan kreativiti
          anak-anak.
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
        <Day time="7:30 AM" text="Arrival & Free Play" />
        <Day time="9:00 AM" text="Morning Circle & Learning Theme" />
        <Day time="10:30 AM" text="Snack & Outdoor Play" />
        <Day time="11:30 AM" text="Creative Activity / Storytelling" />
        <Day time="12:30 PM" text="Lunch & Rest Time" />
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
      <div className="whyVisual">
        <div>📚</div>
        <div>🧩</div>
        <div>🎨</div>
        <div>🌿</div>
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

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contactContent">
        <p className="label">Jom Datang Melawat</p>
        <h2>Book sesi lawatan Taska Iris.</h2>
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
        <input placeholder="Nama ibu/bapa" />
        <input placeholder="No. telefon" />
        <input placeholder="Umur anak" />
        <textarea placeholder="Saya berminat untuk book lawatan..." />
        <button type="button">Hantar Pertanyaan</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Taska Iris</strong>
        <p>© 2026 Taska Iris. All rights reserved.</p>
      </div>
      <a href="#contact">Book Lawatan</a>
    </footer>
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