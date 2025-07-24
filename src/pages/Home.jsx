import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Contact from "./Contact.jsx";
import { useNavigate } from "react-router-dom";
import Card from '../components/Card'
import AddContact from "./AddContact.jsx";


const Home = () => {
	const { store, dispatch } = useGlobalReducer();
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);
	const [selectedContactId, setSelectedContactId] = useState("");
	const [data, setData] = useState("");
	const [contact, setContact] = useState([]);



	return (

		<>
			
			<Contact/>
			



		</>

	);
}
export default Home; 
