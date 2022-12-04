mostrarModalGrao = () => {
  document.getElementById('graoH').classList.toggle('cardGrao');
}
mostrarModalPacote = () => {
  document.getElementById('pacoteH').classList.toggle('cardpacote');
}
mostrarModalGar = () => {
  document.getElementById('garH').classList.toggle('cardgar');
}
mostrarModalXic = () => {
  document.getElementById('xicH').classList.toggle('cardxic');
}


addEventListener('mouseup', () => {
  document.getElementById('graoH').classList.remove('cardGrao');
  document.getElementById('pacoteH').classList.remove('cardpacote');
  document.getElementById('garH').classList.remove('cardgar');
  document.getElementById('xicH').classList.remove('cardxic');
})