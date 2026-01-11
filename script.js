/* =============================
   THEME SWITCHER (GLOBAL)
============================= */

function setTheme(theme) {
  // simpan theme
  localStorage.setItem("theme", theme);

  // terapkan theme
  if (theme === "purple") {
    applyTheme("#e0aaff", "#240046");
  }

  if (theme === "blue") {
    applyTheme("#72efff", "#001d3d");
  }

  if (theme === "red") {
    applyTheme("#ff6b81", "#3a0008");
  }

  if (theme === "yellow") {
    applyTheme("#fff75e", "#2e2600");
  }
}

function applyTheme(primary, dark) {
  document.documentElement.style.setProperty("--primary", primary);
  document.documentElement.style.setProperty(
    "--bg-gradient",
    `linear-gradient(135deg, #000000, ${dark})`
  );
}

/* =============================
   LOAD THEME SAAT PINDAH PAGE
============================= */

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // default awal (ungu + hitam)
    setTheme("purple");
  }
});
