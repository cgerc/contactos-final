import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const Contact = () => {
  const { store, dispatch } = useGlobalReducer();

  // Crear agenda si no existe
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

  // Obtener contactos
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

  // Eliminar contacto
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
        alert("Contacto eliminado con éxito");
      })
      .catch((error) => {
        console.error("Error al eliminar contacto:", error);
        dispatch({ type: "SET_MESSAGE", payload: "Error al eliminar el contacto" });
      });
  };

  useEffect(() => {
    createAgenda();
    actContacto();
  }, []);

  return (
    <div className="container mt-4">
      {store.message && <div className="alert alert-danger">{store.message}</div>}
      {store.contacts.length === 0 ? (
        <div>No hay contactos disponibles.</div>
      ) : (
        <ul className="list-group">
          {store.contacts.map((contact) => (
            <li
              key={contact.id}
              className="list-group-item position-relative d-flex align-items-center mb-3 p-3 border rounded"
              style={{ minHeight: "200px" }}
            >
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
                <Link to={`/edit-contact/${contact.id}`} className="btn btn-link text-dark me-2">
                  <i className="fa-solid fa-pen"></i>
                </Link>
                <button
                  className="btn btn-link text-dark"
                  onClick={() => deleteContact(contact.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Contact;