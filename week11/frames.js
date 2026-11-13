// Each exercise is shown next to its running result in an iframe. The embedded demo reports
// its own height, so the iframe fits exactly with no inner scrollbar.
window.addEventListener('message', (event) => {
  if (event.origin !== window.location.origin || !event.data || event.data.type !== 'demo-height') return;
  const frame = document.querySelector('iframe[data-demo="' + event.data.demo + '"]');
  if (frame) frame.style.height = Math.ceil(event.data.height) + 'px';
});
