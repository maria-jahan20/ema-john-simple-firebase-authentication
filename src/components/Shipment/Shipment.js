import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user]=useAuthState(auth);
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState("");
    const [name, setName] = useState("");    
    const [phone, setPhoneNumber] = useState("");    

    const navigate = useNavigate();
    const handleAddressBlur = (event) => {
      setAddress(event.target.value);
    };
    const handleNameBlur=event=>{
        setName(event.target.value);
    }
    const handlePhoneNumber=event=>{
        setPhoneNumber(event.target.value);
    }
    const handleCreateUser = (event) => {
      event.preventDefault();
      const shipping={name,email,address,phone};
      console.log(shipping);
    };


    return (
      <div className="form-container">
        <div>
          <h2 className="form-title">Shipping Info</h2>
          <form onSubmit={handleCreateUser}>
            <lebel htmlFor="email">Your Email</lebel>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="email"
              required
            ></input>
            <lebel htmlFor="name">Your Name</lebel>
            <input
              onBlur={handleNameBlur}
              type="name"
              name="name"
              required
            ></input>
            <lebel htmlFor="adress">Address</lebel>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              required
            />
            <lebel htmlFor="phone">'Phone Number</lebel>
            <input
              onBlur={handlePhoneNumber}
              type="text"
              name="phone"
            />
            <p style={{ color: "red" }}>{error}</p>
            <div>
              <button className="form-submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Shipment;