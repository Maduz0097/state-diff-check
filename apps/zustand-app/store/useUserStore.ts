"use client";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { User } from "types";
import { userGenerator } from "utils";

interface Store {
    users: Record<number, User>;
    toggleUser: (id: number) => void;
}

export const useUserStore = create<Store>()(
    devtools((set) => ({
        users: userGenerator(100, 0.4).reduce(
            (acc, u) => ({ ...acc, [u.id]: u }),
            {}
        ),

        toggleUser: (id) =>
            set((state) => ({
                users: {
                    ...state.users,
                    [id]: {
                        ...state.users[id],
                        online: !state.users[id].online,
                    },
                },
            })),
    }))
);

export const useUserById = (id: number) =>
    useUserStore((state) => state.users[id]);

export const useToggleUser = () => useUserStore((state) => state.toggleUser);

export const useUserKeys = () => useUserStore((state) => state.users);
