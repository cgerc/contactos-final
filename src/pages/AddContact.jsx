
const AddContact = () => {
  const [data, setData] = useState("");
  const [tasks, setTasks] = useState([]);
 
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
        getTodos();

      })
      .catch((error) => console.log(error));
      
  

   return(
    <form className="list-group">
        <h1 className="text-center">Add a new contact</h1>
        <label for="Full Name">Full Name</label>
        <input className="form-control"   type="text" name="Full Name" placeholder="Full Name"></input> <br></br>
        <label for="Email">Email</label>
         <input className="form-control" type="text" name="Email" placeholder="Enter email"></input><br></br>
        <label for="Phone">Phone</label>
         <input className="form-control" type="num" name="Phone" placeholder="Enter phone"></input><br></br>
        <label for="Address">Address</label>
        <input className="form-control" type="text" name="Address" placeholder="Enter address"></input><br></br>
           <button type="button" className="btn btn-primary">Save</button>
         <p><a class="link-opacity-100" href="#">or get back to contacts</a></p>
    </form>
    )}
    export default AddContact; 
  
   