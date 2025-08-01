const toggleCheckbox = document.getElementById('theme-toggle');

  // Cek tema tersimpan di localStorage
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    toggleCheckbox.checked = true;
  }

  // Event ketika checkbox diubah
  toggleCheckbox.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');

    // Simpan preferensi ke localStorage
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
});
