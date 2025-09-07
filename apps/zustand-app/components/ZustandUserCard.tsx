"use client";
import React from "react";
import { useUserById, useToggleUser } from "@/store/useUserStore";

export const ZustandUserCard = ({ id }: { id: number }) => {
    const user = useUserById(id);   // subscribes only to this user
    const toggle = useToggleUser(); // stable function

    console.log(`🔄 Rendered UserCard ${id}`);

    if (!user) return null;

    return (
        <div className="p-2  rounded mb-2 flex justify-between items-center">
      <span>
        {user.name} — {user.online ? "Online" : "Offline"}
      </span>
            <button
                onClick={() => toggle(id)}
                className="px-2 py-1 bg-blue-500 text-white rounded"
            >
                Toggle
            </button>
        </div>
    );
};
