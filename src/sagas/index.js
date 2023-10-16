import { all, fork } from "redux-saga/effects";
import booking from "./bookingSaga";

export default function* rootSaga() {
  yield all([fork(booking)]);
}
