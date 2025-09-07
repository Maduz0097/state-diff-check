"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { User } from "types";
import {userGenerator} from "utils"

type Ctx = {
    users: User[];
    toggleUser: (id: number) => void;
};

const UserContext = createContext<Ctx | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [users, setUsers] = useState<User[]>(
        userGenerator(100,0.3)
    );

    const toggleUser = (id: number) => {
        setUsers((prev) =>
            prev.map((u) => (u.id === id ? { ...u, online: !u.online } : u))
        );
    };

    return (
        <UserContext.Provider value={{ users, toggleUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUsers = () => {
    const ctx = useContext(UserContext);
    if (!ctx) throw new Error("useUsers must be used inside UserProvider");
    return ctx;
};
