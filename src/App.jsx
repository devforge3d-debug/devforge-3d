import React, { useEffect, useState } from "react";
import "./App.css";

const contact = {
  email: "devforge3d@gmail.com",
  phone: "06/30-662-2488",
  facebook: "https://www.facebook.com/profile.php?id=61564748591716",
  website: "https://devforge3d.hu",
};

const navItems = [
  { label: "Főoldal", page: "home" },
  { label: "3D nyomtatás", page: "print3d" },
  { label: "Programozás", page: "development" },
  { label: "Weboldal készítés", page: "web" },
  { label: "Visszajelzések", page: "reviews" },
  { label: "Kapcsolat", page: "contact" },
];

const serviceCards = [
  {
    page: "print3d",
    icon: "▧",
    title: "3D nyomtatás",
    text: "Egyedi alkatrészek, prototípusok, pótlások és kisebb szériák készítése pontos egyeztetés alapján.",
  },
  {
    page: "development",
    icon: "</>",
    title: "Programozás",
    text: "Egyedi szoftveres megoldások, webes funkciók, automatizálások és meglévő rendszerek bővítése.",
  },
  {
    page: "web",
    icon: "▣",
    title: "Weboldal készítés",
    text: "Modern, gyors, mobilbarát weboldalak vállalkozásoknak, szolgáltatóknak és induló projekteknek.",
  },
];

const documents = [
  { title: "Általános Szerződési Feltételek", file: "/docs/aszf.pdf" },
  { title: "Adatvédelmi Tájékoztató", file: "/docs/adatvedelem.pdf" },
  { title: "Cookie Tájékoztató", file: "/docs/cookie.pdf" },
  { title: "Impresszum", file: "/docs/impresszum.pdf" },
  { title: "Panaszkezelési Tájékoztató", file: "/docs/panaszkezeles.pdf" },
];

const detailPages = {
  print3d: {
    small: "3D nyomtatás",
    title: "Egyedi alkatrészek és kézzelfogható megoldások.",
    lead:
      "A 3D nyomtatás akkor jó megoldás, amikor valami eltört, hiányzik, drága lenne cserélni, vagy egyszerűen nem kapható készen. Nem kell kész tervvel érkezned: sokszor elég egy fotó, méret vagy egy rövid leírás is, hogy el tudjunk indulni.",
    image: "/assets/hero-bg.png",
    items: [
      "Egyedi műanyag alkatrészek készítése fotó, méret vagy minta alapján",
      "Eltört, hiányzó vagy nehezen beszerezhető elemek pótlása",
      "Autós belső műanyag elemek, tartók, patentek és kisebb javító alkatrészek",
      "Háztartási eszközökhöz tartozó kisebb műanyag elemek pótlása",
      "Prototípusok, próbaverziók és egyedi ötletek elkészítése",
      "Kisebb szériás gyártás, ha több egyforma darabra van szükség",
      "Egyszerűbb 3D tervezés és meglévő modell módosítása",
    ],
    process: [
      ["01", "Megnézzük a problémát", "Küldhetsz képet, méretet vagy meglévő mintadarabot."],
      ["02", "Terv és egyeztetés", "Ha szükséges, elkészül a modell vagy módosítás, majd egyeztetjük a részleteket."],
      ["03", "Nyomtatás", "A megfelelő anyaggal és beállításokkal elkészül a darab."],
      ["04", "Átadás", "A kész alkatrészt átadom, szükség esetén finomítással."],
    ],
  },
  development: {
    small: "Programozás",
    title: "Egyedi fejlesztések, amikor a kész megoldások már kevesek.",
    lead:
      "Ha van egy ötleted, egy visszatérő feladatod vagy egy meglévő rendszered, amin javítani kellene, programozással sok mindent egyszerűbbé lehet tenni. A cél mindig egy használható, átlátható és továbbfejleszthető megoldás.",
    image: "/assets/hero-bg.png",
    items: [
      "Egyedi kisebb programok és webes funkciók készítése",
      "Automatizálások, amik ismétlődő feladatokat gyorsítanak meg",
      "Meglévő kód hibáinak javítása vagy bővítése",
      "Adatkezelés, egyszerű admin felületek és belső rendszerek alapjai",
      "Weboldalakhoz kapcsolódó egyedi megoldások",
      "Ötletből működő első verzió készítése, amit később lehet továbbfejleszteni",
    ],
    process: [
      ["01", "Feladat átbeszélése", "Megnézzük, pontosan mit kell tudnia a rendszernek."],
      ["02", "Megoldási terv", "Kijelöljük a leggyorsabb és legstabilabb irányt."],
      ["03", "Fejlesztés", "Elkészül a funkció, automatizálás vagy kisebb rendszer."],
      ["04", "Tesztelés", "Átnézzük, hogy minden úgy működik-e, ahogy kell."],
    ],
  },
  web: {
    small: "Weboldal készítés",
    title: "Modern weboldal, ami nem csak jól néz ki, hanem érthető is.",
    lead:
      "Egy jó weboldalnak gyorsan el kell mondania, mivel foglalkozol, miért érdemes téged választani, és hogyan tudnak elérni. Letisztult, gyors és mobilon is jól használható oldalakat készítek.",
    image: "/assets/hero-bg.png",
    items: [
      "Bemutatkozó weboldal vállalkozásoknak és szolgáltatóknak",
      "Modern, mobilbarát felület telefonra, tabletre és gépre",
      "Egyszerű landing oldal hirdetésekhez vagy Facebook oldal mellé",
      "Szolgáltatások, árak, elérhetőségek és bemutatkozás átlátható felépítése",
      "Kapcsolati gombok, email, telefon, Facebook és egyéb linkek beépítése",
      "Meglévő weboldal frissítése, szöveg vagy kinézet javítása",
    ],
    process: [
      ["01", "Cél meghatározása", "Megnézzük, mire kell az oldal és kiknek fog szólni."],
      ["02", "Felépítés", "Összerakjuk a szövegeket, menüpontokat és a fő részeket."],
      ["03", "Design és fejlesztés", "Elkészül a modern, mobilbarát felület."],
      ["04", "Élesítés", "Feltöltés, domain beállítás és végső ellenőrzés."],
    ],
  },
};

