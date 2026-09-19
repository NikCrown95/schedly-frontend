import MobileMenu from "./MobileMenu";

const Icon = ({name}:{name:"calendar"|"users"|"clock"|"message"|"bell"|"link"|"check"|"chart"|"phone"|"shield"|"support"|"spark"}) => {
  const common={viewBox:"0 0 24 24","aria-hidden":true} as const;
  if(name==="calendar") return <svg {...common}><path d="M7 3v3M17 3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/></svg>;
  if(name==="users") return <svg {...common}><path d="M16 19c0-2.5-2-4-4-4s-4 1.5-4 4M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 10.5a2.5 2.5 0 0 1 0 5M6 10.5a2.5 2.5 0 0 0 0 5"/></svg>;
  if(name==="clock") return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
  if(name==="message") return <svg {...common}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-5 4v-4.5A2.5 2.5 0 0 1 4 13.5v-8Z"/></svg>;
  if(name==="bell") return <svg {...common}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>;
  if(name==="link") return <svg {...common}><path d="m10 13 4-4M8.5 16H7a4 4 0 0 1 0-8h3M15.5 8H17a4 4 0 0 1 0 8h-3"/></svg>;
  if(name==="check") return <svg {...common}><path d="m5 12 4 4L19 6"/></svg>;
  if(name==="chart") return <svg {...common}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>;
  if(name==="phone") return <svg {...common}><path d="M7 3h3l1.5 4-2 1.5a15 15 0 0 0 6 6l1.5-2 4 1.5v3a3 3 0 0 1-3 3C10.3 20 4 13.7 4 6a3 3 0 0 1 3-3Z"/></svg>;
  if(name==="shield") return <svg {...common}><path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>;
  if(name==="support") return <svg {...common}><path d="M4 13v-2a8 8 0 0 1 16 0v2M4 13a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2v1ZM20 13a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2v1ZM17 15c0 3-2 5-5 5h-1"/></svg>;
  return <svg {...common}><path d="m13 2-2 7H5l5 4-2 9 5-7h6l-5-4 2-9h-3Z"/></svg>;
};

const Logo = () => <a className="shBrand" href="/" aria-label="Schedly home"><img src="/schedly-logo.png" alt="Schedly"/></a>;

const BookingPhone = () => <div className="shPhone">
  <div className="shPhoneTop"><span>Schedly</span><small>Prenotazione online</small></div>
  <div className="shBookingSteps"><span className="done"><b>1</b> Servizio</span><span className="done"><b>2</b> Orario</span><span><b>3</b> Conferma</span></div>
  <div className="shServiceCard"><small>Servizio</small><b>Piega</b><span>30 min</span></div>
  <div className="shDateLabel">Domani</div>
  <div className="shTimes"><span>09:30</span><b>10:30</b><span>11:00</span></div>
  <div className="shConfirm">Conferma prenotazione</div>
</div>;

const WhatsAppPhone = () => <div className="shPhone shWaPhone">
  <div className="shWaHead"><span className="shWaAvatar">S</span><div><b>Schedly</b><small>online</small></div></div>
  <div className="shWaBody">
    <p className="me">Ciao! Posso prenotare una piega domani mattina?<small>10:24 ✓✓</small></p>
    <p>Certo. Ho disponibilità alle 10:30, 11:00 e 12:00.<small>10:25</small></p>
    <p className="me">Perfetto, 10:30.<small>10:25 ✓✓</small></p>
    <p>Fatto! Appuntamento confermato per domani alle 10:30.<small>10:26</small></p>
  </div>
</div>;

const DashboardMock = () => <div className="shDash">
  <div className="shDashTop"><div><small>Dashboard</small><b>Buongiorno 👋</b></div><span>Oggi</span></div>
  <div className="shKpis"><div><small>Appuntamenti</small><b>12</b></div><div><small>Clienti</small><b>8</b></div><div><small>Confermati</small><b>10</b></div><div><small>Da confermare</small><b>2</b></div></div>
  <div className="shDashTitle"><b>Prossimi appuntamenti</b><small>Vedi tutti</small></div>
  <div className="shAppointment"><i/><b>10:30</b><span>Laura Bianchi<small>Piega</small></span><em>Confermato</em></div>
  <div className="shAppointment"><i/><b>11:00</b><span>Marco Rossi<small>Taglio</small></span><em>Confermato</em></div>
  <div className="shAppointment"><i/><b>14:30</b><span>Giulia Verdi<small>Colore</small></span><em>Da confermare</em></div>
</div>;

