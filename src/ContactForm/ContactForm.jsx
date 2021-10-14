import PropTypes from 'prop-types';
import { useState } from 'react';
import contactActions from '../redux/contact-app/contact-actions';
import { useDispatch } from 'react-redux';
import s from './ContactForm.module.css';

const ContactForm = ({ formSubmitHandler }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(contactActions.formSubmitHandler({ name, number }));
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.container} onSubmit={handleSubmit}>
      <label id={name} className={s.label}>
        Name
      </label>
      <input
        className={s.input}
        value={name}
        onChange={handleChangeName}
        type="text"
        name="name"
        placeholder="add name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <label id={name} className={s.label}>
        Number
      </label>
      <input
        className={s.input}
        value={number}
        onChange={handleChangeNumber}
        type="tel"
        name="number"
        placeholder="add number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  formSubmitHandler: PropTypes.func,
  handleChange: PropTypes.string,
};
