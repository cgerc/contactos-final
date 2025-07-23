import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import AddContact from "./AddContact.jsx";
import Contact from "./Contact.jsx";
import { useNavigate } from "react-router-dom";


const Home = () => {
	const { store, dispatch } = useGlobalReducer();
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);
	const [selectedContactId, setSelectedContactId] = useState("");
	const [data, setData] = useState("");
	const [contact, setContact] = useState([]);

	const createAgenda =()=> {
		fetch ('https://playground.4geeks.com/contact/agendas/cgerc', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify([]),
		})
	 .then((response) => {
        if (response.ok) {
          console.log('Agenda cgerc creada exitosamente');
          fetchContacts();
        } else {
          fetchContacts();
        }
      })
      .catch((error) => console.error('Error en createAgenda:', error));
  };


	return (

		<>
			<Contact />
			<AddContact />


		</>

	);
}
export default Home; 
