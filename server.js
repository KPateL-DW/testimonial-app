const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/testimonials', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const testimonialSchema = new mongoose.Schema({
  name: String,
  testimonial: String,
  rating: Number,
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

app.post('/api/testimonials', async (req, res) => {
  const { name, testimonial, rating } = req.body;
  const newTestimonial = new Testimonial({ name, testimonial, rating });
  await newTestimonial.save();
  res.status(201).json(newTestimonial);
});

app.get('/api/testimonials', async (req, res) => {
  const testimonials = await Testimonial.find();
  res.json(testimonials);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
