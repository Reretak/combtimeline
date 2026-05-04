import './App.css'
import checkWindowDimension from './checkWindowDimension';
import { useState, useEffect } from 'react';

function Wiki() {

  return(
    <div id="about">
      <TextBox />
    </div>
  )
  
}

function TextBox() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://timelineserver-production.up.railway.app/")
      .then(response => {
        if (!response.ok) throw new Error(`Status: ${response.status}`);
        return response.json();
      })
      .then(result => {
        setData(result);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p>Dont mind me just testing in prod!</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Wiki
