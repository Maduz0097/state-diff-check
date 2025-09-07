"use client";
import React from "react";
import { User } from "types";

type Props = {
    user: User;
    toggle: () => void;
};

export const UserCard = ({ user, toggle }: Props) => {
    console.log(`🔄 Rendered UserCard ${user.id}`);

    return (
        <div className="p-2 rounded mb-2 flex justify-between items-center">
              <span>
                {user.name} - {user.online ? "Online" : "Offline"}
              </span>
            <button onClick={toggle} className="px-2 py-1 bg-blue-500 text-white rounded">
                Toggle
            </button>
        </div>
    );
};
