const mysql = require("mysql");
const express = require("express");
const jwt = require("jsonwebtoken");
const { Buffer } = require("buffer");
const fs = require("fs");

const app = express();
app.use("/assets", express.static("assets"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "datapemilih",
});

connection.connect(function (error) {
  if (error) throw error;
  else console.log("Koneksi Database Berhasil");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/dpt/:filter", function (req, res) {
  res.sendFile(__dirname + "/tahapandpt.html");
});

app.get("/dptb/:filter", function (req, res) {
  res.sendFile(__dirname + "/tahapandptb.html");
});

app.get("/dpk/:filter", function (req, res) {
  res.sendFile(__dirname + "/tahapandptb.html");
});

app.get("/rincian/:tahapan/:kabupaten", function (req, res) {
  res.sendFile(__dirname + "/rincian.html");
});

app.get("/dptb/dptb/poskodptb",function(req,res){
  res.sendFile(__dirname + "/poskoDPTB.html");
  });

  app.get("/dptb/dptb/syaratpindah",function(req,res){
    res.sendFile(__dirname+ "/syaratpindahpemili.html");
  });




app.get("/provinsi", (req, res) => {
  const query = `SELECT * FROM dpt
                union all
                SELECT * FROM dptb`;
  connection.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});

app.get("/dpt", (req, res) => {
  const query = `SELECT * FROM dpt`;
  connection.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});

app.get("/dptb", (req, res) => {
  const query = `SELECT * FROM dptb`;
  connection.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});

app.get("/dpk", (req, res) => {
  const query = `SELECT * FROM dpk`;
  connection.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});

app.get("/rinciann/:tahapan/:kabupaten", (req, res) => {
  const tahapan = req.params.tahapan;
  const kabupaten = req.params.kabupaten;
  const query = `SELECT * FROM ${tahapan} where nama like '${kabupaten}'`;
  connection.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});

app.get("tahapan/:tahapan/:filter", function (req, res) {
  const tahapan = req.params.tahapan;
  const filter = req.params.filter;
  const query = `SELECT * FROM ${tahapan} where nama like '${filter}'`;
  connection.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});

app.get("/poskodptb", (req, res) => {
  const query = `SELECT * FROM titik_kordinat`;
  connection.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});


app.listen(4000);
