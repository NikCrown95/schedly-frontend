const steps=[
['01','IL CLIENTE SCRIVE','Un messaggio. È tutto ciò che serve.','“Ciao, avete disponibilità domani pomeriggio?”','💬'],
['02','SCHEDLY RISPONDE','Capisce la richiesta e controlla la disponibilità reale.','15:00   16:30   18:00','✦'],
['03','IL CLIENTE CONFERMA','Sceglie l’orario direttamente nella conversazione.','“Perfetto, 16:30!”','✓'],
['04','L’AGENDA SI AGGIORNA','L’appuntamento entra subito nel calendario.','Giulia Rossi — Taglio · 16:30','▦']
];
const Logo=()=> <a className="brand" href="/" aria-label="Schedly"><img className="officialLogo" src="/schedly-logo.png" alt="Schedly" /></a>;
export default function ComeFunziona(){return <main className="page howPage howRefined">
<header className="siteNav"><Logo/><nav><a href="/prodotto">Prodotto</a><a className="active" href="/come-funziona">Come funziona</a><a href="/prezzi">Prezzi</a><a href="/faq">FAQ</a></nav><div><a href="/login">Accedi</a><a className="button buttonSmall" href="/demo">Richiedi una demo →</a></div><span className="howMenu">☰</span></header>
<section className="pageHero centered howHero"><p className="eyebrow">COME FUNZIONA</p><h1>Dal messaggio<br/><span>all’appuntamento.</span></h1><p>Schedly conversa con i tuoi clienti, trova la disponibilità e aggiorna l’agenda.<br/>Tu continui a lavorare.</p><div className="howNote">Tu lavori.<br/>Schedly organizza. ↘</div></section>
<section className="flowStrip howFlow"><span className="flowWhats">● <b>WhatsApp</b></span><i>→</i><strong>✦ Schedly AI</strong><i>→</i><span>▦ <b>Agenda</b></span></section>
<section className="steps howSteps">{steps.map((s,i)=><article key={s[0]} className={'howStep howStep'+i}><div className="stepNo">{s[0]}</div><div className="stepCopy"><b>{s[1]}</b><h2>{s[2]}</h2><p>{s[3]}</p></div><div className="stepMock"><span>{s[4]}</span>{i===0&&<div className="miniBubble">Domani pomeriggio?</div>}{i===1&&<div className="miniSlots"><b>15:00</b><b>16:30</b><b>18:00</b></div>}{i===2&&<div className="miniConfirm">Appuntamento confermato</div>}{i===3&&<div className="miniEvent"><b>16:30</b><small>Giulia Rossi · Taglio</small></div>}</div></article>)}</section>
<section className="howResult"><p className="eyebrow">TUTTO SINCRONIZZATO</p><h2>Una conversazione.<br/><span>Zero lavoro manuale.</span></h2><div><span>✓ Risposte automatiche 24/7</span><span>✓ Disponibilità sempre reale</span><span>✓ Agenda aggiornata subito</span></div></section>
<section className="darkCta howCta"><p>PRONTO A SEMPLIFICARE LA TUA AGENDA?</p><h2>Lascia che Schedly gestisca<br/>i tuoi appuntamenti.</h2><a className="button light" href="/demo">Richiedi una demo →</a><small>Senza impegno. Ci vogliono solo 2 minuti.</small></section>
</main>}
