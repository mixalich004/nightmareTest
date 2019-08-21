const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: false });
const fs = require('fs');
let first = '<!DOCTYPE HTML> <html> <title>Hello World</title> <meta charset="utf-8"> </head> <body>';
let second = '</body> </html>';

nightmare
  .goto('http://google.com')
  .type('.gLFyf.gsfi' , 'hello world')
  .click('.gNO89b')
  .wait('.ellip')
  .click('div[class="ellip"]')
  .evaluate(() => document.querySelector('p').innerHTML)
  .end()
  .then(function (page) { 
        fs.writeFile('OpenMe.html', `${first + page + second}`, function(err) {
          if (!err) {
            return console.log('check the folder')
          } else  {
                console.log(err);
          }
        })
      })
  .catch(error => {
    console.error('Search failed:', error)
  })