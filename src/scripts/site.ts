function applyLang() {
  const stored = localStorage.getItem('reagere-lang');
  const lang = stored === 'en' || stored === 'fr' ? stored : document.documentElement.lang || 'fr';
  document.documentElement.lang = lang;
  const title = document.body.dataset[lang === 'en' ? 'titleEn' : 'titleFr'];
  const description = document.body.dataset[lang === 'en' ? 'descEn' : 'descFr'];
  if (title) document.title = title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta && description) meta.setAttribute('content', description);
  const nav = document.querySelector('.compass');
  const label = nav?.getAttribute(lang === 'en' ? 'data-label-en' : 'data-label-fr');
  if (nav && label) nav.setAttribute('aria-label', label);
  document.querySelectorAll<HTMLButtonElement>('[data-set-lang]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.setLang === lang));
  });
}

function apply() {
  const lens = document.body.dataset.lens || 'home';
  document.documentElement.dataset.lens = lens;
  applyLang();
}

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const button = target.closest('[data-set-lang]');
  if (!(button instanceof HTMLButtonElement)) return;
  const lang = button.dataset.setLang;
  if (lang !== 'fr' && lang !== 'en') return;
  localStorage.setItem('reagere-lang', lang);
  applyLang();
});

document.addEventListener('astro:page-load', apply);
apply();
