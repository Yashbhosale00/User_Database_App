const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/adduser', (req, res) => {
  const { name, age } = req.body;
  console.log(`Received user data: Name - ${name}, Age - ${age}`);
  res.status(200).send({ message: 'User added successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
