import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import BarLoader from "react-spinners/BarLoader";
import {
  SquareMediumButton,
  SquareButtonDelete,
  SquareButtonEdit,
  SquareButtonNeutral,
  SquareButtonSuccess,
} from "../../components/buttons/content";
import { PageContent, Row } from "../../components/containers/content";
import { Error } from "../../components/Text";
import { deleteUser, editUser, getUserById } from "../../services/userService";
import { theme } from "../../theme";
import {
  ProfileCard,
  ProfileContainer,
  Avatar,
  CardContent,
  ButtonsContainer,
  CardActions,
  InputText,
  EmptyAvatar,
} from "./styles";

const Profile = () => {
  const history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const totalUsers = useSelector((state) => state.users.totalUsers);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [avatar, setAvatar] = useState();
  const [edit, setEdit] = useState();

  useEffect(() => {
    let isCancelled = false;
    fetchData(isCancelled);

    return () => {
      setError(undefined);
      isCancelled = true;
    };
  }, [id]);

  const fetchData = async (isCancelled) => {
    if (isCancelled) return;
    setLoading(true);
    try {
      const response = await getUserById({ page: Math.ceil(+id / 6) }, id);
      if (response) {
        setUser(response);
        setFirstName(response.first_name);
        setLastName(response.last_name);
        setEmail(response.email);
        setAvatar(response.avatar);
      }
      if (!response) setError("User not found");
      setLoading(false);
    } catch (err) {
      if (err.message) {
        setError(err.message);
      } else {
        console.error("[Get User Failure]", err);
      }
      setLoading(false);
    }
  };

  const updateUser = async () => {
    try {
      const response = await editUser(id, {
        first_name: firstName,
        last_name: lastName,
        email,
        avatar,
      });
      console.log({ updateUserResponse: response });
      if (response) {
        fetchData();
        setEdit(false);
        console.log("[User successfully updated]", response.data);
      }
      if (!response) setError("User not updated");
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const removeUser = async () => {
    try {
      const response = await deleteUser(id);
      console.log({ removeUserResponse: response });
      if (response) {
        history.push("/");
        setEdit(false);
        console.log("[User successfully removed]", user);
      }
      if (!response) setError("User not deleted");
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  console.log({ error });

  return (
    <PageContent>
      <ProfileContainer>
        <ProfileCard edit={edit}>
          {loading ? (
            <CardContent>
              <BarLoader
                color={theme.colors.blue}
                loading={loading}
                size={50}
              />
            </CardContent>
          ) : (
            !error &&
            user && (
              <>
                {user.avatar4 || avatar ? (
                  <Avatar>
                    <img src={user.avatar4 || avatar} alt={user.first_name} />
                  </Avatar>
                ) : (
                  <EmptyAvatar>
                    <span>No avatar</span>
                  </EmptyAvatar>
                )}
                <CardContent>
                  {!edit && (
                    <>
                      <span className="info id">{`id: ${user.id}`}</span>
                      <span className="info name">{`${user.first_name} ${user.last_name}`}</span>
                      <span className="info">{user.email}</span>
                    </>
                  )}
                  {edit && (
                    <>
                      <InputText
                        type="text"
                        placeholder="First name"
                        onChange={({ target }) => setFirstName(target.value)}
                        value={firstName}
                      />
                      <InputText
                        type="text"
                        placeholder="Last name"
                        onChange={({ target }) => setLastName(target.value)}
                        value={lastName}
                      />
                      <InputText
                        type="text"
                        placeholder="Email"
                        onChange={({ target }) => setEmail(target.value)}
                        value={email}
                      />
                      <InputText
                        type="text"
                        placeholder="Avatar url"
                        onChange={({ target }) => setAvatar(target.value)}
                        value={avatar}
                      />
                    </>
                  )}
                </CardContent>
                {edit && (
                  <CardActions>
                    <SquareButtonNeutral
                      width="50%"
                      onClick={() => setEdit(!edit)}
                    >
                      Cancel
                    </SquareButtonNeutral>
                    <SquareButtonSuccess
                      width="50%"
                      onClick={() => updateUser()}
                    >
                      Update
                    </SquareButtonSuccess>
                  </CardActions>
                )}
                {!edit && (
                  <CardActions>
                    <SquareButtonDelete
                      width="50%"
                      onClick={() => removeUser()}
                    >
                      Delete
                    </SquareButtonDelete>
                    <SquareButtonEdit
                      width="50%"
                      onClick={() => setEdit(!edit)}
                    >
                      Edit
                    </SquareButtonEdit>
                  </CardActions>
                )}
              </>
            )
          )}
          {error && (
            <CardContent>
              <Error error={error}>{error}</Error>
            </CardContent>
          )}
        </ProfileCard>
        <ButtonsContainer>
          <SquareMediumButton
            className="back"
            onClick={() => history.push("/")}
          >
            &#8629; Back
          </SquareMediumButton>
          <Row>
            <SquareMediumButton
              className="previous"
              disabled={+id < 2}
              onClick={() => history.push(`/user/${+id - 1}`)}
            >
              &#8592; Previous
            </SquareMediumButton>
            <SquareMediumButton
              className="next"
              disabled={totalUsers && totalUsers <= +id}
              onClick={() => history.push(`/user/${+id + 1}`)}
            >
              Next &#8594;
            </SquareMediumButton>
          </Row>
        </ButtonsContainer>
      </ProfileContainer>
    </PageContent>
  );
};

export default Profile;
