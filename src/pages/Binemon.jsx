import React, { useState }  from 'react';
import PowerfulIdentifier from '../components/BinemonApp/PowerfulIdentifier';
import binemonStyles from '../css/binemon.module.css';

export default function Binemon() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState(false);
  const classes = {
    1: 'Fighter',
    2: 'Tanker',
    3: 'Suporte',
    4: 'Mage',
    5: 'Archer'
  }

  const breeds = {
    1: 'Dog',
    2: 'Cat',
    3: 'Titan',
    4: 'Unicorn',
    5: 'Fused'
  }

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
        <PowerfulIdentifier 
          monClass={classes[data.binemon_item.class]}
          monSkills={data.binemon_item.skills}

        />
        <div className={binemonStyles.monApresentation}>
          <h1>{data.binemon_item.name}</h1>
          <img src={data.binemon_item.thumbnail} alt="binemon" className={binemonStyles.binemonImg}/>
        </div>
        <h3>Classe: {classes[data.binemon_item.class]}</h3>
        <h3>{breeds[data.binemon_item.breed]}</h3>
        <div className={binemonStyles.skillsDiv}>
          <h2>Skills:</h2>
          <ul className={binemonStyles.skillsList}>
            {data.binemon_item.skills && data.binemon_item.skills.map((item, index) => (
              <li 
                className={binemonStyles.skillsItem}
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    }

  </div>
  )
}
