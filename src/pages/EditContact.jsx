import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const EditContact = () => {
  const { contactId } = useParams();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [showModal, setShowModal] = useState(false);
  const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  useEffect(() => {
    if (contactId) {
      fetch(`https://playground.4geeks.com/contact/agendas/cgerc/contacts/${contactId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al obtener el contacto");
          }
          return response.json();
        })
        .then((data) => {
          setContact({
            name: data.name || "",
            email: data.email || "",
            phone: data.phone || "",
            address: data.address || "",
          });
        })
        .catch((error) => {
          console.error("Error al obtener el contacto:", error);
          dispatch({ type: "SET_MESSAGE", payload: "Error al obtener el contacto" });
        });
    }
  }, [contactId, dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const actualizarContacto = () => {
    fetch(`https://playground.4geeks.com/contact/agendas/cgerc/contacts/${contactId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        address: contact.address,
      }),
    })
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("Error al actualizar el contacto");
        }
        return respuesta.json();
      })
      .then((data) => {
        dispatch({ type: "EDIT_CONTACT", payload: { id: contactId, ...data } });
        dispatch({ type: "SET_MESSAGE", payload: "Contacto actualizado con éxito" });
        navigate("/contact");
      })
      .catch((error) => {
        console.error("Error al actualizar contacto:", error);
        dispatch({ type: "SET_MESSAGE", payload: "Error al actualizar el contacto" });
      });
  };

  const deleteContact = () => {
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
        navigate("/contact");
      })
      .catch((error) => {
        console.error("Error al eliminar contacto:", error);
        dispatch({ type: "SET_MESSAGE", payload: "Error al eliminar el contacto" });
        setShowModal(false);
      });
  };

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form className="list-group container">
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

        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={actualizarContacto}
        >
          Update Contact
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDeleteClick}
        >
          Delete Contact
        </button>
        <p>
          <Link className="link-opacity-100" to="/contact">
            or get back to contacts
          </Link>
        </p>
      </form>

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
                  onClick={deleteContact}
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
    </>
  );
};

export default EditContact;