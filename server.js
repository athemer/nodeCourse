const express = require('express');

const hbs = require('hbs')

const port = process.env.PORT || 2800;

var app = express();

app.set('view ewngin', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (requset, response) => {

    // response.send('<h1>Hello Express lalalalala !!!!!</h1>');

    response.send({

      name: 'ian',
      favorites: [
        'one',
        'two'
      ]
    });
});

app.get('/about', (request, response) => {
  response.render('about.hbs', {
    pageTitle: 'lololol',
    currentYear: new Date().getFullYear()
  })
});

app.listen(port, () => {

  console.log(`Server is up on port ${port}``)

});
