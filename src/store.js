export const initialStore = () => {
  return {
    message: ""
  };
};

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'load_data':
return{
  ...store,
  contact: action.contacts,
};
case "add_contact":
  return {
    ...store,
    contacts: [...store.contacts, action.payload],
  };
  case"edit_contact":
      return {
        ...store,
       contacts: [...store.contacts, action.payload],
      };
    default:
      throw Error('Unknown action.');
  }    
}
