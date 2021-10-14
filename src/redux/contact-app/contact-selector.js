export const getVisibleContacts = ({ contacts: { items, filter } }) => {
  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

export const getValue = state => state.contacts.filter;
