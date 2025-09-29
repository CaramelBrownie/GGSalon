document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".service-tabs .tab");
  const panels = document.querySelectorAll(".service-content .tab-panel");
  const logoutBtn = document.getElementById("logoutBtn");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
if (logoutBtn) {
      logoutBtn.addEventListener("click", (e) => {
        e.preventDefault(); // stop page reload
        localStorage.removeItem("gg_logged_in"); // clear session
        window.location.href = "home.html"; // redirect to login
      });
    }
      // Reset all tabs
      tabs.forEach((t) => t.classList.remove("active"));
      // Reset all panels
      panels.forEach((p) => p.classList.remove("active"));

      // Activate clicked tab
      tab.classList.add("active");
      // Show correct panel
      const activePanel = document.getElementById(target);
      if (activePanel) activePanel.classList.add("active");
    });
  });
});
