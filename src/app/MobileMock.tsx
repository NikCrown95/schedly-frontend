import MobileMenu from "./MobileMenu";

export const MLogo=()=> <a className="mLogo" href="/" aria-label="Schedly">
  <span className="mLogoMark" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 3v3M17 3v3M4.5 8.5h15M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/><path d="m9 14 2 2 4-5"/></svg></span>
  <span>Schedly</span>
</a>;

export const MHeader=()=> <header className="mHeader"><MLogo/><MobileMenu/></header>;

const CalendarIcon=()=> <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v3M17 3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/></svg>;
const BellIcon=()=> <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>;
const WhatsAppIcon=()=> <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.6Z"/><path d="M8.1 7.5c.3-.5.6-.5.9-.5h.4c.2 0 .4.1.5.4l.9 2c.1.3.1.5-.1.7l-.7.8c-.2.2-.2.4 0 .7.7 1.2 1.7 2.1 2.9 2.7.3.2.5.1.7-.1l.9-1.1c.2-.2.4-.3.7-.2l1.9.9c.3.1.5.3.5.5 0 .3-.2 1.5-1.1 2.1-.7.5-1.6.7-2.5.5-1.1-.2-2.5-.8-4.1-2.2-2.2-1.9-3.5-4.3-3.6-5.8 0-.6.2-1 .4-1.4Z"/></svg>;

const PhoneUI=()=> <div className="mPhoneUi">
  <div className="mPhoneUiTop"><span>Oggi</span><b>•••</b></div>
  <div className="mMiniEvent"><i/><div><b>10:00</b><small>Taglio · Marco</small></div></div>
  <div className="mMiniEvent"><i/><div><b>11:30</b><small>Colore · Giulia</small></div></div>
  <div className="mMiniEvent"><i/><div><b>14:00</b><small>Consulenza · Luca</small></div></div>
  <div className="mMiniEvent"><i/><div><b>16:30</b><small>Trattamento · Anna</small></div></div>
</div>;


export const MIcon=({type}:{type:"whatsapp"|"calendar"|"bell"|"dashboard"|"bolt"|"rocket"|"shield"|"help"})=>{
 const common={viewBox:"0 0 24 24","aria-hidden":true} as const;
 if(type==="whatsapp") return <svg {...common}><path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.6Z"/><path d="M8.1 7.5c.3-.5.6-.5.9-.5h.4c.2 0 .4.1.5.4l.9 2c.1.3.1.5-.1.7l-.7.8c-.2.2-.2.4 0 .7.7 1.2 1.7 2.1 2.9 2.7.3.2.5.1.7-.1l.9-1.1c.2-.2.4-.3.7-.2l1.9.9c.3.1.5.3.5.5 0 .3-.2 1.5-1.1 2.1"/></svg>;
 if(type==="calendar") return <CalendarIcon/>;
 if(type==="bell") return <BellIcon/>;
 if(type==="dashboard") return <svg {...common}><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></svg>;
 if(type==="bolt") return <svg {...common}><path d="m13 2-7 12h6l-1 8 7-12h-6l1-8Z"/></svg>;
 if(type==="rocket") return <svg {...common}><path d="M14 5c2-2 4.5-2.5 6-2-0 1.5-.2 4-2.5 6.5l-4 4-3-3 3.5-5.5Z"/><path d="m10.5 10.5-4 .5-2 2 5 1M13.5 13.5l-.5 4-2 2-1-5M7 17c-1.5 0-3 1.5-3 3 1.5 0 3-.5 4-1.5"/></svg>;
 if(type==="shield") return <svg {...common}><path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>;
 return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.3 2.3 0 0 1 4.4 1c0 2-2.2 2.1-2.2 4M12 17.5h.01"/></svg>;
};

export const PhoneArt=({home=false}:{home?:boolean})=> home?
<div className="mHomeArt" aria-hidden="true">
  <div className="mPhoneShell"><PhoneUI/></div>
  <span className="mFloatIcon wa"><WhatsAppIcon/></span>
  <span className="mFloatIcon plus">+</span>
  <span className="mFloatIcon cal"><CalendarIcon/></span>
  <span className="mFloatIcon bell"><BellIcon/></span>
  <div className="mBookingToast"><b>Nuova prenotazione</b><small>Lun 10 Giu, 14:00</small></div>
</div>:
<div className="mPhoneArt" aria-hidden="true">
  <div className="mPhoneShell mChatPhone">
    <div className="mChatScreen">
      <div className="mChatHead"><WhatsAppIcon/><span>Schedly</span><b>online</b></div>
      <div className="mChatBody">
        <div className="mBubble customer">Ciao! Posso prenotare un appuntamento?<small>10:24 ✓✓</small></div>
        <div className="mBubble schedly">Certo! Ecco le disponibilità per questa settimana:<div className="mSlots"><span>Lun<br/>10:00</span><span>Mar<br/>14:00</span><span>Mer<br/>16:00</span></div><small>10:25</small></div>
      </div>
      <div className="mChatComposer">Scrivi un messaggio… <span>➤</span></div>
    </div>
  </div>
</div>;
