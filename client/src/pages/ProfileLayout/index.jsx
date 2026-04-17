import React from "react";
import { Outlet } from "react-router-dom";
import ProfileSidebar from "../../components/ProfileSidebar";

const ProfileLayout = () => {
    return (
        <div className="bg-gray-100 p-6">
            <div className="rounded-xl p-6 flex gap-6">

                {/* LEFT SIDE (COMMON) */}
                <div className="w-[25%]">
                    <ProfileSidebar />
                </div>

                {/* RIGHT SIDE (CHANGES) */}
                <div className="w-[75%] flex-1">
                    <Outlet />
                </div>

            </div>
        </div>
    );
};

export default ProfileLayout;