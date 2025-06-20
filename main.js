// Cấu hình particles.js
particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" }
    },
    opacity: {
      value: 0.5,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Toggle day/night mode
const toggleBtn = document.querySelector('.toggle-mode');
const icon = toggleBtn.querySelector('i');

function setMode(isLight) {
  if (isLight) {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// Default: dark mode
setMode(false);

toggleBtn.addEventListener('click', () => {
  const isLight = !document.body.classList.contains('light-mode');
  setMode(isLight);
});




