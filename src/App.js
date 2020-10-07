import React, {useState, useEffect} from "react";
import axios from 'axios'
import Title from './components/Title'
import Image from './components/Image'
import "./App.css";

function App() {
  const [nasaInfo, setNasaInfo] = useState([])

  useEffect(() => {
    const fetchNasa = () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=PFFF3FbuFIPjvr359uIXuqLYUYkcoEeyqoQOn7gu&date=2017-06-25`)
        .then(res => {
          setNasaInfo(res.data);
        })
        .catch(err => {
          debugger
        })
    }
    fetchNasa()
  }, [])

  return (
    <div className="App">
      <Title />
      <Image />
    </div>
  );
}

export default App;