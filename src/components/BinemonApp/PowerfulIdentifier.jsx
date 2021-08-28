import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPower } from '../../redux/actions/binemonActions';
import '../../css/binemonPower.css';

export default function PowerfulIdentifier({monClass, monSkills, monBreeds}) {
  const dispatch = useDispatch();
  const { power } = useSelector((state) => state.binemonReducer);

  // Combos do Unicórnio Suporte
  const cU1 = monSkills[0] === 'The_General' && monSkills[1] === 'The_Strongest_Sidekick';
  const cU2 = monSkills[0] === 'The_General' && monSkills[1] === 'Blessing_Of_Life';
  const cU3 = monSkills[0] === 'Ancient_Wisdom' && monSkills[1] === 'The_Strongest_Sidekick';
  const cU4 = monSkills[0] === 'Ancient_Wisdom' && monSkills[1] === 'Blessing_Of_Life';

  // Combos do Titan Tanker
  const cT1 = monSkills[0] === 'Fortify' && monSkills[1] === 'Earthquake_Strike';
  const cT2 = monSkills[0] === 'Colossus' && monSkills[1] === 'Earthquake_Strike';

  // Combos do Titan Fighter
  const cTF1 = monSkills[0] === 'Fortify' && monSkills[1] === 'Berserker_Mode';
  const cTF2 = monSkills[0] === 'Colossus' && monSkills[1] === 'Berserker_Mode';

  // Combos do Titan Mage
  const cTM1 = monSkills[0] === 'Fortify' && monSkills[1] === 'Cursed_Circle';
  const cTM2 = monSkills[0] === 'Colossus' && monSkills[1] === 'Cursed_Circle';

  useEffect(() => {
    if (monBreeds === 'Unicorn' && monClass === 'Support') {
      if (cU1 || cU2 || cU3 || cU4) {
        dispatch(setPower('strong'));
      } else {
        dispatch(setPower('weak'));
      }
    } else if (monBreeds === 'Titan' && monClass === 'Tanker') {
      if (cT1 || cT2) {
        dispatch(setPower('strong'));
      } else {
        dispatch(setPower('weak'));
      }
    } else if (monBreeds === 'Titan' && monClass === 'Fighter') {
      if (cTF1 || cTF2) {
        dispatch(setPower('strong'));
      } else {
        dispatch(setPower('weak'));
      }
    }  else if (monBreeds === 'Titan' && monClass === 'Mage') {
      if (cTM1 || cTM2) {
        dispatch(setPower('strong'));
      } else {
        dispatch(setPower('weak'));
      }
    }
  }, [dispatch, monBreeds, monClass, monSkills]);

  console.log(power)
  return (
    <div>
      <h1 className={power}>O</h1>
    </div>
  )
}
