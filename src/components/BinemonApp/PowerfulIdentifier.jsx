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

  // Combos do Dog Tanker
  const cDT1 = monSkills[0] === 'Fighter_Spirit' && monSkills[1] === 'Almightly_Blow';

  // Combos do Dog Fighter
  const cDF1 = monSkills[0] === 'Fighter_Spirit' && monSkills[1] === 'Berserker_Mode';
  const cDF2 = monSkills[0] === 'Fighter_Spirit' && monSkills[1] === 'Rapid_Severence';

    // Combos do Dog Archer
    const cDA1 = monSkills[0] === 'Fighter_Spirit' && monSkills[1] === 'Projectile_Barrage';
    const cDA2 = monSkills[0] === 'Fighter_Spirit' && monSkills[1] === 'Deathblow';
    const cDA3 = monSkills[0] === 'Adapter' && monSkills[1] === 'Projectile_Barrage';
    const cDA4 = monSkills[0] === 'Adapter' && monSkills[1] === 'Deathblow';

    // Combos do Cat Fighter
    const cCF1 = monSkills[0] === 'Battle_Blood' && monSkills[1] === 'Berserker_Mode';
    const cCF2 = monSkills[0] === 'Battle_Blood' && monSkills[1] === 'Rapid_Severence';
    const cCF3 = monSkills[0] === 'Swift_Movements' && monSkills[1] === 'Berserker_Mode';
    const cCF4 = monSkills[0] === 'Swift_Movements' && monSkills[1] === 'Rapid_Severence';

    // Combos do Cat Archer
    const cCA1 = monSkills[0] === 'Battle_Blood' && monSkills[1] === 'Projectile_Barrage';
    const cCA2 = monSkills[0] === 'Battle_Blood' && monSkills[1] === 'Deathblow';
    const cCA3 = monSkills[0] === 'Swift_Movements' && monSkills[1] === 'Projectile_Barrage';
    const cCA4 = monSkills[0] === 'Swift_Movements' && monSkills[1] === 'Deathblow';

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
    } else if (monBreeds === 'Dog' && monClass === 'Tanker') {
      if (cDT1) {
        dispatch(setPower('strong'));
      } else {
        dispatch(setPower('weak'));
      }
    } else if (monBreeds === 'Dog' && monClass === 'Fighter') {
      if (cDF1 || cDF2) {
        dispatch(setPower('strong'));
      } else {
        dispatch(setPower('weak'));
      }
    } else if (monBreeds === 'Dog' && monClass === 'Archer') {
      if (cDA1 || cDA2 || cDA3 || cDA4) {
        dispatch(setPower('strong'));
      } else {
        dispatch(setPower('weak'));
      }
    } else if (monBreeds === 'Cat' && monClass === 'Fighter') {
      if (cCF1 || cCF2 || cCF3 || cCF4) {
        dispatch(setPower('strong'));
      } else {
        dispatch(setPower('weak'));
      }
    } else if (monBreeds === 'Cat' && monClass === 'Archer') {
      if (cCA1 || cCA2 || cCA3 || cCA4) {
        dispatch(setPower('strong'));
      } else {
        dispatch(setPower('weak'));
      }
    } else {
      dispatch(setPower('weak'));
    }
  }, [cCA1, cCA2, cCA3, cCA4, cCF1, cCF2, cCF3, cCF4, cDA1, cDA2, cDA3, cDA4, cDF1, cDF2, cDT1, cT1, cT2, cTF1, cTF2, cTM1, cTM2, cU1, cU2, cU3, cU4, dispatch, monBreeds, monClass, monSkills]);

  console.log(power)
  return (
    <div>
      <h1 className={power}>O</h1>
    </div>
  )
}
