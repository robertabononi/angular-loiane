const express = require('express');
//import cors from 'cors';
//import bodyParser from 'body-parser';
const multipart = require('connect-multiparty');
const { get } = require('http');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* const corsOptions = {
  origin: '*',
  optionSuccessStatus: 200
}
app.use(cors(corsOptions)); */

const multipartMiddleware = multipart({ uploadDir: './uploads' });
app.post('/upload', multipartMiddleware, (req, res) => {
  const files = req.files;
  console.log(files);
  res.json({ message: files });
})

app.get('/downloadExcel', (req, res) => {
  res.download('./uploads/fileExcel.xlsx');
})

app.get('/downloadPdf', (req, res) => {
  res.download('./uploads/filePdf.pdf')
})
app.use((err, req, res, next) => res.json({error: err.message}));

app.listen(8000, () => {
  console.log('Servidor porta 8000'); //testa se o servidor está rodando na porta 8000.
})
