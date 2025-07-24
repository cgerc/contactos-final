/*import {Link} from react-router-dom;
import { useState, useEffect } from "react";

const EditContact = ({ contactId }) => { // Recibe el ID del contacto a editar
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });


  useEffect(() => {
    if (contactId) {
      fetch(`https://playground.4geeks.com/contact/agendas/cgerc/contacts/${contactId}`)
        .then(response => response.json())
        .then(data => {
          setContact({
            name: data.name || '',
            email: data.email || '',
            phone: data.phone || '',
            address: data.address || ''
          });
        })
        .catch(error => console.log(error));
    }
  }, [contactId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact(prevContact => ({
      ...prevContact,
      [name]: value
    }));
  };

  const actualizarContacto = () => {
    fetch(`https://playground.4geeks.com/contact/agendas/cgerc/contacts/${contactId}`, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        address: contact.address
      }),
    })
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      console.log(data);
      alert("Contacto actualizado con éxito");
    })
    .catch((error) => console.log(error));
  };

  const deleteTodo = () => {
    fetch("https://playground.4geeks.com/todo/todos/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })

      .then(respuesta => {
        if (respuesta.ok) {
          setContact((prev) => prev.filter((contact) => contact.id !== id));
          get
        }
        console.log(respuesta.status)
      })
      .catch((error) => console.log(error));

  }
  return (
    <form className="list-group">
      <h1 className="text-center">Edit Contact</h1>
      
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
      
      <button type="button" className="btn btn-primary" onClick={actualizarContacto}>
        Update Contact
      </button>
      <p>
        <Link className="link-opacity-100" href="#">or get back to contacts</Link>
      </p>
    </form>
  );
};

export default EditContact;*/