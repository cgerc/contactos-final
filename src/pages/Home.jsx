
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import AddContact from "./AddContact.jsx";
import Contact from "./Contact.jsx";
import { useNavigate } from "react-router-dom";
const { store, dispatch } = useGlobalReducer()
const navigate = useNavigate();
const [showModal, setShowModal] = useState(false);
const [selectedContactId, setSelectedContactId] = useState(null);
const Home = () => {
	const [data, setData] = useState("");
	const [contact, setContact] = useState([]);

	fetch("https://playground.4geeks.com/contact/agendas/cgerc", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			"label": data,
			"is_done": false
		}),
	})
		.then((respuesta) => {
			return respuesta.json();

		})
		.then((data) => {
			console.log(data)
			getcontact();

		})
		.catch((error) => console.log(error));


	useEffect(() => {
		getContact();
	}, []);

	return (

		<>
			<Contact />
			<AddContact />


		</>

	);
}
export default Home; 
