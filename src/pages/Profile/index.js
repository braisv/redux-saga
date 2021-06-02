import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  SquareMediumButton,
  SquareButtonDelete,
  SquareButtonEdit,
  SquareButtonNeutral,
  SquareButtonSuccess,
} from "../../components/buttons/content";
import { PageContent, Row } from "../../components/containers/content";
import { getUserById } from "../../services/userService";
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

  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [avatar, setAvatar] = useState()
  const [edit, setEdit] = useState()

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
      if (response) {
        setUser(response);
        setFirstName(response.first_name)
        setLastName(response.last_name)
        setEmail(response.email)
        setAvatar(response.avatar)
      }
      if (!response) setError("User not found");
      setLoading(false);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return (
    <PageContent>
      <ProfileContainer>
        {loading && <p>Loading...</p>}
        {user && !loading && (
          <ProfileCard edit={edit}>
            {user.avatar4 || avatar ? <Avatar>
              <img src={user.avatar4 || avatar} alt={user.first_name} />
            </Avatar> : <EmptyAvatar>
              <span>No avatar</span>
            </EmptyAvatar>}
            <CardContent>
            {!edit && 
              <>
              <span className="id">{`id: ${user.id}`}</span>
              <span className="name">{`${user.first_name} ${user.last_name}`}</span>
              <span>{user.email}</span>
              </>}
              {edit &&
              <>
              <InputText type='text' placeholder='First name' onChange={({ target }) => setFirstName(target.value)} value={firstName} />
              <InputText type='text' placeholder='Last name' onChange={({ target }) => setLastName(target.value)} value={lastName} />
              <InputText type='text' placeholder='Email' onChange={({ target }) => setEmail(target.value)} value={email} />
              <InputText type='text' placeholder='Avatar url' onChange={({ target }) => setAvatar(target.value)} value={avatar} />
              </>}
            </CardContent>
            {edit && <CardActions>
              <SquareButtonNeutral
                width="50%"
                onClick={() => setEdit(!edit)}
              >
                Cancel
              </SquareButtonNeutral>
              <SquareButtonSuccess
                width="50%"
                onClick={() => history.push(`/user/${+id + 1}`)}
              >
                Update
              </SquareButtonSuccess>
            </CardActions>}
            {!edit && <CardActions>
              <SquareButtonDelete
                width="50%"
                onClick={() => history.push(`/user/${+id + 1}`)}
              >
                Delete
              </SquareButtonDelete>
              <SquareButtonEdit
                width="50%"
                onClick={() => setEdit(!edit)}
              >
                Edit
              </SquareButtonEdit>
            </CardActions>}
          </ProfileCard>
        )}
        {error && <p>{error}</p>}
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
