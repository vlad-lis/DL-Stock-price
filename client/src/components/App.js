import { useState, useEffect } from 'react';
import Header from './Header';
import Evaluate from './Evaluate';
import Home from './Home';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import api from '../utils/Api';
import About from './About';

function App() {
  //const [data, setData] = useState(null);
  const [predictions, setPredictions] = useState('');
  const [isPredictionsPopupOpen, setPredictionsPopupOpen] = useState(false);

  // useEffect(() => {
  //   fetch('/api')
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // });

  function handlePrediction(data) {
    console.log(data);
    api
      .getPrediction(data)
      .then((predictions) => {
        setPredictions(predictions);
        setPredictionsPopupOpen(true);
      })
  };

  function handleClosePredictions() {
    setPredictionsPopupOpen(false);
  }

  return (
    <div className="root">
      {/* <p>{!data ? "Loading..." : data}</p>  */}
      <Header />

      <Routes>
        <Route
          path='/'
          element={
            <Home />
          } />
        <Route
          path='/evaluate'
          element={
            <Evaluate
              onFormSubmit={handlePrediction}
              isPredictionsPopupOpen={isPredictionsPopupOpen}
              closePredictions={handleClosePredictions}
              predictions={predictions} />
          } />
        <Route
          path='/about'
          element={
            <About />
          } />
      </Routes>

      {/* <Evaluate
        isOpen={isPredictionsOpen}
        predictions={predictions} /> */}

      <Footer />

    </div>
  );
}

export default App;
