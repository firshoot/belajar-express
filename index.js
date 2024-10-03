const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const port = 3000;

// Mengatur views dan view engine
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// Menggunakan express-ejs-layouts untuk layout default
app.use(expressLayouts);
app.set("layout", "layout"); // Gunakan layout.ejs sebagai layout default

// Tempat untuk file statis (gambar, CSS, dll.)
app.use(express.static('public'));

// Route untuk halaman home
app.get("/", (req, res) => {
  res.render("index", { title: "Universitas Multi Data Palembang" });
});

// Route untuk halaman Prodi
app.get("/prodi", (req, res) => {
    const prodi = [
      { prodi: "Sistem Informasi", fakultas: "FIKR", singkatan: "SI" },
      { prodi: "Informatika", fakultas: "FIKR", singkatan: "IF" },
      { prodi: "Teknik Elektro", fakultas: "FIKR", singkatan: "TE" },
      { prodi: "Manajemen Informatika", fakultas: "FIKR", singkatan: "MI" },
      { prodi: "Manajemen", fakultas: "FEB", singkatan: "MJ" },
      { prodi: "Akuntansi", fakultas: "FEB", singkatan: "AK" },
    ];
    res.render("prodi", { title: "Data Prodi", prodi });
});

// Route untuk halaman Mahasiswa
app.get("/mahasiswa", (req, res) => {
  const mahasiswaList = [
    { npm: "2226240011", nama: "Andre" },
    { npm: "2226240012", nama: "Andri" },
    { npm: "2226240013", nama: "Andro" },
  ];
  res.render("mahasiswa", { title: "Data Mahasiswa", mahasiswa: mahasiswaList });
});

// Route untuk halaman Dosen
app.get("/dosen", (req, res) => {
  const dosenList = [
    { nama: "Dr. Johan", matkul: "Pemrograman Web" },
    { nama: "Dr. Sri", matkul: "Basis Data" },
    { nama: "Dr. Andi", matkul: "Jaringan Komputer" },
  ];
  res.render("dosen", { title: "Data Dosen", dosen: dosenList });
});

// Route untuk halaman Kontak
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Kontak Kami" });
});

// Route untuk halaman Tentang Kami
app.get("/about", (req, res) => {
  res.render("about", { title: "Tentang Kami" });
});

// Handle 404 - Page Not Found
app.use((req, res) => {
  res.status(404).render("404", { title: "404 - Halaman Tidak Ditemukan" });
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});
