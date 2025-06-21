document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bgMusic');
  const btn = document.getElementById('playBtn');

  btn.addEventListener('click', () => {
    music.play();
    btn.style.display = 'none';
  });
});