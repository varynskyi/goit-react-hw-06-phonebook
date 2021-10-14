import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../redux/contact-app/contact-selector';
import contactActions from '../redux/contact-app/contact-actions';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(getVisibleContacts);

  const onDeleteContact = (id, name) => {
    dispatch(contactActions.deleteContact(id, name));
  };

  return (
    <div className={s.container}>
      <ul>
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <span>{name}:</span>
            <span>{number}</span>
            <span>
              <button
                className={s.btn}
                type="button"
                onClick={() => onDeleteContact(id, name)}
              >
                delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
