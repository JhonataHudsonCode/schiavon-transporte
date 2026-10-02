const PHONE = '5516997667944';
const params = new URLSearchParams(location.search);
const utmSource = params.get('utm_source');
const utmCampaign = params.get('utm_campaign');
function buildWa(msg){
  let extra = '';
  if(utmSource || utmCampaign){ extra = `\n\nOrigem do anúncio: ${[utmSource,utmCampaign].filter(Boolean).join(' / ')}`; }
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg + extra)}`;
}
document.querySelectorAll('.js-wa').forEach(el=>{
  el.href = buildWa(el.dataset.msg || 'Olá! Quero solicitar um orçamento.');
  el.target = '_blank'; el.rel = 'noopener';
});
document.getElementById('year').textContent = new Date().getFullYear();
