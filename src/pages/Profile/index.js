import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getUserById } from "../../services/userService";

const Profile = () => {
  const history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const totalUsers = useSelector((state) => state.users.totalUsers);

  useEffect(() => {
    let isCancelled = false;
    fetchData(isCancelled);

    return () => {
      isCancelled = true;
    };
  }, [id]);

  const fetchData = async (isCancelled) => {
    if (isCancelled) return;
    try {
      const response = await getUserById({ page: Math.ceil(+id / 6) }, id);
      if (response) setUser(response);
      if (!response) setError("User not found");
      setLoading(false);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {user && !loading && (
        <div>
          <div>
            <img src={user.avatar} alt={user.first_name} />
          </div>
          <span>{user.first_name}</span>
          <span>{user.last_name}</span>
          <span>{user.email}</span>
        </div>
      )}
      <button onClick={() => history.push("/home")}>Back</button>
      <button
        disabled={+id < 2}
        onClick={() => history.push(`/user/${+id - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={totalUsers && totalUsers <= +id}
        onClick={() => history.push(`/user/${+id + 1}`)}
      >
        Next
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Profile;
