#!/usr/bin/env node

const mdLinks = require('../GDL002-md-links/blob/master/README').mdLinks;
const path = require('path');
const fetch = require('node-fetch');
const [, , ...args] = process.argv;

if (require.main === module) {
  let options = {};
  if (process.argv.includes('--validate')) options.validate = true;
  if (process.argv.includes('--stats')) options.stats = true;
  mdLinks(path.join(process.cwd(), args[0]), options).then((links) => {
    let result = '';
    let successCounter = 0;
    let failCounter = 0;
    links.map(element => {
      fetch(element.href)
        .then(res => {
          if (options.validate) {
            result = (`${element.file}: ${element.line} - ${(element.href)} - ${element.text} ${(res.status)} ${(res.ok)}`);
          } else {
            result = (`${(element.file)}: ${(element.line)} - ${(element.href)} - ${element.text}`);
          }
          if (options.stats) {
            if (res.ok === true) {
              successCounter++;
            } else if (res.ok === false) {
              failCounter++;
            }
            stats = (`${('totals: ')} ${(links.filter(link => link.href).length)}, ${('success: ')} ${(successCounter)}, ${('failed: ')} ${(failCounter)}`);
          }
          console.log(result);
          if (options.stats) console.log(stats);
          console.log('hi there!');
        })
        .catch(err => {
          console.error(err);
        });
    });
  }).catch((err) => {
    console.error(err);
  });
};

