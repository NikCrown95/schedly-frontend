export default function Home() {
  return (
    <main className="home">
      <nav className="nav">
        <a className="brand" href="/" aria-label="Schedly home"><span className="brandMark logoMark"><span className="logoCal"></span><span className="logoCheck">✓</span></span><span>Schedl<span className="brandY">y</span></span></a>
        <div className="navLinks"><a href="/prodotto">Prodotto</a><a href="/come-funziona">Come funziona</a><a href="/prezzi">Prezzi</a><a href="/faq">FAQ</a></div>
        <div className="navActions"><a href="/login">Accedi</a><a className="button buttonSmall" href="/demo">Richiedi una demo</a></div>
      </nav>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">IL TUO ASSISTENTE PER GLI APPUNTAMENTI</p>
          <h1>Mentre lavori,<br/><span>Schedly prende gli appuntamenti per te.</span></h1>
          <p className="lead">WhatsApp, prenotazioni online e agenda lavorano insieme. I tuoi clienti prenotano, Schedly organizza tutto automaticamente.</p>
          <div className="heroActions"><a className="button" href="/demo">Richiedi una demo <span>→</span></a><a className="textLink" href="/come-funziona">Scopri come funziona <span>→</span></a></div>
          <p className="micro">Demo gratuita · Nessun impegno · Configurazione assistita</p>
        </div>

        <div className="productVisual" aria-label="Schedly collega WhatsApp e agenda">
          <div className="scribble">WhatsApp → Schedly → Agenda</div>
          <div className="dashboardCard"><div className="windowBar"><i></i><i></i><i></i><strong>Schedly</strong></div><div className="dashBody"><aside><b>S</b><span></span><span></span><span></span><span></span></aside><div className="calendar"><div className="calendarTop"><div><small>AGENDA</small><strong>Oggi</strong></div><small>Settembre</small></div><div className="days"><span>LUN</span><span>MAR</span><span>MER</span><span>GIO</span><span>VEN</span></div><div className="grid"><div></div><div className="appointment one">09:30 · Taglio</div><div></div><div className="appointment two">11:00 · Barba</div><div></div><div></div><div></div><div className="appointment three">16:30 · Giulia Rossi</div></div></div></div></div>
          <div className="phone"><div className="notch"></div><div className="chatHead"><span className="bot">S</span><div><b>Schedly AI</b><small>● online</small></div></div><div className="chat"><p className="bubble customer">Ciao! Avete posto domani pomeriggio?</p><p className="bubble ai">Certo! Ho disponibilità alle <b>15:00</b>, <b>16:30</b> o <b>18:00</b>.</p><p className="bubble customer short">Perfetto, 16:30!</p><p className="bubble ai">Fatto ✓<br/>Appuntamento confermato.</p></div></div>
          <div className="successCard"><span>✓</span><div><b>Appuntamento creato</b><small>Domani · 16:30</small></div></div>
        </div>
      </section>

      <section className="homeProof"><p>UN SOLO SISTEMA, DALLA RICHIESTA ALL’AGENDA</p><div className="proofFlow"><article><span>01</span><b>Il cliente scrive</b><small>WhatsApp o booking online</small></article><i>→</i><article><span>02</span><b>Schedly organizza</b><small>Controlla disponibilità e servizio</small></article><i>→</i><article><span>03</span><b>L’agenda si aggiorna</b><small>In automatico, in tempo reale</small></article></div></section>

      <section className="homeFeature"><div><p className="eyebrow">MENO INTERRUZIONI</p><h2>Tu pensi ai clienti.<br/><span>Schedly pensa agli appuntamenti.</span></h2><p>Una sola agenda per le prenotazioni che arrivano dal web, da WhatsApp e dalla tua attività. Tutto sincronizzato, senza rincorrere messaggi.</p><a className="textLink" href="/prodotto">Scopri il prodotto →</a></div><div className="featureCard"><span className="featureBot">S</span><div><small>ASSISTENTE SCHEDLY</small><strong>Al lavoro anche mentre tu sei occupato.</strong></div><div className="statusLine"><i></i> Assistente attivo</div></div></section>

      <section className="homeCta"><p>IL TUO TEMPO VALE DI PIÙ.</p><h2>Lascia che Schedly gestisca<br/>gli appuntamenti per te.</h2><a className="button light" href="/demo">Richiedi una demo gratuita →</a><small>20 minuti · Nessun impegno</small></section>

      <footer className="footer"><a className="brand" href="/"><span className="brandMark logoMark"><span className="logoCal"></span><span className="logoCheck">✓</span></span><span>Schedly</span></a><div><a href="/prodotto">Prodotto</a><a href="/come-funziona">Come funziona</a><a href="/prezzi">Prezzi</a><a href="/faq">FAQ</a><a href="/demo">Demo</a></div><small>© 2026 Schedly</small></footer>
    </main>
  );
}
