"use client";

import { UserCard } from "ui/UserCard";
import { useUserStore } from "@/store/useUserStore";

export default function Page() {
    const toggle = useUserStore((s) => s.toggleUser);
    const userIds = Object.keys(useUserStore((s) => s.users));

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Zustand App</h1>
            {userIds.map((id) => (
                <UserItem key={id} id={+id} toggle={toggle} />
            ))}
        </div>
    );
}


const UserItem = ({ id, toggle }: { id: number; toggle: (id: number) => void }) => {
    const user = useUserStore((s) => s.users[id]);
    return <UserCard user={user} toggle={() => toggle(id)} />;
};
