export const getContacts = state => state.contacts.items;

export const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filter = state.contacts.filter;
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};
