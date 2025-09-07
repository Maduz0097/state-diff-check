"use client";

import {useUserKeys, useUserStore} from "@/store/useUserStore";
import {ZustandUserCard} from "@/components/ZustandUserCard";

export default function Page() {

    const usersObj = useUserKeys();
    const ids = Object.keys(usersObj).map(Number); // map to numbers in component

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Zustand App</h1>
            {ids.map((id) => (
                <ZustandUserCard key={id} id={id} />
            ))}
        </div>
    );
}


// const UserItem = ({ id, toggle }: { id: number; toggle: (id: number) => void }) => {
//     const user = useUserStore((s) => s.users[id]);
//     return <UserCard user={user} toggle={() => toggle(id)} />;
// };
