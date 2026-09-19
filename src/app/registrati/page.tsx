"use client";

import { useState } from "react";
import { MHeader } from "../MobileMock";

export default function Registrati(){
  const [showPassword,setShowPassword]=useState(false);
  return <><main className="mobileMock mRegisterPage">
    <MHeader/>
    <div className="mRegisterIntro">
      <p className="mEyebrow">REGISTRATI</p>
      <h1>Crea il tuo <span className="mBlue">account.</span></h1>
      <p className="mLead">Inizia gratis, bastano pochi secondi.</p>
    </div>
    <form className="mLoginForm">
      <label>Nome e cognome<input type="text" placeholder="Mario Rossi" autoComplete="name"/></label>
      <label>Email<input type="email" placeholder="mario@email.it" autoComplete="email"/></label>
      <label>Password<div className="mPasswordWrap"><input type={showPassword?"text":"password"} placeholder="Crea una password" autoComplete="new-password"/><button className="mEye" type="button" aria-label={showPassword?"Nascondi password":"Mostra password"} aria-pressed={showPassword} onClick={()=>setShowPassword(v=>!v)}><svg viewBox="0 0 24 24"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.7"/></svg></button></div></label>
      <a className="mBtn" href="/demo">Registrati gratis →</a>
      <div className="mDivider">oppure</div>
      <button className="mGoogle" type="button"><span className="mGoogleG">G</span><span>Continua con Google</span></button>
      <p className="mSignup">Hai già un account?<a href="/login">Accedi</a></p>
      <p className="mRegisterFine">Nessuna carta di credito richiesta.<br/>Puoi cambiare piano in qualsiasi momento.</p>
    </form>
  </main>
  <main className="registerDesktop desktopOnly">
    <header className="registerNav"><a className="registerBrand" href="/"><img src="/schedly-logo.png" alt="" aria-hidden="true"/><b>Schedly</b></a><div><a href="/login">Accedi</a><a className="button buttonSmall" href="/registrati">Registrati</a></div></header>
    <section className="registerGrid">
      <div className="registerPitch"><p className="eyebrow">INIZIA CON SCHEDLY</p><h1>Più tempo per la tua attività.<br/><span>Meno tempo perso.</span></h1><p>Crea il tuo account e prova Schedly gratuitamente per 7 giorni. Nessuna carta di credito richiesta.</p><div className="registerPoints"><span>✓ Agenda e clienti in un unico posto</span><span>✓ Promemoria automatici</span><span>✓ Puoi attivare Schedly AI quando vuoi</span></div></div>
      <form className="registerCard"><p className="eyebrow">REGISTRATI</p><h2>Crea il tuo account</h2><p>Inizia gratis, bastano pochi secondi.</p><label>Nome e cognome<input type="text" placeholder="Mario Rossi" autoComplete="name"/></label><label>Email<input type="email" placeholder="mario@email.it" autoComplete="email"/></label><label>Password<div className="registerPassword"><input type={showPassword?"text":"password"} placeholder="Crea una password" autoComplete="new-password"/><button type="button" onClick={()=>setShowPassword(v=>!v)}>{showPassword?"Nascondi":"Mostra"}</button></div></label><a className="button registerPrimary" href="/demo">Registrati gratis →</a><div className="registerDivider">oppure</div><button className="registerGoogle" type="button">G&nbsp;&nbsp; Continua con Google</button><small>Hai già un account? <a href="/login">Accedi</a></small></form>
    </section>
    <style>{`
      .registerDesktop{min-height:100vh;background:radial-gradient(circle at 85% 10%,rgba(102,74,238,.13),transparent 24%),radial-gradient(circle at 10% 15%,rgba(17,154,255,.12),transparent 24%),#fff;color:#071331}
      .registerNav{height:82px;display:flex;align-items:center;justify-content:space-between;max-width:1180px;margin:auto;padding:0 42px}
      .registerBrand{display:flex;align-items:center;gap:10px;color:#071331;text-decoration:none;font-size:23px}.registerBrand img{width:38px;height:38px;object-fit:contain}.registerNav>div{display:flex;align-items:center;gap:18px}.registerNav a{text-decoration:none}.registerNav>div>a:first-child{color:#23304f;font-size:12px;font-weight:700}
      .registerGrid{max-width:1080px;margin:50px auto 0;padding:0 40px 70px;display:grid;grid-template-columns:1.08fr .92fr;gap:80px;align-items:center}
      .registerPitch .eyebrow,.registerCard .eyebrow{font-size:10px;letter-spacing:2px;color:#1471ff;font-weight:800}.registerPitch h1{font-size:58px;line-height:.98;letter-spacing:-3.5px;margin:15px 0 20px}.registerPitch h1 span{background:linear-gradient(100deg,#078cff,#7045ed);-webkit-background-clip:text;color:transparent}.registerPitch>p:not(.eyebrow){max-width:520px;color:#6f7b91;font-size:14px;line-height:1.6}.registerPoints{display:grid;gap:13px;margin-top:28px;font-size:12px;font-weight:700;color:#24314d}
      .registerCard{padding:34px;border:1px solid #e1e8f2;border-radius:22px;background:#fff;box-shadow:0 24px 70px rgba(28,50,90,.11)}.registerCard h2{font-size:33px;letter-spacing:-1.7px;margin:8px 0}.registerCard>p:not(.eyebrow){font-size:12px;color:#77839a;margin:0 0 24px}.registerCard label{display:grid;gap:7px;font-size:10px;font-weight:800;margin-bottom:14px}.registerCard input{height:49px;border:1px solid #dce3ed;border-radius:10px;padding:0 13px;font:inherit;font-size:12px;box-sizing:border-box;width:100%}.registerPassword{position:relative}.registerPassword input{padding-right:70px}.registerPassword button{position:absolute;right:8px;top:50%;transform:translateY(-50%);border:0;background:transparent;color:#1678e9;font-size:9px;font-weight:800}.registerPrimary{width:100%;height:50px;display:flex;align-items:center;justify-content:center;box-sizing:border-box;margin-top:5px}.registerDivider{text-align:center;color:#98a2b2;font-size:9px;margin:19px 0;display:flex;align-items:center;gap:9px}.registerDivider:before,.registerDivider:after{content:"";height:1px;background:#e3e8ef;flex:1}.registerGoogle{width:100%;height:49px;border:1px solid #dce3ed;background:#fff;border-radius:10px;font-weight:700;color:#17213d}.registerCard small{display:block;text-align:center;margin-top:19px;color:#7b8799}.registerCard small a{color:#1678e9;font-weight:800}
    `}</style>
  </main></>;
}