export default function Home(){
  return <main className="schedlyHome">
    <header className="shNav">
      <Logo/>
      <nav aria-label="Navigazione principale">
        <a href="/prodotto">Prodotto</a>
        <a href="/come-funziona">Come funziona</a>
        <a href="/prezzi">Prezzi</a>
        <a href="/faq">FAQ</a>
      </nav>
      <div className="shNavActions"><a href="/login">Accedi</a><a className="shButton shButtonSmall" href="/demo">Prova gratis 7 giorni</a></div>
      <MobileMenu/>
    </header>

    <section className="shHero">
      <div className="shHeroCopy">
        <span className="shEyebrow">PER CHI LAVORA SU APPUNTAMENTO</span>
        <h1>Tutti i tuoi appuntamenti. <em>Un solo posto.</em></h1>
        <p>Schedly organizza agenda, clienti, servizi e disponibilità. I tuoi clienti prenotano online e, con Schedly AI, anche su WhatsApp.</p>
        <a className="shButton" href="/demo">Prova gratis 7 giorni →</a>
        <div className="shMicro"><span><Icon name="check"/> Nessuna carta di credito</span><span><Icon name="clock"/> Attivazione guidata</span></div>
      </div>
      <div className="shHeroVisual" aria-label="Anteprima della dashboard Schedly">
        <DashboardMock/>
        <div className="shHeroToast"><span><Icon name="check"/></span><div><b>Nuova prenotazione</b><small>Laura Bianchi · Piega · 10:30</small></div></div>
      </div>
    </section>

    <section className="shProblem shSection">
      <div className="shSectionHead"><span className="shEyebrow">IL PROBLEMA</span><h2>Il lavoro è con i clienti. Non con il telefono.</h2><p>Schedly riduce il tempo perso dietro a messaggi, agenda e conferme.</p></div>
      <div className="shThree">
        <article><span className="shIcon"><Icon name="phone"/></span><h3>Telefonate perse</h3><p>Quando stai lavorando, non puoi sempre rispondere. E una richiesta può diventare un appuntamento perso.</p></article>
        <article><span className="shIcon"><Icon name="message"/></span><h3>Messaggi fuori orario</h3><p>Disponibilità, spostamenti e cancellazioni arrivano anche quando la giornata dovrebbe essere finita.</p></article>
        <article><span className="shIcon"><Icon name="calendar"/></span><h3>Agenda da rincorrere</h3><p>Tra chat, telefonate e appunti è facile perdere tempo o creare confusione sugli orari.</p></article>
      </div>
    </section>

    <section className="shHow shSection">
      <div className="shSectionHead"><span className="shEyebrow">COME FUNZIONA</span><h2>Tre passi. Poi Schedly lavora con te.</h2></div>
      <div className="shSteps">
        <article><b>1</b><div><h3>Configura servizi e orari</h3><p>Inserisci ciò che offri, quanto dura e quando sei disponibile.</p></div></article>
        <article><b>2</b><div><h3>Condividi il link o usa WhatsApp</h3><p>I clienti prenotano dalla tua pagina. Con Schedly AI possono farlo anche in chat.</p></div></article>
        <article><b>3</b><div><h3>L’agenda si aggiorna</h3><p>Ogni prenotazione confermata compare nella tua agenda con cliente, servizio e orario.</p></div></article>
      </div>
    </section>

    <section className="shClientView shSection">
      <div className="shSectionHead"><span className="shEyebrow">COME PRENOTANO I TUOI CLIENTI</span><h2>Semplice per loro. Ordinato per te.</h2><p>Due percorsi diversi, un’unica agenda.</p></div>
      <div className="shClientGrid">
        <article><div className="shCardHead"><span className="shIcon"><Icon name="link"/></span><div><b>Booking online</b><small>Incluso in Schedly</small></div></div><BookingPhone/></article>
        <article><div className="shCardHead"><span className="shIcon shIconGreen"><Icon name="message"/></span><div><b>WhatsApp</b><small>Con Schedly AI</small></div></div><WhatsAppPhone/></article>
      </div>
    </section>

    <section className="shReminder shSection">
      <div className="shReminderCopy"><span className="shEyebrow">PROMEMORIA AUTOMATICI</span><h2>Ricorda l’appuntamento al posto tuo.</h2><p>Schedly invia promemoria automatici così il cliente ha l’orario sotto mano e tu riduci il rischio di appuntamenti dimenticati.</p></div>
      <div className="shMessageCard"><div className="shMessageHead"><span className="shIcon"><Icon name="bell"/></span><div><b>Promemoria appuntamento</b><small>Schedly</small></div></div><p>“Ciao Laura! Ti ricordiamo il tuo appuntamento di domani alle 10:30 per Piega. Se devi modificare o annullare, contattaci.”</p><small>Inviato automaticamente</small></div>
    </section>

    <section className="shDashboard shSection">
      <div className="shDashboardCopy"><span className="shEyebrow">LA TUA DASHBOARD</span><h2>Apri Schedly e sai subito cosa succede oggi.</h2><p>Calendario, clienti e prossimi appuntamenti in una vista unica e leggibile.</p><a href="/prodotto">Scopri il prodotto →</a></div>
      <DashboardMock/>
    </section>

    <section className="shAudience shSection">
      <div className="shSectionHead"><span className="shEyebrow">PER CHI È SCHEDLY</span><h2>Per attività che lavorano su appuntamento.</h2></div>
      <div className="shAudienceGrid">
        <article><span>✂️</span><h3>Parrucchieri e barbieri</h3><p>Taglio, piega, barba e colore prenotabili senza interrompere il lavoro.</p></article>
        <article><span>✨</span><h3>Centri estetici</h3><p>Trattamenti, durate e disponibilità sempre chiari per cliente e titolare.</p></article>
        <article><span>🩺</span><h3>Studi medici e dentistici</h3><p>Un’agenda ordinata per gestire richieste, orari e promemoria.</p></article>
        <article><span>🏃</span><h3>Personal trainer</h3><p>Sessioni e disponibilità gestite senza continui messaggi avanti e indietro.</p></article>
      </div>
    </section>

    <section className="shProof shSection">
      <div className="shSectionHead"><span className="shEyebrow">FIDUCIA PRIMA DELLE PROMESSE</span><h2>Provalo sulla tua attività prima di decidere.</h2><p>Finché non avremo testimonianze e numeri verificabili, preferiamo mostrarti il prodotto e lasciarti provarlo.</p></div>
      <div className="shProofGrid"><article><b>7 giorni</b><p>di prova gratuita</p></article><article><b>0 €</b><p>di carta richiesta per iniziare</p></article><article><b>Supporto</b><p>incluso nel servizio</p></article></div>
    </section>

    <section className="shPricing shSection">
      <div className="shSectionHead"><span className="shEyebrow">PREZZI</span><h2>Scegli quanto vuoi automatizzare.</h2><p>Parti dal gestionale. Aggiungi l’assistente WhatsApp se ti serve.</p></div>
      <div className="shPriceGrid">
        <article><span>Schedly</span><b>€29,90<small>/mese</small></b><p>Gestionale, agenda, clienti, servizi, booking online e promemoria.</p></article>
        <article className="featured"><span>Schedly AI</span><b>€49,90<small>/mese</small></b><p>Tutto Schedly, più assistente AI su WhatsApp.</p></article>
      </div>
      <div className="shPriceFoot"><span>+ €99 configurazione iniziale una tantum</span><a href="/prezzi">Vedi tutti i dettagli →</a></div>
    </section>

    <section className="shTrust shSection">
      <div className="shSectionHead"><span className="shEyebrow">PIÙ CHIAREZZA, MENO DUBBI</span><h2>Sai cosa succede prima di iniziare.</h2></div>
      <div className="shTrustGrid">
        <article><span className="shIcon"><Icon name="shield"/></span><h3>Nessuna carta per la prova</h3><p>Puoi vedere come funziona Schedly prima di scegliere un piano.</p></article>
        <article><span className="shIcon"><Icon name="support"/></span><h3>Supporto incluso</h3><p>Il piano Schedly include supporto; Schedly AI prevede supporto prioritario.</p></article>
        <article><span className="shIcon"><Icon name="spark"/></span><h3>Configurazione guidata</h3><p>Servizi, orari e impostazioni vengono configurati con un percorso dedicato.</p></article>
      </div>
    </section>

    <section className="shFaq shSection">
      <div className="shSectionHead"><span className="shEyebrow">FAQ</span><h2>Le domande che arrivano prima di iniziare.</h2></div>
      <div className="shFaqList">
        <details><summary>Schedly è un gestionale o un assistente WhatsApp?</summary><p>Schedly è prima di tutto il gestionale per agenda, clienti, servizi e prenotazioni. Schedly AI aggiunge l’assistente WhatsApp.</p></details>
        <details><summary>I clienti possono prenotare senza WhatsApp?</summary><p>Sì. Possono usare la tua pagina di prenotazione online, scegliere il servizio e un orario disponibile.</p></details>
        <details><summary>Come funziona la prova gratuita?</summary><p>Dalla Home puoi avviare una prova gratuita di 7 giorni. Non serve una carta di credito ed è disponibile una sola volta per attività.</p></details>
        <details><summary>WhatsApp AI è incluso nel piano base?</summary><p>No. L’automazione WhatsApp è inclusa nel piano Schedly AI. Il piano Schedly comprende il gestionale e il booking online.</p></details>
        <details><summary>Cosa comprende la configurazione iniziale?</summary><p>La configurazione iniziale copre servizi, orari, disponibilità e impostazioni principali. Con Schedly AI viene configurato anche il flusso WhatsApp.</p></details>
      </div>
    </section>

    <section className="shFinal">
      <span className="shEyebrow">PRONTO A PROVARLO?</span>
      <h2>Porta appuntamenti, clienti e disponibilità in un solo posto.</h2>
      <p>Prova Schedly per 7 giorni e valuta con calma se fa per la tua attività.</p>
      <a className="shButton shButtonLight" href="/demo">Prova gratis 7 giorni →</a>
      <small>Nessuna carta di credito richiesta.</small>
    </section>

    <footer className="shFooter">
      <div><Logo/><p>Più tempo per i tuoi clienti. Meno tempo sull’agenda.</p></div>
      <nav><a href="/prodotto">Prodotto</a><a href="/come-funziona">Come funziona</a><a href="/prezzi">Prezzi</a><a href="/faq">FAQ</a><a href="/login">Accedi</a><a href="/registrati">Registrati</a></nav>
      <small>© 2026 Schedly. Tutti i diritti riservati.</small>
    </footer>
  </main>;
}
