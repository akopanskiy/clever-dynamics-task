import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ChangeOptions.module.css';

import ChangeRover from '../ChangeRover';
import ChangeCamera from '../ChangeCamera';
import ChangeMarsDay from '../ChangeMarsDay';
import Section from '../Section';

const ChangeOptions = ({ onSubmit }) => {
  const [rover, setRover] = useState('curiosity');
  const [camera, setCamera] = useState('fhaz');
  const [day, setDay] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'rover':
        setRover(value);
        break;
      case 'camera':
        setCamera(value);
        break;
      default:
        return;
    }
  };
  const handleChangeDay = e => {
    setDay(parseInt(e.currentTarget.value));
    setDisabled(false);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(rover, camera, day);
    setRover('curiosity');
    setCamera('fhaz');
    setDay('');
    setDisabled(true);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Section title={'Вибирай ровер і вперед!'}>
        <ChangeRover rover={rover} onChange={handleChange} />
      </Section>
      <Section
        title={'Перший кіт, звичайно, the best, але інших теж можеш вибрати)'}
      >
        <ChangeCamera camera={camera} onChange={handleChange} />
      </Section>
      <Section
        title={'Вводи день (від 0 і вище) і відправляй результат Ілону Маску!'}
      >
        <ChangeMarsDay
          marsDay={day}
          onchange={handleChangeDay}
          activeButton={disabled}
        />
      </Section>
    </form>
  );
};
ChangeOptions.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ChangeOptions;
