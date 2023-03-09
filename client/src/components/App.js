import { useState, useEffect } from 'react';
import Form from './Form';
import api from '../utils/Api';

function App() {
  const [data, setData] = useState(null);
  const [predictionCombined, setPredictionCombined] = useState(null)
  const [predictionInside, setPredictionInside] = useState(null)
  const [predictionOutside, setPredictionOutside] = useState(null)
  const [predictionCyber, setPredictionCyber] = useState(null)

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  });

  function handlePrediction(data) {
    console.log(data);
    api
      .getPrediction(data)
      .then((predictions) => {
        setPredictionCombined(predictions.combined);
        setPredictionInside(predictions.inside);
        setPredictionOutside(predictions.outside);
        setPredictionCyber(predictions.cyber);
      })
  };

  return (
    <div className="App">
      <p>{!data ? "Loading..." : data}</p>
      <Form
        onSubmit={handlePrediction} />
      <p>combined:</p>
      <p>{predictionCombined}</p>
      <p>inside:</p>
      <p>{predictionInside}</p>
      <p>outside:</p>
      <p>{predictionOutside}</p>
      <p>cyber:</p>
      <p>{predictionCyber}</p>
    </div>
  );
}

export default App;
