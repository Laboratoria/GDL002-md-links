# Markdown Links

## Introduction
Hi! This is a project about markdown files and how to create a library for publishing in npm. **Markdown** is a language very popular between developers to explain what do you do or what you can use our projects. Normally these files have links that are useful to understand the content of the markdown but sometimes that links are broken and that's the reason for this module help you.
This module was created with JavaScript language and Node.js, enjoy it!

![Constrution of a NPM package ](https://miro.medium.com/max/1047/1*Cv7F9UtBMhsrcV2_rwqEgA.png)


##  A little guide

I make this simple flowchart to explain how the modules work and what this will happen if you don't follow the instructions (ups!)

![Flowchart about mdLinks](https://lh3.googleusercontent.com/m96SzzIMzyIFdTfXwaG4IOTG4UoLLP7BQdCC9Y3Cdn2o7InmuBrF20xmOD235HsW0j1NBv1Rj6BS)
## How to use


First of all you need to install this package/module, copy and paste  or type this command in your terminal:

`'npm i lumenbarron-md-links'`

After that, you can use the package with the word **md-links** and insert the file or path that you want find the links, like this way:

`'md-links README.md'`

With that comand you will  get the links of you markdown file like that: 
![enter image description here](https://lh3.googleusercontent.com/XbbhFmkc5QmoZo-5h0ich5faVUXzKcTJ3-4XHaGtT3OT8FAQv0uaE7AVj09LRzZDaBby2lUWjyMR)

And that´s it you have the links of your markdown file in a easy way.

## Documentation
For this project I required this information and mentories:

- [Play learnyounode](https://github.com/workshopper/learnyounode)
- [Documentación oficial de Node.js](https://nodejs.org/es/about/)

-  [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)

-  [Node.js http.get - Documentación oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
- [Node.js curso desde cero](https://www.youtube.com/watch?v=BhvLIzVL8_o&list=LLgVy8kVPhtvLSTfZA3dqlYA&index=8&t=2194s)

- [How to build a CLI with Node,js](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js)
- [Create and publish npm package](https://medium.freecodecamp.org/how-to-create-and-publish-your-npm-package-node-module-in-just-10-minutes-b8ca3a100050)


## Working in a Version 2
In the next version of this package you will validate the links and know how many of this is in a good status or are broken with the following command: 
`'md-links README.md --validate'`

Also, you will know how many are uniques and the total of the links:

`'md-links README.md --stats'`

And if you want to know how many are uniques and how many are broken; you will type both commands:

`'md-links README.md --validate --stats'`

But I still working in that so any suggestion or comment it will be so appreciated. Thank you so much!

