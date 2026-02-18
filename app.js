const tabs = document.querySelectorAll('.tab');
const modeChip = document.getElementById('device-mode');

const updateDeviceMode = () => {
  const isOpenFold = window.matchMedia('(min-width: 700px) and (min-aspect-ratio: 4/3)').matches;
  modeChip.textContent = isOpenFold ? 'Modalità: pieghevole aperto' : 'Modalità: smartphone chiuso';
};

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((btn) => btn.classList.remove('active'));
    tab.classList.add('active');
  });
});

updateDeviceMode();
window.addEventListener('resize', updateDeviceMode);
