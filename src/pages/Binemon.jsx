import React, { useState }  from 'react';
import PowerfulIdentifier from '../components/BinemonApp/PowerfulIdentifier';
import binemonStyles from '../css/binemon.module.css';

export default function Binemon() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState({});
  const classes = {
    1: 'Fighter',
    2: 'Tanker',
    3: 'Support',
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
      
      <h3>Digite um ID de MON:</h3>
      <input 
        type="text" 
        value={inputValue}
        onChange={inputHandle}
        className={binemonStyles.binSearchInput}
      />
      <button 
        type="button"
        onClick={dataFetch}
        disabled={inputValue.length !== 6? true : false}
        className={binemonStyles.binSearchButton}
      >
        Buscar MON
      </button>
     
    </div>

    {Object.keys(data).length > 0 &&
      <div  className={binemonStyles.binemonDiv}>
        <div className={binemonStyles.onTopBinDiv}>
          <div className={binemonStyles.monApresentation}>

            <h2>{data.binemon_item.name}</h2>
            <img src={data.binemon_item.thumbnail} alt="binemon" className={binemonStyles.binemonImg}/>
          </div>

          <div className={binemonStyles.binInfo}>
            <h2>Infos</h2>
            <h3>Classe: {classes[data.binemon_item.class]}</h3>
            <h3>Raça: {breeds[data.binemon_item.breed]}</h3>
          </div>

          <div className={binemonStyles.skillsDiv}>

            <h2>Skills</h2>
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
          <PowerfulIdentifier 
            monClass={classes[data.binemon_item.class]}
            monSkills={data.binemon_item.skills}
            monBreeds={breeds[data.binemon_item.breed]}
          />
        </div>
        <hr className={binemonStyles.hr}/>
        <div className={binemonStyles.binAtbDiv}>
          <h2>Atributos </h2>
          <div className={binemonStyles.binAtbs}>
            <p className={binemonStyles.binAtbItem}><b>Força:</b> {data.binemon_item.stats.strength}</p>
            <p className={binemonStyles.binAtbItem}><b>Agilidade:</b> {data.binemon_item.stats.agility}</p>
            <p className={binemonStyles.binAtbItem}><b>Inteligência:</b> {data.binemon_item.stats.intelligence}</p>
            <p className={binemonStyles.binAtbItem}><b>Defesa:</b> {data.binemon_item.stats.def}</p>
            <p className={binemonStyles.binAtbItem}><b>Vida:</b> {data.binemon_item.stats.hp}</p>
            <p className={binemonStyles.binAtbItem}><b>Mana:</b> {data.binemon_item.stats.mp}</p>
            <p className={binemonStyles.binAtbItem}><b>Mana Regen:</b> {data.binemon_item.stats.mpRegen}</p>
            <p className={binemonStyles.binAtbItem}><b>Resistência:</b> {data.binemon_item.stats.resistance}</p>
            <p className={binemonStyles.binAtbItem}><b>Poder:</b> {data.binemon_item.stats.power}</p>
            <p className={binemonStyles.binAtbItem}><b>Velocidade:</b> {data.binemon_item.stats.speed}</p>
          </div>
        </div>
      </div>
    }

  </div>
  )
}
