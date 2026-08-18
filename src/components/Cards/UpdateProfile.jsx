"use client";
import { authClient } from "@/lib/auth-client";
import { router } from "better-auth/api";
import React from "react";
import { TiEdit } from "react-icons/ti";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const handleProfile = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    const { data, error } = await authClient.updateUser({
      name: name,
      image: image,
    });

    if (data) {
      toast.success("Update successfully!");
      document.getElementById("my_modal_5").close();
      router.refresh();
    }

    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <button
        className="btn btn-outline border-[#4CC9F0] text-[#4CC9F0] 
        rounded-lg hover:bg-[#4CC9F0] hover:text-white flex items-center gap-1"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        <TiEdit className="text-lg" /> Update Information
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-fit">
          <div className="space-y-2 text-center">
            <h2 className="font-bold text:lg md:text-xl">Update Information</h2>
            <p className="text-gray-600 w-xs">
              Update your profile photo and name.
            </p>
          </div>
          <div className="mt-6">
            <form onSubmit={handleProfile}>
              <fieldset className="fieldset">
                <label className="label text-black">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Enter your Name"
                />
                <label className="label text-black">Image Url</label>
                <input
                  type="url"
                  name="image"
                  className="input"
                  placeholder="Enter your image URL"
                />
              </fieldset>
              <div className="flex gap-2 items-center mt-3">
                <button
                  type="submit"
                  className="btn text-white btn-info rounded-full"
                >
                  Confirm{" "}
                </button>

                {/* if there is a button in form, it will close the modal */}
                <button
                  type="button"
                  onClick={() => document.getElementById("my_modal_5").close()}
                  className="btn bg-red-500 text-white rounded-full"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateProfile;
