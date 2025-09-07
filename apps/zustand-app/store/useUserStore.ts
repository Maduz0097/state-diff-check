"use client";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { User } from "types";
import {userGenerator} from "utils"

interface Store {
    users: User[];
    toggleUser: (id: number) => void;
}

export const useUserStore = create<Store>()(
    devtools((set) => ({
        users: userGenerator(100,0.4),
        toggleUser: (id) =>
            set((state) => ({
                users: state.users.map((u) =>
                    u.id === id ? { ...u, online: !u.online } : u
                )
            }))
    }))
);
