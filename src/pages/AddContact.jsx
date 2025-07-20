




const AddContact = () =>{
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
           <button type="button" class="btn btn-primary">Save</button>
         <p><a class="link-opacity-100" href="#">or get back to contacts</a></p>
    </form>
    )}
    export default AddContact; 