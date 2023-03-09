import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Home from './Home';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import api from '../utils/Api';
import About from './About';

function App() {
  //const [data, setData] = useState(null);
  const [predictions, setPredictions] = useState('');

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
            <Home />
          } />
        <Route
          path='/evaluate'
          element={
            <Main
              onFormSubmit={handlePrediction}
              predictions={predictions} />
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
