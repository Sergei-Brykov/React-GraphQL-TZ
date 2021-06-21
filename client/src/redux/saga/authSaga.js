import { call, put, takeEvery } from "redux-saga/effects";
import {
  AUTH_REQUEST,
  authRejectCreator,
  authResponseCreator,
  LOGIN_REQUEST,
  logInRejectCreator,
  logInResponseCreator,
  REGISTRATION_REQUEST,
  registrationRejectCreator,
  registrationResponseCreator,
  requestCreator,
} from "../authReducer";
import { api } from "../../Api";

function* authWorker() {
  try {
    const user = yield call(api.signIn);

    if (user.error) {
      throw new Error("");
    }

    yield put(authResponseCreator(user));
  } catch (e) {
    yield put(authRejectCreator());
  }
}

function* logInWorker(action) {
  try {
    put(requestCreator());
    const user = yield call(api.logIn, action.data);

    if (user.error) {
      throw new Error(user.error);
    }

    yield put(logInResponseCreator(user));
  } catch (e) {
    yield put(logInRejectCreator(e.message));
  }
}

function* registrationWorker(action) {
  try {
    put(requestCreator());
    const user = yield call(api.registration, action.data);

    if (user.error) {
      throw new Error(user.error);
    }

    yield put(registrationResponseCreator(user));
  } catch (e) {
    yield put(registrationRejectCreator(e.message));
  }
}

export function* authWatcher() {
  yield takeEvery(AUTH_REQUEST, authWorker);
  yield takeEvery(LOGIN_REQUEST, logInWorker);
  yield takeEvery(REGISTRATION_REQUEST, registrationWorker);
}
