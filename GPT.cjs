// Server (Node.js with Express)
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
  const jsonData = {
    name: 'Shirin',
    age: 45,
    city: 'Example City'
  };
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


const fetch = require('node-fetch');

async function fetchData() {
  try {
    const response = await fetch('http://localhost:3000/api/data');
    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();


