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
        className="btn btn-outline border-[#4CC9F0]  text-[#4CC9F0] rounded-lg hover:bg-[#4CC9F0] hover:text-white "
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Book Now
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <div className="space-y-2">
              <h2 className="font-bold text:lg md:text-xl">Book This Animal</h2>
            <p className="text-gray-600">Fill in your information to reserve this animal for Qurbani.</p>
            </div>
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
                <button type="submit" className="btn text-white bg-[#4361EE]">Confirm Booking</button>

              {/* if there is a button in form, it will close the modal */}
              <button 
                type="button" 
                className="btn bg-red-500 text-white"
                onClick={() => document.getElementById("my_modal_5").close()}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default BookingForm;
