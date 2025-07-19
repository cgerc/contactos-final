
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import AddContact from "./AddContact.jsx";
import Contact from "./Contact.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (

		<>
			<Contact />
			<AddContact />


		</>

	);
}; 