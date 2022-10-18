import Users from "./components/users";
import api from "./api";
import React, { useEffect, useState } from "react";

const App = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);
    const handleDelete = (id) => {
        const newUsers = users.filter((user) => user._id !== id);
        setUsers(newUsers);
    };
    const handleToggleBookmark = (id) => {
        const newUsers = users.map((user) => {
            if (user._id === id) {
                return { ...user, bookmark: !user.bookmark };
            }
            return user;
        });
        setUsers(newUsers);
    };
    return (
        <div>
            {users && (
                <Users
                    users={users}
                    handleDelete={handleDelete}
                    handleToggleBookmark={handleToggleBookmark}
                />
            )}
        </div>
    );
};
export default App;
