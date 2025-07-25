// store.jsx
export const initialStore = () => {
  return {
    message: "",
    contacts: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "LOAD_DATA":
      return {
        ...store,
        contacts: action.payload,
      };
    case "ADD_CONTACT":
      return {
        ...store,
        contacts: [...store.contacts, action.payload],
      };
    case "EDIT_CONTACT":
      return {
        ...store,
        contacts: store.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case "DELETE_CONTACT":
      return {
        ...store,
        contacts: store.contacts.filter((contact) => contact.id !== action.payload),
      };
    case "SET_MESSAGE":
      return {
        ...store,
        message: action.payload,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}