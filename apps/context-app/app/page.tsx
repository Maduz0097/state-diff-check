"use client";
import { UserProvider, useUsers } from "@/context/UserContext";
import { UserCard } from "ui";
import {useRef} from "react";

function UserList() {
  const { users, toggleUser } = useUsers();
  return (
      <div>
        <h1 className="text-xl mb-4">Context API Demo</h1>
        {users.map((u) => (
            <UserCard key={u.id} user={u} toggle={() => toggleUser(u.id)} />
        ))}
      </div>
  );
}

export default function Page() {
    const renderCount = useRef(0);
    renderCount.current += 1;
    console.log(`Page renders: ${renderCount.current}`);
  return (
      <UserProvider>
        <UserList />
      </UserProvider>
  );
}
