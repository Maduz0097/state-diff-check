"use client";
import { UserProvider, useUsers } from "@/context/UserContext";
import { UserCard } from "ui";

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
  return (
      <UserProvider>
        <UserList />
      </UserProvider>
  );
}
