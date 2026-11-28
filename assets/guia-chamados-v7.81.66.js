/* Guia do Hinário nº 5 - TESTE V7.81.66: integração nativa dos chamados.
   Preserva dados e marcas no armazenamento original. Não altera mídias, letras ou hinos.
   A atualização da barra usa os botões "Chamados" e "Faltantes" existentes. */
(function () {
  'use strict';
  function initCalledProgress() {
    const doc=document;
    const win=window;
    if(!doc.getElementById('personalModal')) return;
    if(!doc.getElementById('guia-v78165-called-progress')) {
      const style=doc.createElement('style');
      style.id='guia-v78165-called-progress';
      style.textContent=`
#personalModal #officialStickyReportControls .op-called-progress{
  grid-column:1/-1!important;display:grid!important;gap:5px!important;min-width:0!important;
  margin:2px 0!important;padding:7px 9px!important;border:1px solid #e3d7c2!important;
  border-radius:10px!important;background:#f9f7f1!important;
}
#personalModal #officialStickyReportControls .op-called-progress-label{
  display:flex!important;justify-content:space-between!important;align-items:center!important;
  flex-wrap:wrap!important;gap:4px 9px!important;font:600 .74rem/1.25 Arial,sans-serif!important;
  color:#314757!important;min-width:0!important;
}
#personalModal #officialStickyReportControls .op-called-progress-label strong{font-weight:750!important}
#personalModal #officialStickyReportControls .op-called-progress-label small{color:#697781!important;font-size:.7rem!important;font-weight:500!important}
#personalModal #officialStickyReportControls .op-called-progress-label span{white-space:nowrap!important;font-weight:800!important;color:#24485c!important}
#personalModal #officialStickyReportControls .op-called-progress-track{height:7px!important;overflow:hidden!important;border-radius:999px!important;background:#dde4e7!important;width:100%!important}
#personalModal #officialStickyReportControls .op-called-progress-track>span{display:block!important;height:100%!important;border-radius:999px!important;background:#3c7667!important;transition:width .18s ease!important}
@media(max-width:420px){#personalModal #officialStickyReportControls .op-called-progress{padding:6px 8px!important;gap:4px!important}#personalModal #officialStickyReportControls .op-called-progress-label{font-size:.71rem!important}#personalModal #officialStickyReportControls .op-called-progress-label small{font-size:.67rem!important}}
`;
      doc.head.appendChild(style);
    }
    if(!doc.getElementById('guia-v78165-modal')){const st=doc.createElement('style');st.id='guia-v78165-modal';st.textContent=`
#personalModal{padding:max(7px,env(safe-area-inset-top)) 7px max(7px,env(safe-area-inset-bottom))!important;box-sizing:border-box!important}
#personalModal .personal-panel{width:min(calc(100vw - 14px),780px)!important;height:calc(100dvh - 18px - env(safe-area-inset-top) - env(safe-area-inset-bottom))!important;max-height:calc(100dvh - 18px - env(safe-area-inset-top) - env(safe-area-inset-bottom))!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important;border-radius:15px!important}
#personalModal .personal-head{flex:0 0 auto!important;min-height:49px!important;padding:8px 12px!important}
#personalModal .personal-head h3{font:700 clamp(1.05rem,3vw,1.3rem) Georgia,serif!important}
#personalModal #closePersonal{width:38px!important;height:38px!important;display:grid!important;place-items:center!important}
#personalModal #officialStickyReportControls{padding:6px 9px 8px!important;gap:6px!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;margin:0!important}
#personalModal #officialStickyReportControls .op-shortcut{min-width:0!important;width:100%!important;min-height:44px!important;padding:6px 9px!important;box-sizing:border-box!important}
#personalModal #officialStickyReportControls .op-called-progress{grid-column:1/-1!important;margin:0!important;padding:6px 8px!important;gap:5px!important;border-radius:9px!important}
#personalModal #officialStickyReportControls .op-called-progress-label{display:flex!important;justify-content:space-between!important;gap:8px!important;align-items:center!important;font:700 .77rem Arial,sans-serif!important}
#personalModal #officialStickyReportControls .op-called-progress-label strong{font-size:.77rem!important}
#personalModal #officialStickyReportControls .op-called-progress-label span{font-size:.8rem!important}
#personalModal #officialStickyReportControls .op-called-progress-track{height:6px!important}
#personalModal #officialStickyReportControls .op-history-bar{grid-column:1/-1!important;display:flex!important;justify-content:space-between!important;align-items:center!important;gap:8px!important;flex-wrap:nowrap!important;margin:0!important;padding:4px 0 0!important}
#personalModal #officialStickyReportControls .op-history-bar strong{font-size:.8rem!important;white-space:nowrap!important}
#personalModal #officialStickyReportControls .op-history-bar button{min-height:34px!important;flex:0 0 auto!important;padding:5px 10px!important;font-size:.72rem!important;white-space:nowrap!important}
#personalModal #personalContent{flex:1 1 auto!important;min-height:0!important;overflow-x:hidden!important;overflow-y:auto!important;overscroll-behavior:contain!important;padding:10px 9px max(22px,env(safe-area-inset-bottom))!important}
#personalModal #officialProgressBlock .op-detail{min-width:0!important;margin:0!important;padding:9px!important}
#personalModal #officialProgressBlock .op-detail-head{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:6px!important;align-items:stretch!important;margin-bottom:9px!important}
#personalModal #officialProgressBlock .op-detail-head #opDetailTitle{grid-column:1/-1!important;font-size:1rem!important}
#personalModal #officialProgressBlock .op-detail-head button,#personalModal #officialProgressBlock .op-detail-head .op-filter-toggle{width:100%!important;min-width:0!important;min-height:38px!important;display:flex!important;justify-content:center!important;align-items:center!important;margin:0!important;padding:6px 4px!important;box-sizing:border-box!important;border-radius:9px!important;font:700 .72rem/1.2 Arial,sans-serif!important;white-space:normal!important;text-align:center!important}
#personalModal #officialProgressBlock .op-detail-head .op-filter-toggle{order:0!important}
#personalModal #officialProgressBlock .op-detail-head #opReportCsv{order:1!important}
#personalModal #officialProgressBlock .op-detail-head #opCloseList{order:2!important}
#personalModal #officialProgressBlock .op-list{max-height:none!important;overflow:visible!important}

/* V7.81.65: torna a altura do painel independente do antigo limite de 82dvh. */
#personalModal{padding:6px!important;align-items:center!important}
#personalModal .personal-panel{
 height:calc(100dvh - 12px)!important;max-height:calc(100dvh - 12px)!important;
 width:min(calc(100vw - 12px),760px)!important;margin:auto!important
}
#personalModal #officialStickyReportControls{grid-template-columns:repeat(2,minmax(0,144px))!important;justify-content:center!important;column-gap:7px!important;row-gap:6px!important;padding:5px 8px 7px!important}
#personalModal #officialStickyReportControls .op-shortcut{min-height:36px!important;max-height:42px!important;padding:5px 8px!important;border-radius:9px!important}
#personalModal #officialStickyReportControls .op-shortcut span{font-size:.76rem!important}
#personalModal #officialStickyReportControls .op-shortcut strong{font-size:1rem!important}
#personalModal #officialStickyReportControls .op-called-progress,
#personalModal #officialStickyReportControls .op-history-bar{grid-column:1/-1!important;width:100%!important;max-width:100%!important}
#personalModal #personalContent{overflow-y:auto!important;min-height:0!important;max-height:none!important;-webkit-overflow-scrolling:touch!important;padding-bottom:calc(32px + env(safe-area-inset-bottom))!important}
#personalModal #officialProgressBlock .op-detail-head{grid-template-columns:repeat(3,minmax(0,1fr))!important;column-gap:6px!important;row-gap:5px!important}
#personalModal #officialProgressBlock .op-detail-head #opDetailTitle{grid-column:1/-1!important}
#personalModal #officialProgressBlock .op-detail-head button,
#personalModal #officialProgressBlock .op-detail-head .op-filter-toggle{
 grid-column:auto!important;grid-row:auto!important;min-width:0!important;max-width:100%!important;
 width:100%!important;min-height:34px!important;height:36px!important;
 font-size:.7rem!important;padding:4px 3px!important;white-space:nowrap!important
}
`;doc.head.appendChild(st)}
    let scheduled=false;
    function sync(){
      scheduled=false;
      const summary=doc.getElementById('officialStickyReportControls');
      if(!summary)return;
      const btnCalled=summary.querySelector('.op-shortcut[data-view="called"] strong');
      const btnMissing=summary.querySelector('.op-shortcut[data-view="missing"] strong');
      if(!btnCalled||!btnMissing)return;
      const called=Number((btnCalled.textContent||'').trim());
      const missing=Number((btnMissing.textContent||'').trim());
      if(!Number.isInteger(called)||!Number.isInteger(missing)||called<0||missing<0)return;
      const total=called+missing;
      const pct=total?Math.round(1000*called/total)/10:0;
      let progress=summary.querySelector('.op-called-progress');
      if(!progress){
        progress=doc.createElement('div');
        progress.className='op-called-progress';
        progress.setAttribute('aria-label','Progresso dos hinos chamados para Culto Oficial');
        progress.innerHTML='<div class="op-called-progress-label"><strong>Culto Oficial</strong><span class="op-progress-value"></span></div><div class="op-called-progress-track" role="progressbar" aria-label="Hinos únicos chamados para Culto Oficial" aria-valuemin="0"><span></span></div>';
        btnMissing.closest('.op-shortcut').insertAdjacentElement('afterend',progress);
      }

      // Corrige a restrição antiga de 82dvh e o dimensionamento desigual dos botões.
      const modal=doc.getElementById('personalModal');
      const panel=modal && modal.querySelector('.personal-panel');
      if(panel){
        const effectiveH=Math.max(300,Math.floor(win.innerHeight)-12);
        const height=effectiveH+'px';
        if(panel.style.getPropertyValue('height')!==height){
          panel.style.setProperty('height',height,'important');
          panel.style.setProperty('max-height',height,'important');
          panel.style.setProperty('min-height','0','important');
        }
      }
      const buttonRow=doc.querySelector('#officialProgressBlock .op-detail-head');
      if(buttonRow){
        buttonRow.style.setProperty('grid-template-columns','repeat(3,minmax(0,1fr))','important');
        for(const btn of buttonRow.querySelectorAll('button')){
          btn.style.setProperty('grid-column','auto','important');
          btn.style.setProperty('width','100%','important');
          btn.style.setProperty('min-width','0','important');
        }
      }
      const detail=doc.getElementById('opDetail');
      if(detail){const head=detail.querySelector('.op-detail-head');const filter=detail.querySelector('.op-filter-toggle');if(head&&filter&&filter.parentElement!==head)head.insertBefore(filter,head.querySelector('#opReportCsv'))}
      const label=progress.querySelector('.op-progress-value');
      const track=progress.querySelector('.op-called-progress-track');
      const fill=track.querySelector('span');
      const text=`${pct.toLocaleString('pt-BR',{minimumFractionDigits:1,maximumFractionDigits:1})}%`;
      if(label.textContent!==text)label.textContent=text;
      if(track.getAttribute('aria-valuemax')!==String(Math.max(1,total)))track.setAttribute('aria-valuemax',String(Math.max(1,total)));
      if(track.getAttribute('aria-valuenow')!==String(called))track.setAttribute('aria-valuenow',String(called));
      if(track.getAttribute('aria-valuetext')!==`${called} de ${total} hinos chamados`)track.setAttribute('aria-valuetext',`${called} de ${total} hinos chamados`);
      const width=`${Math.min(100,Math.max(0,pct))}%`;
      if(fill.style.width!==width)fill.style.width=width;
    }
    const obs=new win.MutationObserver(()=>{
      if(!scheduled){scheduled=true;win.requestAnimationFrame(sync);}
    });
    obs.observe(doc.body,{childList:true,subtree:true,characterData:true});
    sync();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCalledProgress, {once:true});
  } else {
    initCalledProgress();
  }
})();
