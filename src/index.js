const app = require('./server');

app.get('/', (req, res) =>
  res.json({
    status: 'ok',
    data: {
      message: 'Hello World!',
    },
  })
);

app.listen(3000, () => {
  console.log('Running on port: 3000');
});
