export default function changeTabAbout () {
  const about = document.createElement('div');
  about.textContent = 'Welcome to our store, this is ya boy, Jay';
  const middle = document.querySelector('.middle');
  middle.replaceChildren();
  middle.appendChild(about);
}