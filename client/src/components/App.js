import { useState, useEffect } from 'react';
import Form from './Form';
import Header from './Header';
import Main from './Main';
import { Route, Routes } from 'react-router-dom';
import api from '../utils/Api';

function App() {
  //const [data, setData] = useState(null);
  const [predictions, setPredictions] = useState('');
  // const [predictionCombined, setPredictionCombined] = useState(null)
  // const [predictionInside, setPredictionInside] = useState(null)
  // const [predictionOutside, setPredictionOutside] = useState(null)
  // const [predictionCyber, setPredictionCyber] = useState(null)

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
        // setPredictionCombined(predictions.combined);
        // setPredictionInside(predictions.inside);
        // setPredictionOutside(predictions.outside);
        // setPredictionCyber(predictions.cyber);
      })
  };

  return (
    <div className="root">
      {/* <p>{!data ? "Loading..." : data}</p>  */}
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <Main
              onFormSubmit={handlePrediction}
              predictions={predictions} />
          } />
      </Routes>
    </div>
  );
}

export default App;
