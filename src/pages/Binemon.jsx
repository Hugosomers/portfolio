import React, { useState }  from 'react';
import binemonStyles from '../css/binemon.module.css';

export default function Binemon() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState(false);

  console.log(data);

  const inputHandle = ({target}) => {
    setInputValue(target.value);
  }

  const dataFetch = () => {
    fetch(`https://api.binemon.io/api/binemons/token/${inputValue}`)
    .then((response) => response.json())
    .then((monInfo) => setData(monInfo.response))
  }
  return (
    <div className={binemonStyles.binemonApp}>

    <h1 className={binemonStyles.h1Title}>Binemon Skills Search</h1>

    <div className={binemonStyles.searchDiv}>
      <form>
        <h3>Digite um ID de MON:</h3>
        <input 
          type="text" 
          value={inputValue}
          onChange={inputHandle}
        />
        <button 
          type="button"
          onClick={dataFetch}
        >
          Buscar MON
        </button>
      </form>
    </div>

    {data &&
      <div  className={binemonStyles.binemonDiv}>
        <div className={binemonStyles.monApresentation}>
          <h1>{data.binemon_item.name}</h1>
          <img src={data.binemon_item.thumbnail} alt="binemon" className={binemonStyles.binemonImg}/>
        </div>
        <h3>Classe: {data.binemon_item.class === 3 ? 'Suporte' : null}</h3>
        <div className={binemonStyles.skillsDiv}>
          <h2>Skills:</h2>
          <ul className={binemonStyles.skillsList}>
            {data.binemon_item.skills && data.binemon_item.skills.map((item) => <li className={binemonStyles.skillsItem}>{item}</li>)}
          </ul>
        </div>
      </div>
    }

  </div>
  )
}
