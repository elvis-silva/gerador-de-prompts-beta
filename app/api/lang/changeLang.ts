async function changeLang(lang: 'pt' | 'en') {
  await fetch('/api/lang', {
    method: 'POST',
    body: JSON.stringify({ lang }),
    headers: { 'Content-Type': 'application/json' }
  });

  window.location.href = `/${lang}`;
}
