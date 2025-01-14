const express = require('express')
const app = express()
const port = 3000


// Bacanya:
// Setelah menjalankan app, ketika ada request method get ke halaman / (root), maka jalankan fungsi berikut ini:
// Kirimkan response berupa string 'Hello World!'
app.get('/', (req, res) => {
//   res.send('Hello World!')
  res.sendFile('./index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
  // res.send('Ini adalah halaman about')
  res.sendFile('./about.html', {root: __dirname})
})

app.get('/contact', (req, res) => {
  // res.send('Ini adalah halaman contact')
  res.sendFile('./contact.html', {root: __dirname})
})

// Untuk url http://localhost:3000/product/29?category=shoes
app.get('/product/:id', (req, res) => {
  res.send(`Product ID: ${req.params.id} <br> Category: ${req.query.category}`)
})

// Apapun yg ditulis akan ditangkap sama .use ini. Ini bisa digunakan untuk menangani halaman yang tidak ditemukan
app.use('/', (req, res) => {
    res.status(404)
    res.send('404: Page not found')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

// const http = require('http');
// const fs = require('fs');
// const port = 3000;

// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if(err){
//             res.writeHead(404);
//             res.writeHead('Error: file not found');
//         }else{
//             res.write(data);
//         }
//         res.end();
//     });
// };

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html',
//     });

//     const url = req.url;
    
//     if(url === '/about'){
//         renderHTML('./about.html', res);
//     } else if(url === '/contact'){
//         renderHTML('./contact.html', res);
//     } else {
//         renderHTML('./index.html', res);
//     }

// })
// .listen(port, () => {
//     console.log(`Server is listening on port ${port}...`);
// })