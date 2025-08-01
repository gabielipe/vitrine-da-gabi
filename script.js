function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
  document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
  const idx = { 'promocoes': 0, 'livros': 1, 'outros': 2 }[tabId];
  document.querySelectorAll('.tab')[idx].classList.add('active');
}
