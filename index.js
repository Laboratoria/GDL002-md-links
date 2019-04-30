#!/usr/bin/env node

const mdLinks = require('./Linksmd.js');
const path = process.argv[2];

mdLinks.fileOrDirectory(path, result => {
  console.log(result);
});

//ruta filterMd  C:\Users\Karla Val\Documents\GitHubKarla\GDL002-md-links

mdLinks.filterMd(path, result => {
  console.log(result);
});
