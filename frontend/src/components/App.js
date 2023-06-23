import { useState } from 'react';
import Header from './Header';
import Evaluate from './Evaluate';
import Home from './Home';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import api from '../utils/Api';
import About from './About';

function App() {
  const [predictions, setPredictions] = useState('');
  const [isPredictionsPopupOpen, setPredictionsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handlePrediction(data) {
    setIsLoading(true);
    console.log(data);
    api
      .getPrediction(data)
      .then((predictions) => {
        setPredictions(predictions);
        setPredictionsPopupOpen(true);
        setIsLoading(false);
      })
      .catch(err => console.log(err))
  };

  function handleClosePredictions() {
    setPredictionsPopupOpen(false);
    setIsLoading(false);
  }

  return (
    <div className="root">

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
              predictions={predictions}
              isLoading={isLoading} />
          } />
        <Route
          path='/about'
          element={
            <About />
          } />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
