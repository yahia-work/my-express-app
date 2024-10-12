const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Route simple pour tester
app.get('/', (req, res) => {
  res.send('Hello, World! Express server is working.');
});

app.get('/herzellah', (req, res) => {
  res.send('Hello, i am herzellah');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
