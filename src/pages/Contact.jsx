import { useState, useEffect } from "react";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const createAgenda = () => {
    fetch("https://playground.4geeks.com/contact/agendas/cgerc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([]),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Agenda cgerc creada exitosamente");
        } else {
          console.log("La agenda ya existe");
        }
      })
      .catch((error) => console.error("Error en createAgenda:", error));
  };

  // Obtener contactos
  const actContacto = () => {
    setLoading(true);
    fetch("https://playground.4geeks.com/contact/agendas/cgerc/contacts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("Error al obtener los contactos");
        }
        return respuesta.json();
      })
      .then((data) => {
        setContacts(data.contacts || []);
        setLoading(false);
        console.log("Contactos obtenidos:", data.contacts);
      })
      .catch((error) => {
        console.error("Error en actContacto:", error);
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    createAgenda();
    actContacto();
  }, []);

  
  if (loading) return <div>Cargando contactos...</div>;
  if (error) return <div>Error: {error}</div>;
  if (contacts.length === 0) return <div>No hay contactos disponibles.</div>;

  return (
    <div className="container mt-4">
      <ul className="list-group">
        {contacts.map((contact, index) => (
          <li key={index} className="list-group-item position-relative d-flex align-items-center mb-3 p-3 border rounded" style={{ minHeight: "200px" }}>
            <img
              src={contact.imageUrl || "https://via.placeholder.com/150"}
              className="imagen me-3"
              alt={contact.name || "Sin nombre"}
            />
            <div className="flex-grow-1">
              <p><strong>Name:</strong> {contact.name || "Sin nombre"}</p>
              <p>
                <i className="fa-solid fa-location-dot me-2"></i>
                <strong>Address:</strong> {contact.address || "Sin dirección"}
              </p>
              <p>
                <i className="fa-solid fa-phone me-2"></i>
                <strong>Phone:</strong> {contact.phone || "Sin teléfono"}
              </p>
              <p>
                <i className="fa-solid fa-envelope me-2"></i>
                <strong>Email:</strong> {contact.email || "Sin email"}
              </p>
            </div>
            <div className="position-absolute top-0 end-0 mt-2 me-2">
              <a href={`/edit-contact/${contact.id}`} className="btn btn-link text-dark me-2">
                <i className="fa-solid fa-pen"></i>
              </a>
              <a href="#" className="btn btn-link text-dark">
                <i className="fa-solid fa-trash"></i>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;