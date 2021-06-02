import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  SquareMediumButton,
  SquareButtonDelete,
  SquareButtonEdit,
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
} from "./styles";

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
    <PageContent>
      <ProfileContainer>
        {loading && <p>Loading...</p>}
        {user && !loading && (
          <ProfileCard>
            <Avatar>
              <img src={user.avatar} alt={user.first_name} />
            </Avatar>
            <CardContent>
              <span className="id">{`id: ${user.id}`}</span>
              <span className="name">{`${user.first_name} ${user.last_name}`}</span>
              <span>{user.email}</span>
            </CardContent>
            <CardActions>
              <SquareButtonEdit
                width="50%"
                onClick={() => history.push(`/user/${+id - 1}`)}
              >
                Edit
              </SquareButtonEdit>
              <SquareButtonDelete
                width="50%"
                onClick={() => history.push(`/user/${+id + 1}`)}
              >
                Delete
              </SquareButtonDelete>
            </CardActions>
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
