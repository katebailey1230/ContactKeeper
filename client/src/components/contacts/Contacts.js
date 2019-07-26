import React, { Fragment, useContext, useEffect } from 'react';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0) {
    return <h4>Please add contact</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <div>
          {filtered !== null
            ? filtered.map(contact => (
                <ContactItem key={contact._id} contact={contact} />
              ))
            : contacts.map(contact => (
                <ContactItem key={contact._id} contact={contact} />
              ))}
          ;
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
