
import { useState } from "react";

const AddContact = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''  
  });

  const añadirContacto = () => {
    fetch("https://playground.4geeks.com/contact/agendas/cgerc/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        address: contact.address
      })
    }) 
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      console.log(data);
      alert("Usuario creado con éxito");
      
      // Limpiar el formulario
      setContact({
        name: '',
        email: '',
        phone: '',
        address: ''
      });
    })
    .catch((error) => console.log(error));
  };

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact(prevContact => ({
      ...prevContact,
      [name]: value
    }));
  };

  return (
    <form className="list-group">
      <h1 className="text-center">Add a new contact</h1>
      
      <label htmlFor="name">Full Name</label>
      <input 
        className="form-control" 
        type="text" 
        name="name"  
        placeholder="Full Name"
        value={contact.name}  
        onChange={handleChange}
      />
      <br />
      
      <label htmlFor="email">Email</label>
      <input 
        className="form-control" 
        type="email"  
        name="email" 
        placeholder="Enter email"
        value={contact.email}
        onChange={handleChange}
      />
      <br />
      
      <label htmlFor="phone">Phone</label>
      <input 
        className="form-control" 
        type="tel"  
        name="phone" 
        placeholder="Enter phone"
        value={contact.phone}
        onChange={handleChange}
      />
      <br />
      
      <label htmlFor="address">Address</label>
      <input 
        className="form-control" 
        type="text" 
        name="address"  
        placeholder="Enter address"
        value={contact.address}
        onChange={handleChange}
      />
      <br />
      
      <button 
        type="button" 
        className="btn btn-primary" 
        onClick={añadirContacto}  
      >
        Save
      </button>
      
        <p>
        <a className="link-opacity-100" href="#" onClick={() => navigate("/home")}>
          or get back to contacts
        </a>
      </p>
    </form>
  );
};

export default AddContact;