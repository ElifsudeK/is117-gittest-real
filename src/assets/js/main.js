// Lightweight site JS: interactions, accessible components, and reduced-motion awareness
(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll progress bar
  function progress(){
    const el = document.getElementById('scroll-progress');
    if(!el) return;
    const pos = document.documentElement.scrollTop || document.body.scrollTop;
    const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const pct = (h>0) ? (pos/h)*100 : 0;
    el.style.width = pct + '%';
  }
  window.addEventListener('scroll', progress, {passive:true});
  window.addEventListener('resize', progress);
  progress();

  // Scroll reveal (simple)
  function reveal(){
    if(prefersReduced) return;
    document.querySelectorAll('.hub-card, .case-card, .card, .gallery-item, .movie').forEach(el=>{
      const r = el.getBoundingClientRect();
      if(r.top < window.innerHeight - 80){ el.style.opacity = 1; el.style.transform='translateY(0)'; }
    });
  }
  if(!prefersReduced) {
    document.addEventListener('scroll', throttle(reveal, 150));
    window.addEventListener('resize', throttle(reveal,150));
    reveal();
    // initial state for reveal elements
    document.querySelectorAll('.hub-card, .case-card, .card, .gallery-item').forEach(el=>{
      el.style.opacity = 0; el.style.transform='translateY(8px)'; el.style.transition='opacity .5s ease, transform .5s ease';
    });
  }

  // Throttle helper
  function throttle(fn, wait){ let t=0; return function(...a){ const now=Date.now(); if(now-t>wait){ t=now; fn.apply(this,a);} }}

  // Landing path selector
  document.querySelectorAll('.path-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const target = btn.getAttribute('data-target');
      document.querySelectorAll('.hub-card').forEach(c=>c.classList.toggle('highlight', c.id === 'card-'+target));
      // focus and scroll to matched card
      const el = document.getElementById('card-'+target);
      if(el){ el.scrollIntoView({behavior: prefersReduced ? 'auto' : 'smooth', block:'center'}); el.focus(); }
    });
    btn.addEventListener('keydown', e=>{ if(e.key === 'Enter' || e.key === ' ') btn.click(); });
  });

  // Portfolio filter
  const filter = document.getElementById('filter');
  if(filter){ filter.addEventListener('change', ()=>{
    const v = filter.value;
    document.querySelectorAll('#cases .case-card').forEach(card=>{
      const tags = card.dataset.tags || '';
      card.style.display = (v==='all' || tags.indexOf(v) !== -1) ? 'block' : 'none';
    });
  }); }

  // Copy email
  document.querySelectorAll('.copy-email').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      const email = btn.dataset.email;
      try{ await navigator.clipboard.writeText(email); btn.textContent = email + ' (copied)'; setTimeout(()=>btn.textContent = email,1600);}catch(e){console.warn(e)}
    });
  });

  // Metric counter animation
  function animateCounters(){
    if(prefersReduced) return;
    document.querySelectorAll('[data-target]').forEach(el=>{
      if(el.dataset.animated) return;
      const r = el.getBoundingClientRect();
      if(r.top < window.innerHeight - 40){
        el.dataset.animated = '1';
        const target = parseInt(el.dataset.target,10)||0;
        let current = 0; const step = Math.max(1, Math.floor(target/60));
        const iv = setInterval(()=>{ current += step; if(current >= target){ el.querySelector('strong') && (el.querySelector('strong').innerText = '$'+target.toLocaleString()); clearInterval(iv);} else { el.querySelector('strong') && (el.querySelector('strong').innerText = '$'+current.toLocaleString()); } }, 20);
      }
    });
  }
  document.addEventListener('scroll', throttle(animateCounters,200));
  animateCounters();

  // Timeline accordion
  document.querySelectorAll('.timeline .timeline-item').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      const panel = btn.nextElementSibling; if(panel) panel.style.display = expanded ? 'none' : 'block';
    });
  });

  // Quiz reveal
  document.querySelectorAll('.quiz-btn').forEach(b=>{
    b.addEventListener('click', ()=>{
      const ans = b.nextElementSibling; if(ans){ ans.hidden = !ans.hidden; b.setAttribute('aria-expanded', String(!ans.hidden)); }
    });
  });

  // Gallery filters
  document.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const f = btn.dataset.filter;
      document.querySelectorAll('.gallery-item').forEach(it=>{
        it.style.display = (f==='all' || it.dataset.category === f) ? 'block' : 'none';
      });
    });
  });

  // Accordion for client FAQ
  document.querySelectorAll('.accordion button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      const panel = btn.nextElementSibling; if(panel) panel.style.display = expanded ? 'none' : 'block';
    });
  });

  // Lightbox: open images in a modal for client portfolio
  function createLightbox(){
    const modal = document.createElement('div'); modal.className='lightbox'; modal.setAttribute('role','dialog'); modal.setAttribute('aria-hidden','true'); modal.innerHTML = '<div class="lightbox-inner" tabindex="-1"><button class="close">Close</button><div class="lightbox-content"></div></div>';
    document.body.appendChild(modal);
    modal.querySelector('.close').addEventListener('click', ()=>closeModal(modal));
    modal.addEventListener('click',(e)=>{ if(e.target===modal) closeModal(modal); });
    return modal;
  }
  function openLightbox(src, alt){
    let modal = document.querySelector('.lightbox'); if(!modal) modal = createLightbox();
    modal.querySelector('.lightbox-content').innerHTML = '<img src="'+src+'" alt="'+(alt||'')+'" style="max-width:90vw;max-height:80vh">';
    modal.setAttribute('aria-hidden','false'); modal.querySelector('.lightbox-inner').focus();
    document.addEventListener('keydown', lightboxKey);
  }
  function closeModal(modal){ modal.setAttribute('aria-hidden','true'); document.removeEventListener('keydown', lightboxKey); }
  function lightboxKey(e){ if(e.key === 'Escape'){ const modal = document.querySelector('.lightbox'); if(modal) closeModal(modal); } }

  document.querySelectorAll('.client-grid figure').forEach(fig=>{
    fig.addEventListener('click', ()=>{
      const img = fig.querySelector('img'); if(img) openLightbox(img.src, img.alt);
    });
    fig.addEventListener('keydown', e=>{ if(e.key === 'Enter' || e.key === ' ') fig.click(); });
  });

  // Pricing toggle
  document.querySelectorAll('.pricing-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const plan = btn.dataset.plan;
      document.querySelectorAll('.pricing-btn').forEach(b=>b.setAttribute('aria-pressed','false'));
      btn.setAttribute('aria-pressed','true');
      document.querySelectorAll('.plan').forEach(p=> p.classList.toggle('hidden', !p.classList.contains(plan)));
    });
  });

  // Sticky Book CTA
  const bookCTA = document.createElement('a'); bookCTA.className='book-cta'; bookCTA.href='/client_site/contact/'; bookCTA.innerText='Book a Call'; bookCTA.setAttribute('aria-hidden','false');
  bookCTA.style.position='fixed'; bookCTA.style.right='20px'; bookCTA.style.bottom='20px'; bookCTA.style.background='#8B9A8A'; bookCTA.style.color='white'; bookCTA.style.padding='10px 12px'; bookCTA.style.borderRadius='8px'; bookCTA.style.boxShadow='0 6px 18px rgba(0,0,0,0.08)'; bookCTA.style.display='none'; document.body.appendChild(bookCTA);

  window.addEventListener('scroll', throttle(()=>{
    if(window.scrollY > 300) bookCTA.style.display = 'block'; else bookCTA.style.display = 'none';
  }, 200), {passive:true});

  // Site assistant (explorer bot) — small, warm, keyboard-accessible
  // Assistant removed per user request (no floating logo/buttons)

    // Swatch copy-to-clipboard for design palette
    document.querySelectorAll('.swatch').forEach(s=>{
      s.addEventListener('click', async ()=>{
        const hex = s.dataset.hex || s.querySelector('.hex') && s.querySelector('.hex').innerText;
        if(!hex) return;
        try{ await navigator.clipboard.writeText(hex); s.classList.add('copied'); const hexEl = s.querySelector('.hex'); if(hexEl){ const prev = hexEl.innerText; hexEl.innerText = 'Copied!'; setTimeout(()=>{ hexEl.innerText = prev; s.classList.remove('copied'); },1400); } }catch(e){ console.warn('Copy failed', e); }
      });
      s.addEventListener('keydown', e=>{ if(e.key === 'Enter' || e.key === ' ') s.click(); });
    });
})();
