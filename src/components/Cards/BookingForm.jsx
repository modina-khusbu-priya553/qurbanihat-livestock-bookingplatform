"use client";
import React from "react";
import { toast } from "react-toastify";

const BookingForm = () => {

    const handleForm = (e) =>{
        e.preventDefault();
        e.target.reset(); 
        toast.success("Booking successful!");
        document.getElementById("my_modal_5").close();

    }
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Book Now
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <h2 className="font-bold">Book This Animal</h2>
            <p className="text-gray-600">Fill in your information to reserve this animal for Qurbani.</p>
          <div className="mt-3">
            <form  onSubmit={handleForm}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Enter your Name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Enter your Email"
                />

                <label className="label">Phone</label>
                <input
                  type="number"
                  name="phone"
                  className="input w-full"
                  placeholder="Enter your number"
                />
                <label className="label">Address</label>
                <input
                  type="text"
                  name="address"
                  className="input w-full"
                  placeholder="Enter your address"
                />

                
              </fieldset>
              <div className="flex gap-2 items-center mt-2">
                <button type="submit" className="btn btn-neutral">Confirm Booking</button>

              {/* if there is a button in form, it will close the modal */}
              <button 
                type="button" 
                className="btn"
                onClick={() => document.getElementById("my_modal_5").close()}>Close</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default BookingForm;
