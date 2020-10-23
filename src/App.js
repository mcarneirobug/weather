import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


import Weather from './Weather';

const App = () => {

  const [dados, setDados] = useState(null); 
  const [cidade, setCidade] = useState({ value: '' });

  function handleChange(event) {
    setCidade({ value: event.target.value });
  }

  console.log("Armazenado" + cidade.value);

  async function handleSubmit(event) {
    alert('A cidade procurada é: ' + cidade.value);
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q='+cidade.value+'&appid=EnterYourAppId'
    );
    const json = await response.json();
    setDados(json);
    event.preventDefault();
  }

  return (
    <div> 
        <input 
          type="text"
          value={cidade.value}
          onChange={handleChange}
        />

        <Button onClick={handleSubmit} type="submit" variant="outline-success">Procurar</Button>

        {/* <button onClick={handleSubmit} type="submit">Submeter</button> */}
      {cidade && dados && <Weather dados={dados} />}
    </div>
  );
}

export default App;
