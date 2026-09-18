export default function DashboardPage() {
  return (
    <main style={{minHeight:"100vh",display:"grid",placeItems:"center",background:"#f6f8fc",color:"#071331",fontFamily:"inherit"}}>
      <section style={{width:"min(560px,calc(100% - 32px))",padding:40,borderRadius:20,background:"#fff",boxShadow:"0 20px 60px rgba(7,19,49,.08)"}}>
        <p style={{fontSize:11,letterSpacing:2,color:"#1471ff",fontWeight:800}}>SCHEDLY APP</p>
        <h1 style={{fontSize:38,letterSpacing:-2,margin:"10px 0"}}>Dashboard</h1>
        <p style={{color:"#74809a",lineHeight:1.6}}>Accesso completato. Questo è lo scheletro iniziale dell’area gestionale: il prossimo passaggio è collegare attività, appuntamenti, servizi e clienti alle API Schedly.</p>
      </section>
    </main>
  );
}
