document.addEventListener("DOMContentLoaded", () => {
  // Welcoming Speech (Hi, Name)
  const usernameSpan = document.getElementById("username");
  const name = prompt("Masukkan nama kamu:");
  if (name && name.trim() !== "") {
    usernameSpan.textContent = name;
  } else {
    usernameSpan.textContent = "Pengunjung";
  }

  // Form Validation & Display Result with Time
  const form = document.getElementById("messageForm");
  const output = document.getElementById("output");
  const timeDisplay = document.getElementById("currentTime");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nama = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("messageText").value.trim();

    if (!nama || !email || !pesan) {
      alert("Semua kolom wajib diisi!");
      return;
    }

    // Ambil waktu saat pesan dikirim
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const waktuKirim = now.toLocaleString("id-ID", options);

    // Tampilkan hasil pesan dan waktu
    timeDisplay.textContent = `Pesan masuk pada: ${waktuKirim}`;
    output.innerHTML = `
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
      `;

    // Pastikan box hasil muncul (jika sebelumnya disembunyikan)
    document.getElementById("messageResult").classList.remove("hidden");

    // Reset form
    form.reset();
  });
});
