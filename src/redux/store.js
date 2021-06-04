import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import createSagaMiddlware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddlware();

const store = compose(applyMiddleware(sagaMiddleware))(createStore)(
  rootReducer
);

sagaMiddleware.run(rootSaga);

export default store;
