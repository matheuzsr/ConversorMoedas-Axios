import React, { useState } from 'react'
import './Conversor.css'
import api from '../services/api'

function Conversor(props) {

  const [moedaA, setMoedaA] = useState('');
  const [moedaB, setmoedaB] = useState(0);

  async function converter(event) {
    event.preventDefault();
    const de_para = `${props.moedaA}_${props.moedaB}`;

    const response = await api.get(`/convert?apiKey=do-not-use-this-key&q=${de_para}&compact=y`);
    console.log(response.data['status'])
    const cotacao = response.data[de_para]['val'];
    setmoedaB((cotacao*parseFloat(moedaA)).toFixed(2));
    
  }

  return (
    <div className="conversor">
      <h2>{props.moedaA} p/ {props.moedaB}</h2>
      <input type="text" onChange={event => setMoedaA(event.target.value)} />
      <input type="button" value="Converter" onClick={converter} />
      <h2>{moedaB}</h2>


    </div>
  )

}

export default Conversor;