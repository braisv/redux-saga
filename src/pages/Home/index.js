import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getUsers } from "../../redux/actions/users";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const currentPage = useSelector((state) => state.users.currentPage);
  const totalPages = useSelector((state) => state.users.totalPages);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  console.log({ users, loading, error });

  return (
    <div>
      {loading && <p>Loading...</p>}
      {users &&
        users.length > 0 &&
        users.map((user) => (
          <div key={user.id} onClick={() => history.push(`/user/${user.id}`)}>
            <span>{user.first_name}</span>
            <span>{user.last_name}</span>
          </div>
        ))}
      {error && <p>{error}</p>}
      <div>
        <button
          disabled={!loading && currentPage - 1 < 1}
          onClick={() => dispatch(getUsers({ page: currentPage - 1 }))}
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          disabled={!loading && currentPage + 1 > totalPages}
          onClick={() => dispatch(getUsers({ page: currentPage + 1 }))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
