import React from 'react';
import TestimonialForm from './components/TestimonialForm';
import TestimonialList from './components/TestimonialList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Client Testimonials</h1>
      </header>
      <main>
        <TestimonialForm />
        <TestimonialList />
      </main>
    </div>
  );
}

export default App;
