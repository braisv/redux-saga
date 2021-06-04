import { call, put, takeEvery } from "redux-saga/effects";
import { getUsers } from "../../services/userService";

function* fetchUsers(action) {
  try {
    const users = yield call(getUsers, action.payload);
    yield put({ type: "GET_USERS_SUCCESS", users });
  } catch (err) {
    yield put({ type: "GET_USERS_FAILED", message: err.message });
  }
}

function* userSaga() {
  yield takeEvery("GET_USERS_REQUESTED", fetchUsers);
}

export default userSaga;
