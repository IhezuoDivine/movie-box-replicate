document.addEventListener('DOMContentLoaded', () => {
  // Wait 3 seconds, then hide splash and show login/signup
  setTimeout(() => {
    document.getElementById('splash-screen').style.display = 'none';
    document.getElementById('main').style.display = 'block';
  }, 3000);
});
