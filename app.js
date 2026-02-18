const tabs = document.querySelectorAll('.tab');
const views = document.querySelectorAll('.view');
const workoutButtons = document.querySelectorAll('.workout-open');
const backBtn = document.getElementById('back-btn');
const menuBtn = document.getElementById('menu-btn');
const headerTitle = document.getElementById('header-title');
const headerEyebrow = document.getElementById('header-eyebrow');

const detailTitle = document.getElementById('detail-title');
const detailDate = document.getElementById('detail-date');
const detailDuration = document.getElementById('detail-duration');
const detailItems = document.getElementById('detail-items');

const workoutData = {
  upper: {
    title: 'Upper Strength',
    date: 'MAR 18',
    duration: 'Durata: 71 min',
    items: ['4x Panca inclinata', '3x Trazioni', '3x Curl']
  },
  lower: {
    title: 'Lower Day',
    date: 'DOM 16',
    duration: 'Durata: 63 min',
    items: ['4x Squat', '3x Leg curl', '3x Calf raise']
  }
};

let previousView = 'registra';

const setActiveView = (viewName) => {
  views.forEach((view) => {
    view.classList.toggle('active', view.dataset.view === viewName);
  });

  const inDetail = viewName === 'workout-detail';
  backBtn.hidden = !inDetail;
  menuBtn.classList.toggle('is-hidden', inDetail);

  if (inDetail) {
    headerEyebrow.textContent = 'Dettaglio';
    headerTitle.textContent = 'Scheda allenamento';
    tabs.forEach((tab) => tab.classList.remove('active'));
    return;
  }

  headerEyebrow.textContent = 'Allenamenti';
  headerTitle.textContent = 'Palestra Flow';

  tabs.forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.view === viewName);
  });
};

const loadWorkoutDetail = (workoutId) => {
  const workout = workoutData[workoutId];
  if (!workout) return;

  detailTitle.textContent = workout.title;
  detailDate.textContent = workout.date;
  detailDuration.textContent = workout.duration;
  detailItems.innerHTML = workout.items.map((item) => `<li>${item}</li>`).join('');
};

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    previousView = tab.dataset.view;
    setActiveView(tab.dataset.view);
  });
});

workoutButtons.forEach((button) => {
  button.addEventListener('click', () => {
    loadWorkoutDetail(button.dataset.workout);
    setActiveView('workout-detail');
  });
});

backBtn.addEventListener('click', () => {
  setActiveView(previousView);
});

setActiveView('registra');
