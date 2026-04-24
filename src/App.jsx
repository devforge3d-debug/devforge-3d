import React, { useState } from "react";
import "./App.css";

const pages = {
  home: "Kezdőlap",
  print3d: "3D nyomtatás",
  web: "Weboldal készítés",
  programming: "Programozás",
};

const serviceCards = [
  {
    id: "print3d",
    tag: "3D",
    title: "3D nyomtatás",
    text: "Egyedi műanyag alkatrészek, pótlások, prototípusok és kisebb szériák készítése. Akkor is segítek, ha csak egy eltört darabod vagy egy ötleted van.",
  },
  {
    id: "web",
    tag: "WEB",
    title: "Weboldal készítés",
    text: "Letisztult, gyors és mobilbarát weboldalak vállalkozásoknak, szolgáltatóknak vagy induló projektekhez.",
  },
  {
    id: "programming",
    tag: "CODE",
    title: "Programozás",
    text: "Egyedi fejlesztések, kisebb rendszerek, automatizálások és webes funkciók készítése átlátható módon.",
  },
];

const printItems = [
  "Egyedi műanyag alkatrészek készítése minta, méret vagy fotó alapján",
  "Eltört, hiányzó vagy nehezen beszerezhető elemek pótlása",
  "Autós belső műanyag elemek, tartók, patentek és kisebb javító alkatrészek",
  "Háztartási eszközökhöz tartozó kisebb műanyag elemek pótlása",
  "Prototípusok, próbaverziók és egyedi ötletek elkészítése",
  "Kisebb szériás gyártás, ha több egyforma darabra van szükség",
  "Egyszerűbb 3D tervezés és meglévő modell módosítása",
];

const webItems = [
  "Bemutatkozó weboldal vállalkozásoknak és szolgáltatóknak",
  "Modern, mobilbarát felület telefonra, tabletre és gépre",
  "Egyszerű landing oldal hirdetésekhez vagy Facebook oldal mellé",
  "Szolgáltatások, árak, elérhetőségek és bemutatkozás átlátható felépítése",
  "Kapcsolati gombok, email, telefon, Facebook és egyéb linkek beépítése",
  "Meglévő weboldal frissítése, szöveg vagy kinézet javítása",
];

const programmingItems = [
  "Egyedi kisebb programok és webes funkciók készítése",
  "Automatizálások, amik ismétlődő feladatokat gyorsítanak meg",
  "Meglévő kód hibáinak javítása vagy bővítése",
  "Adatkezelés, egyszerű admin felületek és belső rendszerek alapjai",
  "Weboldalakhoz kapcsolódó egyedi megoldások",
  "Ötletből működő első verzió készítése, amit később lehet továbbfejleszteni",
];

export default function App() {
  const [activePage, setActivePage] = useState("home");

  const openPage = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="site">
      <Navigation activePage={activePage} openPage={openPage} />

      {activePage === "home" && <HomePage openPage={openPage} />}
      {activePage === "print3d" && (
        <ServicePage
          eyebrow="3D nyomtatás"
          title="Egyedi alkatrészek és gyors, kézzelfogható megoldások."
          intro="A 3D nyomtatás akkor jön jól, amikor valami eltört, hiányzik, drága lenne cserélni, vagy egyszerűen nincs kész megoldás rá. Nem kell kész tervvel érkezned, elég egy fotó, méret vagy ötlet, és megnézem, mit lehet belőle kihozni."
          items={printItems}
          sideTitle="Mikor érdemes írnod?"
          sideText="Ha van egy törött alkatrészed, hiányzik egy műanyag elem, kellene egy egyedi tartó, burkolat, prototípus vagy pár darabos kis széria."
        />
      )}
      {activePage === "web" && (
        <ServicePage
          eyebrow="Weboldal készítés"
          title="Modern weboldal, ami nem csak kinéz valahogy, hanem érthető is."
          intro="Egy jó weboldalnak gyorsan el kell mondania, mivel foglalkozol, miért érdemes téged választani, és hogyan tudnak elérni. Ebben segítek: letisztult, átlátható és mobilon is jól használható oldalakkal."
          items={webItems}
          sideTitle="Kinek ajánlott?"
          sideText="Vállalkozóknak, szolgáltatóknak, induló projekteknek vagy bárkinek, aki szeretne egy normális online megjelenést Facebook oldal mellé vagy helyett."
        />
      )}
      {activePage === "programming" && (
        <ServicePage
          eyebrow="Programozás"
          title="Egyedi fejlesztések, amikor a kész megoldások már kevesek."
          intro="Ha van egy ötleted, egy visszatérő feladatod, vagy egy meglévő rendszered, amin javítani kellene, programozással sok mindent egyszerűbbé lehet tenni. A cél mindig az, hogy használható, érthető és továbbfejleszthető megoldás készüljön."
          items={programmingItems}
          sideTitle="Miben tud segíteni?"
          sideText="Kisebb szoftverekben, webes funkciókban, automatizálásban, hibajavításban vagy egy ötlet első működő verziójának elkészítésében."
        />
      )}

      <Footer />
    </main>
  );
}

