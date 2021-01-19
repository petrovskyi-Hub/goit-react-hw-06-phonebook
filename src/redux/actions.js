export const addContact = ({ name, number }) => {
  return {
    type: 'contacts/addContact',
    payload: {
      name,
      number,
    },
  };
};

export const deleteContact = id => ({
  type: 'contacts/deleteContact',
  payload: id,
});

export const setFilter = value => ({
  type: 'filter/setFilter',
  payload: value,
});
