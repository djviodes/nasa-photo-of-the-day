import React, {useState, useEffect} from "react";
import axios from 'axios'
import Title from './components/Title'
import Image from './components/Image'
import "./App.css";
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

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
    <StyledContainer className="App">
      <Title title={nasaInfo.title} />
      <Image image={nasaInfo.url} title={nasaInfo.title} para={nasaInfo.explanation} />
    </StyledContainer>
  );
}

export default App;