export default function App() {
  const [page, setPage] = useState("home");

  const openPage = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="site">
      <Header page={page} openPage={openPage} />
      {page === "home" && <HomePage openPage={openPage} />}
      {page === "print3d" && <DetailPage data={detailPages.print3d} openPage={openPage} />}
      {page === "development" && <DetailPage data={detailPages.development} openPage={openPage} />}
      {page === "web" && <DetailPage data={detailPages.web} openPage={openPage} />}
      {page === "reviews" && <Reviews />}
      {page === "contact" && <Contact />}
      {page === "documents" && <Documents />}
      <Footer openPage={openPage} />
    </main>
  );
}

function Header({ page, openPage }) {
  return (
    <header className="topbar">
      <button className="brand" onClick={() => openPage("home")} aria-label="DevForge 3D főoldal">
        <img src="/assets/devforge-logo.png" alt="DevForge 3D logó" />
        <span>DEVFORGE<span>3D</span></span>
      </button>

      <nav className="navLinks" aria-label="Fő navigáció">
        {navItems.map((item) => (
          <button
            key={item.page}
            className={page === item.page ? "active" : ""}
            onClick={() => openPage(item.page)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <a className="navCta" href={`mailto:${contact.email}?subject=Ajánlatkérés - DevForge 3D`}>Árajánlat kérés</a>
    </header>
  );
}

function HomePage({ openPage }) {
  return (
    <>
      <section className="hero">
        <div className="heroBg" />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="kicker">3D nyomtatás • Programozás • Weboldal készítés</p>
          <h1>Ötletből<br /><span>működő megoldás.</span></h1>
          <p className="lead">
            Egyedi alkatrészek, weboldalak és szoftveres megoldások egy helyen. Válaszd ki, mire van szükséged, és nézd meg részletesen, miben tudok segíteni.
          </p>
          <div className="heroButtons">
            <button className="btn primary" onClick={() => openPage("print3d")}>3D nyomtatás érdekel →</button>
            <button className="btn ghost" onClick={() => openPage("contact")}>Kapcsolatfelvétel →</button>
          </div>
          <div className="heroBadges">
            <span>⚡ Gyors válasz</span>
            <span>⬡ Egyedi megoldás</span>
            <span>✓ Átlátható munka</span>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionTitle small="Szolgáltatásaink" title="Válaszd ki, mire van szükséged" />
        <div className="serviceGrid">
          {serviceCards.map((service) => (
            <article className="serviceCard clickable" key={service.page} onClick={() => openPage(service.page)}>
              <div className="serviceIcon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <button className="cardButton">Részletek megnyitása →</button>
            </article>
          ))}
        </div>
      </section>

      <Process />
      <Reviews />
      <Documents />
      <Contact />
    </>
  );
}

function DetailPage({ data, openPage }) {
  return (
    <>
      <section className="detailHero">
        <div className="detailHeroBg" style={{ backgroundImage: `url(${data.image})` }} />
        <div className="heroShade" />
        <div className="detailHeroContent">
          <p className="kicker">{data.small}</p>
          <h1>{data.title}</h1>
          <p className="lead">{data.lead}</p>
          <div className="heroButtons">
            <button className="btn primary" onClick={() => openPage("contact")}>Ajánlatot kérek →</button>
            <button className="btn ghost" onClick={() => openPage("home")}>Vissza a főoldalra</button>
          </div>
        </div>
      </section>

      <section className="section detailLayout">
        <div>
          <SectionTitle small="Részletek" title="Mit vállalok ezen a területen?" />
          <div className="offerList">
            {data.items.map((item) => (
              <div className="offerItem" key={item}><b>✓</b><span>{item}</span></div>
            ))}
          </div>
        </div>
        <aside className="sidePanel">
          <h3>Nem tudod, pontosan mire lenne szükséged?</h3>
          <p>Írd le röviden a problémát vagy az ötletet. Megnézem, milyen megoldás működne a legjobban.</p>
          <a className="btn primary full" href={`mailto:${contact.email}?subject=Ajánlatkérés - ${data.small}`}>Emailt írok</a>
          <a className="btn ghost full" href={contact.facebook} target="_blank" rel="noreferrer">Facebook üzenet</a>
        </aside>
      </section>

      <section className="section processSection">
        <SectionTitle small="Folyamat" title="Hogyan haladunk?" />
        <div className="steps">
          {data.process.map(([number, title, text]) => (
            <div className="step" key={number}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Process() {
  const steps = [
    ["01", "Kapcsolatfelvétel", "Megírod, mire van szükséged, és átbeszéljük az alapokat."],
    ["02", "Tervezés", "Kiválasztjuk a legjobb megoldást és elkészül az ajánlat."],
    ["03", "Megvalósítás", "Elkészítem a kért alkatrészt, weboldalt vagy fejlesztést."],
    ["04", "Átadás", "Átadom a kész munkát, és szükség esetén segítek a használatban is."],
  ];

  return (
    <section className="section processSection">
      <SectionTitle small="Hogyan dolgozunk?" title="Átlátható folyamat a jó végeredményért" />
      <div className="steps">
        {steps.map(([number, title, text]) => (
          <div className="step" key={number}>
            <strong>{number}</strong>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", project: "", rating: "5", message: "" });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("devforge_reviews_v3");
    if (stored) {
      try {
        setReviews(JSON.parse(stored));
      } catch {
        setReviews([]);
      }
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSaved(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const cleanReview = {
      id: Date.now(),
      name: form.name.trim(),
      project: form.project.trim() || "Ügyfél",
      rating: Number(form.rating),
      message: form.message.trim(),
    };

    if (!cleanReview.name || !cleanReview.message) return;

    const nextReviews = [cleanReview, ...reviews];
    setReviews(nextReviews);
    localStorage.setItem("devforge_reviews_v3", JSON.stringify(nextReviews));
    setForm({ name: "", project: "", rating: "5", message: "" });
    setSaved(true);
  };

  return (
    <section className="section reviewsSection">
      <SectionTitle small="Elégedett ügyfeleink" title="Visszajelzések" />

      {reviews.length > 0 ? (
        <div className="reviewGrid">
          {reviews.map((review) => (
            <article className="reviewCard" key={review.id}>
              <div className="stars">{"★".repeat(review.rating)}</div>
              <p>{review.message}</p>
              <div className="reviewAuthor">
                <span>{review.name.charAt(0).toUpperCase()}</span>
                <div>
                  <strong>{review.name}</strong>
                  <small>{review.project}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="emptyReviews">
          <div className="emptyIcon">💬</div>
          <h3>Segítsd a munkámat egy visszajelzéssel 🙌</h3>
          <p>Ha már dolgoztunk együtt, pár mondat is sokat segít abban, hogy tovább tudjam javítani a munkámat. Köszönöm, ha megosztod a tapasztalatod.</p>
        </div>
      )}

      <form className="reviewForm" onSubmit={handleSubmit}>
        <div className="formHead">
          <p className="kicker">Visszajelzés küldése</p>
          <h3>Írd le a tapasztalatod</h3>
        </div>

        <div className="formGrid">
          <label>
            Név
            <input name="name" value={form.name} onChange={handleChange} placeholder="Neved" required />
          </label>
          <label>
            Projekt / szerver / munka
            <input name="project" value={form.project} onChange={handleChange} placeholder="Projekt vagy munka megnevezése" />
          </label>
          <label>
            Értékelés
            <select name="rating" value={form.rating} onChange={handleChange}>
              <option value="5">5 csillag</option>
              <option value="4">4 csillag</option>
              <option value="3">3 csillag</option>
            </select>
          </label>
        </div>

        <label>
          Vélemény
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Írd le pár mondatban a tapasztalatod..." required />
        </label>

        <button className="btn primary" type="submit">Visszajelzés mentése →</button>
        {saved && <p className="savedMessage">Köszönöm, a visszajelzés elmentve és megjelent az oldalon.</p>}
      </form>
    </section>
  );
}

function Documents() {
  return (
    <section className="section documentSection">
      <SectionTitle small="Dokumentumok" title="Minden fontos információ egy helyen" />
      <div className="documentGrid">
        {documents.map((doc) => (
          <a className="documentCard" key={doc.title} href={doc.file} download>
            <span>PDF</span>
            <h3>{doc.title}</h3>
            <p>Letöltés PDF-ben</p>
            <b>↓</b>
          </a>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contactBox">
      <div className="contactContent">
        <p className="kicker">Kapcsolat</p>
        <h2>Beszéljük át, mire van szükséged.</h2>
        <p>
          Írd meg röviden az elképzelést vagy a problémát. Megnézem, milyen irány lenne a legjobb,
          és érthetően visszajelzek a lehetőségekkel.
        </p>

        <div className="contactMethods">
          <a href={`tel:${contact.phone.replaceAll("/", "").replaceAll("-", "")}`}>
            <small>Telefon</small>
            <strong>{contact.phone}</strong>
          </a>
          <a href={`mailto:${contact.email}`}>
            <small>Email</small>
            <strong>{contact.email}</strong>
          </a>
          <a href={contact.website} target="_blank" rel="noreferrer">
            <small>Weboldal</small>
            <strong>{contact.website.replace("https://", "")}</strong>
          </a>
        </div>
      </div>

      <div className="contactActionPanel">
        <span>Gyors egyeztetés</span>
        <p>3D nyomtatás, weboldal vagy fejlesztés esetén is írhatsz.</p>
        <a className="btn primary" href={`mailto:${contact.email}?subject=Ajánlatkérés - DevForge 3D`}>Emailt írok →</a>
        <a className="btn ghost" href={contact.facebook} target="_blank" rel="noreferrer">Facebook üzenet →</a>
      </div>
    </section>
  );
}

function Footer({ openPage }) {
  return (
    <footer className="footer">
      <div className="footerBrand">
        <img src="/assets/devforge-logo.png" alt="DevForge 3D logó" />
        <strong>DEVFORGE<span>3D</span></strong>
        <p>Innovatív megoldások 3D nyomtatás, fejlesztés és weboldal készítés terén.</p>
      </div>
      <div>
        <h4>Oldalak</h4>
        {navItems.map((item) => <button key={item.page} onClick={() => openPage(item.page)}>{item.label}</button>)}
      </div>
      <div>
        <h4>Dokumentumok</h4>
        {documents.map((doc) => <a key={doc.title} href={doc.file} download>{doc.title}</a>)}
      </div>
      <div>
        <h4>Kapcsolat</h4>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
        <p>{contact.website}</p>
      </div>
    </footer>
  );
}

function SectionTitle({ small, title }) {
  return (
    <div className="sectionTitle">
      <p>{small}</p>
      <h2>{title}</h2>
    </div>
  );
}