function Navigation({ activePage, openPage }) {
  return (
    <nav className="nav">
      <button className="brand" onClick={() => openPage("home")}>
        <span className="brandMark">DF</span>
        <span className="brandText">DevForge 3D</span>
      </button>

      <div className="navLinks">
        {Object.entries(pages).map(([key, label]) => (
          <button
            key={key}
            className={activePage === key ? "active" : ""}
            onClick={() => openPage(key)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function HomePage({ openPage }) {
  return (
    <>
      <section className="hero">
        <div className="gridGlow" />
        <div className="orb orbOne" />
        <div className="orb orbTwo" />

        <div className="heroContent">
          <div className="eyebrow">3D nyomtatás • Programozás • Weboldal készítés</div>
          <h1>
            Ötletből
            <span> működő megoldás.</span>
          </h1>
          <p>
            Egy helyen találsz segítséget egyedi 3D nyomtatott alkatrészekhez, weboldal készítéshez és kisebb szoftveres fejlesztésekhez.
          </p>
          <div className="heroActions">
            <button className="btn primary" onClick={() => openPage("print3d")}>3D nyomtatás érdekel</button>
            <button className="btn ghost" onClick={() => openPage("web")}>Weboldalt szeretnék</button>
          </div>
        </div>

        <div className="heroPanel">
          <div className="panelTop"><span /><span /><span /></div>
          <div className="printerBox">
            <div className="printerHead">DEVFORGE</div>
            <div className="printLayer layerOne" />
            <div className="printLayer layerTwo" />
            <div className="printLayer layerThree" />
            <div className="codeLine short" />
            <div className="codeLine" />
            <div className="codeLine medium" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionTitle">
          <span>Válassz területet</span>
          <h2>Miben tudok segíteni?</h2>
          <p>Röviden összefoglalva, hogy gyorsan megtaláld, mire van szükséged.</p>
        </div>

        <div className="serviceGrid">
          {serviceCards.map((card) => (
            <article className="serviceCard clickable" key={card.id} onClick={() => openPage(card.id)}>
              <div className="serviceIcon">{card.tag}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <button className="cardButton">Részletek megnyitása →</button>
            </article>
          ))}
        </div>
      </section>

      <section className="section splitSection">
        <div className="leftText">
          <span className="label">Egyszerű folyamat</span>
          <h2>Nem kell tudnod a pontos megoldást.</h2>
          <p>
            Elég, ha leírod, mire lenne szükséged. Ha alkatrészről van szó, küldhetsz fotót vagy méretet is. Ez alapján megnézem, hogyan lehet megoldani.
          </p>
        </div>
        <div className="timeline">
          <ProcessStep number="01" title="Megírod az ötletet vagy problémát" text="Lehet egy törött alkatrész, weboldal ötlet vagy szoftveres feladat." />
          <ProcessStep number="02" title="Átnézem és visszajelzek" text="Megnézem, mi a legjobb megoldás, majd kapsz egy érthető ajánlatot." />
          <ProcessStep number="03" title="Elkészül a munka" text="A folyamat közben egyeztetünk, hogy a végeredmény tényleg használható legyen." />
        </div>
      </section>
    </>
  );
}

function ServicePage({ eyebrow, title, intro, items, sideTitle, sideText }) {
  return (
    <>
      <section className="subHero">
        <div className="subHeroText">
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>

      <section className="section detailGrid">
        <div className="detailList">
          <span className="label">Mit vállalok?</span>
          <h2>Részletesen</h2>
          <div className="offerList">
            {items.map((item) => (
              <div className="offerItem" key={item}>
                <b>✓</b>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="sideCard">
          <div className="sideBadge">DEVFORGE 3D</div>
          <h3>{sideTitle}</h3>
          <p>{sideText}</p>
          <a className="btn primary full" href="mailto:devforge3d@gmail.com">Ajánlatot kérek</a>
          <a className="btn ghost full" href="https://www.facebook.com/profile.php?id=61564748591716" target="_blank" rel="noreferrer">Facebook üzenet</a>
        </aside>
      </section>
    </>
  );
}

function ProcessStep({ number, title, text }) {
  return (
    <div className="timeItem">
      <div className="timeNumber">{number}</div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} DevForge 3D</span>
      <span>3D nyomtatás • Programozás • Weboldal készítés</span>
    </footer>
  );
}
