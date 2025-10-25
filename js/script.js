document.addEventListener("DOMContentLoaded", () => {
  //Welcoming Speech - Hi Name
  const usernameSpan = document.getElementById("username");
  const name = prompt("Masukkan nama kamu:");
  if (name && name.trim() !== "") {
    usernameSpan.textContent = name;
  }

  //Form Validation & Display Result
  const form = document.getElementById("messageForm");
  const output = document.getElementById("output");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nama = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("messageText").value.trim();

    if (!nama || !email || !pesan) {
      alert("Semua kolom wajib diisi!");
      return;
    }

    output.innerHTML = `
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
      `;

    form.reset();
  });
});
