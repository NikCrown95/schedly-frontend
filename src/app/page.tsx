export default function Home() {
  return (
    <main className="home">
      <nav className="nav">
        <a className="brand" href="/" aria-label="Schedly home">
          <span className="brandMark">✓</span>
          <span>Schedly</span>
        </a>
        <div className="navLinks">
          <a href="/prodotto">Prodotto</a>
          <a href="/come-funziona">Come funziona</a>
          <a href="/prezzi">Prezzi</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="navActions">
          <a href="/login">Accedi</a>
          <a className="button buttonSmall" href="/demo">Richiedi una demo</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">IL TUO ASSISTENTE PER GLI APPUNTAMENTI</p>
          <h1>Mentre lavori,<br /><span>Schedly prende gli appuntamenti per te.</span></h1>
          <p className="lead">WhatsApp, prenotazioni online e agenda lavorano insieme. I tuoi clienti prenotano, Schedly organizza tutto automaticamente.</p>
          <div className="heroActions">
            <a className="button" href="/demo">Richiedi una demo <span>→</span></a>
            <a className="textLink" href="/come-funziona">Scopri come funziona <span>→</span></a>
          </div>
          <p className="micro">Demo gratuita · Nessun impegno · Configurazione assistita</p>
        </div>

        <div className="productVisual" aria-label="Anteprima Schedly">
          <div className="dashboardCard">
            <div className="windowBar"><i></i><i></i><i></i></div>
            <div className="dashBody">
              <aside><b>S</b><span></span><span></span><span></span><span></span></aside>
              <div className="calendar">
                <div className="calendarTop"><strong>Oggi</strong><small>Settembre</small></div>
                <div className="days"><span>LUN</span><span>MAR</span><span>MER</span><span>GIO</span><span>VEN</span></div>
                <div className="grid"><div></div><div className="appointment one">09:30 · Taglio</div><div></div><div className="appointment two">11:00 · Barba</div><div></div><div></div><div></div><div className="appointment three">16:30 · Taglio</div></div>
              </div>
            </div>
          </div>

          <div className="phone">
            <div className="notch"></div>
            <div className="chatHead"><span className="bot">S</span><div><b>Schedly AI</b><small>online</small></div></div>
            <div className="chat">
              <p className="bubble customer">Ciao! Avete posto domani pomeriggio?</p>
              <p className="bubble ai">Certo! Ho disponibilità alle <b>15:00</b>, <b>16:30</b> o <b>18:00</b>.</p>
              <p className="bubble customer short">Perfetto, 16:30!</p>
              <p className="bubble ai">Fatto ✓ Appuntamento confermato.</p>
            </div>
          </div>

          <div className="successCard"><span>✓</span><div><b>Appuntamento creato</b><small>Domani · 16:30</small></div></div>
          <div className="flowLabel">WhatsApp → Schedly → Agenda</div>
        </div>
      </section>
    </main>
  );
}
