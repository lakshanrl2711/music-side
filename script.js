let counters = document.querySelectorAll('.download-count');

counters.forEach(c => {
  let count = localStorage.getItem(c.dataset.song) || 0;
  c.innerText = count;
});

function increase(song){
  let c = localStorage.getItem(song) || 0;
  c++;
  localStorage.setItem(song, c);
}