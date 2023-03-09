import { deleteContact } from 'components/redux/contactsSlice';
import { getContacts, getFilter } from 'components/redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import {
  ContactsBlock,
  ContactsList,
  ContactsItem,
  ContactsText,
  ContactsButton,
} from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(getContacts) 
  const filter = useSelector(getFilter)


  const findFilterContact = () => {
    const filterName = filter.trim().toLowerCase();
    return contacts.filter(elem =>
      elem.name.toLowerCase().includes(filterName)
    );
  };
 
  return (
    <ContactsBlock>
      <ContactsList>
        {findFilterContact().map((item) => {
          return (
            <ContactsItem key={item.id}>
              <ContactsText>{item.name}</ContactsText>
              <ContactsText>{item.number}</ContactsText>
              <ContactsButton
                type="button"
                value={item.id}
                onClick={() => dispatch(deleteContact(item.id))}
              >
                delete
              </ContactsButton>
            </ContactsItem>
          );
        })}
      </ContactsList>
    </ContactsBlock>
  );
};

