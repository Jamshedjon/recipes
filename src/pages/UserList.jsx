import React from "react";
import { useFetch } from "../hooks/useFetch";
import { URL } from "../API";

function UserList() {
    const { data: users, isPending, error } = useFetch(URL + "users");
    return (
        <div>
            <ul className="flex flex-col items-start gap-5">
                <li className="flex gap-3">
                    <h1 className="text-4xl bg-slate-300 py-3 px-10 rounded-md">
                        User id
                    </h1>
                    <h1 className="text-4xl bg-slate-300 py-3 px-10 rounded-md">
                        User name
                    </h1>
                    <h1 className="text-4xl bg-slate-300 py-3 px-10 rounded-md">
                        Parametrs
                    </h1>
                    <h1 className="text-4xl bg-slate-300 py-3 px-10 rounded-md">
                        Parametrs
                    </h1>
                </li>
                {users &&
                    users.map((user) => {
                        return (
                            <li className="flex gap-3" key={user.id}>
                                <h1 className=" text-4xl bg-slate-300 py-3 px-10 rounded-md w-48">
                                    ID:{user.id}
                                </h1>
                                <h1 className=" text-4xl bg-slate-300 py-3 px-10 rounded-md">
                                    {user.username}
                                </h1>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}

export default UserList;
