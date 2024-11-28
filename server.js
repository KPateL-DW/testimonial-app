const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

let testimonials = [];

app.post('/api/testimonials', (req, res) => {
  const { name, testimonial, rating } = req.body;
  const newTestimonial = { id: testimonials.length + 1, name, testimonial, rating };
  testimonials.push(newTestimonial);
  res.status(201).json(newTestimonial);
});

app.get('/api/testimonials', (req, res) => {
  res.json(testimonials);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
