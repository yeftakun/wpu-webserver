const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);


// Bacanya:
// Setelah menjalankan app, ketika ada request method get ke halaman / (root), maka jalankan fungsi berikut ini:
// Kirimkan response berupa string 'Hello World!'
app.get('/', (req, res) => {
  // Misalkan punya data mahasiswa
  const mahasiswa = [
    {
      nama: "Yefta Asyel",
      email: "yefta@gmail.com"
    },
    {
      nama: "Joko",
      email: "joko@gmail.com"
    },
    {
      nama: "Andi",
      email: "andi@gmail.com",
    }
  ];
  res.render('index', { 
    layout: 'layouts/main-layout', // layout yang digunakan
    nama: "Yefta Asyel", 
    title: "Home",
    // mahasiswa: mahasiswa
    mahasiswa // sama aja dengan mahasiswa: mahasiswa 
  }); // pakai ejs, jadi render file index.ejs
});

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: "About",
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    layout: 'layouts/main-layout',
    title: "Contact",
  });
});

// Untuk url http://localhost:3000/product/29?category=shoes
app.get('/product/:id', (req, res) => {
  res.send(`Product ID: ${req.params.id} <br> Category: ${req.query.category}`);
});

// Apapun yg ditulis akan ditangkap sama .use ini. Ini bisa digunakan untuk menangani halaman yang tidak ditemukan
app.use('/', (req, res) => {
    res.status(404);
    res.send('404: Page not found');
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});