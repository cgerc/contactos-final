import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleAddContact = () => {
    navigate("/add-contact");
  };

  const handleViewContacts = () => {
    navigate("/contact");
  };

  return (
    <div className="container mt-4 d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h1 className="text-center mb-4">Welcome</h1>
      <div className="d-flex justify-content-center gap-2">
        <button className="btn btn-primary" onClick={handleAddContact}>
          Add New Contact
        </button>
        <button className="btn btn-secondary" onClick={handleViewContacts}>
          View Contacts
        </button>
      </div>
    </div>
  );
};

export default Home;