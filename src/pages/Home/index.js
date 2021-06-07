import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import BarLoader from "react-spinners/BarLoader";
import { MediumButton } from "../../components/buttons/content";
import { PageContent } from "../../components/containers/content";
import { Error } from "../../components/Text";
import { getUsers } from "../../redux/actions/users";
import { theme } from "../../theme";
import {
  UserCard,
  UserListContainer,
  UserListGrid,
  PaginationContainer,
} from "./styles";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const currentPage = useSelector((state) => state.users.currentPage);
  const totalPages = useSelector((state) => state.users.totalPages);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  return (
    <PageContent>
      <UserListContainer data-testid="list-container">
        {loading ? (
          <BarLoader color={theme.colors.blue} loading={loading} size={50} />
        ) : (
          <UserListGrid>
            {users &&
              users.length > 0 &&
              users.map((user) => (
                <UserCard
                  key={user.id}
                  onClick={() => history.push(`/user/${user.id}`)}
                >
                  <span>{`${user.first_name} ${user.last_name}`}</span>
                </UserCard>
              ))}
          </UserListGrid>
        )}
        <Error error={error}>{error}</Error>
        <PaginationContainer>
          <MediumButton
            width="100px"
            disabled={!loading && currentPage - 1 < 1}
            onClick={() => dispatch(getUsers({ page: currentPage - 1 }))}
          >
            &#8592; Previous
          </MediumButton>
          <div className="paginator">{`Page ${currentPage} of ${totalPages}`}</div>
          <MediumButton
            width="100px"
            disabled={!loading && currentPage + 1 > totalPages}
            onClick={() => dispatch(getUsers({ page: currentPage + 1 }))}
          >
            Next &#8594;
          </MediumButton>
        </PaginationContainer>
      </UserListContainer>
    </PageContent>
  );
};

export default Home;
