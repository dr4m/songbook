
  // --- MENU TOGGLE ---
  function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("show");
  }

  document.addEventListener("click", function(event) {
    const navMenu = document.getElementById("nav-menu");
    const toggleBtn = document.querySelector(".menu-toggle");
    if (!navMenu.contains(event.target) && !toggleBtn.contains(event.target)) {
      navMenu.classList.remove("show");
    }
  });

  // --- BELL ICON NOTIFICATION ---
  let notificationsEnabled = localStorage.getItem('notify') === 'true';

  function updateBellIcon() {
    const bell = document.getElementById('bellIcon');
    if (bell) {
      bell.style.color = notificationsEnabled ? 'gold' : 'gray';
    }
  }

  function toggleNotification() {
    notificationsEnabled = !notificationsEnabled;
    localStorage.setItem('notify', notificationsEnabled);
    updateBellIcon();
  }

  updateBellIcon();
