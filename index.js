const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const port = 3000;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(expressLayouts);
app.set("layout", "layout"); // Use layout.ejs as default layout

// Route for home page
app.get("/", (req, res) => {
  res.render("index", { title: "Universitas Multi Data Palembang" });
});

// Route for Prodi page
app.get("/prodi", (req, res) => {
  const prodiList = [
    { name: "Sistem Informasi", fakultas: "FIKR", singkatan: "SI" },
    { name: "Informatika", fakultas: "FIKR", singkatan: "IF" },
    { name: "Teknik Elektro", fakultas: "FIKR", singkatan: "TE" },
    { name: "Akuntansi", fakultas: "FEB", singkatan: "AK" },
  ];
  res.render("prodi", { title: "Program Studi", prodi: prodiList });
});

// Route for Mahasiswa page
app.get("/mahasiswa", (req, res) => {
  const mahasiswaList = [
    { npm: "2226240011", nama: "Andre" },
    { npm: "2226240012", nama: "Andri" },
    { npm: "2226240013", nama: "Andro" },
  ];
  res.render("mahasiswa", { title: "Data Mahasiswa", mahasiswa: mahasiswaList });
});

// Route for Dosen page
app.get("/dosen", (req, res) => {
  const dosenList = [
    { nama: "Dr. Johan", matkul: "Pemrograman Web" },
    { nama: "Dr. Sri", matkul: "Basis Data" },
    { nama: "Dr. Andi", matkul: "Jaringan Komputer" },
  ];
  res.render("dosen", { title: "Data Dosen", dosen: dosenList });
});

// Route for Contact page
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Kontak Kami" });
});

// Route for About page
app.get("/about", (req, res) => {
  res.render("about", { title: "Tentang Kami" });
});

// Handle 404 - Page Not Found
app.use((req, res) => {
  res.status(404).render("404", { title: "404 - Halaman Tidak Ditemukan" });
});

// Start the server
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
