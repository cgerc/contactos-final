import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../index.css';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const Contact = () => {
  const { store, dispatch } = useGlobalReducer();
  const [showModal, setShowModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  
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
      .catch((error) => {
        console.error("Error en createAgenda:", error);
        dispatch({ type: "SET_MESSAGE", payload: "Error al crear la agenda" });
      });
  };

  
  const actContacto = () => {
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
        dispatch({ type: "LOAD_DATA", payload: data.contacts || [] });
      })
      .catch((error) => {
        console.error("Error en actContacto:", error);
        dispatch({ type: "SET_MESSAGE", payload: "Error al obtener los contactos" });
      });
  };

  
  const deleteContact = (contactId) => {
    fetch(`https://playground.4geeks.com/contact/agendas/cgerc/contacts/${contactId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("Error al eliminar el contacto");
        }
        dispatch({
          type: "DELETE_CONTACT",
          payload: contactId,
        });
        setShowModal(false);
        dispatch({ type: "SET_MESSAGE", payload: "Contacto eliminado con éxito" });
      })
      .catch((error) => {
        console.error("Error al eliminar contacto:", error);
        dispatch({ type: "SET_MESSAGE", payload: "Error al eliminar el contacto" });
        setShowModal(false);
      });
  };

  
  const handleDeleteClick = (contactId) => {
    setContactToDelete(contactId);
    setShowModal(true);
  };

  
  const handleCloseModal = () => {
    setShowModal(false);
    setContactToDelete(null);
  };

  useEffect(() => {
    createAgenda();
    actContacto();
  }, []);

  return (
    <div className="container mt-4">
      {store.message && <div className="alert alert-danger">{store.message}</div>}
      {store.contacts.length === 0 ? (
        <h1 className="text-center">No hay contactos disponibles.</h1>
      ) : (
        <ul className="list-group">
          {store.contacts.map((contact) => (
            <li
              key={contact.id}
              className="list-group-item position-relative d-flex align-items-center mb-3 p-3 border rounded"
              style={{ minHeight: "200px" }}
            >
              <img
                src="https://picsum.photos/id/237/200/300" className="card-img-top imagen" alt="perrito"/>
              <div className="flex-grow-1 mb-3 vertical-align">
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
                <Link to={`/edit-contact/${contact.id}`} className="btn btn-link text-dark me-2">
                  <i className="fa-solid fa-pen"></i>
                </Link>
                <button
                  className="btn btn-link text-dark"
                  onClick={() => handleDeleteClick(contact.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      
      {showModal && (
        <div className="modal" tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>¿Are you sure you want to delete this contact?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteContact(contactToDelete)}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default Contact;