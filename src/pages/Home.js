import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions/users";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  console.log({ users, loading, error });

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {users &&
        users.length > 0 &&
        users.map((user) => (
          <div key={user.id}>
            <span>{user.email || "nope"}</span>
          </div>
        ))}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Home;
