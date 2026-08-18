"use client";
import UpdateProfile from "@/components/Cards/UpdateProfile";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  // get user from session
  const { data: session } = authClient.useSession();
  const user = session?.user;

 
  return (
    <div className="max-w-7xl mx-auto py-15 md:py-20 px-5">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="space-y-2 text-center">
        <h2 className="font-bold text-lg md:text-2xl">My Profile</h2>
        <p className="text-gray-500">Manage your account information</p>
      </div>
      <div>
        <div className="card card-border bg-base-200 w-xs md:w-96">
          <div className="card-body items-center justify-center">
            {/* image */}
            <div className="avatar avatar-placeholder">
              <div className="bg-neutral text-neutral-content w-20 rounded-full">
                {user?.image ? (
                  <Image
                    alt={user?.name}
                    src={user?.image}
                    width={20}
                    height={20}
                  />
                ) : (
                  <span className="text-lg">{user?.name?.charAt(0, 1)}</span>
                )}
              </div>
            </div>

            <div className="text-center mt-3">
                {/* name */}
            <h2 className="font-semibold text-xl">{user?.name}</h2>
            <h2 className="text-gray-500 text-sm">{user?.email}</h2>
            </div>
            <UpdateProfile></UpdateProfile>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProfilePage;
