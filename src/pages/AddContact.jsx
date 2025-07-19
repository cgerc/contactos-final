import React from 'react';


const AddContact = () => {
  return (
    <div className="p-3 container fondo bg-light card-hover-effect:hover row m-auto">
      <h1 className="text-center"> Add a new contact</h1>
      <form>
        <label className="form-label">Full name</label>
        <input
          type="text"
          name="name"
          className="form-control w-5"
          id="firstName"
          placeholder="Full Name"
          onChange={handleChange}
          value={contact.name}
        />
      </form>

    </div>


  );
};

export default AddContact;