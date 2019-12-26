const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
const chalk = require('chalk');

function validatePath(pathMd) {
  const extension = path.extname(pathMd);
  if (extension == '.md') {
    console.log(chalk.green('true'));
    return true;
  } else {
    console.log(chalk.red('false'));
    return false;
  }
}

function absolutePath(absolutelink) {
  const absolute = path.resolve(absolutelink);
  console.log(absolute);
  return absolute;
}

function readFileMd(pathMd) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathMd, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function findlinks(pathMd) {
  fs.readFile(pathMd, 'utf-8', function(err, data) {
    if (err) {
      console.log(err);
    } else {
      let find = data.toString();
      let href = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/g;
      let text = /(?:[^[])([^[]*)(?=(\]+\(((https?:\/\/)|(http?:\/\/)|(www\.))))/g;
      let linksFinder = find.match(href);
      let textFinder = find.match(text);
      if (linksFinder != null) {
        for (let i = 0; i < linksFinder.length; i++) {
          console.log(`Text: ${textFinder[i]}\n href:${linksFinder[i]}\n File: ${pathMd}\n`);
        }
      }
    }
  });
}

function ValidateLinks(pathMd) {
  fs.readFile(pathMd, 'utf-8', function(err, data) {
    if (err) {
      console.log(err);
    } else {
      let find = data.toString();
      let href = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/g;
      let text = /(?:[^[])([^[]*)(?=(\]+\(((https?:\/\/)|(http?:\/\/)|(www\.))))/g;
      let linksFinder = find.match(href);
      let textFinder = find.match(text);
      if (linksFinder != null) {
        for (let i = 0; i < linksFinder.length; i++) {
          fetch(linksFinder[i]).then(response => {
            if (response.status == 200) {
              console.log(
                `Text: ${textFinder[i]}\n href:${
                  linksFinder[i]
                }\n File: ${pathMd}\n Response code: ${response.status}\n Response: ${
                  response.statusText
                }\n`,
              );
            } else if (response.status == 404 || response.status == 400) {
              console.log(
                `ERROR.\nText:${textFinder[i]}\n href:${
                  linksFinder[i]
                }\n File: ${pathMd}\n Response code: ${response.status}\nResponse: ${
                  response.statusText
                }\n`,
              );
            }
          });
        }
      }
    }
  });
}

function statusGlobal(pathMd) {
  fs.readFile(pathMd, 'utf-8', function(err, data) {
    if (err) {
      console.log(err);
    } else {
      let find = data.toString();
      let href = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n)]+)(?=\))/g;
      let linksFinder = find.match(href);
      let goodLinks = 0;
      let badLinks = 0;
      if (linksFinder != null) {
        for (let i = 0; i < linksFinder.length; i++) {
          fetch(linksFinder[i]).then(response => {
            if (response.status == 200) {
              goodLinks++;
            } else if (response.status == 404 || response.status == 400) {
              badLinks++;
            }
            if (goodLinks + badLinks == linksFinder.length) {
              console.log(chalk.green(`Total links buenos: ${goodLinks}\n`));
              console.log(chalk.red(`Total links malos: ${badLinks}\n`));
            }
          });
        }
      }
    }
  });
}

module.exports = {
  validatePath,
  absolutePath,
  readFileMd,
  findlinks,
  ValidateLinks,
  statusGlobal,
};
